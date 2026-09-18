---
title: Modern Cryptography – Part 1
description: S-DES是考试中会涉及的内容！一定要留意~
type: note
attachments:
  - label: PDF
    file: /uploads/modern-cryptography-part-1.pdf
grade: year-4
semester: fall
course: computer-security
date: 2026-09-18
order: 2
published: true
---
# **<font style="color:rgb(0,0,0);">Stream Ciphers & Block Ciphers</font>**
## Block Cipher（分组密码）
将**一整块明文**作为一个整体进行**加密**，并**产生**一个**相同长度的密文块**（通常为64位或128位）

将明文分成固定大小的数据块，每次加密一个数据块。

<u>类比</u>：数据被装进一个个箱子（Block），然后整箱运输（加密）。

| Algorithm | Block Size |
| --- | --- |
| DES | 64 bits |
| AES | 128 bits |


**加密前后，plaintext 和 ciphertext 长度一致**

+ 加密 Encryption：C=E<sub>K</sub>(P)
+ 解密 Decryption：P=D<sub>K</sub>(C)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789694262103-ca1a504a-86e9-4303-8393-524b68d6fe6d.png)

### **<font style="color:rgb(0,0,0);">Block Cipher Characteristics </font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789696856464-b63d8e72-333d-4c07-81c9-3e3e8896a6e1.png)

1. **Variable** (or flexible) of key length / block size / no. of rounds 密钥长度、分组长度、轮数
+ <u>Key length</u>：Key 越长，攻击难度越大

| **算法** | **密钥长度** |
| :---: | :---: |
| DES | 56 bits |
| AES-128 | 128 bits |
| AES-192 | 192 bits |
| AES-256 | 256 bits |


例如，暴力破解56位：2<sup>56  </sup> vs<sup> </sup>256位：2<sup>256    </sup>差距极其巨大。

+ <u>Block Size</u>：分组越大，模式攻击更困难，重复块出现概率更低
    - DES: 64 bits
    - AES: 128 bits
+ <u>Number of Rounds</u>：加密步骤重复执行多少次 -> 多次变换更加复杂
    - AES-128：10 Rounds
    - AES-192：12 Rounds
    - AES-256：14 Rounds
2. **Mixed operators, data**

现代密码不会只用一种运算。

而是同时使用：

+ XOR：A⊕B
+ AND：A∧B
+ OR：A∨B
+ Addition：(A + B) mod 2
+ Rotation 循环移位：101101 -左移2位->110110

如果只用 XOR：规律太容易分析

多种运算混合后：数学结构更复杂，更难攻击。

3. **Key dependent rotation 依赖密钥的循环移位**：移多少位由密钥决定
+ 例如，密钥最后3位：101，即 5 --> 左移 5 位
4. **Key dependent S-boxes 依赖密钥的S盒**
+ S-box：Substitution Box 替换（类似于字典，有一个查表规则）
+ **本质：**输入一个值，输出另一个值
5. **More complex key scheduling (Variable F) 更加复杂的密钥扩展机制**
+ Key Schedule 主密钥 K 并不会直接用于每一轮，而是通过 Key schedule 生成每轮子密钥
+ Variable F，Round Function 轮函数：表示每轮使用不同规则。
6. **Operation of full data in each round **每轮处理全部数据
+ 早期密码：每轮可能只处理部分数据
+ 现代密码：每轮都尽可能影响整个数据块。
7. **Varying non-linear functions**
+ 如果全是线性运算：攻击者可以用矩阵运算、
+ 非线性，规则更复杂

| Variable key length | 可变密钥长度 | 提高暴力破解难度 |
| --- | --- | --- |
| Variable block size | 可变分组长度 | 减少模式暴露 |
| Variable rounds | 可变轮数 | 增强混淆扩散 |
| Mixed operators | 混合运算 | 增加复杂性 |
| Key dependent rotation | 密钥控制移位 | 增加随机性 |
| Key dependent S-box | 密钥控制S盒 | 提高抗分析能力 |
| Complex key scheduling | 复杂密钥扩展 | 生成不同轮密钥 |
| Full data operation | 每轮处理整个分组 | 快速扩散 |
| Non-linear functions | 非线性函数 | 防止数学破解 |


