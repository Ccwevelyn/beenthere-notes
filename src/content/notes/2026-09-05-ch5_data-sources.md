---
title: Ch5_Data Sources
type: note
description: 重点：Internal /External data sources (dis)advantages
attachments:
  - label: PDF
    file: /uploads/ch5_data-sources.pdf
grade: year-3
semester: fall
course: data-driven-business-management
date: 2026-09-05
order: 6
published: true
---
:::warning
重点：Internal /External data sources (dis)advantages

:::

### What is Data sources?
 A data source is the origin or location from which data is extracted for analysis, processing, or display

#### Internal Data Sources
**Internal **data sources are data that the **<font style="color:#2F4BDA;">organization controls. </font>**

+  <u>Stored</u> and <u>managed</u> within the organization.  
+  Data：
    -  Proprietary 专有 - 拥有独立产权的数据
    -  Bought - 第三方市场购买（整合进组织内部系统/完全掌控数据
    -  Collected 

| **Sales/marketing data** | 包括客户<u>购买记录</u>、广告点击率、市场活动反馈等，**用于制定营销策略。** |
| --- | --- |
| **Finance data** | 包括<u>收入、支出、利润报表</u>等，用于财务分析与对外报告。 |
| **Production data **<br/>**- supplier** | 包括供应链信息、ERP系统中的产品价格与库存数据，用于生产计划与成本控制。 |
| **Human resources data** | 包括员工信息、绩效记录、招聘数据等，用于人力资源管理与组织发展。 |


##### Different types of Internal source
###### <font style="color:rgb(41,41,41);background-color:#FBDE28;">Sales/Marketing</font><font style="color:rgb(41,41,41);"> Data and Systems</font>
Plan, promotion based on costumer data.

+ <u>Customer Data</u> -  包括人口统计信息（demographics）、偏好（preferences）、行为（behaviors）
+ <u>Sales Data</u> -  销售管道（pipeline）、周期（cycle）、交易量（volume）、收入（revenue）、预测（forecasts）  
+ <u>Marketing Data</u> -  活动（campaigns）、销售渠道（channels）、投资回报率（ROI）、指标（metrics）

Pipeline（销售管道）：**潜在客户从接触到成交**的流程阶段。

```plain
潜在客户 → 初步接触 → 意向确认 → 报价 → 谈判 → 成交
```

 这是一个**流程模型**，但在 CRM 系统中，每个阶段都会被**数据化**

Cycle（销售周期）：完成一次销售所需的**时间**。

ROI（投资回报率）：衡量市场活动的投入产出比

Metrics（指标）：如点击率、转化率、客户获取成本等。

+ System：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760422498118-1240ba46-c905-4386-a21b-722b570ccd59.png)

| 客户关系管理系统（CRM） | 管理客户信息、销售流程、客户互动记录。支持销售团队协作与客户生命周期管理。 |
| --- | --- |
| 市场自动化系统 | 自动执行市场活动，如邮件营销、潜在客户培育。强调自动化的重要性。 |
| 网站分析系统 | 跟踪用户行为、流量来源、页面表现。用于优化网站内容与用户体验。 |


###### Finance Data and system
Financial report - report to stakeholder -> generated from the system

+ Related to money

| Revenues | 收入 | 企业通过销售产品或服务**获得的总金额**。 |
| --- | --- | --- |
| Expenses | 支出 | 企业运营过程中发生的**成本**，如工资、租金、采购等。 |
| Assets | 资产 | 企业拥有的**资源**，如现金、设备、库存等。 |
| Liabilities | 负债 | 企业需偿还的债务，如贷款、应付账款。 |
| Cash Flows | 现金流 | 企业现金的流入与流出情况。资金调度情况 |
| Budgets | 预算 | 对未来收入与支出的计划安排。 |
| Forecasts | 预测 | 对未来财务表现的预估，如销售预测、利润预测。 |
| Financial Ratios | 财务比率 | 如利润率、资产负债率等。 |


| **ERP  system** | **集成企业核心流程**，如财务、采购、库存管理。强调“集中化平台”与“自动化”。 |
| --- | --- |
| Business Intelligence system | **可视化分析财务数据**，生成图表与仪表板。用于决策支持与趋势洞察。 |
| Financial planning and analysis system | 用于预算编制、财务预测与模拟分析。支持战略财务管理。 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760423754655-600efb76-d104-4244-a842-a57fd9c2de8f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760423858337-833dee5b-0be4-4ae2-b73f-0f2352881c15.png)

###### Production Data and systems
+ Manufacturing or creation of goods and service data.
+ Supplier

| Production Volume 产量 | 指单位时间内生产的产品数量 |
| --- | --- |
| Costs | 包括原材料、人力、设备等成本， |
| Quality | 产品符合标准的程度，用于质量管理与客户满意度提升。 |
| Efficiency | 资源利用率，如单位时间产出，用于流程优化。 |
| Capacity 产能 | 最大可生产数量 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760424141742-f10dac16-6c79-4a17-a7dd-160585277d45.png)

+ MES -  实时监控生产过程，连接车间与管理层，实现生产调度与质量追踪。  
+ SCADA -  采集传感器数据，控制生产设备，适用于工业自动化场景。  
+ ERP - 企业资源计划系统 ->  管理生产计划、库存、采购等，与其他部门系统集成  

######  Human Resource Data and Systems  
| Recruitment 招聘 | 包括职位发布、简历筛选、面试安排等，用于人才获取。 |
| --- | --- |
| Retention 留任 | 员工保留率与流失率分析，用于组织稳定性评估。 |
| **Performance **(KPI) | 用于**评估**员工工作成果，如销售额、项目完成率。 |
| Compensation | 包括工资、奖金、福利等，用于薪酬管理与激励机制。 |
| Training | 员工技能提升与发展计划，用于人才培养与合规要求。 |


