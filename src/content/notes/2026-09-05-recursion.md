---
title: 递归
type: note
attachments:
  - label: Word 原文
    file: /uploads/recursion.docx
grade: year-2
semester: fall
course: data-structures-algorithms
date: 2026-09-05
order: 1
published: true
---
什么是递归？-一种解决问题的方式

将问题分解为规模更小的相同问题

持续分解，直到问题规模小到可以用非常简单直接的方式来解决

在算法流程中，调用自身

初识递归

问题：给定一个列表，返回所有数的和

![](/uploads/recursion-fig2.png)

如果不用循环呢？--递归

➡ 首个数+余下的数列
![](/uploads/recursion-fig13.png)

def listsum(numList):
![](/uploads/recursion-fig14.png)
![](/uploads/recursion-fig14.png)

If len(numList)==1:

return numList[0]

else:

return numList[0]+listsum(numList[1:])

递归~以另一种方式实现迭代循环

递归三定律

·递归算法必须有一个基本结束条件（最小规模问题直接解决）

·递归算法必须能改变状态向基本解决条件演进（减小问题规模）

·递归算法必须调用自身（解决减小了规模的相同问题）

Eg.基本结束条件：当列表长度为1时，直接输出所包含的唯一数；把列表长度不断减小直至1。

递归调用的实现

·当一个函数被调用时，系统会把调用时的现场数据压入系统调用栈

![](/uploads/recursion-fig15.png)
![](/uploads/recursion-fig16.png)

调用栈-次序反转

最先实现的是最内层，但是最先输出的是最外层

在调试递归算法程序的时候经常会碰到这样的错误：RecursionError

递归层数太多，系统调用栈容量有限

![](/uploads/recursion-fig17.png)

检查代码：

是否无基本结束条件

向基本结束条件进入的太慢

递归深度限制可以调整

![](/uploads/recursion-fig18.png)

Python内置的sys模块可以获取和调整recursion深度

递归可视化：图示

Python的海龟作图系统turtle module

Python内置，随时可用，以LOGO语言的创意为基础

其意象为模拟海龟在海滩上爬行而留下的足迹

![](/uploads/recursion-fig19.png)

![](/uploads/recursion-fig20.png)

分形树：自相似递归图形

![](/uploads/recursion-fig3.png)

自然界中，所具备的分形特性，使得计算机可以通过分形算法生成非常逼真的自然场景

分形是在不同尺度上都具有相似性的事物

![](/uploads/recursion-fig4.png)

![](/uploads/recursion-fig5.png)

一维~长度有限

二维~周长有限

//金字塔-表面积=0；体积=∞

![](/uploads/recursion-fig6.png)
![](/uploads/recursion-fig7.png)

Degree=几阶？

![](/uploads/recursion-fig8.png)

![](/uploads/recursion-fig9.png)

汉诺塔

![](/uploads/recursion-fig10.png)

![](/uploads/recursion-fig11.png)

把问题简化-分解为一个盘子的移动

![](/uploads/recursion-fig12.png)