## Stream Cipher（流密码）
流密码每次对**一个**比特(bit)或一个字节(byte)的数据流进行加密。

<u>类比</u>：数据像流水一样连续通过加密器。

+ **加密：****<font style="color:#2F4BDA;">c</font>**<sub>**<font style="color:#2F4BDA;">i</font>**</sub>**<font style="color:#2F4BDA;">=p</font>**<sub>**<font style="color:#2F4BDA;">i</font>**</sub>**<font style="color:#2F4BDA;">⊕k</font>**<sub>**<font style="color:#2F4BDA;">i</font>**</sub>
    - p<sub>i</sub> = 第 i 位明文
    - k<sub>i </sub>= 密钥流（Keystream）
    - c<sub>i</sub> = 第 i 位密文
    - ⊕ = XOR（异或）
+ **解密：****<font style="color:#2F4BDA;">p</font>**<sub>**<font style="color:#2F4BDA;">i</font>**</sub>**<font style="color:#2F4BDA;">=c</font>**<sub>**<font style="color:#2F4BDA;">i</font>**</sub>**<font style="color:#2F4BDA;">⊕k</font>**<sub>**<font style="color:#2F4BDA;">i</font>**</sub>
    - **因为，**(p<sub>i</sub>⊕k<sub>i</sub>)⊕k<sub>i</sub>=p<sub>i    </sub>利用异或运算的性质即可恢复原文
    - **<font style="color:#DF2A3F;">加密：明文⊕密钥 = 密文</font>**
    - **<font style="color:#DF2A3F;">解密：密文⊕密钥 = 明文</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789694714840-ca27839c-ba7d-420a-a452-69bfa3c6152c.png)

常见流密码：

+ Autokeyed Vigenère Cipher 自动密钥维吉尼亚密码 - 一种古典流密码
+ Vernam Cipher 维尔南密码

