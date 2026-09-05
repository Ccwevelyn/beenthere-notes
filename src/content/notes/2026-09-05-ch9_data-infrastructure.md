---
title: Ch9_Data Infrastructure
type: note
attachments:
  - label: PDF
    file: /uploads/ch9_data-infrastructure.pdf
grade: year-3
semester: fall
course: data-driven-business-management
date: 2026-09-05
order: 9
published: true
---
##### Data Source
###### Internal Data Source
企业自身系统产生的数据

1. **Master Data**

Core business entities such as **customers (客户)**, **products (产品)**, and **suppliers (供应商)**.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765106589503-2f6a5a06-80a9-4325-b5cb-b8d63e0d60b3.png)

2. **Transactional Data**

Records of business activities and events, e.g., **orders (订单)**, **payments (付款)**, **inventory changes (库存变动)**.

Useful for operational analysis and financial reporting.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765106600114-360835a6-b92f-44c7-9f76-91e022e3ba97.png)

3. **Metadata (元数据)**

Data that describes other data, including **format (格式)**, **source (来源)**, and **update time (更新时间)**.

Critical for **data governance (数据治理)** and tracking.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765106618812-c1e8efd7-b48e-4197-9c24-bc97e4f5fdb2.png)

4. **Log Data (日志数据)**

Captures user and system actions, such as **clicks (点击)**, **system calls (系统调用)**, and **error records (错误记录)**.

Supports behavior analysis and system monitoring.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765106649567-87b10580-13d9-4524-a9f8-2fdf5831416c.png)

###### External Data Source
来自企业外部的第三方或公共数据  

1. **Partners**

Data from suppliers or customers for collaborative planning.

**如，supply chain planning (供应链计划)**, **customer demand forecasting (客户需求预测)**.

2. **Marketplaces (数据交易平台)**

<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">An online marketplace is a type of </font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">e-commerce platform</font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);"> where people exchange goods, services, or information.</font>

+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">Marketplaces have a multi-sided model with </font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">at least two distinct user groups</font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);"> (e.g., buyers and sellers, renters and providers). </font>
+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">They </font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">facilitate transactions </font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">between the user groups. </font>
+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">Customers can take actions like listing, browsing, booking, and purchasing directly on the platform. </font>
+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">Marketplaces </font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">do not usually own the inventory</font>**<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);"> themselves. </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765107139149-4770e2bc-adb7-451c-937d-cc8c175743e8.png)

<font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">Based on participant involvement, we have:</font>

+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">C2C (Consumer-to-Consumer) marketplaces</font>
+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">B2C (Business-to-Consumer) marketplaces</font>
+ <font style="color:rgb(34, 34, 34);background-color:rgb(250, 250, 249);">B2B (Business-to-Business) marketplaces</font>

Platforms to buy or sell data, providing insights into **market trends (市场趋势)** and **customer behavior (消费者行为)**.

Often used for competitive intelligence and strategic planning.

+ **Competitive Intelligence**: The process of collecting and analyzing information about competitors, markets, and industry trends to support business decisions. 
+ ** Strategic Planning:** The long-term process of defining goals, setting priorities, and allocating resources to achieve sustainable growth.  

| **Category** | **Advantage** | **Disadvantage** |
| --- | --- | --- |
| **Access ****to ****diverse ****data** | Enables access to a wide range of datasets across industries and domains 可获取跨行业、多领域的数据资源 | May include inconsistent or poorly documented data 数据可能缺乏一致性或文档不完整 |
| **Cost ****efficiency** | Reduces the need to build proprietary datasets from scratch 降低自建数据成本 | High-quality data may be expensive or locked behind licensing 高质量数据可能价格昂贵或受限于许可 |
| **Speed ****and ****agility** | Accelerates time-to-insight for analytics and decision-making 快速获取分析洞察，加快决策 | Risk of outdated or irrelevant data 存在数据过时或不相关的风险 |
| **Scalability** | Supports large-scale data acquisition for AI and analytics 支持大规模数据获取，适用于 AI 与分析 | Integration with internal systems can be complex 与内部系统集成可能复杂 |
| **Third-party ****enrichment** | Enhances internal data with external context (e.g., market trends, demographics) 可用外部数据丰富内部分析（如市场趋势、人口统计） | Potential privacy and compliance risks 存在隐私与合规风险 |


3. **Public Sources (公共数据来源)**

Data provided by governments or NGOs, such as **census (人口普查)** and **economic indicators (经济指标)**.

Useful for macro-level analysis and policy research.

---

##### Data System Architecture
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765107240336-fb52f5c3-ff2c-4bf9-b6d3-94fc3aba4537.png)

1. **<u>Source Systems</u>**
2. **<u>Ingestion</u>**
+ **提取（Extract）**：从数据源抓取原始数据
+ **转换（Transform）**：对数据进行清洗、格式转换、标准化等处理（如字段重命名、单位统一）
3.  **<u>Storage</u>**

| **Data ****Warehouse** | 数据仓库 | 面向**结构化**分析的集中式数据平台 |
| --- | --- | --- |
| **Data ****Lake** | 数据湖 | 存储**原始数据**的灵活平台，支持多种格式 |
| **Data ****Mesh** | 数据网格 | 分布式、以业务域为中心的数据架构，强调团队自治与协作 |


| **Data ****Warehouse** | High performance and scalability <br/>性能强，支持扩展   Supports concurrent users 可支持多用户**并发**访问 | Expensive to maintain and update **维护成本**高   Limited flexibility for new or changing data formats 对新数据源或格式适应性差 |
| --- | --- | --- |
| **Data ****Lake** | Flexible for any type of data 支持**任意数据类型**   Low-cost, scalable storage 存储成本低，易扩展   Compatible with multiple tools 可与多种分析工具兼容 | Low data quality and reliability 数据质量与**可靠性低**   Poor performance** 性能较差**   Difficult to locate relevant data 数据查找困难 |
| **Data ****Mesh** | Agile, decentralized data sharing <br/>敏捷的分布式数据共享   High data quality and interoperability 数据质量高，跨域兼容性强 | Complex to implement and manage 实施与管理复杂   **High overhead** and duplication 资源消耗大，数据重复   Requires strong **cross-team coordination **<br/>需跨团队高度协作 |




4. **<u>Analysis</u>**

分析阶段是对存储的数据进行处理与洞察：

+ **编程分析（Coding）**：使用 Python、SQL 等语言进行数据建模、统计分析
+ **工具分析（Tool）**：使用 BI 工具（如 Power BI、Tableau）进行可视化与业务分析
5. **<u>Exposure</u>** 数据呈现  
+ **报告（Report）**：生成 PDF、Word 等格式的分析文档
+ **仪表板（Dashboard）**：实时可视化界面，展示关键指标
+ **数据流（Data Stream）**：将数据实时推送给其他系统或服务，如 API 输出或消息队列

 【Governance 治理层贯穿全流程】  

治理是整个数据管道的核心保障，涵盖：

+ **数据质量管理**：确保数据准确、完整、一致 accuracy, completeness, and consistency
+ **安全与隐私保护**：控制访问权限，防止泄露 Control access rights and prevent unauthorized use or leakage
+ **合规性（Compliance）**：遵守 GDPR、PIPL 等法规
+ **元数据管理**：记录数据来源、变更历史、使用情况 Track data origin, transformation history, and usage context
+ **责任归属（Accountability）**：明确谁负责数据的创建、维护与使用



