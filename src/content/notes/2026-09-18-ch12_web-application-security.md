---
title: Ch12_Web Application Security
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/ch12_web-application-security.pdf
grade: year-2
semester: spring
course: web-design-development
date: 2026-09-18
order: 6
published: true
---
**<u>OBJECT</u>****：**

> 1. XSS
> 2. CSRF
> 3. SQL injection
> 4. Transport Layer Security
>

<font style="color:rgb(0,0,0);">Overview of </font><u><font style="color:rgb(0,0,0);">Django's security features</font></u><font style="color:rgb(0,0,0);"> and </font><u><font style="color:rgb(0,0,0);">advice</font></u><font style="color:rgb(0,0,0);"> on securing a Django powered site.</font>

###### **<font style="color:rgb(0,0,0);">Cross Site Scripting (XSS) 跨站脚本攻击</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745544093582-355b1a8c-d56c-4356-bae6-7bf240e46d3a.png)

**跨站脚本攻击** 是一种出现在 Web 应用中的安全漏洞，通常由于应用程序未能正确地转义用户提交的内容，导致恶意的 HTML 或脚本代码（如 `<script>` 标签）被注入到页面中并在其他用户的浏览器中执行。  

+ 在用户的浏览器中执行任意代码，破坏用户体验甚至导致数据泄露。
+ 攻击者可以通过 XSS **窃取用户的 cookie 和会话信息**，进而伪装成合法用户。
+ 通过诱导用户访问伪装的页面进行 **钓鱼（Phishing）**，从而获取用户的私密信息。
+ 如果恶意脚本被存储到数据库中，并在其他用户访问页面时重新显示，就会触发跨站脚本攻击。攻击者的脚本可能会被执行，导致用户的浏览器受到威胁。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745545059821-d213eed1-a946-49e2-90a0-7d018f691b7c.png)

< Django templates protects you against the majority of XSS attacks. >

+  Django 模板会自动对特定的危险字符进行转义  

 例如，将 `<` 转义为 `&lt;`，将 `>` 转义为 `&gt;`=> 即便用户提交了危险的标签，页面只会显示转移后的字符，不会真正执行脚本。

---

###### **<font style="color:rgb(0,0,0);">Cross Site Request Forgery (CSRF) 跨站请求伪造攻击</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745545444168-259f5f84-2847-4689-b81f-c68778f18928.png)

**跨站请求伪造（CSRF）** 是一种利用用户身份认证进行恶意操作的攻击类型  

**<u>攻击者</u>**

攻击者会创建一个恶意链接或伪造的网站，这个网站包含特定的代码或请求。

当用户点击这个链接或访问伪造网站时，该代码会自动触发并向合法网站发送请求。

这些请求通常是伪装的，不会引起用户的注意，但会利用用户已经登录合法网站的认证信息（如 cookie）

**<u>用户</u>**

用户通常处于登录状态，并且浏览器中保存了该合法网站的凭证（例如身份验证 cookie 或会话令牌）。

攻击者设计的恶意请求会在用户不知情的情况下自动发送，借助这些凭证让合法网站认为请求来自用户本人。

攻击者可以利用 CSRF 技术代替用户在网站上执行操作，例如：

+ 创建额外的博客帖子。
+ 更严重的情况是，攻击者伪造请求转移资金到自己的账户。

< Django has built-in protection against it >

+ Django 在每个 POST 请求中检查一个 **nonce（一次性随机值）**。
+ 这个随机值嵌入到表单中，确保<u>每次请求都带有唯一的验证标识</u>。
+ 恶意用户无法简单地重放表单 POST 请求来冒充合法用户，因为他们无法获得正确的 nonce 值。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745546028251-0d329761-3149-4e65-9eb7-9e88742dced8.png)

+ 攻击者创建了一个 HTML 文件，该文件包含一个博客文章创建表单。
+ 文件中的表单会在加载时自动提交 (`<body onload='document.EvilForm.submit()'>`)。
+ 如果用户已经登录到目标网站并打开了这个文件，攻击者的表单会利用用户的凭证提交请求，创建新的博客文章。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745547668964-13dba2f6-e9ce-4649-b547-7dd6e12193a5.png)