<details class="lake-collapse"><summary id="u8a3951bc"><span class="ne-text" style="font-size: 14px">【拓展】</span></summary><ol class="ne-ol"><li id="u549d7be5" data-lake-index-type="0" style="line-height: 1.15"><strong><span class="ne-text" style="text-decoration: underline; font-size: 14px">Autokeyed Vigenère Cipher</span></strong></li></ol><p id="u43c6f335" class="ne-p" style="line-height: 1.5"><strong><span class="ne-text" style="font-size: 14px">普通维吉尼亚密码 </span></strong></p><p id="uf15a95c1" class="ne-p"><span class="ne-text" style="font-size: 14px">① 密钥重复拓展</span></p><ul class="ne-ul"><li id="ufe655c13" data-lake-index-type="0" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">明文: H E L L O </span></li><li id="u51fff2fd" data-lake-index-type="0" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">密钥: K E Y K E</span></li></ul><p id="u754e5321" class="ne-p"><span class="ne-text" style="font-size: 14px">② 字母转换数字并累加</span></p><p id="u8befbb6b" class="ne-p" style="line-height: 3"><strong><span class="ne-text" style="font-size: 14px">Autokey（自动密钥）思想</span></strong></p><p id="u359521fd" class="ne-p" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">普通维吉尼亚有一个问题：密钥会重复，攻击者可以利用重复规律破解。</span></p><p id="u1e9816e0" class="ne-p" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">于是，Autokey Vigenère，先使用关键字：KEY</span></p><p id="u8c94bd24" class="ne-p" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">之后把明文接到密钥后面：KEYHE，</span><strong><span class="ne-text" style="font-size: 14px">直到密钥长度等于明文长度</span></strong><span class="ne-text" style="font-size: 14px">，作为整个密钥流。</span></p><p id="u12f44b2c" class="ne-p" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">然后，一一对应相加！</span></p><ol start="2" class="ne-ol"><li id="u9d71b3db" data-lake-index-type="0" style="line-height: 1.5"><strong><span class="ne-text" style="text-decoration: underline; font-size: 14px">Vernam Cipher</span></strong></li></ol><p id="u5da46817" class="ne-p" style="line-height: 3"><span class="ne-text" style="font-size: 14px">Gilbert Vernam 1917年提出。</span></p><p id="udd0d9539" class="ne-p"><strong><span class="ne-text" style="color: #2F4BDA; font-size: 14px">核心思想</span></strong><span class="ne-text" style="font-size: 14px">：用</span><strong><span class="ne-text" style="color: #2F4BDA; font-size: 14px"> XOR</span></strong><span class="ne-text" style="font-size: 14px"> 异或 进行加密，</span><strong><span class="ne-text" style="font-size: 14px">C = P ⊕ K</span></strong></p><p id="u3d7e741f" class="ne-p"><span class="ne-text" style="font-size: 14px">为什么能解密？( 我称之为叹为观止的聪明）</span></p><ul class="ne-ul"><li id="u55813608" data-lake-index-type="0" style="line-height: 2"><strong><span class="ne-text" style="font-size: 14px">因为  A ⊕ A = 0；A ⊕ 0 = A</span></strong></li><li id="ue3c6a571" data-lake-index-type="0" style="line-height: 2"><strong><span class="ne-text" style="font-size: 14px">因此，(P ⊕ K) ⊕ K = P ⊕ (K ⊕ K) = P ⊕ 0 = P</span></strong></li></ul><p id="u881437f9" class="ne-p" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">因为 XOR 本质就是：</span><span class="ne-text">模2加法（Addition Mod 2）</span></p><ul class="ne-ul"><li id="u7149b640" data-lake-index-type="0" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">异或可以写成：A ⊕ B = (A + B) mod 2</span></li><li id="u371d2a26" data-lake-index-type="0" style="line-height: 1.5"><span class="ne-text" style="font-size: 14px">普通加法有结合律，因此模2加法也有结合律</span></li></ul><pre data-language="plain" id="uQIGq" class="ne-codeblock language-plain"><code>Plaintext
    ↓
   XOR
    ↑
Keystream
    ↓
Ciphertext</code></pre><pre data-language="plain" id="YWld4" class="ne-codeblock language-plain"><code>Ciphertext
     ↓
    XOR
     ↑
Keystream
     ↓
Plaintext</code></pre><p id="u4edbe619" class="ne-p" style="line-height: 3"><strong><span class="ne-text" style="font-size: 14px">注意：加密和解密完全一样</span></strong></p><p id="u3cab6fbb" class="ne-p" style="line-height: 3"><span class="ne-text" style="font-size: 14px">Vernam Cipher进一步发展后，如果满足：</span></p><ul class="ne-ul"><li id="uf75be44d" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">条件1：密钥完全随机(Random)</span></li><li id="uf40306cb" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">条件2：密钥长度 = 明文长度</span></li><li id="u85e71ae9" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">条件3：密钥只使用一次 (One Time)</span></li></ul><p id="u3be549a0" class="ne-p" style="line-height: 3"><span class="ne-text" style="font-size: 14px">则得到：</span><strong><span class="ne-text" style="font-size: 14px">One-Time Pad</span></strong><span class="ne-text" style="font-size: 14px"> 一次一密系统 -&gt; Perfect secrecy 理论上不可破解</span></p></details>
## 对比
| 项目 | Block Cipher 分组密码 | Stream Cipher 流密码 |
| --- | --- | --- |
| 加密单位 | 一整块数据 | 一个bit/byte |
| 工作方式 | Block-by-Block | Continuous Stream |
| 是否需要Padding | 需要 | 不需要 |
| 速度 | 较慢 | 较快 |
| 错误传播 | 容易扩散 | 影响较小 |
| 典型算法 | AES、DES | RC4、Vernam |
| 应用场景 | 文件加密、数据库 | 视频、语音、WiFi |


# **<font style="color:rgb(0,0,0);">DES Encrytion Standard</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789698112161-1aeaf4d7-9836-4c0d-acae-efc3709e3eb9.png)

1. Symmetric-key（对称密钥）：加密和解密使用同一个密钥
2. 尽管，对于目前的技术来说，56 bits 的 key 是 insecure 且可以被暴力破解的，但是也对密码学的发展产生了巨大的影响
3. Key size 密钥大小 vs Block size 每次处理数据的大小

## DES Algorithm
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789702410163-e87a57cb-b95f-43c8-a33a-dd4ff7307f4d.png)

