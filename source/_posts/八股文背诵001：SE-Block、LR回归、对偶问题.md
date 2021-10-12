---
title: 八股文背诵001：SE-Block、LR回归、对偶问题
date: 2021-10-12 22:22:40
tags:
- 机器学习
---

## SE Block

通过对特征通道间的相关性进行建模，把重要的特征进行强化来提升准确率。

![image-20211012222439117](https://bat-blog.oss-cn-beijing.aliyuncs.com/image-20211012222439117.png)



代码：

```python
class SE(nn.Module):
    REDUCTION = 4

    def __init__(self, max_channels, mbtest=False):
        super(SE, self).__init__()

        self.max_channels = max_channels
        self.reduction = SE.REDUCTION

        num_mid = self.max_channels // self.reduction

        self.fc = nn.Sequential(OrderedDict([
            ('reduce', Conv2d(self.max_channels, num_mid, 1, 1, 0, bias=True)),
            ('relu', nn.ReLU(inplace=True)),
            ('expand', Conv2d(num_mid, self.max_channels, 1, 1, 0, bias=True)),
            ('h_sigmoid', nn.Hardsigmoid(inplace=True)),
        ]))

    def forward(self, x):
        y = x.mean(3, keepdim=True).mean(2, keepdim=True)
        # reduce
        y = self.fc(y)
        return x * y
```

来自论文：‘

https://arxiv.org/abs/1709.01507



## 逻辑斯蒂回归

