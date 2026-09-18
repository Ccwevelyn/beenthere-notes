---
title: Ch11_Session and Cookies
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/ch11_session-and-cookies.pdf
grade: year-2
semester: spring
course: web-design-development
date: 2026-09-18
order: 5
published: true
---
###### <font style="color:rgb(0,0,0);">What are Cookies? </font>
_**<font style="color:rgb(0,0,0);">HTTP Cookies</font>**_

+ <font style="color:rgb(0,0,0);">Small text files of data </font>**<font style="color:rgb(0,0,0);">created by a web server</font>**

**<font style="color:rgb(0,0,0);">Placed on the user's computer or other device</font>**<font style="color:rgb(0,0,0);"> by the user's web browser.</font>

+ <font style="color:rgb(0,0,0);">HTTP => </font>**<font style="color:#2F4BDA;">Stateless protocol</font>**

<font style="color:rgb(0,0,0);">When any </font><u><font style="color:rgb(0,0,0);">request is sent to the server,</font></u><font style="color:rgb(0,0,0);"> the server has no idea if the user is new or has visited the site before.</font>

          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745581690937-fd46f6fa-1f81-4623-8c93-ba6e254347f8.png)

###### WHY the need for cookies and session?
+ <font style="color:rgb(0,0,0);">All communication between web browsers and servers is via </font>**<font style="color:rgb(5,99,193);">HTTP</font>**<font style="color:rgb(0,0,0);">, which is </font>_<font style="color:rgb(0,0,255);">stateless</font>_
+ <font style="color:rgb(0,0,0);">Cookies and sessions allow you to store arbitrary data per browser to </font><u><font style="color:rgb(0,0,0);">keep track of the "state"</font></u><font style="color:rgb(0,0,0);"> between the site and a particular browser.</font>

###### HOW cookies work?
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745581846664-4e945c00-5253-43fd-8b17-1324fd401238.png)

1. **请求 (Request)**：当用户请求访问某个网站时，浏览器会向服务器发出请求以获取所需页面的内容。
2. **响应 + Cookie (Response + Cookie)**：服务器返回请求的页面内容，并可能附带一个或多个 **Cookie**。这些 Cookie 会被浏览器保存到持久缓存persistent broswer cache中。
3. **请求 + Cookie (Request + Cookie)**：之后，当浏览器再次向<u>同一服务器</u>发出请求时，会**自动附带之前存储的相关 Cookie**。服务器利用这些 Cookie 信息来理解请求的上下文并提供更适配的响应。=> <font style="color:rgb(0,0,0);">The server can then interpret the cookies as part of the request's context and generate a response to suit. </font>

这个过程会在每次浏览器发出新请求时重复，直到 Cookie 到期或浏览器删除Cookie。=>  <font style="color:rgb(0,0,0);">The browser repeats the process until the </font>**<font style="color:rgb(0,0,0);">cookie expires </font>**<font style="color:rgb(0,0,0);">or the </font>**<font style="color:rgb(0,0,0);">session is closed</font>**<font style="color:rgb(0,0,0);"> and the </font>**<font style="color:rgb(0,0,0);">cookie is deleted </font>**<font style="color:rgb(0,0,0);">by the browser itself</font>

<font style="color:rgb(0,0,0);">eg. the duration of the cookie -> how long you automatically logout</font>

                <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745582398743-ac9399b9-d864-4b58-871d-e242820e0d59.png)

###### <font style="color:rgb(0,0,0);">Shortcomings of using Cookies </font>
+ **敏感信息的传递风险**：将用户的敏感信息（例如信用卡号）作为 Cookie 的形式在电子商务网站上传递，是非常不明智的设计。这种行为可能导致安全漏洞，给恶意程序拦截 Cookie 创造机会。
+ **信息泄露的后果**：一旦 Cookie 被恶意程序窃取，黑客可能会利用其获取用户的敏感信息，比如信用卡号。这表明，如果网络应用的设计存在根本性缺陷，用户的信息安全将面临巨大风险。

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745582465675-722a569b-817c-4d60-9784-3bda6e1c915a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745582586971-5afb0c7e-aa16-47c3-8ee6-1f8146bb2d11.png)