+ 左边 数据流

+ 右边 密钥生成过程

1. **Initial Permutation（IP)**
+ 初始置换：重新排列 64 位数据 -> 只是换位置
2. **16 轮加密**
+ **右边：子密钥生成**（生成 K1,K2,...,K16）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789702826917-1e1fd4ec-ba93-4155-ae4a-9c1ced97e3fb.png)

+ DES采用：**Feistel Network **费斯妥结构
    - 核心结构：   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789702965163-aca2e8ee-07d5-46c6-8e2d-d7f6a0bbbe83.png)

### 数据流变化（左半边）
#### Step 1：数据分两半
上一轮数据：64 bits

分成：

+ **L ( i - 1 ) **= 32 bits
+ **R ( i - 1 ) **= 32 bits

#### Step 2：左边直接复制
**L i = R ( i - 1)**  即，新的左半边 = 旧的右半边

#### Step 3：右边进入 F 函数
图中虚线框是 DES 安全性的核心

1. F 函数第一步 Expansion Permutation（E）：扩展，即 32 bits -> 48 bits
+ E-box 的作用：把 32位 拓展为 48 位
2. XOR	：R⊕K<sub>i</sub>
3. S-box Substitution Box：引入 Nonlinearlity，48 bits -> 32 bits
+ DES 的非线性来自哪里？Ans：S-Box
4. Permutation（P）：再次打乱顺序，作用：Diffusion 扩散，32 bits -> 32 bits

#### Step 4：与左半边异或
产生新的右半边：R<sub>i</sub> =L<sub>i</sub> −1 ⊕ F (R<sub>i </sub>−1, K<sub>i</sub>)

### 子密钥生成（右半图）
+ DES 密钥长度：<u>56位是真正密钥（真正参与加密）</u> + 8位是Parity Bit（奇偶校验位）
+ 图中：循环左移（为了让每轮使用的密钥不同） -> **Permuted Choice 2（PC -2)** -> K<sub>i</sub>
    - 去掉 8 个校验位 64 bits -> 56 bits
    - 重新排列顺序

# Digital Logic
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789704247518-696759b3-2d55-40e7-a515-6fb6abe03c73.png)

## **<font style="background-color:#FBDE28;">3 basic gate: AND/ OR/ NOT </font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789704270462-317aebf1-4180-4a70-9fdc-590e1f994438.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789704286215-184d2900-4eaf-444d-b49f-787325175a11.png)

**【考察：如何用 basic gate 构造 XOR gate】**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789704302293-f3c3ba9d-1a6d-4490-ba44-52805102d11f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789704334956-f5fa2776-71eb-4f17-b283-554a8fafc2b6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789705182868-5ed99654-cbb3-4af9-a945-dc8e04893058.png)

# Simplified DES
+ **<font style="color:rgb(0,0,0);">Input (plaintext) block: 8-bits </font>**<font style="color:rgb(0,0,0);">一次加密 8 位</font>
+ **<font style="color:rgb(0,0,0);">Output (ciphertext) block: 8-bits </font>**<font style="color:rgb(0,0,0);">这是分组加密的特点：输入 8 位 -> 输出仍然 8 位</font>
+ **<font style="color:rgb(0,0,0);">Key: 10-bits</font>**
+ **<font style="color:rgb(0,0,0);">Rounds: 2</font>**
+ **<font style="color:rgb(0,0,0);">Round keys</font>**<font style="color:rgb(0,0,0);"> generated using</font>**<font style="color:rgb(0,0,0);"> permutations</font>**<font style="color:rgb(0,0,0);"> 置换</font>**<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">and</font>**<font style="color:rgb(0,0,0);"> left shifts </font>**<font style="color:rgb(0,0,0);">左移</font>
+ **<u><font style="color:rgb(0,0,0);">Encryption:</font></u>****<font style="color:rgb(0,0,0);"> Initial permutation</font>**<font style="color:rgb(0,0,0);">(</font>仅重新排列位置) **<font style="color:rgb(0,0,0);">round function, switch halves</font>**
+ **<u><font style="color:rgb(0,0,0);">Decryption:</font></u>****<font style="color:rgb(0,0,0);"> Same as encryption, except round keys used in opposite order. </font>****<font style="color:#2F4BDA;">解密与加密完全相同, 只是子密钥使用顺序相反</font>** - Feistel Network 最重要性质)

