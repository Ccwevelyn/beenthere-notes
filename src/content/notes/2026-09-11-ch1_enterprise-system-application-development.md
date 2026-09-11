---
title: Ch1
type: note
attachments:
  - label: PDF
    file: /uploads/ch1_enterprise-system-application-development.pdf
grade: year-4
semester: fall
course: enterprise-system-application-development
date: 2026-09-11
order: 1
published: true
---
#### Course Info
+ <font style="color:rgb(31,35,40);">Test (20%)</font>
+ <font style="color:rgb(31,35,40);">Assignments/classwork (15%)</font>
+ <font style="color:rgb(31,35,40);">Quizzes (15%)</font>
+ <font style="color:rgb(31,35,40);">Exam (50%)</font>

##### <font style="color:rgb(31,35,40);">Learning Objective</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789093563512-f9e39150-2bfa-49ff-a9f1-19ae8dbc2cc4.png)

###### **Analyze** 架构分析：多层架构 & 微服务
一个企业系统是**如何被拆分成不同层次或不同服务**的。

+ **<font style="color:#2F4BDA;">多层架构</font>**：典型三层（表示层 / 业务层 / 数据层）。
+ **<font style="color:#2F4BDA;">微服务</font>**：把系统拆成多个独立部署的小服务，每个服务负责单一业务能力。

<u>为什么重要</u>

+ 决定系统的可扩展性、可维护性、部署方式。
+ 影响你后续所有设计：事务、数据库、API、服务间通信。

###### **Design** 设计并实现事务型业务逻辑
掌握如何在**企业框架**中**写“可靠的业务流程**”。

+ 事务：保证一组操作要么全部成功，要么全部失败。
+ 企业框架：如 Spring、Jakarta EE、NestJS 等。

<u>为什么重要</u>

+ 企业系统的核心是业务流程（下单、支付、审批、库存扣减）。
+ 事务处理不当会导致数据不一致、重复扣费、库存错误。

###### **Integrate** 数据库集成：ORM + 连接池
把**应用和数据库正确连接**起来，并高效读写数据。

+ ORM：把数据库表映射成对象（如 JPA、Hibernate、MyBatis）。
+ 连接池：复用数据库连接，提高性能（如 HikariCP）。

<u>为什么重要</u>

+ 企业系统大量依赖数据库，性能和稳定性都取决于连接管理。
+ ORM 能减少重复 SQL，提高开发效率。

###### **Build** 构建 RESTful API
**设计和实现系统**之间通信的接口。

+ RESTful API：基于 HTTP 的资源式接口设计。
+ 用于前端、内部服务、外部系统之间的通信。

<u>为什么重要</u>

+ 企业系统通常是分布式的，API 是所有服务协作的基础。
+ API 质量直接影响系统的可扩展性和可维护性。

---

#### CH 1 Introduction to Enterprise System (ES)
##### Enterprise Computing
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789093733960-43396f0e-6708-4c89-8b4e-06e91a7bc3ea.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789093805304-123bf092-c812-4977-8165-675e6466efef.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789093828685-a78961ec-878b-4e80-ae69-1ef4ee97c73d.png)

##### Enterprise System (ES)
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789094050125-e4b1ac6f-64ec-4201-9e83-49e62b20eb04.png)

 企业系统是一类 **整合多个业务流程、跨部门协作的大型软件系统**。  

###### <font style="color:#2F4BDA;">Key characteristics</font>
1. **<u>High Performance</u>**
+ <font style="color:rgb(31,35,40);">Able to provide rapid transaction time even in peak hours. </font>
+ <font style="color:rgb(31,35,40);">Able to process massive amount of transactions concurrently 并发处理</font>

高性能是企业系统的生命线。它意味着：

+ **低延迟**<font style="color:rgb(31,35,40);">：请求响应时间稳定在毫秒级。</font>
+ **高吞吐**<font style="color:rgb(31,35,40);">：每秒处理成千上万次交易（TPS）。</font>
+ **可扩展性**<font style="color:rgb(31,35,40);">：负载上升时能自动扩容（如使用负载均衡、分布式架构）。</font>

<font style="color:rgb(31,35,40);"></font>

2. <u></u>**<u>Stable & Robustness</u>**** 稳定性与健壮性  **
+ Server running consistently and correctly under any kinds of legal and illegal operations.
+ Constantly amend and improve to prevent loopholes.  持续修补和改进以防止漏洞  
+ System environmental upgrade to fix potential problems.

稳定性与健壮性意味着系统必须：

