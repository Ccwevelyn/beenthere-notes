---
title: Chapter2 Intro
description: ""
type: note
attachments:
  - label: PDF
    file: /uploads/chapter2-intro.pdf
grade: year-2
semester: spring
course: web-design-development
date: 2026-09-18
order: 1
published: true
---
# Introduction to Web Application Development Technologies
### 一、Framework
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459475978-4ccb8b0f-f47a-4f66-8725-97c1b93f8a95.png)

 A framework is a big **library** or group of libraries that **provides many services.**

 框架是预先编写的代码库或模板，开发人员使用它们来更**高效**地构建Web应用程序。提供了现成的代码、库和功能，减少了重复劳动。

##### _**<font style="color:rgb(0,0,0);">Examples: </font>**_
:::color3
<font style="color:rgb(0,176,80);">• Django </font><font style="color:rgb(0,0,0);">- a full-stack server-side web application framework built using </font><font style="color:rgb(0,0,255);">python </font>

<font style="color:rgb(0,176,80);">• Ruby on Rails </font><font style="color:rgb(0,0,0);">- a full-stack server-side web application framework built using </font><font style="color:rgb(0,0,255);">ruby </font>

<font style="color:rgb(0,176,80);">• Laravel </font>**<font style="color:rgb(0,0,0);">- </font>**<font style="color:rgb(0,0,0);">a free, open-source </font><font style="color:rgb(0,0,255);">PHP </font><font style="color:rgb(0,0,0);">web framework, following the model–view– controller (MVC) architectural pattern. </font>

<font style="color:rgb(0,176,80);">• ASP.NET </font>**<font style="color:rgb(0,0,0);">– </font>**<font style="color:rgb(0,0,0);">a server-side web application framework developed by </font>**<font style="color:rgb(0,0,255);">Microsoft</font>****<font style="color:rgb(0,0,0);">. </font>**

<font style="color:rgb(0,176,80);">• Bootstrap </font><font style="color:rgb(0,0,0);">- a free and open-source CSS framework directed at responsive, mobile-first front-end web development with </font><font style="color:rgb(0,0,255);">HTML, CSS and Javascript</font>

:::