## Key Generation
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789710083057-aa53eca1-a349-4468-a519-21c834de19e0.png)



**<u>Step 1</u>****: P10 (10 bit permutation) 重新排列****<u>比特位置</u>**

P10(1,2,3,4,5,6,7,8,9,10) = {3,5,2,7,4,10,1,9,8,6}

假设 原密钥：1010000010

P10 定义：(3,5,2,7,4,10,1,9,8,6)

得到：10000 01100

**<u>Step 2</u>****：分成两半**

1000001100 -> 10000 = Left 与 01100 = Right

**<u>Step 3</u>****：LS -1 **循环左移

LS - 1 就意味着 向左循环移动 1 位

则，10000 -> **00001 = Left**; 01100 ->**11000 = Right**

拼起来 00001 11000

**<u>Step 4</u>****：P8( 8 bit permutation）从 10 位 里挑 8 位并重排**

<font style="color:rgb(0,0,0);">P8({1,2,3,4,5,6,7,8,9,10})= {6,3,7,4,8,5,10,9}</font>

得到：**<font style="color:#2F4BDA;">10100100</font>** -> K1

【重复得到 K2】

**<u>Step 5</u>****：LS -2** 循环左移 2 位（在 LS - 1 的基础上移）

得到：00001 ->00100; 11000 ->00011

拼起来 00100 00011

**<u>Step 6</u>****：P8( 8 bit permutation）从 10 位 里挑 8 位并重排**

**运用同样的规则**：<font style="color:rgb(0,0,0);">P8({1,2,3,4,5,6,7,8,9,10})= {6,3,7,4,8,5,10,9}</font>

<font style="color:rgb(0,0,0);">得到：</font>**<font style="color:#2F4BDA;">01000011</font>**<font style="color:rgb(0,0,0);"> -> K2</font>

注意：

1. P10作用：重新排列 10位 -> 只是换位置！！！
2. P8作用：从10位中选出8位 ->可能是乱序选择！！！

## S-DES Algorithm
![画板](https://cdn.nlark.com/yuque/0/2026/jpeg/42556572/1789711424820-50f91f28-a122-4029-9a65-1176d19f8511.jpeg)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789711102643-4d4c7a45-ec5e-4aa0-b6a7-78c353a3ed8e.png)

**<font style="color:rgb(0,0,0);">IP = {2, 6, 3, 1, 4, 8, 5, 7}</font>**

+ <font style="color:rgb(0,0,0);">得到</font>**<font style="color:rgb(0,0,0);"> </font>**IP(10110010)=00111001

**<font style="color:rgb(0,0,0);">IP</font>**<sup>**<font style="color:rgb(0,0,0);">-1</font>**</sup>**<font style="color:rgb(0,0,0);">={4,1,3,5,7,2,8,6} 逆置换</font>**<font style="color:rgb(0,0,0);">：把 IP 恢复回来</font>

**<u><font style="color:rgb(0,0,0);">Functionf</font></u>**<sub>**<u><font style="color:rgb(0,0,0);">k</font></u>**</sub><sub>**<font style="color:rgb(0,0,0);">： </font>**</sub>**f**<sub>**k**</sub>**(L, R) = ( L ⊕ F (R, SK), R)**

<font style="color:rgb(0,0,0);">如，1010 0111</font>

<font style="color:rgb(0,0,0);">8 bits -> 1010 = Left；0111 = Right</font>

**<font style="color:rgb(0,0,0);">右边进入 F 函数，结果与左边异或</font>**





<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789711990958-21aa46e7-33f1-4cd5-af0f-d9feefb75d1b.png)**<font style="color:rgb(0,0,0);"></font>**

**F 函数结构**

输入：**R = 4 bits**

**R -> E/P -> XOR K -> S box -> P4**

1. **E/P（Expansion Permutation）**

E/P={4,1,2,3,2,3,4,1} 

作用：扩展 4 bits -> 8 bits

若 R = 1011，则 R->E/P->11010111

2. **与 K1 异或**

E/P(R) = 11010111; K1 = 101010100

得到 0111 0011

3. **分成左右各 4 位即 S0 与 S1**

**<u>0111 = S0；0011 = S1</u>**

查表：4 bits -> 2 bits

4. **P4={2,4,3,1} 重新排列 4位**
5. **输出并于 L 取异或，得到新的左半边（右边保持最初始）**
6. **SW 交换左右**

如，1010 0111 -> 0111 1010

【重复 Round 2到第 5步后做 IP<sup>-1</sup>】

IP⁻¹（逆初始置换）的作用是把最开始 IP 打乱的比特顺序恢复回来；而先打乱再还原主要是为了当年 DES 硬件电路布线更方便，不是为了提高安全性。

**S - Box（整个算法的非线性核心）：**

+ S-DES uses two S-Boxes:  S0 , S1
+ Each S-Box is represented as a 4*4 matrix.
+ The input to an S-Box is 4 bits.
+ The output is 2 bits.
+ The 4-bit input determines:
+ the row using the first and fourth bits; ** 第 1 位和第 4 位**决定<font style="background-color:#FBDE28;">行</font>；  
+ the column using the second and third bits. ** 第 2 位和第 3 位**决定<font style="background-color:#FBDE28;">列</font>。  

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714021431-d6f3e3dd-42e9-42c5-96b1-cab81369ce03.png)

若输入为 b1b2b3b4

则：**行号由b1b4决定；列号由b2b3决定**

查表得到一个十进制数，再将其转换成 2 位二进制输出。

若，输入为 1011

则 b1b4 = 11 -> 3，b2b3 = 01 ->1 ，S<sub>0</sub>[3][1] = 1 -> 01；S1同理

| 名称 | 作用 |
| --- | --- |
| P10 | 对 10 位原始密钥进行排列 |
| P8 | 从移位后的 10 位中选择并排列 8 位 |
| IP | 对 8 位明文/密文做初始置换 |
| IP<sup>-1</sup> | 撤销 IP 的位置变化 |
| E/P | 将 4 位扩展并排列为 8 位 |
| P4 | 对 S-Box 产生的 4 位结果重新排列 |


## Example
在 S-DES/DES 中，IP、S-Box、各种 P 置换的位置表都是算法设计者事先规定好的固定参数，

即**算法规则公开且固定，密钥秘密且可变**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714491067-829d354c-69bc-4a9c-ae28-1b684b5f2a3f.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714491067-829d354c-69bc-4a9c-ae28-1b684b5f2a3f.png)

