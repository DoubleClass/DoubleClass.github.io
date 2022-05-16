---
title: 'cs231n: two layer net work'
date: 2022-05-16 16:54:14
tags:
- 机器学习
---


# Assignment1: two layer net work
## Relu 的实现
```python
inner1_act = np.maximum(zeros, inner1)
```

注意这里使用maximum，而不是max，max会出大问题

## softmax loss的计算
首先，需要把每个sample减去最大值，防止上溢下溢。

首先softmax公式如下：
$$
softmax(x)_i = \frac{e^{x_i}}{\sum_{j}{e^{x_j}}}
$$

这里我们减去最大值，即为了防止上溢和下溢

举个例子，x=[100000,100001,100002],如果直接代入上式数值会非常大，当对每个x的值减去x中的最大值后得到[-2,-1,0]，此时再代入上式。

我试过加这个步骤，和不加，结果是一模一样的，应该可以证明这样对结果不产生影响，只是简化了计算。

之后，就是numpy的究级切片：

```python
probs[range(N), y]
```

`probs`是一个（5，3）维的矩阵，有5个sample，3个维度，y是类似`[0,1,1,2,0]`的真实标签。

因为cross entropy公式：
$$
Loss = -\sum_{i=1}^{m}{y_ilog(a_i)}
$$

$y_i$ 是one-hot 标签，所以在其他维度都为零，有一个选择的过程，上面这行代码就做出了这个选择。只选y对应的那一列。

## cross entropy 和 softmax 求偏导
经典的$a-1$倒数，具体可以参考：

[求偏导的过程（知乎）](https://zhuanlan.zhihu.com/p/42040307)

这里就需要稍微细心一点，每一步对应的维度要算对。

## 随机梯度下降（训练过程）

```python
mini_batch = np.random.permutation(num_train)[0:batch_size]
```
挺好用的一个打乱方法。

参数更新也很直接：

```python
self.params['W1'] -= learning_rate * grads['W1']
self.params['b1'] -= learning_rate * grads['b1']
self.params['W2'] -= learning_rate * grads['W2']
self.params['b2'] -= learning_rate * grads['b2']
```

本次实验到此结束。

