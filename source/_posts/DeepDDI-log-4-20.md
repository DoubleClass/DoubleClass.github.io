---
title: DeepDDI log 4.20
date: 2020-04-20 21:26:36
tags:
- DeepDDI
---

## 悲剧

今天用跑好的dataidx重新运行发现全都是0.5了十分恼火，整个一上午和一下午都没有找到原因

## 思路一

target没有设成float，导致预测只能是整数，事实证明不是这个问题

## 思路二

dataidx本身存在问题，这个在下午甚至让我震惊了好久，因为在 dataidx中出现的反应的 两个药物竟然在源文件中没有，肯定是出问题了啊，但是最后发现

问题出现 windows记事本，它的搜索功能太烂了，我用excel搜索就搜到了，所以以后也要记住教训：千万不要为了生内存用记事本，有excel为什么不用呢？

## 思路三

暂时没有思路三

今天搞了一整天还是没有搞清楚问题出现在哪里

但是还是觉得很有趣，因为93的结果出现过，这个问题应该是可以解决的

所以下一步应该是从头捋一捋整个过程，validation set的分割，可以放到后面