+ **抗异常**：非法输入、恶意请求不会导致系统崩溃。
+ **抗故障**：单个组件失败不会影响整体服务（如熔断、降级）。
+ **持续维护**：补丁、版本升级、漏洞修复必须常态化。

| 特性 | 异常类型 | 范围 | 目标 |
| --- | --- | --- | --- |
| **Stable/Robustness** | 小规模异常（非法输入、单模块错误） | 软件层面 | 不崩、不挂、正确运行 |
| **Resilience** | 灾难级异常（断电、机房挂掉、区域故障） | 系统整体层面 | 持续运行或快速恢复 |


3.  **<u>Resilience Control</u>** 弹性控制 / 韧性设计  
+ Anti-virus, malicious software prevention.  防病毒、恶意软件防护  
+ Power supply shortage. 应对电力供应不足等突发情况。



4. **<u> Cost Effectiveness</u>** 成本效益  

 Short development effort but high profitable product.   开发周期短，但产品利润高。  

企业系统不仅要强大，还要 **成本可控**：

+ 开发周期短 → 使用成熟框架、模块化设计、复用组件
+ 维护成本低 → 自动化运维、监控、日志系统
+ 投资回报高 → 系统能显著提升效率、减少人工成本



5. **<u> Extensible & Flexible</u>** 可扩展与灵活性  
+ Ease of further development and integration with others.  

企业系统必须能随着业务增长不断扩展：

+ **可扩展性**：能轻松增加新模块、新功能。
+ **灵活性**：能与第三方系统集成（API、消息队列、ESB）。
+ **可维护性**：代码结构清晰、模块解耦、文档完善。



6. **<u>Disaster Recovery (DR) 灾难恢复</u>**
+ Data & software backup and recovery mechanism.
+ Data Centers and DR sites are required.

DR 是企业系统面对“灾难级事件”时的 **恢复能力**，属于系统可靠性最高层级。

它解决的问题是：数据丢，机房损坏，火灾、洪水、地震，整个区域的服务不可用



7. **<u>High Availability (HA)</u>**** 高可用性**
+ Provide almost zero downtime services (24 × 7).
+ Load balancing, failover, virtual servers, etc.  负载均衡、故障切换、虚拟服务器  

 HA 的目标是：**系统永不停机**。  



8. **<u>Resource Management & Optimization</u>**<u></u>

 Database, application servers, operating system, network optimization.  

 企业系统规模大，资源消耗高，因此必须进行系统级优化 ：

+ **数据库**：索引、缓存、分库分表、读写分离
+ **应用服务器**：线程池、连接池、GC 调优
+ **操作系统**：内核参数、文件句柄、IO 调度
+ **网络**：带宽、延迟、路由、负载均衡策略



9.  **Standardization & Documentation 标准化与文档化**  
+ Provide **enough documents** (system handbooks, operational guidelines, administration whitepaper, etc.) to explain the system.
+ Acquire ISO to reduce operational risks, maintain high quality of services and secure to achieve industrial standard level.  获得 ISO 等行业标准，以降低运营风险、保持高质量服务并达到行业标准   
+ Code of Practice for **staffs** to follow the operational procedures.

| 特性 | 工程化重点 | 关注层级 |
| --- | --- | --- |
| **High Performance **高性能 | 并发、吞吐、缓存、分布式、消息队列 | 性能层 |
| **Stable & Robustness **稳定性与健壮性 | 异常处理、熔断、限流、重试、输入校验 | 软件层抗异常 |
| **Resilience Control **韧性 / 弹性控制 | 多活、容灾、UPS、防病毒、混沌工程 | 系统层抗灾难 |
| **High Availability (HA) **高可用性 | 负载均衡、故障切换、滚动升级、健康检查 | 架构层持续运行 |
| **Disaster Recovery (DR) **灾难恢复 | RPO/RTO、异地备份、快照、日志复制、灾备演练 | 灾备层恢复能力 |
| **Resource Optimization **资源管理与优化 | DB/OS/网络调优、连接池、索引、内核参数 | 性能调优层 |
| **Cost Effectiveness **成本效益 | 开源框架、自动化运维、云服务、模块复用 | 成本控制层 |
| **Extensible & Flexible **可扩展与灵活性 | 微服务、插件式架构、标准化 API、消息中间件 | 扩展性层 |
| **Standardization & Documentation **标准化与文档化 | ISO 标准、系统手册、操作规范、审计流程 | 管理与合规层 |