<details class="lake-collapse"><summary id="ufeabbefe"><span class="ne-text" style="font-size: 14px">解释</span></summary><p id="u4907d37a" class="ne-p"><span class="ne-text" style="color: rgb(0,176,80); font-size: 14px">Django </span><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">- a full-stack server-side web application framework built using </span><span class="ne-text" style="color: rgb(0,0,255); font-size: 14px">python </span></p><p id="uc87245b6" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px"> 	一个</span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">基于Python构建</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">的</span><strong><span class="ne-text" style="color: rgb(0,0,0); background-color: #FBDE28; font-size: 14px">全栈</span></strong><strong><span class="ne-text" style="color: #DF2A3F; font-size: 14px">服务器端</span></strong><span class="ne-text" style="color: rgb(0,0,0); text-decoration: underline; font-size: 14px">Web应用程序框架</span><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">。Django强调快速开发和干净、实用的设计。</span><span class="ne-text" style="color: rgb(0,0,255); font-size: 14px">  </span></p><ol class="ne-ol"><li id="u93f317e1" data-lake-index-type="0"><em><span class="ne-text" style="font-size: 14px">基于Python构建</span></em><span class="ne-text" style="font-size: 14px">：Python开发。</span></li><li id="uf86546f9" data-lake-index-type="0"><em><span class="ne-text" style="font-size: 14px">全栈</span></em><span class="ne-text" style="font-size: 14px">：从前端到后端所有开发任务。</span></li></ol><ol class="ne-list-wrap"><ol ne-level="1" class="ne-ol"><li id="u7b2171d9" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">前端：用户界面、用户体验</span></li><li id="u94beb687" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">后端：服务器端逻辑、数据库管理...</span></li></ol></ol><ol start="3" class="ne-ol"><li id="ua9701b5c" data-lake-index-type="0"><em><span class="ne-text" style="font-size: 14px">服务器端</span></em><span class="ne-text" style="font-size: 14px">：指在服务器上运行的代码和逻辑，一般用于处理数据请求、存储数据以及执行业务逻辑。</span></li><li id="ub2fb8182" data-lake-index-type="0"><span class="ne-text" style="font-size: 14px">应用程序框架： 预先编写的代码库和工具，提供了应用程序开发的基础结构  </span></li></ol><p id="uf522645e" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739278609394-990b514e-84bb-4922-b10f-9346ceb3f354.png" width="777.0370919289124" title="" crop="0,0,1,1" id="u5ddbed4c" class="ne-image"></p><p id="u03806d5e" class="ne-p"><strong><span class="ne-text">网页中的内容如何在浏览器中显示？</span></strong></p><h6 id="qZ1JP"><span class="ne-text">网页加载过程</span></h6><ol class="ne-ol"><li id="u86841977" data-lake-index-type="0"><strong><span class="ne-text">请求网页</span></strong><span class="ne-text">：当用户点击一个链接或输入一个URL时，浏览器会向相应的Web服务器发送一个HTTP请求。这请求是由用户的设备（客户端）发出的。</span></li><li id="u70fa26a7" data-lake-index-type="0"><strong><span class="ne-text">服务器响应</span></strong><span class="ne-text">：Web服务器接收到请求后，会处理该请求，并返回相应的网页内容。这个内容通常是HTML文件，以及可能包含的CSS、JavaScript、图片等资源。</span></li><li id="u9fc48144" data-lake-index-type="0"><strong><span class="ne-text">浏览器解析和渲染</span></strong><span class="ne-text">：浏览器接收到服务器返回的内容后，会解析HTML文件，并通过CSS进行样式设置，使用JavaScript执行客户端逻辑，最终在用户的设备上渲染出网页。</span></li></ol><h6 id="hw6ef"><span class="ne-text">浏览器的作用</span></h6><ul class="ne-ul"><li id="u6bd39866" data-lake-index-type="0"><strong><span class="ne-text">浏览器（Client）</span></strong><span class="ne-text">：是用户访问和显示网页的工具。当你在浏览器中打开一个网页时，浏览器会负责请求服务器上的资源、解析内容并在屏幕上呈现出来。</span></li><li id="ued4de39a" data-lake-index-type="0"><strong><span class="ne-text">本地缓存</span></strong><span class="ne-text">：为了提高加载速度，浏览器会将一些资源（如图片、CSS文件）存储在本地缓存中。当用户再次访问同一网页时，这些资源可以直接从本地缓存中加载，而不是重新从服务器请求。</span></li></ul><h6 id="T9WcE"><span class="ne-text">全栈与服务器端是否矛盾？No！</span></h6><p id="ud6379064" class="ne-p"><span class="ne-text">Django主后端开发，但是在服务器端可以实现部分前端的开发</span></p><ul class="ne-ul"><li id="u116bf150" data-lake-index-type="0"><strong><span class="ne-text">模板引擎</span></strong><span class="ne-text">：Django的模板引擎允许在服务器端生成动态HTML内容，这样的前端工作是由Django完成的。</span></li><li id="u50f8fa13" data-lake-index-type="0"><strong><span class="ne-text">管理界面</span></strong><span class="ne-text">：Django自带的管理界面（Admin Interface）提供了一个用于数据管理的前端界面，这部分前端工作也是由Django提供的。</span></li></ul><hr id="zEuR1" class="ne-hr"><p id="u26cf5a81" class="ne-p"><span class="ne-text" style="color: rgb(0,176,80); font-size: 14px">Ruby on Rails </span><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">- a full-stack server-side web application framework built using </span><span class="ne-text" style="color: rgb(0,0,255); font-size: 14px">ruby </span></p><p id="u1392f5fa" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">一个基于</span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">Ruby</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">构建的</span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">全栈服务器端</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">Web应用程序框架。Rails以其简洁和高效的开发方式著称。</span></p><pre data-language="ruby" id="N3jbD" class="ne-codeblock language-ruby"><code># 这是一个简单的 Ruby 代码示例
def greet(name)
  puts &quot;Hello, #{name}!&quot;