当你尝试提交 HTML 表单（如之前图片中的恶意表单）时，Django 默认会检测请求的合法性。

如果请求未携带有效的 **CSRF Token**，Django 会返回 **403 Forbidden（请求被拒绝）** 错误

+ Django 在 POST 表单提交时要求附带唯一的 **CSRF Token**，以确保请求的来源是可信的。
+ 如果没有这个 Token，或者 Token 无效，则可能是 CSRF 攻击或表单配置错误，Django 会自动拒绝请求。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745547726900-faaa8d70-a1df-4cd7-8abb-5cbfa3f3a2c2.png)

 Django 通过模板标签 `{% csrf_token %}` 在表单中嵌入一个唯一的安全令牌。

 此令牌与用户和浏览器绑定，具有唯一性，确保每次提交的表单都来自合法来源。

 通过将 `CSRF_COOKIE_SECURE` 设置为 True，令 CSRF Cookie 仅在 HTTPS 连接中传输，进一步增强安全性。  

---

###### **<font style="color:rgb(0,0,0);">SQL injection</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745547965570-a4eec71c-dd02-45e8-a1bc-86ca224bc64d.png)

leakage - 泄露

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745548222506-4d920113-b9b1-411d-8895-39e296349cc6.png)

**SQL 注入** 是一种常见的安全漏洞，发生在<u>通过用户输入</u>**动态构建 SQL 查询**时  

攻击者通过注入恶意的 SQL 代码，可能获取未授权的数据或操控数据库。  

_**示例：**_

```python
def user_contacts(request):
    user = request.GET['username']
    sql = "SELECT * FROM user_contacts WHERE username = '%s';" % username
    # execute the SQL here...
```

**工作原理**：从用户输入中接收用户名，并将其直接拼接到 SQL 查询中。

**漏洞**：如果用户输入恶意数据，SQL 查询的结构会被破坏，可能导致数据泄露。

+ 攻击者输入：

```python
' OR 'a'='a
```

+ 生成的 SQL 语句为：

```python
SELECT * FROM user_contacts WHERE username = '' OR 'a' = 'a';
```

+ **问题**：因为条件 `'a' = 'a'` 总为真，查询结果会返回所有行，而不仅是目标用户的数据。

           <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745548506293-b011d6db-4916-4fcb-b23b-62d104b9a556.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745548576865-22cb4bd5-b246-4caa-8e96-f2407e9628c9.png)

！永远不要信任用户提交的数据。当这些数据需要传递到 SQL 查询时，应确保对它们进行正确的转义（escaping），以避免攻击者通过注入恶意 SQL 代码获取或篡改数据。  

使用 Django 的 **QuerySets** 来构建查询：

+ Django 的 QuerySets 会自动对用户输入的数据进行正确的转义，确保生成的 SQL 语句是安全的。

Django 支持开发者编写原始 SQL 查询或执行自定义 SQL。

+ 这些功能应谨慎使用，尤其是在涉及用户输入时，开发者必须确保对所有用户控制的参数进行严格的转义和验证，以避免潜在的安全风险。

---

###### T**<font style="color:rgb(0,0,0);">ransport Layer Security </font>**<font style="color:rgb(0,0,0);">(</font>**<font style="color:rgb(0,0,0);">TLS</font>**<font style="color:rgb(0,0,0);">)</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745548793155-d25bb5ee-7991-4e6e-a131-ec585e083cb2.png)

**TLS 是什么？**

+ TLS 是一种加密**协议**，旨在为计算机网络上的通信提供安全保障。
+ 它被广泛用于 HTTPS，保护网页浏览过程中数据的私密性和安全性。

**TLS 的安全目标**：

+ **隐私（Confidentiality）**：通过加密算法对数据进行加密，确保数据在传输过程中不可被窃听或解读。
+ **完整性（Integrity）**：防止数据在传输过程中被篡改。
+ **真实性（Authenticity）**：通过数字证书验证通信双方的身份，确保与合法服务器通信

