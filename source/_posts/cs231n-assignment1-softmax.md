---
title: 'cs231n: assignment1: softmax'
date: 2022-05-17 21:17:55
tags:
- 机器学习
---


# Assignment2: Softmax
## loss 的计算
这里基本上和之前neural network中第一步完全一样，但仍然有一些需要注意的：
- 不要忘了reg，正则化比想象中更有用，多一个正则项大约高了10个点。
- 不要忘了dw也需要求一个平均。因为点乘内包含了一个求和的过程。


再放一遍代码：
```python
N = X.shape[0]

# compute the logits
scores = np.dot(X, W)

# fix 防止上溢下溢
fixed_score = scores - np.max(scores, axis=1, keepdims=True)

# compute the softmax scores
softmax_scores = np.exp(fixed_score) / np.sum(np.exp(fixed_score), axis=1, keepdims=True)

# compute loss
loss = -1* np.log(softmax_scores[range(N), y])
loss = np.sum(loss)
loss /= N
loss += reg * np.sum(W*W)

# compute gradient
dsoft = softmax_scores   # N, C  # X is N, D  W is D,C
dsoft[range(N), y] = dsoft[range(N), y] - 1
dW = np.dot(X.T, dsoft)
dW /= N
dW += 2*reg*W
```

## SGD 的实现
这里又学到一个minibatch的选择方法：

```python
# version 1
mini_batch = np.random.permutation(num_train)[0:batch_size]
X_batch = X[mini_batch, ...]
y_batch = y[mini_batch]

# version 2
batch_indices = np.random.choice(X_indices,batch_size)
# Get our batch from these indices.
X_batch = X[batch_indices]
y_batch = y[batch_indices]
```

其他就都比较正常了，下班！