**<u>Step 1</u>****: P10 (10 bit permutation) 重新排列****<u>比特位置</u>** **并分左右**

**<font style="background-color:#FBDE28;">P10(1,2,3,4,5,6,7,8,9,10) = {3,5,2,7,4,10,1,9,8,6}</font>**

10011 01100 -> 01011 = Left  01010 = Right

**<u>Step 2</u>****：LS -1 **循环左移

10110 10100

**<u>Step 3</u>****：P8( 8 bit permutation）从 10 位 里挑 8 位并重排**

**<font style="color:rgb(0,0,0);background-color:#FBDE28;">P8({1,2,3,4,5,6,7,8,9,10})= {6,3,7,4,8,5,10,9}</font>**

**<font style="color:#2F4BDA;">1101 1000（K1）</font>**

**<u>Step 4</u>****：LS -2** 循环左移 2 位（在 LS - 1 的基础上移）

11010 10010

**<u>Step 5</u>****：P8( 8 bit permutation）从 10 位 里挑 8 位并重排**

**运用同样的规则**：**<font style="color:rgb(0,0,0);background-color:#FBDE28;">P8({1,2,3,4,5,6,7,8,9,10})= {6,3,7,4,8,5,10,9}</font>**

<font style="color:rgb(0,0,0);">得到：</font>**<font style="color:#2F4BDA;">1001 0001（K2)</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714524694-9cab8894-08a4-4bc8-92c3-b68a8ae138ac.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714541317-c2194926-dfe7-4495-9ec6-d1370ca2525b.png)

:::warning
**IP 得到 8 bits，分左右，右边送入 fk，得到的结果与左边初始值取异或后，作为左边的结果；**

