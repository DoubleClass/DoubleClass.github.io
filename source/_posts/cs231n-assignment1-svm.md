---
title: 'cs231n: assignment1: svm'
date: 2022-05-18 21:57:17
tags:
- 机器学习
---
# Assignment1: SVM
## 数学原理
SVM数学原理还挺复杂的，涉及到什么拉格朗日乘子法，还是不等式约束，这里挖一个坑，之后尽量补充进来。
## SVM loss
![2022-05-18-21-43-55](https://bat-blog.oss-cn-beijing.aliyuncs.com/2022-05-18-21-43-55_2e238461.png)

代码：

```python

num_train = X.shape[0]

scores = np.dot(X, W)
correct_scores = scores[range(num_train), y]
margins = scores - correct_scores[:, np.newaxis] + 1
mask = margins > np.zeros(scores.shape)
loss = np.sum(margins[mask])

loss = loss/num_train + reg*np.sum(W*W)

# remember the "continue", for the true class, we don't calculate loss
loss -= 1  
```

这里最后的减去1，意思就是sigma求和下面那个$y_i\neq j$，对于true label，我们并不计算loss
## 梯度的计算

```python

margin = scores - correct_scores[:, np.newaxis] + 1

# only using gradient.
margin[margin>0] = 1
margin[margin<=0] = 0

# calculate how many margin are bigger than zero, still, we don't count true class label, thus minus 1
row_sum = np.sum(margin,axis=1) - 1
margin[range(num_train), y] = -row_sum
dW = np.dot(X.T, margin)
dW /= num_train
dW += 2*reg*W
```

这里这个`-1`，意思也是我们对true label并不处理

计算 `row_sum`的意思就是计算有多少 大于零的，大于零的根据求导公式要减去。

这个主要是数学求导...