end
greet(&quot;World&quot;)  # 输出：Hello, World!</code></pre><ul class="ne-ul"><li id="u6d31522a" data-lake-index-type="0"><strong><span class="ne-text">Web开发</span></strong><span class="ne-text">：使用 Ruby on Rails 构建动态的Web应用程序。</span></li><li id="u83b70653" data-lake-index-type="0"><strong><span class="ne-text">脚本编写</span></strong><span class="ne-text">：使用 Ruby 编写自动化脚本和工具，提高工作效率。</span></li><li id="ud7429c73" data-lake-index-type="0"><strong><span class="ne-text">数据处理</span></strong><span class="ne-text">：Ruby 拥有强大的数据处理和分析库，可以用于处理数据。</span></li></ul><hr id="lbyhJ" class="ne-hr"><p id="uf3901f90" class="ne-p"><span class="ne-text" style="color: rgb(0,176,80); font-size: 14px">Laravel </span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">- </span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">a </span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">free</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">, </span><strong><span class="ne-text" style="color: #DF2A3F; font-size: 14px">open-source</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px"> </span><span class="ne-text" style="color: rgb(0,0,255); font-size: 14px">PHP </span><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">web framework, following the model–view controller (MVC) architectural pattern. </span></p><p id="ub09999a4" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">一个免费的开源PHP Web框架，遵循模型-视图-控制器（MVC）架构模式。Laravel提供了优雅的语法和强大的工具集。</span></p><p id="u9ba29381" class="ne-p" style="text-indent: 2em"><strong><span class="ne-text">PHP</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">（Hypertext Preprocessor）是一种广泛使用的开源脚本语言，特别适用于Web开发，并可以嵌入到HTML中。</span></p><pre data-language="php" id="PNM8J" class="ne-codeblock language-php"><code>&lt;?php
echo &quot;Hello, World!&quot;;
?&gt;</code></pre><hr id="ivFk8" class="ne-hr"><p id="ud199ecc9" class="ne-p"><span class="ne-text" style="color: rgb(0,176,80); font-size: 14px">ASP.NET </span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">– </span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">a server-side web application framework developed by </span><strong><span class="ne-text" style="color: rgb(0,0,255); font-size: 14px">Microsoft</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">.</span></p><p id="u0f109f77" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">一个由微软开发的</span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">服务器端</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">Web应用程序框架，支持多种编程语言，并提供强大的开发工具和库。</span></p><hr id="p85Ig" class="ne-hr"><p id="u28f93e98" class="ne-p"><strong><span class="ne-text" style="color: rgb(0,176,80); font-size: 14px">Bootstrap </span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">- a </span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">free</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px"> and </span><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">open-source CSS</span></strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px"> framework directed at responsive, mobile-first front-end web development with </span><span class="ne-text" style="color: rgb(0,0,255); font-size: 14px">HTML, CSS and Javascript</span></p><p id="u0b4ae024" class="ne-p" style="text-indent: 2em"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">一个免费的开源CSS框架，针对响应式和移动优先的前端Web开发，使用HTML、CSS和JavaScript。Bootstrap提供了丰富的UI组件和布局工具，简化了前端开发过程  </span></p><p id="udbc3a76e" class="ne-p"><strong><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">响应式设计（Responsive Design）</span></strong></p><p id="u24e6ac7c" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">响应式设计是一种Web设计方法，旨在创建能够</span><span class="ne-text" style="color: rgb(0,0,0); text-decoration: underline; font-size: 14px">自动适应不同设备屏幕尺寸和分辨率的网站</span><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">。这种设计方法确保网站在桌面电脑、平板电脑、智能手机等设备上都能提供良好的用户体验。</span></p><h6 id="qkppW"><strong><span class="ne-text" style="color: rgb(0,0,0)">移动优先设计（Mobile-First Design）</span></strong></h6><p id="u7b9a8c35" class="ne-p"><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">移动优先设计是一种设计策略，</span><span class="ne-text" style="color: rgb(0,0,0); text-decoration: underline; font-size: 14px">首先考虑移动设备的用户体验，然后再扩展到桌面设备</span><span class="ne-text" style="color: rgb(0,0,0); font-size: 14px">。这种方法反映了当前移动互联网使用量逐渐超过桌面互联网的趋势。</span></p></details>
| **Django** | **Ruby on Rails** | **Laravel** | **ASP.NET** |
| --- | --- | --- | --- |
| **<font style="color:#DF2A3F;">Python</font>** | **<font style="color:#DF2A3F;">Ruby</font>** | **<font style="color:#DF2A3F;">PHP</font>** | C#                     <br/>Visual Basic .NET  |
|  FULL-STACK、Server-side、Open-source、free、MVC... | | | |


###### **<font style="color:rgb(0,0,0);">Common web framework functionality </font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459513883-4435798b-3a34-4a12-9640-126bbcd745b2.png)

+ <font style="color:rgb(0,0,0);">URL routing </font>