Also, HR retain employee by benchmarking with their parnter (external) - whether or not increase salary ->了解市场内同类型职务工资

| HRIS（人力资源信息系统） | 管理员工基本信息、入职流程、考勤记录等。 |
| --- | --- |
| HCM（人力资本管理系统） | 更全面的人力资源战略管理，包括绩效、继任计划、组织架构。 |
| 员工参与系统（Engagement） | 收集员工反馈、满意度调查，用于文化建设与员工体验优化。 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760424522215-5256db7b-1a44-40e8-8814-1e62bc098261.png)

---

##### Advantage
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760424781635-02c83a9e-b9ea-404b-b102-33108fc031ef.png)

##### Disadvantage
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760424995315-5ae8af06-2b2b-4a07-a381-6af5dfd7192b.png)

**Data silos** are isolated collections of data that are **trapped within specific departments or systems,** making them<u> inaccessible to the rest of the organization</u>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760425192774-ec1b38cc-4a89-4c7a-b9da-ae96cbdaf01b.png)

=>Inefficiency, Inconsistent, Poor decision-making, reduced productivity...

---

#### External data source
Data originating from outside the company

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760425265979-298601a4-2069-48d9-b1dc-9a3d3d986472.png)

| 商业平台数据 | **Job portals **and **career websites** | 招聘网站、职业平台，如 LinkedIn。 |
| --- | --- | --- |
| 学术 | **Patents** and **university data** | 专利数据库、高校研究成果 |
| 政府与统计数据 | Public **statistics** and **government** sources | 政府发布的统计数据，如人口普查、经济指标。 |
| 社会行为数据 | Social media and consumer **transactions** | 社交媒体行为、消费者交易记录，如 Twitter、电商平台数据。 |


   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760425498086-77d95497-16dc-4b83-93c6-7c9ee6741017.png)

如果交易发生在企业自有平台（如自营电商网站、POS系统），并由企业存储和管理，那就是 internal。  

##### Advantages
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760425923002-32d31e7a-107a-4a6b-a360-910e7969f72c.png)

independent third-party data collection（独立第三方数据收集）- 由**不属于**数据<u>使用方</u>的独立机构或平台进行的收集、整理、加工数据活动

相对于数据使用方，不存在 internal bias

##### Disadvantage
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760426161062-9921b195-0649-4a98-8575-4d4d825a8eb7.png)

1. **Limited Relevance**（相关性有限）

| May **not directly apply** to specific **business needs** | 可能与具体业务需求不直接相关 |
| --- | --- |
| Challenges in** interpretation and application** | 在理解与应用上存在困难 |


+ 某些数据虽然真实，但可能**不适用于当前业务场景**，例如行业数据太宽泛，无法支持具体决策。
+ 数据<u>结构或术语</u>不一致，导致**解释困难**，如外部数据使用不同的分类标准。



2. **Limited Quality**（质量有限）

| Varying standards and practices in data collection | 数据收集标准与方法不一致 |
| --- | --- |
| Potential for inaccuracies or inconsistencies | 可能存在不准确或不一致性 |


+ 不同机构使用不同的采集方式（如问卷 vs 爬虫），导致数据**标准不统一**。
+ 数据可能存在**缺失值、错误值、重复记录**，影响分析结果。



3. **Limited Accessibility**（可访问性有限）

| Legal, ethical, or technical restrictions | 法律、伦理或技术限制 |
| --- | --- |
| Potential costs for premium data sources | 高质量数据可能需要付费 |


+ 某些数据受限于**隐私法规（如GDPR）**或**商业协议**，无法自由使用。
+ 高质量数据（如行业报告、实时交易数据）通常需要**购买或订阅**，增加成本。

---

### 非重点内容
#### Data Collection Methods
##### Qualitative Methods -> In-depth
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760427951113-b50880d9-0ce4-4424-a1c8-1df9f4af5c3a.png)

##### Quantitative Methods -> Data
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760427957584-d782d611-fd1b-41d2-9a13-40697985fbd5.png)

##### Mixed Methods Research
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1760428117801-d694199f-4191-4c1a-811f-f69e14abee7c.png)\

| Convergent Parallel | 同时收集 | 并行分析后比较结果 |
| --- | --- | --- |
| Embedded | 主体中嵌入另一种数据 | 辅助解释主数据 |
| Explanatory Sequential | 先定量后定性 | 定性**<font style="color:#2F4BDA;">解释</font>**定量结果 |
| Exploratory Sequential | 先定性后定量 | 定量**<font style="color:#2F4BDA;">验证</font>**定性发现 |


1. Convergent Parallel Design ->  并行收敛设计  
2. Embedded Design ->  嵌入式设计  
    -  当定量研究为主，定性数据作为**<font style="color:#2F4BDA;">补充说明</font>**。  
    -  同步/嵌入式

| 定量为主 | 嵌入定性数据 | 问卷调查 + 开放式访谈 | 用访谈解释问卷结果中的异常 |
| --- | --- | --- | --- |
| 定性为主 | 嵌入定量数据 | 深度访谈 + 小规模量表 | 用量表验证访谈中提到的趋势 |


3.  Explanatory Sequential Design  ->  解释性顺序设计 
    -  当你发现定量结果有“为什么”的问题时，用定性方法补充解释。  
4.  Exploratory Sequential Design  ->  探索性顺序设计  