**右边直接用最初始值**

:::

**<u><font style="color:#2F4BDA;">加密</font></u>****<font style="color:#2F4BDA;">：</font>**

**<u>Step 1</u>**: **<font style="color:rgb(0,0,0);background-color:#FBDE28;">IP = {2, 6, 3, 1, 4, 8, 5, 7}</font>****<font style="color:rgb(0,0,0);"> 并分左右，</font>****<font style="color:#DF2A3F;">并送 right 进 fk</font>**

<font style="color:rgb(0,0,0);">1001 0101 -></font>**<font style="color:#2F4BDA;"> 0101 = Left； 1100 = Right</font>**

**<u><font style="color:rgb(0,0,0);">Step 2</font></u>****<font style="color:rgb(0,0,0);">：</font>****E/P（Expansion Permutation）****<font style="background-color:#FBDE28;">E/P={4,1,2,3,2,3,4,1} </font>**

1100 -> 0110 1001

**<u>Step 3</u>****: 与 K1 异或，并分左右**

E/P(R) = 0110 1001; **<font style="color:#2F4BDA;">1101 1000（K1）</font>****->1011= Left； 0001= Right**

**<u>Step 4</u>****: 查表**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714021431-d6f3e3dd-42e9-42c5-96b1-cab81369ce03.png)

**<font style="color:#2F4BDA;">Left = 1011 ->[3,1] ->1 -> 01;           Right = 1000 ->[1,0] ->2 -> 10</font>**

**<u>Step 5</u>****: ****<font style="background-color:#FBDE28;">P4={2,4,3,1} </font>****重新排列 4位,** 得到 0110 -> 1010

**<u>Step 6</u>****: 输出并于 L 取异或，得到新的左半边（右边保持原样）**0101 与 1010 取 异或 -> 1111

+ 输出 1111 1100

**<u>Step 7: </u>****SW 交换左右****<font style="color:#2F4BDA;"> 1111 1100 -> 1100 1111</font>**

**<font style="color:#5C8D07;background-color:#FBDE28;">【重复 Round 2】</font>**

**<u><font style="color:rgb(0,0,0);">Step 2.2</font></u>****<font style="color:rgb(0,0,0);">：</font>****E/P（Expansion Permutation）****<font style="background-color:#FBDE28;">E/P={4,1,2,3,2,3,4,1} </font>**

1111 -> 1111 1111

**<u>Step 3.2</u>****: 与 K2 异或，并分左右**

E/P(R) = 1111 1111; **<font style="color:#2F4BDA;">1001 0001（K2)</font>****->0110= Left； 1110= Right**

**<u>Step 4.2</u>****: 查表**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714021431-d6f3e3dd-42e9-42c5-96b1-cab81369ce03.png)

**<font style="color:#2F4BDA;">Left = 0110 ->[0,3] -> 2 -> 10;           Right = 1110 ->[2,3] ->0 -> 00</font>**

**<u>Step 5.2</u>****: ****<font style="background-color:#FBDE28;">P4={2,4,3,1} </font>****重新排列 4位,** 得到 1000 -> 0001

**<u>Step 6.2</u>****: 输出并于 L 取异或，得到新的左半边（右边保持原样）**0001 与 1100 取 异或 -> **1101**

+ 输出 1101 1111

**<u>Step 7: </u>****<font style="color:rgb(0,0,0);background-color:#FBDE28;">IP</font>**<sup>**<font style="color:rgb(0,0,0);background-color:#FBDE28;">-1</font>**</sup>**<font style="color:rgb(0,0,0);background-color:#FBDE28;">={4,1,3,5,7,2,8,6}</font>****<font style="color:#DF2A3F;">    得到 1101 1111</font>**

**<u><font style="color:#2F4BDA;">解密</font></u>****<font style="color:#2F4BDA;">：在 S-DES 中，解密和加密使用相同的整体结构，只把 K1、K2 的使用顺序倒过来</font>**

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789717146667-7b09a208-ab81-41bf-abf3-68473c10ba6f.png)

## Summary
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789714705210-72f76bb1-fe18-4413-86e4-23beb35010b7.png)







