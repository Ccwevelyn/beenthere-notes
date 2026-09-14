---
title: Ch2_Classical Ciphering
description: Playfair cipher 在课上也花了很多时间讲解和练习，内容很重要！需要多多留意~
type: note
attachments:
  - label: PDF
    file: /uploads/ch2_classical-ciphering.pdf
grade: year-4
semester: fall
course: computer-security
date: 2026-09-14
order: 1
published: true
---
## <font style="color:rgb(0,0,0);">Classical Ciphering </font>
### Introduction
 古典密码是现代密码学出现之前，人类用于保护信息的主要方式。它们通常基于 **字母替换（substitution）** 或 **字母重排（transposition）**

1. **Substitution Ciphers  **替换密码，用另一个字母替换原字母  
2. **Transposition Ciphers**   重排密码不改变字母本身，而是改变字母的顺序  
3. **Product Cipher **Combines multiple substitution and transposition ciphers to increase security.  这一思想直接启发了现代分组密码（如 AES）  

### <font style="color:rgb(0,0,0);">Caesar cipher 凯撒密码</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789348353910-76e100c8-cca2-434f-9248-58fc3f5203f2.png)

1.  把明文中的每个字母按一个固定的偏移量（密钥）进行移动，偏移范围为 1 到 25
2.  为了用数学表达凯撒密码，需要把字母映射为数字  
    - 归根到底，体现在字母本身：加密就是对应**字母表向前移动 k 位**
    - <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789348502971-970fef1f-333a-4e22-91ad-654320c62945.png)

#### **<font style="color:rgb(0,0,0);">Cryptanalysis – Brute Force </font>**<font style="color:rgb(0,0,0);">暴力破解</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789348573629-a4162063-0980-420c-9935-29b6985309c7.png)

A brute‑force attack (also called **<font style="color:#2F4BDA;">exhaustive key search</font>**) systematically tests **all possible keys or passwords** until one produces a valid plaintext.  

##### **This works because:**
+ Every encryption algorithm has a **finite keyspace**.
+ If the keyspace is small enough, an attacker can enumerate 枚举 all keys.
+ The correct key is found when the decrypted output becomes meaningful.

##### **Why key length determines feasibility？**
 For a key of **n bits**, the total keyspace is:  2<sup>n</sup>

 On average, a brute‑force search needs half the keyspace:  2<sup>n−1</sup>

 This exponential growth is why modern cryptosystems use large keys.  

| **Key length** | **Keyspace** | **Approx. brute‑force time** |
| --- | --- | --- |
| 40 bits | 240 ≈ 1.1 trillion | < 2 minutes |
| 56 bits (DES) | 256 | ~83 days |
| 64 bits | 264 | ~58 years |
| 128 bits (AES‑128) | 2128 | **Longer than the age of the universe** |
| 256 bits (AES‑256) | 2256 | **Physically impossible** |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352859265-7170aa1d-4d74-4e72-9887-0730085b2818.png)

:::warning
**Classical cipher** 的 key 是 **人类可读的结构**，不是二进制位串，因此 classical cipher 的 keyspace 很小，容易 brute force；

**Modern cipher** 的 key 是 binary， keyspace = 2ⁿ（指数级） → brute force 不可能  

:::

 This is why brute‑force cryptanalysis **fails completely** against modern symmetric ciphers  

##### 为什么 暴力破解可行？
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789349414440-02665951-53ef-49ae-a4bd-a5eef2a26908.png)

### <font style="color:rgb(0,0,0);">Monoalphabetic Cipher 单表替换密码  </font>
**S****<font style="color:rgb(0,0,0);">huffle the letters arbitrarily</font>****<font style="color:rgb(0,0,0);"> </font>**把字母表 **任意打乱**，并建立一个 **一对一映射**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789349708024-1b2d77ae-d08f-4c3c-978c-7ef05d498974.png)

####  **密钥空间（Keyspace = 26!） ** 
+ 凯撒密码：只有 25 个密钥
+ 单表替换密码：**26!（阶乘）个密钥 **26 !=403,291,461,126,605,635,584,000,000

####  为什么密钥空间这么大仍然不安全？
因为 **字母频率不会改变**。

例如英文中：

+ E 最常出现
+ T、A、O 次之
+ Q、Z 很少出现

攻击者可以通过 **频率分析（frequency analysis）** 轻松破解。

所以，**密钥空间大 ≠ 安全；结构弱才是致命问题**。

##### 分析方式：Statistical Attack
 Monoalphabetic Cipher 虽然把字母替换了，但 **不会改变字母出现的频率分布**。 