###### <font style="color:rgb(0,0,0);">Django Cookies and Cookies Handling </font>
Cookies - 服务器分配给客户端，即服务器通过 HTTP 响应中的 `Set-Cookie` 头将 Cookie 发送到浏览器，浏览器再在随后的请求中携带这些 Cookie 。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745582623467-fb4a315b-b4e7-4e52-ba21-6a4385d41eab.png)

上述内容是客户端操作Cookie的流程=>如何通过代码在客户端 读取、检查、更新和删除 Cookies。

+ **读取 Cookies**：通过 `request.COOKIES` 获取 Cookie 的值，用于检查客户端是否已存储某个特定的 Cookie。
+ **设置和更新 Cookies**：通过 `response.set_cookie` 方法在生成的 HTTP 响应中附加新的 Cookie。
+ **删除 Cookies**：通过 `response.delete_cookie` 从客户端删除特定的 Cookie。

**用户更新cookie？**=> Cookies存储在用户浏览器，浏览器可以通过用户端脚本（如JavaScript）来操作这些 Cookies => 某些短期存储的数据可以直接由客户端更新，从而减少对服务器的依赖，降低服务器负载./ 但是这种能力虽然提升了灵活性，也带来了安全隐患。=> 开发者经常通过设置 **HttpOnly** 和 **Secure** 属性来限制 Cookie 的访问权限，避免被客户端脚本随意更改。  

+ **Name（名称）**：每个 Cookie 都有一个名称，通常称为 `key`，它是用来标识该 Cookie 的唯一标识符。  
+ **Value（值）**：与名称相关联的数据。例如，一个 `session_id` Cookie 的值可能是服务器生成的会话标识符。  

---

###### <font style="color:rgb(0,0,0);">Session</font>
_**Sensitive information - save in server**_

但是 less important things 还是存储在cookie中，因为如果所有东西都存储在了server，对于服务器来说压力很大的。

<font style="color:rgb(0,0,0);">since </font>**<font style="color:rgb(0,0,0);">cookies</font>**<font style="color:rgb(0,0,0);"> are </font>**<u><font style="color:rgb(0,0,0);">stored locally</font></u>**<font style="color:rgb(0,0,0);">, and those cookies which are not sent over </font><font style="color:rgb(0,0,255);">HTTPS </font><font style="color:rgb(0,0,0);">can be </font>_<font style="color:rgb(0,0,0);">easily caught by attackers</font>_<font style="color:rgb(0,0,0);">. => DANGEROUS</font>

###### <font style="color:rgb(0,0,0);">Using Django sessions</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745583551142-84e31da9-e4bd-4a87-b9d5-750e32274e5d.png)

_ _要使用会话，需确保项目的 `MIDDLEWARE` 设置包含 `'django.contrib.sessions.middleware.SessionMiddleware'`（在使用 `startproject` 命令创建新项目时，默认已添加）。  

+ Session： 数据存储在**服务器端**，而客户端通常只保存一个 `Session ID`（通常通过 Cookie 存储）  

<u>Session 是基于 Cookie 的</u>

1. **服务器生成 Session**：当用户首次访问网站时，服务器会创建一个 Session，并分配唯一的 Session ID。
2. **Session ID 存储在 Cookie 中**：服务器通过 HTTP 响应将这个 Session ID 保存到客户端的 Cookie 中。
3. **会话维持**：在后续请求中，浏览器会自动携带该 Session ID（存储在 Cookie 中），服务器根据这个 ID 来识别用户的会话并提供对应的数据。

---

+ **Cookie 适合存储不敏感信息**：例如偏好设置、非关键状态。
    - eg.  用户偏好（例如网站的语言设置 `lang=en`）直接存储在 Cookie 中，无需每次访问都请求服务器。  