> URL路由- 将用户请求的URL映射到应用程序中的特定处理程序的过程
>

+ <font style="color:rgb(0,0,0);">HTML, XML, JSON, and other output format templating </font>

>  模板引擎通过插入动态数据来生成所需的格式内容  
>

+ <font style="color:rgb(0,0,0);"> Database manipulation </font>

> **数据库操作** 涉及**与数据库的交互**，包括**<font style="color:#DF2A3F;">数据的创建、读取、更新和删除（CRUD操作）</font>**。<font style="background-color:#FBDFEF;">应用程序框架通常提供ORM（对象关系映射）工具</font>，以简化数据库操作，使开发人员无需编写复杂的SQL查询。  
>

+ <font style="color:rgb(0,0,0);"> Security against Cross-site request forgery (CSRF) and other attacks </font>

> **安全性**是Web应用程序开发中的<u>关键问题</u>。框架通常内置了一些安全措施，以防止常见的攻击，如CSRF（跨站请求伪造）和XSS（跨站脚本攻击）。这些安全措施包括验证请求的来源、防止恶意脚本注入等。  
>

+ <font style="color:rgb(0,0,0);"> Session storage and retrieval </font>

> **会话存储和检索**
>
> **会话管理** 涉及存储和检索用户会话数据。<u>会话数据可以包括用户的登录状态、购物车内容等</u>。框架通常提供会话管理工具，以便开发人员能够方便地管理用户会话，确保数据的一致性和安全性。
>

_<font style="color:rgb(0,0,0);">Not all web frameworks include code for all of the above functionality. </font>_

+ <font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);">For example, the </font>**<font style="color:rgb(0,0,255);">Django web application framework</font>**<font style="color:rgb(0,0,255);"> </font><font style="color:rgb(0,0,0);">includes an </font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;">Object Relational Mapping </font>****<font style="color:rgb(0,0,255);background-color:#FBDFEF;">(ORM)</font>**<font style="color:rgb(0,0,255);"> </font><font style="color:rgb(0,0,0);">layer that abstracts</font>**<font style="color:rgb(0,0,0);"> relational database </font>**<font style="color:rgb(0,0,0);">read, write, query, and delete operations. </font>

<font style="color:rgb(0,0,0);">However, Django's ORM cannot work without significant modification on </font>**<font style="color:rgb(0,0,0);">non-	relational</font>**<font style="color:rgb(0,0,0);"> databases such as MongoDB. </font>

<font style="color:rgb(0,0,0);">• Some other web frameworks such as </font><font style="color:rgb(0,176,80);">Flask </font><font style="color:rgb(0,0,0);">and </font><font style="color:rgb(0,176,80);">Pyramid </font><font style="color:rgb(0,0,0);">are easier to use with </font>**<font style="color:rgb(0,0,0);">non-relational </font>**<font style="color:rgb(0,0,0);">databases by incorporating external Python libraries-整合外部python库。</font>

### **<font style="color:rgb(0,0,0);">二、Database Management Systems</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459554439-4d7eb2cf-d149-4d12-9b40-b1147987f7d6.png)

**<font style="color:rgb(0,0,0);">Database ： </font>**<font style="color:rgb(0,0,0);">Store its data --- </font><font style="color:rgb(0,0,0);"> relational or non-relational databases.</font>