**与 SSL 的关系**：

+ TLS 是 SSL（安全套接层协议）的继承者，SSL 已被废弃，现代安全通信中通常使用 TLS。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745548966807-4684b1e3-d2a0-440c-aba9-65db3ff31dbd.png)

TLS 使用 **X.509 数字证书** 将网站的身份与 **加密密钥对** 绑定。

+ **密钥对** 包含：
    - **私钥**：由所有者保密。
    - **公钥**：广泛分发，通常通过证书传递。
+ 公钥和私钥具有数学上的特殊关系：
    - 使用公钥加密的消息只能通过私钥解密。
    - 私钥也可以用来对数字文件（如网页）进行签名，公钥验证签名的真实性。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745549108433-3d4521e3-bf8f-4fd6-9800-264de9f92474.png)

HTTPS 是 **HTTP（超文本传输协议）** 的安全版本，使用 **TLS（传输层安全协议）** 来加密网络通信。

当一个网站通过 HTTPS 保护时，你会在浏览器的地址栏中看到 `https://` 开头，旁边还有一个锁状图标。  

**HTTPS 的工作机制**

+ **数字证书**：
    - HTTPS 网站会使用 **数字证书（例如 X.509 证书）** 来绑定网站身份。
    - 证书中包含网站的所有者信息（例如公司名称）及颁发机构的信息。
    - 浏览器用户可以点击地址栏的锁状图标，查看这些证书细节。
+ **私钥和公钥**：
    - 网站拥有与证书绑定的 **私钥** 和 **公钥**。
    - 公钥可以被公开，用于加密消息，而私钥则仅由网站保管，用于解密或签名，确保数据安全。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745549240515-2a79f19b-440f-4261-8d36-480f961f3dbd.png)

**↑ 暴露错误消息（Exposed Error Messages）** 的重要性 以及 Django 如何在开发和生产环境中处理这些问题。  

**1. 开发阶段的错误处理**

**实时调试**：在开发环境中，Django 会将错误详情（包括回溯信息、错误类型等）直接显示在浏览器中。

    - **好处**：开发者可以立即看到错误的原因，有助于快速调试。
    - **风险**：这些详细的错误信息如果在生产环境中暴露，可能会泄露代码或配置细节，给攻击者带来可乘之机。

**2. 生产阶段的错误处理**

生产环境中，**绝不能让网站访问者看到与应用相关的错误消息**。

    - **风险**：暴露的错误信息可能包含敏感的系统配置（如数据库路径、API 密钥），为攻击者提供了入侵的线索。
    - **解决方案**：在生产环境下，Django 默认隐藏这些错误消息，并仅记录错误日志供开发者查看。

**3. 使用 DEBUG 设置**

+ **DEBUG = True（开发环境）**：错误详情会显示在浏览器中，供开发者调试。
+ **DEBUG = False（生产环境）**：
    - 错误消息不会直接暴露。
    - 应该配置一个自定义的错误页面（如 404 或 500 页面），以提升用户体验，同时避免信息泄露。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745549406181-d3fa3b0e-4118-41e9-a477-3447d5e23f11.png)

**Django 管理面板的安全强化（Admin Hardening）**

默认情况下，Django 的管理面板地址是 `/admin`，这是攻击者通常首先尝试访问的入口。

建议开发者更改此默认路径，例如

```python
path('custom-admin/', admin.site.urls)
```

这样可以降低被恶意扫描工具发现的风险。

**使用第三方工具增强安全性**

+ **django-admin-honeypot**：
    - 该工具可以生成一个假的 admin 登录页面，吸引攻击者。
    - 当有人尝试访问伪造的登录页面时，站点管理员会收到攻击者的 IP 地址，并可以将其加入黑名单。
+ **django-two-factor-auth**：
    - 通过启用双因素认证（2FA），为 admin 登录增加额外的安全层，例如需要输入动态验证码。