+ **Session 适合处理敏感信息**：例如用户登录状态、账户权限管理。
    - eg. 登录网站后，服务器通过 Session 保存用户的身份信息。客户端只携带 Session ID，服务器根据该 ID 返回登录用户的相关数据。  

| **特性** | **Session** | **Cookie** |
| --- | --- | --- |
| **存储位置** | 服务器端（数据存储） | 客户端（浏览器） |
| **敏感数据存储** | 更安全，数据由服务器管理 | 较不安全，需要额外保护 |
| **生命周期** | 通常是临时的，随着会话结束清除 | 可长期存储，设置有效期 |
| **数据容量限制** | 受服务器存储能力限制 | 每个 Cookie 通常最大为 4KB |
| **适用场景** | 登录状态、认证信息 | 用户偏好、非关键状态信息 |


---

**Cookie 的作用**

Cookie 是一种轻量化的客户端存储工具，适合用来传递少量信息，例如：

1. **会话标识符**：Cookie 存储的是服务器分配的 Session ID（例如 `session_id=123abc`），这个 ID 是服务器端会话数据的索引。客户端通过 Cookie 发送这个 Session ID，服务器端会根据 Session ID 查询并管理会话数据。
2. **非敏感数据**：Cookie 可以存储一些简单的用户偏好设置（例如语言或主题颜色），这些信息通常不需要与服务器交互。

 完全基于 Cookie 的会话（即所有会话数据都直接存储在 Cookie 中）  

包括敏感信息...

---

###### Middleware
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745584503841-80373fbb-2791-423d-a055-bba054290e64.png)

Middleware 是 Django 中的一种框架，用于挂钩（hook）到请求和响应的处理过程中。

<details class="lake-collapse"><summary id="u5102c46b"><span class="ne-text">代码</span></summary><p id="u6f5d0de9" class="ne-p"><code class="ne-code"><span class="ne-text" style="font-size: 12px">SecurityMiddleware</span></code><span class="ne-text" style="font-size: 12px">：提供安全相关的改进，例如 HSTS（HTTP 严格传输安全）。</span></p><p id="u181955e0" class="ne-p"><code class="ne-code"><span class="ne-text" style="font-size: 12px">SessionMiddleware</span></code><span class="ne-text" style="font-size: 12px">：启用会话支持，管理与用户的交互状态。</span></p><p id="u7d8342a6" class="ne-p"><code class="ne-code"><span class="ne-text" style="font-size: 12px">CommonMiddleware</span></code><span class="ne-text" style="font-size: 12px">：处理一些通用功能，例如 URL 正规化和隐藏不必要的 404 错误。</span></p><p id="uc0b75551" class="ne-p"><code class="ne-code"><strong><span class="ne-text" style="font-size: 12px">CsrfViewMiddleware</span></strong></code><strong><span class="ne-text" style="font-size: 12px">：保护应用免受跨站请求伪造（CSRF）攻击。/ 验证隐藏表单字段中的 CSRF 令牌，确保请求合法性。  </span></strong></p><p id="u175bbbbc" class="ne-p"><code class="ne-code"><strong><span class="ne-text" style="font-size: 12px">AuthenticationMiddleware</span></strong></code><strong><span class="ne-text" style="font-size: 12px">：通过会话将用户与请求关联起来。</span></strong></p><p id="u445602de" class="ne-p"><code class="ne-code"><span class="ne-text" style="font-size: 12px">MessageMiddleware</span></code><span class="ne-text" style="font-size: 12px">：支持消息框架，例如显示通知。</span></p><p id="ud5568ba0" class="ne-p"><code class="ne-code"><span class="ne-text" style="font-size: 12px">XFrameOptionsMiddleware</span></code><span class="ne-text" style="font-size: 12px">：添加 HTTP 头，防止点击劫持。</span></p></details>
Middleware 是 Django 的一个处理链，它把<u>每个请求和响应包装起来</u>。它可以在以下阶段运行逻辑：

