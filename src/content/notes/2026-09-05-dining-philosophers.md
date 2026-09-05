---
title: 哲学家进餐问题
description: 用信号量机制解决一些问题。
type: note
attachments:
  - label: Word 原文
    file: /uploads/dining-philosophers.docx
grade: year-2
semester: fall
course: operating-systems
date: 2026-09-05
order: 3
published: true
---
问题描述：

![](/uploads/dining-philosophers-fig2.png)

![](/uploads/dining-philosophers-fig3.png)

信号量设置。定义互斥信号量数组chopstick[5]={1,1,1,1,1}用于实现5个筷子的互斥访问，并对哲学家进行0~4编号。哲学家i左边的筷子编号为i，右边的筷子编号为(i+1)%5

P申请占用

V释放

![](/uploads/dining-philosophers-fig4.png)

BUT!他们既不释放自己手中持有的资源，还向同一方向申请新的资源，造成DEADLOCK!

导致所有的哲学家进程无法向下推进

HOW TO AVOID DEADLOCK?

限制条件 eg.最多允许4个哲学家同时进餐

➡保证至少有一个哲学家是可以拿到左右两只筷子

要求奇数号先拿左边，再拿右边；偶数号相反。

➡只会有其中一个可以拿起第一只筷子，另一个会直接阻塞。这就避免了占有一只后等待另一只的情况。

仅当一个哲学家左右筷子都可以使用时，才允许其拿起筷子

![](/uploads/dining-philosophers-fig5.png)

这样可以保证即使有一个哲学家在拿筷子的时候被阻塞了，但是也不会有别的哲学家现在可以拿筷子。

![](/uploads/dining-philosophers-fig6.png)
