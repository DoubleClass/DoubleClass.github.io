---
title: DeepDDI log 4.25
date: 2020-04-25 16:43:27
tags:
- DeepDDI
---

## 尝试

python train_with_pre_data.py -unit_list 84 34 12 4 2 -gpu_id 0 -evaluate_method auc -use_relu True -use_GMP True -use_bn True -sample 1_3 -use_whole_data 1

## 修改 threshold



把0.5改成0.6，试一下结果(epoch  和  最后都改了)

```python
y_pred_val_rfc[i] > 0.6
```

仍旧是0.94444



激进一点：

改成 0.7



结果仍然 没变，可能是我傻了，但是为什么会不变呢？

## 调整学习率

从0.001到0.005，看结果怎么样

都变成0.5了………………

那我改成0.002试一下



结果还是刚才那个，太南了

## 调整unit_list

python train_with_pre_data.py -unit_list 21 13 12 4 2 -gpu_id 0 -evaluate_method auc -use_relu True -use_GMP True -use_bn True -sample 1_3 -use_whole_data 1



改成 21 13 12 4 2

做了两次实验，一次 90.00一次 93.3333

再改 84 126  34 12 4 2

这次终于有长进了：

0.9481481481481482

再改 84 126  140 34 12 4 2

这个到0.9518518518518518了，不错不错

再改 84 126  140 180 34 12 4 2，这个就不是很好了，结果是 0.9407



再改 84 126 140 134 12 4 2 不行，94.44

再改84 126 140 34 124 2，95.185



试一试 1：6比例的，效果非常差，85