1. **请求处理**：在请求到达视图之前，中间件可以对请求进行预处理。例如，检查用户认证状态或过滤请求头。
2. **响应处理**：在视图返回响应之后，中间件可以修改或增强响应，例如添加安全性标头或处理跨域问题。



**请求处理流程**

1. **用户发起请求**：用户的浏览器或客户端**通过 HTTP 协议**<u>向服务器发送请求</u>，例如_访问网站某个页面或提交表单_。
2. **Django 接收请求**：服务器（通常是运行 Django 的 Web 服务器，如WSGI）接收这个请求并传递给 Django。
3. **Middleware 预处理请求**：
    - 请求在进入具体的视图函数之前，会经过 Django 项目中定义的一系列 Middleware。这些 Middleware 按顺序执行，可以对请求进行预处理，比如：
        * 验证请求的合法性（如 CSRF 验证）。
        * 修改或添加请求的属性（如添加用户认证信息）。
        * 规范化请求路径（如处理尾部斜杠）。
    - 如果 Middleware 发现某些问题（例如无权限访问），可以直接拦截请求并返回响应，而不进入视图函数。
4. **请求到达视图函数**：只有在所有 Middleware 执行完毕后，请求才会到达视图函数，视图根据具体的业务逻辑生成响应。



**Middleware 在这一阶段的作用**

Middleware 的核心作用是“拦截”和“过滤”请求，以确保视图函数只处理合法且经过规范化的请求。例如：

+ **身份验证**：检查请求是否包含有效的用户身份凭据。
+ **安全性处理**：阻止跨站请求伪造攻击或恶意访问。
+ **全局行为设置**：为整个项目的请求统一添加特定的处理逻辑（如安全标头）。

---

| **特性** | **Session** | **Cookie** |
| --- | --- | --- |
| **存储位置** | 服务器端 | 客户端（浏览器） |
| **需要 Middleware 的原因** | 需要 Middleware 解析和加载服务器端的会话数据 | 浏览器自动处理，无需服务器端解析 |
| **主要作用** | 提供安全的、动态的会话数据存储 | 存储轻量、非敏感的客户端状态数据 |


**Session** 是由**服务器端**管理的机制，因此需要**中间件**来帮助处理会话数据的加载与保存。

而 **Cookie** 是由**浏览器**管理的客户端机制，**无需**服务器端的额外支持即可直接使用。--  Cookie 的生命周期、路径、域等属性直接由客户端浏览器管理，服务器只需简单地创建或读取它们。 