###### Popular enterprise systems
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789095058706-5dd3f907-62ba-4706-90cf-a403d2ff1c70.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789095160356-ce9fca24-bab5-45c7-a5d8-9fa9589a0562.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789095265151-a1ba846c-5346-4939-b760-401d8bd01e48.png)

###### Evolution of Enterprise System
1. ** Mainframe Era（1960s–1980s）主机时代**

集中式计算：所有计算都在大型主机上完成

批处理（Batch Processing）：每天或每周跑批任务

用户交互极少：通常是命令行或卡片输入

2. ** Client–Server Era（1980s–2000s）客户端-服务器时代  **

分布式计算：客户端负责 UI，服务器负责逻辑

图形界面（GUI）：用户体验大幅提升

网络化：企业开始内部联网

3. ** ERP Era（1990s–Present）ERP 时代  **

业务流程整合：财务、库存、制造、销售全部统一

实时数据：企业第一次能实时看到业务状态

标准化流程：企业流程被软件固化

4. ** Web-Based Enterprise Systems（2000s–Present）基于 Web 的企业系统  **

浏览器访问：不再需要安装客户端

SaaS 模式出现

部署成本下降

5. ** Mobile & Cloud-Native Era（2010s–Present）移动与云原生时代  **

移动化：随时随地访问企业系统

云原生：系统为云而生，而不是迁移到云

微服务架构：系统拆成小服务，独立部署

| 时代 | 时间范围 | 文档原句（引用） | 核心特征总结 | 代表技术 / 系统 |
| --- | --- | --- | --- | --- |
| Mainframe Era | 1960s–1980s | “Focus: Batch processing, centralized computing, and limited user interaction.” | **集中式**计算、批处理、低交互、昂贵且难维护 | IBM Mainframe、COBOL、早期库存/财务系统 |
| Client–Server Era | 1980s–2000s | “Distributed computing, GUIs, networking… relational databases.” | 分布式计算、图形界面、网络化、关系型数据库 | Oracle、SQL Server、SAP R/2、桌面应用 |
| ERP Era | 1990s–至今 | “Integrated business processes… real-time information… enterprise-wide integration.” | 业务流程整合、实时数据、企业级**统一平台** | SAP R/3、Oracle EBS、Microsoft Dynamics |
| Web-Based ES | 2000s–至今 | “Web accessibility… cloud computing… reduced infrastructure costs.” | Web 化访问、SaaS 出现、部署成本下降 | Salesforce、Workday、NetSuite |
| Mobile & Cloud-Native Era | 2010s–至今 | “Mobile accessibility… cloud-based infrastructure… microservices architecture.” | 移动化、云原生、微服务、高扩展性 | AWS/Azure/GCP、Kubernetes、Docker、SAP S/4HANA |


###### Benefits of enterprise system
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096032304-15543c06-d501-4296-adbb-8a39c072f651.png)

###### Challenges
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096085778-437d1623-c105-47a2-b8d6-ab1e962703b3.png)

在自动化和流程优化的 cost 减少了，但是实现过程中的 cost 反而增加

---

##### **Distinction between enterprise software and consumer software**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096311102-11b759dc-6b1d-4411-b1ca-e8fdda624e3d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096325541-4b013eb0-fed5-4ef1-a7de-4ecdd1a9b9b6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096343161-6ca49c8f-a687-445f-991b-ac02122e57a9.png)

1. Horizontal (handle millions of concurrent users during viral spikes).
    - 需要**横向扩展（加更多服务器**）
    - 流量不可预测（例如突然爆红）
    - 用户规模可能瞬间从 1 万 → 100 万
2. Usually high (99.9%), but users tolerate brief outages  
    - 99.9% 可用性已经很高
    - 偶尔宕机几分钟用户能接受
3.  Eventual Consistency is acceptable  
    - 最终一致即可
    - 用户看到的点赞数可能暂时不准确
    - 不影响业务

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096357495-5d34ec2e-b90b-4a75-acdd-06eefa42a40c.png)

1.  Vertical & Predictable (scaling based on known user/transaction counts)  
    - **用户量可预测**（合同里写了多少员工、多少交易）
    - 扩展方式通常是垂直扩展（提升单机性能）
2.  Mission-critical (99.99%+). Downtime means halted business operations  
3.  Strict ACID… non-negotiable for financial/order data.  
    - 必须严格 ACID
    - 金融、订单、库存不能出现“最终一致”
    - 银行不能“过几秒再扣钱”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096619851-bbefeba4-288b-41af-be21-ae0b7fc4af03.png)

1. **Security Focus 安全重点**