<details class="lake-collapse"><summary id="u9c425605"><strong><span class="ne-text">关系型数据库（Relational Databases</span></strong><span class="ne-text">）和</span><strong><span class="ne-text">非关系型数据库（Non-relational Databases）</span></strong><span class="ne-text">是两种不同类型的数据库管理系统</span></summary><p id="u79765e6a" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739281388476-3f459173-4596-4e79-9422-5f1e9a48dcf6.png?x-oss-process=image%2Fcrop%2Cx_0%2Cy_0%2Cw_1013%2Ch_722" width="586" title="" crop="0,0,1,0.9008" id="u86cbcef7" class="ne-image"></p><p id="ue7fdac2f" class="ne-p"><strong><span class="ne-text">关系型数据库适用场景</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="uabab369b" data-lake-index-type="0"><span class="ne-text">数据结构较为稳定，具有明确模式。</span></li><li id="u6379dbe8" data-lake-index-type="0"><span class="ne-text">需要复杂查询和事务支持。</span></li><li id="u4275c936" data-lake-index-type="0"><span class="ne-text">数据之间存在复杂的关系，需要通过外键关联。</span></li></ul><p id="u61cd1df6" class="ne-p"><strong><span class="ne-text">非关系型数据库适用场景</span></strong><span class="ne-text">：</span></p><ul class="ne-ul"><li id="udb6af157" data-lake-index-type="0"><span class="ne-text">数据量大，数据结构灵活多变。</span></li><li id="u71328284" data-lake-index-type="0"><span class="ne-text">需要高并发读写操作和快速数据访问。</span></li><li id="u19d83ee5" data-lake-index-type="0"><span class="ne-text">数据类型多样，如文档、图、键值对等。</span></li></ul></details>
##### _**<font style="color:rgb(0,0,0);">Examples(DBMS): </font>**_
:::color3
<font style="color:rgb(0,0,0);">• </font><font style="color:rgb(0,176,80);">MongoDB</font><font style="color:rgb(0,0,0);"> - </font><font style="color:rgb(0,0,0);">an open-sourced </font>**<font style="color:#2F4BDA;">NoSQL</font>**<font style="color:rgb(0,0,0);"> database. - NoSQL（非关系型数据库）  </font>

<font style="color:rgb(0,0,0);">• </font><font style="color:rgb(0,176,80);">PostgreSQL </font><font style="color:rgb(0,0,0);">-</font><font style="color:rgb(0,0,0);"> a popular open-sourced SQL database. </font>

<font style="color:rgb(0,0,0);">• </font><font style="color:rgb(0,176,80);">MySQL</font><font style="color:rgb(0,0,0);"> -</font><font style="color:rgb(0,0,0);"> another popular open-sourced SQL database</font><font style="color:rgb(0,0,0);">. </font>

<font style="color:rgb(0,0,0);">• </font><font style="color:rgb(0,176,80);">Oracle </font><font style="color:rgb(0,0,0);">-</font><font style="color:rgb(0,0,0);"> an </font>**<font style="color:rgb(0,0,0);">enterprise</font>**<font style="color:rgb(0,0,0);"> SQL database. </font>

<font style="color:rgb(0,0,0);">•</font><font style="color:rgb(0,176,80);"> SQL Server</font><font style="color:rgb(0,0,0);"> - </font><font style="color:rgb(0,0,0);">an SQL server manager created by </font>**<font style="color:#2F4BDA;">Microsoft.</font>**

:::

  **数据库管理系统**（_DBMS_）是一种**软件**, 主要负责数据的存储、组织和管理，以及提供数据访问接口（如SQL查询）。

  **服务器**是一种计算机硬件或软件系统，提供网络服务和资源。它可以处理客户端的请求，执行业务逻辑，并返回响应  

开源：MongoDB, PostgreSQL, MySQL

不开源：Oracle, SQL Server.

### 三、Client & Server
#### Client (side)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459585100-64b023e7-04e3-4dcd-ac8f-a38cd8bbb7ca.png)

:::color3
<font style="color:rgb(0,0,0);">This party </font>_**<font style="color:rgb(0,0,255);">requests</font>**__<font style="color:rgb(0,0,255);"> </font>_<font style="color:rgb(0,0,0);">pages </font>**<font style="color:rgb(0,0,0);">from</font>**<font style="color:rgb(0,0,0);"> the </font>**<font style="color:rgb(0,0,0);">Server</font>**<font style="color:rgb(0,0,0);">, and displays them to the user. </font>

<font style="color:rgb(0,0,0);">In most cases, the client is a </font>**<font style="color:rgb(0,0,0);">web browser</font>**<font style="color:rgb(0,0,0);">.</font>

:::

( 1 ) 请求数据

( 2 ) 展示给**用户 User使用Client浏览网页**

#### Server (side)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459600240-04eb5e98-e276-423b-bd9b-7fe21d1d97e5.png)

:::color3
<font style="color:rgb(0,0,0);">This party is responsible for </font>**<font style="color:rgb(0,0,255);">serving </font>**<font style="color:rgb(0,0,0);">pages.</font>

:::

 	“party” 指的是负责提供网页服务的一方  

 	“Serving pages” 是指**Web服务器将网页内容发送给用户的过程**。当用户在浏览器中请求一个网页时，Web服务器会<u>响应这个请求</u>，将相应的HTML文件、CSS文件、JavaScript文件和其他资源<u>发送</u>给用户的浏览器，以便浏览器能够渲染并显示这个网页。  

