---




title: DeepDDI 第一部分：问题简述与数据收集
date: 2020-04-05 19:19:25
toc: true
tags:
- DeepDDI


---

## 写在前面

希望在这里记录自己第一次的解决问题的全过程，积累些经验。特别感谢曾婉文老师，从一开始啥也不懂慢慢传授科研需要的步骤，知识，给了我很大很大很大的帮助，谢谢~

## 问题简述

这个task说起来很简单，就是预测药物同时服用（polypharmacy）是否会有副作用。比如我们常说的“头孢就酒，说走就走”就是很经典的例子。不过这里要处理的是有明确化学组成的两种药物，同时我们要解决的仅仅是二分类问题，也就是只预测“会不会”出现副作用，不会预测出这个副作用“是什么”。

这个问题的重要性不言而喻，如果可以帮助医生预判断药方是否可能会发生相互作用，再经过医生的复核，将会更大程度地避免药物副作用，保障患者的生命健康；同时，相互作用的预测，也可能给药物、化学科研带来不小的裨益。

## 方法简述

解决这个问题的方法将会贯穿整个系列记录文章，这里只做简要介绍。

首先，要预测药物，肯定要有药物的信息，要从药物的信息中提取特征，然后，既然预测的是“相互作用”，那也一定要找到有药物相互作用的信息。

思路简述如下：

1. 首先处理药物特征，使用DeepChem从药物SMILE信息中获得药物的特征矩阵（feat_mat）、邻接列表（adj_list）、度列表（degree_list）
2. 上面得到的数据维度不统一，且包含三个方面，需要把它们归一化并统一成一种特征（drug_data）
3. 排列组合得到所有药物的两两组合，与“相互作用”文件进行交叉对比，得到最后的训练数据

剩下的步骤就是构建图神经网络模型，进行训练不断调整网络结构优化结果的过程，就不在这里赘述啦

## 数据搜集

### 药物特征

首先，我们需要药物特征SMILE的数据，Drugbank上就有现成的嘿嘿，网址在这里 [drugbank](https://www.drugbank.ca/releases/latest#structures)

大概是这个样子的：

![image-20200405201759532](https://i.loli.net/2020/04/05/fvVKBSptY9W4NH3.png)

我们点击上面那个all就可以啦（这个网站需要先注册后下载，注册后大概需要2-3天的审核时间才可下载）

下载下来是一个`csv` 文件，格式是这样的：

| DrugBank ID | Name        | SMILES                                                       | PubChem Compound  ID |
| ----------- | ----------- | ------------------------------------------------------------ | :------------------: |
| DB00006     | Bivalirudin | CC[C@H](C)[C@H](NC(=O)[C@H](CCC(O)=O)NC(=O)[C@H](CCC(O)=O)NC(=O)[C@H](CC1=CC=CC=C1)NC(=O)[C@H](CC(O)=O)NC(=O)CNC(=O)[C@H](CC(N)=O)NC(=O)CNC(=O)CNC(=O)CNC(=O)CNC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCNC(N)=N)NC(=O)[C@@H]1CCCN1C(=O)[C@H](N)CC1=CC=CC=C1)C(=O)N1CCC[C@H]1C(=O)N[C@@H](CCC(O)=O)C(=O)N[C@@H](CCC(O)=O)C(=O)N[C@@H](CC1=CC=C(O)C=C1)C(=O)N[C@@H](CC(C)C)C(O)=O |       16129704       |
| DB00007     | Leuprolide  | CCNC(=O)[C@@H]1CCCN1C(=O)[C@H](CCCNC(N)=N)NC(=O)[C@H](CC(C)C)NC(=O)[C@@H](CC(C)C)NC(=O)[C@H](CC1=CC=C(O)C=C1)NC(=O)[C@H](CO)NC(=O)[C@H](CC1=CNC2=C1C=CC=C2)NC(=O)[C@H](CC1=CNC=N1)NC(=O)[C@@H]1CCC(=O)N1 |                      |
| DB00014     | Goserelin   | CC(C)C[C@H](NC(=O)[C@@H](COC(C)(C)C)NC(=O)[C@H](CC1=CC=C(O)C=C1)NC(=O)[C@H](CO)NC(=O)[C@H](CC1=CNC2=CC=CC=C12)NC(=O)[C@H](CC1=CN=CN1)NC(=O)[C@@H]1CCC(=O)N1)C(=O)N[C@@H](CCCN=C(N)N)C(=O)N1CCC[C@H]1C(=O)NNC(N)=O |       5311128        |

可以看到，那个特别长特别长的，就是我们要的化学组成SMILE

### 药物相互作用

这个比较好找，斯坦福的数据网站上全部给出来了[snap bio data](http://snap.stanford.edu/biodata/#entities)：

![image-20200405203129294](https://i.loli.net/2020/04/05/R3XUHsuy2fGMxrq.png)

我们下载下来就可以得到类似下面这样的数据

| DrugA   | DrugB   |
| ------- | ------- |
| DB00575 | DB00806 |
| DB01242 | DB08893 |
| DB00862 | DB00966 |

出现在这个文件pair中的，都是有明确记录，会发生相互作用的药物。

## 数据预处理

### 环境搭建

直到处理数据的那一天，我才真正意识到 Anaconda 的强悍之处，你可完全搭建一个属于你自己的python环境，丝毫不怕与主环境或是其他conda环境产生冲突，问题做完了或者环境不想要了，可以随时删除，不占一点空间。

下面简单给出 conda 常用的命令：

1. 创建环境

   `conda create -n your_env_name python=X.X（2.7、3.6等)`

2. 进入/退出指定虚拟环境

   `source activate your_env_name` `source deactivate`

3. 查看当前环境安装的包

   `conda list`

4. 查看当前系统都有哪些虚拟环境

   `conda env list`

5. 安装自己想要的包

   `conda install XXX`

### 提取药物特征

这里使用`deepchem` 提取药物特征，关于 `deepchem` 可以在GitHub上了解更多 [deepchem](https://github.com/deepchem/deepchem) ，可以根据SMILE信息快速提取出药物中我们关注的feature

### 数据清洗与整合

想法是，药物feature中有的药物，可能在相互作用关系中没有出现，而关系中出现的所有药物，也不一定都有feature，要做一个两方面的折中，挑选出两个数据都具备的药物，步骤如下：

1. 分别找到feature和关系中的DB id集合，取交集（all_drugs）
2. 对all_drugs中所有drug取排列组合，找到所有可能的组合（combination），判断每一个组合是否在存在关系，存为y（1或0）

3. 整合上述Drug_feature（feat_mat 和 adj_list）和对应的y，得到最终训练数据

   - 对于图神经网络，可以直接使用list作为输入，在model中再对四个输入（drug_feat1, adj_list）进行综合：

     ```python
     x=[X_drug_feat_data1,X_drug_adj_data1,X_drug_feat_data2, X_drug_adj_data2]
     ```

   - 对于logistics regression等方法，需要使用`np.c_` 把矩阵拼接起来：

     ```python
     x = np.c_[X_drug_feat_data1.reshape(size, 7500),X_drug_adj_data1.reshape(size, 10000),X_drug_feat_data2.reshape(size, 7500), X_drug_adj_data2.reshape(size, 10000)]
     ```

     

4. 使用`np.savez()` 把矩阵保存到文件，方便下次直接调用