+ 明文中出现最多的字母（例如英文的 e）
+ 在密文中仍然会出现最多 ->  Monoalphabetic Cipher 是 **一对一替换，**所以密文的频率分布和明文的频率分布形状一致  
+ 只是换成了另一个字母（例如 P）

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789350624801-0af2bd10-2fea-48c6-9347-6794856001d8.png)

**攻击步骤：**

 ① 计算密文中每个字母的出现频率  

 ② 对照英文频率表  

 ③ 替换密文中的这些字母  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789350672308-cc230ce8-3fe0-48f3-8097-41410985465d.png)

### <font style="color:rgb(0,0,0);">Vigenère cipher  维吉尼亚密码  </font>
 维吉尼亚密码是一个 **多重凯撒密码**。 明文的每个字母根据关键字中的不同字母进行不同的偏移  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789349954139-c54f2917-10c8-4aff-bd00-99d35498e093.png)

+ 密钥是一个长度为 n 的字母序列
+ 明文长度为 m
+ 密钥重复使用直到覆盖整个明文

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789349998413-cf884b9f-1bb5-4e3c-b906-9bf686ef9e7e.png)

例，

+ 明文：ATTACKATDAWN
+ 密钥：LEMON
+ 重复密钥：LEMONLEMONLE
+ 用公式 C = (P + K) mod 26
+ 得到密文：**LXFOPVEFSNHR**

#### ** 密钥空间  **
在密钥长度确定的情况下：

+ Vigenère 的密钥空间取决于密钥长度 n，大小为：  26<sup>n</sup>
+ 因为密钥是由 **n 个字母组成**，每个字母有 **26 种选择**。

### <font style="color:rgb(0,0,0);">Playfair cipher  普莱费尔密码  </font>
Playfair is the best‑known digram (two‑letter) substitution cipher. It encrypts plaintext **two letters at a time**, using a **5×5 matrix** built from a keyword.   Playfair 是最著名的 **双字母替换密码**。它每次加密 **两个字母**，使用一个由关键字构造的 **5×5 字母矩阵**。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789350886340-57e8afec-3f69-4c8a-95e5-02a9da1984fa.png)

关键字：**MONARCHY**

构造规则：

1. 去重：M O N A R C H Y
2. 填入矩阵
3. 剩余字母按顺序补齐（I/J 合并）

#### Playfair <font style="background-color:#FBDE28;">加密</font>规则
**① Rule 1：重复字母 → 插入 X**

<font style="color:rgb(0,0,0);">Repeating plaintext letters that are in the</font>**<font style="color:#DF2A3F;"> same pair </font>**<font style="color:rgb(0,0,0);">are separated with a filler letter (X).</font>

**<font style="color:rgb(0,0,0);">注意</font>**<font style="color:rgb(0,0,0);">：如果不在同一个 pair 中，那么不需要 fill X</font>

**② Rule 2：同一行（Row）**

如果两个字母在同一行 → 各自替换为**<font style="background-color:#FBDE28;">右边</font>**的字母（循环）：

**③ Rule 3：同一列（Column）**

如果两个字母在同一列 → 各自替换为**<font style="background-color:#FBDE28;">下面</font>**的字母（循环）：

**④ Rule 4：矩形规则（Rectangle Rule）**

既不同行也不同列 → 形成一个矩形： 每个字母替换为 **<font style="background-color:#FBDE28;">同一行、对方的列</font>** 的字母。

解密，反之。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789351406305-e68635e3-baa1-4792-b4b3-2bb5f7e22002.png)

---

## <font style="color:rgb(0,0,0);">Symmetric Cipher Model 对称加密</font>
### five ingredients
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789351548293-74119c75-58d7-49cb-bdbc-1bf2a550dbae.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789351592736-c4903c88-a9c0-407e-8fa3-365b4e406d56.png)

| 组成部分 | 定义 | 作用 | 关键特性 |
| --- | --- | --- | --- |
| **Plaintext 明文** | **原始**可读数据；**未加密**内容 | 输入到加密算法中 | 不包含密钥；安全性完全依赖算法与密钥 |
| **Encryption Algorithm 加密算法** | 对明文进**行替换、置换、混淆**的数学**<font style="color:#2F4BDA;">函数</font>** | 根据密钥执行具体**加密**步骤 | **<font style="color:#2F4BDA;">算法公开；安全性来自密钥而非算法隐藏</font>** |
| **Secret Key 密钥** | 控制算法行为的二进制值 | 决定加密输出；同算法不同密钥 → 不同密文 | **必须保密**；独立于明文与算法；<br/>决定安全性 |
| **Ciphertext 密文** | 加密后的随机化输出 | 用于安全传输或存储 | 看起来随机；**无密钥无法理解**； |
| **Decryption Algorithm 解密算法** | 加密算法的逆过程 | 用密钥将密文还原成明文 | 必须与加密算法严格匹配；<br/>同密钥才能解密 |