+ <font style="color:rgb(0,0,0);">A server is where the application code is typically stored. </font>
+ <font style="color:rgb(0,0,0);">Server </font><font style="color:rgb(0,0,255);">respond to those requests</font>

#### Client-Server Model
       <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739318800824-6f939282-e064-4aaf-ba86-ddce76ee75c5.png)

    1. User 打开浏览器并浏览网页；
    2. Client向Server发出Request；
    3. Server响应Request，并发送信息至Client；

<font style="color:rgb(0,0,0);">（Replies the client with some meta-data (called </font>_<font style="color:rgb(0,0,0);">headers</font>_<font style="color:rgb(0,0,0);">), followed by the page's source.- 服务器首先会回复一些元数据（称为头部信息），然后再发送网页的源代码 ）</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739319021284-baf4a0de-5746-4f92-8e75-f0f36ef519ae.png)

    4. Client收到page's source, **renders** it into a human viewavle website.

渲染： 指的是浏览器将收到的网页源代码转换成可以在人眼中看到和交互的网页。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739319101414-f876b154-ea69-4d5e-967d-907536bcfec1.png)

 “Render” 指的是浏览器将收到的HTML、CSS和JavaScript代码解析、计算和绘制成可以在屏幕上看到的网页内容的过程。  

### 四、Front-end and back-end
<font style="color:rgb(0,0,0);">• The</font>**<font style="color:rgb(0,0,0);"> front-end</font>**<font style="color:rgb(0,0,0);"> is comprised of HTML, CSS, and JavaScript. This is how and where the website is shown to users. </font>

<font style="color:rgb(0,0,0);">• The </font>**<font style="color:rgb(0,0,0);">back-end</font>**<font style="color:rgb(0,0,0);"> is comprised of your </font>**<font style="color:#2F4BDA;">server and database</font>**<font style="color:rgb(0,0,0);">. It’s the place where functions, methods, and data manipulation happens that you don’t want the clients to see</font>

_<font style="color:rgb(0,0,0);">对比 Client and Server</font>_

+ <font style="color:rgb(0,0,0);">Client: This party</font>**<font style="color:rgb(0,0,0);"> requests </font>**<font style="color:rgb(0,0,0);">pages from the Server, and displays them to the user. </font>
+ <font style="color:rgb(0,0,0);">Server: This party is responsible for </font>**<font style="color:rgb(0,0,0);">serving</font>**<font style="color:rgb(0,0,0);"> pages.</font>

**前端（front-end）**<font style="color:rgb(0,0,0);">：特指用户界面的开发和实现，主要关注用户体验和视觉设计。</font>

**客户端（client）**<font style="color:rgb(0,0,0);">：用户设备上的应用程序，通过网络与服务器交互，获取和呈现数据。</font>

### <font style="color:rgb(0,0,0);">五、Client-side programming</font>
+ <font style="color:rgb(0,0,0);">Client-side programming is writing </font>**<font style="color:rgb(0,0,0);">code </font>**<font style="color:rgb(0,0,0);">that will</font><font style="color:rgb(0,0,0);background-color:#FBDFEF;"> </font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;">run on</font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;"> the</font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;"> client</font>****<font style="color:rgb(0,0,0);">,</font>**<font style="color:rgb(0,0,0);"> and is </font>**<font style="color:rgb(0,0,0);background-color:#D9EAFC;">done in languages that can be executed by the browser</font>**<font style="color:rgb(0,0,0);background-color:#D9EAFC;">,</font><font style="color:rgb(0,0,0);"> such as </font>**<font style="color:rgb(0,0,0);background-color:#FBDE28;">JavaScript.</font>**<font style="color:rgb(0,0,0);"> -</font><u><font style="color:rgb(0,0,0);">making web pages interactive. </font></u>
+ <font style="color:rgb(0,0,0);"> Client-side (i.e. frontend) web development</font><font style="color:rgb(0,0,0);background-color:#FDE6D3;"> involves everything users see on their screens. </font><font style="color:rgb(0,0,0);">Some major frontend technology stack components: </font>
    - <font style="color:rgb(0,0,0);">Hypertext Markup Language (</font>**<font style="color:#2F4BDA;">HTML</font>**<font style="color:rgb(0,0,0);">) and Cascading Style Sheets (</font>**<font style="color:#2F4BDA;">CSS</font>**<font style="color:rgb(0,0,0);">). </font>