<details class="lake-collapse"><summary id="u6cec4f30"><span class="ne-text">为什么Session需要Middleware？</span></summary><ol class="ne-ol"><li id="u3c42a273" data-lake-index-type="0"><strong><span class="ne-text">Session 是服务器端的机制</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u1c1f2561" data-lake-index-type="0"><span class="ne-text">Session 的核心是通过唯一的 </span><code class="ne-code"><span class="ne-text">Session ID</span></code><span class="ne-text"> 将客户端与服务器端的会话数据关联起来。</span></li><li id="u60e44e8e" data-lake-index-type="0"><strong><span class="ne-text">数据存储在服务器端</span></strong><span class="ne-text">，需要一个机制将客户端发来的 </span><code class="ne-code"><span class="ne-text">Session ID</span></code><span class="ne-text"> 与服务器端的存储数据（例如数据库中的会话记录）进行匹配。</span></li></ul></ul><ol start="2" class="ne-ol"><li id="ud233ad21" data-lake-index-type="0"><strong><span class="ne-text">Middleware 的作用</span></strong><span class="ne-text">：</span></li></ol><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u16dbdea9" data-lake-index-type="0"><span class="ne-text">SessionMiddleware 是 Django 中负责处理会话的中间件。</span></li><li id="u555d329b" data-lake-index-type="0"><strong><span class="ne-text">具体作用</span></strong><span class="ne-text">：</span></li></ul></ul><ol class="ne-list-wrap"><ol class="ne-list-wrap"><ol ne-level="2" class="ne-ol"><li id="uc052cf38" data-lake-index-type="0"><strong><span class="ne-text">解析 Cookie 中的 Session ID</span></strong><span class="ne-text">：它会从客户端发来的 Cookie 中提取 </span><code class="ne-code"><span class="ne-text">Session ID</span></code><span class="ne-text">。</span></li><li id="u3ae1e110" data-lake-index-type="0"><strong><span class="ne-text">加载会话数据</span></strong><span class="ne-text">：根据这个 ID，从服务器端会话存储（如数据库、缓存）中加载对应的数据，并将它挂载到请求对象的 </span><code class="ne-code"><span class="ne-text">request.session</span></code><span class="ne-text"> 属性上。</span></li><li id="u8dc2248e" data-lake-index-type="0"><strong><span class="ne-text">保存会话数据</span></strong><span class="ne-text">：当视图完成处理后，Middleware 会将任何修改过的会话数据写回服务器端存储。</span></li></ol></ol></ol><p id="u1a9de71c" class="ne-p"><strong><span class="ne-text">没有 Middleware 的问题</span></strong><span class="ne-text">：</span></p><ul class="ne-list-wrap"><ul ne-level="1" class="ne-ul"><li id="u0618fa66" data-lake-index-type="0"><span class="ne-text">如果没有 Middleware，Django 无法自动加载和保存服务器端的会话数据。开发者需要手动处理这些过程，这会增加复杂性。</span></li></ul></ul></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745585606041-4ca01849-533c-47d2-947d-4e64a0a04afd.png)

**Middleware 的运行过程**

1. **请求周期（Request Cycle）**：
    - **自上而下执行**：当用户的 HTTP 请求进入 Django 时，Middleware 按照定义顺序依次执行。
    - 每个 Middleware 会调用其 `process_request()` 方法，预处理请求。例如：
        * 验证用户的身份。
        * 规范化请求路径。
        * 检查请求的合法性（如 CSRF 验证）。
    - 在视图函数执行之前，还可能调用 `process_view()` 方法，以便根据视图的具体内容进一步操作。
2. **视图处理阶段**：
    - 视图函数处理请求，例如查询数据库、分页结果、返回页面内容等。
    - 视图完成后生成一个响应对象，进入响应周期。
3. **响应周期（Response Cycle）**：
    - **自下而上执行**：响应返回时，Middleware 按定义的逆序依次执行。
    - 每个 Middleware 会调用其 `process_exception()` 方法处理视图函数可能抛出的异常，或调用 `process_template_response()` 方法对模板响应进行处理。
    - 最后，Middleware 调用 `process_response()` 方法，对最终的响应进行修改。例如：
        * 添加安全性 HTTP 标头（如 `X-Frame-Options`）。
        * 设置 Cookies 或自定义响应头。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745585728988-6e94f680-be78-449b-9c84-92feb1dfbbe5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745585782662-94aa27e2-72cf-497a-ac14-43393bd5b933.png)

**会话存储引擎的类型**

1. **数据库会话 (Database Sessions)**：
    - **默认引擎**：会话数据存储在**数据库**中，使用 Django 提供的 `django.contrib.sessions.models.Session` 模型。
    - **适用场景**：适合需要可靠存储和长时间保留会话数据的场景。
2. **基于文件的会话 (File-Based Sessions)**：
    - 将会话数据存储在服务器的**文件系统**中。
    - 配置方法：将 `SESSION_ENGINE` 设置为 `django.contrib.sessions.backends.file`。
    - **优点**：实现简单，适合小型项目。
3. **基于缓存的会话 (Cached Sessions)**：
    - 会话数据存储在缓存中，例如 Redis 或 Memcached。
    - 配置缓存的方式通过 `CACHES` 设置。
    - **优点**：提供最快的性能，适用于需要高频率访问会话的应用。