###  Symmetric Cipher Model  对称加密模型  
 发送方和接收方使用同一个密钥 K 来加密与解密

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789351969729-a3958cae-45a6-426f-b378-a4b0e4c60b3b.png)

| **组件** | **作用** | **输入/输出** | **关键点** |
| --- | --- | --- | --- |
| **Plaintext 明文** | 原始可读数据 | 输入 X | 不安全；必须加密 |
| **Encryption Algorithm 加密算法** | 将明文转换为密文 | 输入：X, K；输出：Y | 算法公开；安全性来自密钥 |
| **Secret Key 密钥** | 控制加密与解密行为 | 输入到加密与解密算法 | 必须共享；必须保密；必须一致 |
| **Ciphertext 密文** | 加密后的随机化输出 | 输出 Y | 无密钥无法理解；可安全传输 |
| **Decryption Algorithm 解密算法** | 将密文还原为明文 | 输入：Y, K；输出：X | 必须使用同一个密钥 K |


#### <font style="color:rgb(0,0,0);">Traditional encryption algorithms are</font><font style="color:#2F4BDA;"> </font>**<font style="color:#2F4BDA;">private-key</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352142123-c30408f8-fc1c-4eb7-a22f-5831175459c9.png)

+ 发送方和接收方必须共享同一个密钥 K
+ 密钥必须通过 **<font style="color:#2F4BDA;">安全信道（Secure Channel）</font>** 传输
+ 如果密钥泄露 → 加密系统完全失效
+ 密钥管理是对称加密中最难的部分

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352379528-2b2988ca-c737-4ec6-a54b-c1d85c61741a.png)

1. 密钥不是一个“值”，而是一个 **选择器（selector）**。
2. 加密算法不是一个函数

加密算法 E 是一个 **函数族（family of functions）**：<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352494175-e3c95ba0-a6ef-419c-a6c9-ed0d4c7ffe7e.png)

每一个密钥 K 都对应一个不同的函数。

例如 AES-128：

+ 密钥空间 = 2¹²⁸
+ 也就是说 AES 有 **2¹²⁸ 个不同的函数**
+ 密钥 K 决定你选的是哪一个

如果加密是一个单独的函数：Y=E(X)

那就意味着：所有明文 X 都用同一个变换，所有密文 Y 都是固定的，没有密钥，所有人都能解密

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352652511-5434c159-7a6d-48bd-b583-b2566b5d2cbe.png)

+ 每个 K 对应一个不同的可逆变换  
+ **可逆（invertible）**意味着<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352721632-88341c81-3504-4ff7-8648-2d09b3c888d9.png)  
如果不可逆 → 无法解密 → 加密系统不可用。 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352789835-06f4f3d2-e947-4893-a64d-30bfb067fcba.png)

### Unconditional secure  VS  Computational secure  
+ **Unconditional secure（无条件安全）**： 不管攻击者有多少计算能力，都**无法**从密文推断出明文。
    -  One-Time Pad（一次一密）: 密文 C 对攻击者来说完全随机 -> 信息不足
        * 密钥长度 = 明文长度
        * 密钥完全随机
        * 密钥只使用一次
        * 密钥必须安全分发
+ **Computational secure（计算安全）**： 理论上能破解，但需要的计算量大到现实中不可能做到。
    - AES-128 brute-force → 2¹²⁸ 次尝试
    - AES-256 brute-force → 2²⁵⁶ 次尝试
    - RSA → 需要分解大整数
    - ECC → 需要解决离散对数问题

这些问题在数学上 **不是不可能**，只是 **太难**。

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789352978849-bfa421b1-1dae-483a-9b38-0290e8d2da09.png)

#### 【拓展】为什么现代密码都是 Computational secure？
因为：

+ 无条件安全（One-Time Pad）需要密钥长度 = 明文长度
+ 密钥必须完全随机
+ 密钥必须安全分发
+ 密钥只能使用一次

这在现实系统中几乎不可能做到。

所以现代密码学采用：

+ **计算安全（Computational secure）**
+ 依赖数学难题（复杂度理论）
+ 依赖足够大的密钥空间（2ⁿ）