<font style="color:rgb(0,0,0);">   	 </font><font style="color:rgb(0,0,0);">HTML tells a browser how to display the content of web pages, </font>

<font style="color:rgb(0,0,0);">     CSS styles that content. </font>

+ **<font style="color:#2F4BDA;">Bootstrap</font>**<font style="color:rgb(0,0,0);"> is a helpful framework for managing HTML and CSS. </font>

<font style="color:rgb(0,0,0);">• There are many JavaScript libraries (such as jQuery, Vue.js, React.js - maintained by Meta) for faster and easier web development.</font>

+ **<font style="color:rgb(0,0,0);">Client side </font>**<font style="color:rgb(0,0,0);">programming has mostly to do with the </font><font style="color:#DF2A3F;">user interface(UI)</font><font style="color:rgb(0,0,0);">, with which the user interacts. 客户端编程（Client-side programming）主要涉及用户界面（UI），即用户与之交互的部分  </font>
+ **<font style="color:rgb(0,0,0);">Its main tasks are: </font>**

<font style="color:rgb(0,0,0);">• </font>_<font style="color:rgb(0,0,0);">Validating input</font>_<font style="color:rgb(0,0,0);"> (Validation </font>**<font style="color:rgb(0,0,0);">must be</font>**<font style="color:rgb(0,0,0);"> done in the </font>**<font style="color:rgb(0,0,0);">server.</font>**<font style="color:rgb(0,0,0);"> A redundant validation in the client could be used to avoid server calls避免对服务器的调用 when speed is very critical.) </font><font style="color:rgb(0,0,0);">客户端进行冗余验证可以提高速度，因为它可以在用户提交数据之前捕获错误，减少与服务器的交互次数。这在速度非常关键的情况下特别有用。  </font>

<font style="color:rgb(0,0,0);">• </font>_<font style="color:rgb(0,0,0);">Animation</font>_<font style="color:rgb(0,0,0);"> 动画-动态效果</font>

<font style="color:rgb(0,0,0);">• </font>_<font style="color:rgb(0,0,0);">Manipulating UI elements </font>_

<font style="color:rgb(0,0,0);">• </font>_<font style="color:rgb(0,0,0);">Applying styles </font>_

<font style="color:rgb(0,0,0);">•</font>_<font style="color:rgb(0,0,0);"> Some calculations are done when you don't want the page to refresh so often </font>_<font style="color:rgb(0,0,0);">在客户端进行一些计算可以避免页面刷新，提高用户体验。例如，表单中的数据验证、购物车的总价计算等，可以在客户端完成，而不需要每次都与服务器交互。  </font>

### <font style="color:rgb(0,0,0);">六、Server-side programming</font>
+ <font style="color:rgb(0,0,0);">The server side</font><font style="color:rgb(0,0,0);background-color:#FDE6D3;"> isn't visible to users</font><font style="color:rgb(0,0,0);">, but it powers the client side.</font>
+ <font style="color:rgb(0,0,0);">Server-side programming is writing code that </font>**<font style="color:rgb(0,0,0);background-color:#FBDFEF;">runs on the server</font>****<font style="color:rgb(0,0,0);">,</font>**<font style="color:rgb(0,0,0);"> </font><font style="color:rgb(0,0,0);background-color:#D9EAFC;">using languages supported by the server. </font>
+ <font style="color:rgb(0,0,0);">Server-side programming is used to </font><font style="color:rgb(0,0,0);background-color:#FDE6D3;">create the logic of websites and </font>

<font style="color:rgb(0,0,0);background-color:#FDE6D3;">applications. </font>

+ <font style="color:rgb(0,0,0);">Frameworks for programming languages offer lots of tools for simpler and faster coding. Some of the popular programming languages and their major frameworks : </font>
    - <font style="color:rgb(0,0,0);">Ruby (</font><font style="color:rgb(0,176,80);">Ruby on Rails</font><font style="color:rgb(0,0,0);">) </font>
    - <font style="color:rgb(0,0,0);">Python (</font><font style="color:rgb(0,176,80);">Django</font><font style="color:rgb(0,0,0);">, Flask) </font>
    - <font style="color:rgb(0,0,0);">PHP (</font><font style="color:rgb(0,176,80);">Laravel</font><font style="color:rgb(0,0,0);">) </font>
    - <font style="color:rgb(0,0,0);">C# (</font><font style="color:rgb(0,176,80);">ASP.NET</font><font style="color:rgb(0,0,0);">)</font>
