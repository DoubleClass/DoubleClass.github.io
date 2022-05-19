---
title: 'cs231n: assignment1: knn'
date: 2022-05-19 20:45:11
tags:
- 机器学习
---
# Assignment1.3: KNN
这个实验之前做过，说白了就是求距离：
- 用两个for循环
- 用一个for循环
- 完全不用for循环

然后还有几个numpy函数的用法：
- np.bincount
- np.array_split
- 等等

这些用处都不是很大。
这里把代码贴上：

```python
## Two for loops:
for i in xrange(num_test):
    for j in xrange(num_train):
        
        dists[i,j] = np.sqrt(np.sum((X[i,:]-self.X_train[j,:])**2))
return dists

## one for loop:
for i in xrange(num_test):
    dists[i,:] = np.sqrt(np.sum((X[i,:] - self.X_train)**2, axis = 1))
return dists

## no loop:
X_squared = np.sum(X**2,axis=1)     # 500,1
Y_squared = np.sum(self.X_train**2,axis=1) # 5000,1
XY = np.dot(X, self.X_train.T) # 500, 5000

# Expand L2 distance formula to get L2(X,Y) = sqrt((X-Y)^2) = sqrt(X^2 + Y^2 -2XY)
dists = np.sqrt(X_squared[:,np.newaxis] + Y_squared -2*XY)
# 就是把公式拆开了。。。
```
完事，下班！