**<u>Consumer（消费级软件）</u>**

_“Focuses on data privacy (GDPR/CCPA), password security, preventing account takeovers.”_

+ 保护用户隐私
+ 防止密码泄露
+ 防止账号被盗（如短信验证码、双因素认证）

**<u>Enterprise（企业级软件）</u>**

_“Zero-trust, perimeter security, auditing.”_

+ 零信任架构（默认不信任任何内部或外部请求）
+ 边界安全（防火墙、VPN、WAF）
+ 审计与合规

**工程化理解**

+ 所有请求必须认证
+ 内网也不默认安全
+ 必须记录所有关键操作



2. **Authentication 认证方式**

**<u>Consumer</u>**

_“Authentication is often OAuth2 via social logins (Google/Facebook).”_

+ 用户用 Google、Facebook 登录
+ 方便、快速、无需企业级权限管理

**<u>Enterprise</u>**

_“Integrates with corporate LDAP/Active Directory for Single Sign-On (SSO).”_

+ 企业内部统一身份系统
+ 员工用公司账号登录所有系统
+ 权限由企业 IT 管理



3. **Authorization 授权方式**

**<u>Consumer</u>**

+ 简单权限：普通用户、管理员
+ 不需要复杂的权限模型

**<u>Enterprise</u>**

_“Requires complex RBAC and ABAC.”_

+ RBAC：基于角色（如 HR、财务、仓库）
+ ABAC：基于属性（部门、岗位、地区、项目）
+ 权限必须精细到字段级、操作级

**工程化理解**

+ 企业系统必须确保“谁能看什么、谁能改什么”
+ 权限错误可能导致严重法律风险



4. **Compliance 合规要求**

**<u>Consumer</u>**

_“Focuses on data privacy (GDPR/CCPA).”_

+ 主要是隐私法规
+ 用户数据不能乱用

**<u>Enterprise</u>**

_“HIPAA… SOX… PCI-DSS.”_

+ 医疗系统必须符合 HIPAA
+ 金融系统必须符合 SOX
+ 支付系统必须符合 PCI-DSS

****

5. **Audit Trails 审计日志**

**<u>Consumer</u>**

+ 基本日志即可
+ 不需要记录“谁做了什么”

**<u>Enterprise</u>**

_“Mandatory audit trails (who did what, when, and why).”_

+ 必须记录每个关键操作
+ 必须可追溯
+ 必须满足法律审计要求

  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097023924-ad8e9259-7a8f-4eff-ab9f-1bbbfaca2c73.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096650631-c2b94b5e-73a6-4b20-90d8-473ea95a449e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096666935-4357168c-284c-4563-a708-50ae7e00197c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097173886-0de53c86-8d35-4a41-867f-4f0ce4d17cfe.png)

| **维度** | **Consumer（消费级软件）** | **Enterprise（企业级软件）** | **工程化解释** |
| --- | --- | --- | --- |
| **Integration Scope** 集成范围 | 小、轻量、标准 API | 大、复杂、跨部门、跨系统 | 消费级只需对接几个外部服务；企业级必须整合整个组织的系统 |
| **Legacy Integration** 旧系统集成 | 几乎没有 | 必须对接主机、COBOL、老系统 | 企业系统不能抛弃旧系统，只能兼容它们 |
| **Enterprise Modules** 企业模块集成 | 不需要 | ERP、CRM、SCM、HCM 等深度互联 | 企业系统必须跨部门协作 |
| **Integration Technology** 集成技术 | REST API、OAuth | ESB、SOAP/XML、SFTP、JMS、Kafka | 企业系统需要可靠、可审计、可追溯的集成方式 |
| **Data Sync** 数据同步 | **简单同步** | 异步同步、跨部门数据流 | 企业数据必须一致、可追踪 |
| **System Role** 系统角色 | System of Engagement（用户交互） | System of Record（业务数据源头） | 企业系统是“数据真相来源”，不能出错 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097051173-5f39c041-3834-4be6-b5b6-b1a498015d57.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097076243-1238aab1-deef-4d7a-962e-dd5432d06645.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097089662-e51513a6-cad3-4973-91c0-9aaed1840d7d.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097111411-cefa0b0d-95a6-4160-9237-fcc049b740ee.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789097131174-fa4605b0-432c-4256-acf2-8003f0ae4ae6.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096187578-6f8e768f-76fa-401b-8292-31cda965e4ec.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1789096198104-10bf0d8d-b4cf-43d9-b2c2-99531b35316e.png)