4. **缓存 + 数据库会话 (Cached Database Sessions)**：
    - 会话数据采用缓存和数据库结合的方式，缓存负责快速读写，数据库作为回退机制（write-through 模式）。
    - **适用场景**：需要性能与持久性兼顾的场景。
5. **基于 Cookie 的会话 (Cookie-Based Sessions)**：
    - 将会话数据直接存储在客户端的 Cookie 中。
    - 配置方法：将 `SESSION_ENGINE` 设置为 `django.contrib.sessions.backends.signed_cookies`。
    - **优点**：不需要服务器端存储，适合没有敏感数据的小型项目。
    - **注意**：需要对 Cookie 数据进行签名和加密，确保数据安全。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745586118448-c77e05d7-9d1c-4271-bced-996a7fcb0580.png)

！我们可以直接通过request.session访问和操作会话数据，是因为会话管理自动由中间件完成。虽然开发者无需直接处理底层中间件的逻辑，但它在幕后发挥了重要作用。

 **<u>SessionMiddleware</u>**  

+ **解析 Cookie**：从客户端发送的请求中提取 `Session ID`（存储在 Cookie 中）。
+ **加载会话数据**：根据 `Session ID` 从服务器端的存储引擎（例如数据库、缓存）中加载对应的会话数据。
+ **挂载到请求对象**：将会话数据加载到 `request.session` 中，供视图或其他组件使用。
+ **保存修改**：如果会话数据被修改（例如添加或删除变量），中间件会在响应阶段将这些更新写回存储引擎。
+ <u>中间件负责所有与会话存储相关的操作，开发者只需使用 </u>`<u>request.session</u>`<u> 访问数据</u>
+ 开发者无需直接管理会话存储引擎或手动处理 Session ID。

```python
request.session['foo'] = 'bar'
```

通过 `request.session`，像操作 Python 字典一样存储数据。

注意，这与设置 Cookie 不同，不需要通过响应来设置。

```python
request.session.get('foo')
```

使用 `.get()` 方法获取会话中的数据，避免变量不存在时抛出异常。

```python
del request.session['foo']
```

删除已存储的会话变量，就像从字典中移除键值对一样。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745586509691-6546b79f-bb81-40e6-bace-2fd2f445f7cc.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745586551742-b807cfd9-4af5-4527-9ea3-45ab66aed51a.png)

**SESSION_EXPIRE_AT_BROWSER_CLOSE = True**:

+ 会话将在浏览器关闭时立即过期，无论 `SESSION_COOKIE_AGE` 设置了什么值。
+ 适合需要较高安全性的场景，例如银行网站或敏感数据的应用。

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745586799431-d18d5bd3-c5b2-40fa-86c9-f0b95839985b.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1745586671327-cf176a4d-34da-44b7-b2d4-a061c775c4d4.png)

**HttpOnly 属性的功能**

1. **不可访问性**：
    - 启用了 **HttpOnly** 属性的 Cookie 无法通过 JavaScript 的 `document.cookie` API 访问。
    - 它仅在客户端与服务器之间的 HTTP 请求中传递，确保 Cookie 数据对浏览器脚本不可见。
2. **应用场景**：
    - 适用于服务器端会话的持久化 Cookie（例如会话标识符），因为这些数据通常不需要被客户端直接访问。
    - 对于此类 Cookie，使用 HttpOnly 属性可以防止未经授权的 JavaScript 代码访问它们。
3. **安全性**：
    - HttpOnly 是防止 **跨站脚本攻击（XSS）** 的关键措施之一。即使恶意脚本注入了页面，也无法通过脚本访问带有 HttpOnly 属性的 Cookie。

**Django 的默认设置**

+ `SESSION_COOKIE_HTTPONLY`：
    - 在 Django 中，与会话相关的 Cookie 默认启用了 HttpOnly 属性。
    - 默认值为 **True**，确保会话标识符不会被客户端脚本获取，从而增强会话数据的安全性。

