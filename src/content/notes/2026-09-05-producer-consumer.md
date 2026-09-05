---
title: 生产者-消费者问题
description: 用信号量机制解决一些问题。
type: note
attachments:
  - label: Word 原文
    file: /uploads/producer-consumer.docx
grade: year-2
semester: fall
course: operating-systems
date: 2026-09-05
order: 2
published: true
---
问题描述：

生产者&消费者进程

生产者-生产产品-放入缓冲区

消费者-使用产品-从缓冲区取出

生产者、消费者共享一个初始为空、大小为n的缓冲区

![](/uploads/producer-consumer-fig2.png)

A.只有缓冲区没满，生产者才可以把产品放入缓冲区

缓冲区满时，生产者必须等待；

B.缓冲区空时，消费者必须等待

C.缓冲区是临界资源，各进程必须互斥地访问

Otherwise，两个进程选择同一个缓冲区，则造成数据覆盖

关系分析：找出同步、互斥关系

整理思路：确定P、V关系

设置信号量。互斥信号量一般为1；同步取决于题目的资源。

同步关系：

![](/uploads/producer-consumer-fig3.png)

Semaphore mutex=1;

Semaphore empty=n;  //空闲缓冲区数量

Semaphore full=0;  //产品数量，即非空缓冲区的数量

Producer(){

While(1){

生产一个产品；

P(empty);

P(mutex);              ----实现互斥-同一进程的PV操作

把产品放入缓冲区；

V(mutex)

V(full);      ~黄色：若无空闲区，产品生产不了// 有空才能生产

}

}

Consumer(){

while(1){

P(full);   //产品数量减少   ~有产品，才能消费

P(mutex);

从缓冲区中取出一个产品;

V(mutex);

V(empty);   //空闲缓冲区增加

使用产品;

}

}

为什么PV交叉了呢？

有空（缓冲区没满）=生产（产品数量）

他们由两个信号量进行计算。

![](/uploads/producer-consumer-fig4.png)

V操作顺序可以交换-V操作不会导致进程阻塞

实现互斥和同步是两个P操作，实现互斥的P操作应在同步之后，不然会导致死锁