+ **<font style="color:rgb(0,0,0);">Typical uses of server-side programming</font>**
    - <font style="color:rgb(0,0,0);">Process user input. </font>
    - <font style="color:rgb(0,0,0);">Display pages. </font>
    - <font style="color:rgb(0,0,0);">Structure web applications. </font>

<font style="color:rgb(0,0,0);">构建（或结构化）Web应用程序。这涉及到如何设计和组织Web应用程序的各个组件，使其高效、可维护和易于扩展。  服务器处理客户端请求并与数据库交互。</font>

    - <font style="color:rgb(0,0,0);">Interact with permanent storage (SQL, files). </font>

<u><font style="color:rgb(0,0,0);">Querying</font></u><font style="color:rgb(0,0,0);"> the database </font>

<u><font style="color:rgb(0,0,0);">Insert and update</font></u><font style="color:rgb(0,0,0);"> information onto the database</font>

<details class="lake-collapse"><summary id="u78cfced0"><span class="ne-text" style="font-size: 14px">Display Page在服务器端编程与客户端编程的差别</span></summary><p id="ub645cc8c" class="ne-p"><img src="https://cdn.nlark.com/yuque/0/2025/png/42556572/1739458960838-e648b322-8aa4-4d5a-85a9-e72a698cc4c4.png" width="691.3333333333334" title="" crop="0,0,1,1" id="ziwkR" class="ne-image"></p></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739459187607-f74af320-02df-4ec2-b4c9-049062b24989.png)

### 附
#### 计算机编程开发框架
计算机编程开发框架是一个为软件开发过程<u>提供基础结构和支撑</u> 的环境集合。

框架通过这一基础设施的支持，使开发者可以专注于开发软件的独特功能部分，而不用从头编写所有底层的代码。-- 代码复用，降低软件开发的复杂性和时间成本。

_例，模型-视图-控制器 (MVC) 架构，将数据模型、用户界面、用户输入，分离成独立的模块。_

##### 一、框架的通用结构
**<font style="color:rgb(17, 17, 17);">核心库</font>**<font style="color:rgb(17, 17, 17);">，提供</font><u><font style="color:rgb(17, 17, 17);">基础功能支持</font></u><font style="color:rgb(17, 17, 17);">；</font>

**<font style="color:rgb(17, 17, 17);">API接口</font>**<font style="color:rgb(17, 17, 17);">，使得与框架进行</font>_**<font style="color:rgb(17, 17, 17);">交互 </font>**_<font style="color:rgb(17, 17, 17);">成为可能；</font>

**<font style="color:rgb(17, 17, 17);">插件系统</font>**<font style="color:rgb(17, 17, 17);">，允许扩展框架核心功能；</font>

**<font style="color:rgb(17, 17, 17);">文档</font>**<font style="color:rgb(17, 17, 17);">，为开发者提供使用指南和参考资料</font>

##### <font style="color:rgb(17, 17, 17);">二、不同类型的框架</font>
<font style="color:rgb(17, 17, 17);">eg. Web框架、移动应用框架、游戏开发框架...</font>

##### <font style="color:rgb(17, 17, 17);">三、框架与库-控制流程</font>
<font style="color:rgb(17, 17, 17);">通常，</font>**<font style="color:rgb(17, 17, 17);">框架</font>**<font style="color:rgb(17, 17, 17);">具有更强的</font>**<font style="color:rgb(17, 17, 17);">控制力</font>**<font style="color:rgb(17, 17, 17);">，它</font>_<font style="color:rgb(17, 17, 17);">规定了程序的骨架和执行流程</font>_<font style="color:rgb(17, 17, 17);"> ；</font>

<font style="color:rgb(17, 17, 17);">而库提供了一组功能，开发者可以自由选择并控制这些功能来完成特定任务。</font>

<u><font style="color:rgb(17, 17, 17);">框架提供了一种</font></u><u><font style="color:rgb(17, 17, 17);background-color:#FBDFEF;">标准化的方法来构建和部署应用</font></u><u><font style="color:rgb(17, 17, 17);">，库更多的是作为一个资源的集合</font></u>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1739317386522-408b48e3-63cb-442e-aa31-58e04cc9d482.png)

<font style="color:rgb(17, 17, 17);"></font>

