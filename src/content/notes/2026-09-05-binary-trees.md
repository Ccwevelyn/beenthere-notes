---
title: 二叉树
type: note
attachments:
  - label: Word 原文
    file: /uploads/binary-trees.docx
grade: year-2
semester: fall
course: data-structures-algorithms
date: 2026-09-05
order: 3
published: true
---
二叉树

基本概念

二叉树是n(n>=0)个结点的有限集合：

①或者是空二叉树，即n=0

②或者由一个根节点和两个互不相交的被称为根的左子树和右子树组成。左子树和右子树分别是一棵二叉树。

![](/uploads/binary-trees-fig2.png)

特点：①每个结点至多只有两棵子树

②左右子树不能颠倒（二叉树是有序树）

注意：二叉树是！度为2的有序树！！！

度为2=至少有一个节点具有两个子树

![](/uploads/binary-trees-fig3.png)

几个特殊的二叉树

满二叉树（除了叶子结点，所有的分支结点都长满了两个分支）

![](/uploads/binary-trees-fig4.png)
![](/uploads/binary-trees-fig5.png)

特点：①只有最后一层有叶子节点    在满二叉树的前提下，把某些大的结点去掉

②不存在度为1的结点                   （先去最大编号，才能去次大）

①只有最后两层可能有叶子结点

②最多只有一个度为1的结点（只有一个结点连单独的）

二叉排序树：~搜索某个关键字就变得很容易//用于元素的排序和搜索

左子树上所有节点的关键字均小于根节点的关键字

右....大于...

左子树和右子树又各是一棵二叉排序树

![](/uploads/binary-trees-fig6.png)
![](/uploads/binary-trees-fig7.png)

平衡二叉树：任一节点的左子树和右子树深度之差不超过1.

--追求平衡有利于二叉排序的效率
![](/uploads/binary-trees-fig8.png)
