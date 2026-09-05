---
title: Ch7_Data Analysis Types
type: note
attachments:
  - label: PDF
    file: /uploads/ch7_data-analysis-types.pdf
grade: year-3
semester: fall
course: data-driven-business-management
date: 2026-09-05
order: 7
published: true
---
#### What is Data Analysis ?
[https://www.coursera.org/articles/what-is-data-analysis-with-examples](https://www.coursera.org/articles/what-is-data-analysis-with-examples)

1. **<u>Identify</u>**<u> </u>- business **question** you'd like to answer.

> <font style="color:rgb(15, 17, 20);">What problem is the company trying to solve? </font>
>
> <font style="color:rgb(15, 17, 20);">What do you need to measure, and how will you measure it? </font>
>

2. **<u>Collect</u>** - raw data sets
3. **<u>Clean</u>** - prepare it for analysis (duplicate/ anomalous/ inconsistencies/ standardizing data structure and format/ syntax errors)
4. **<u>Analyze</u>** - techniques and tools 

->Find trends, correlations, outliers, and variations(变化). 

->Using **data mining** to discover patterns within databases or **data visualization **software -> graph

5. **<u>Interpret</u>**** **- 解释result 如何回答 business question

#### <font style="color:rgb(15, 17, 20);">4 types of data analysis </font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765099664506-8e069a82-6c87-4a6a-99a1-28c7327e343c.png)

1. **<u><font style="color:rgb(15, 17, 20);">Descriptive analysis</font></u>**<font style="color:rgb(15, 17, 20);">  描述定量数据</font>

**<font style="color:#2F4BDA;">What in the past</font>**？

Tells us what **happened**. This type of analysis helps describe or summarize **quantitative data** by presenting statistics.

2. **<u>Diagnostic analysis</u>**

diagnostic analysis determines the “**<font style="color:#2F4BDA;">why.</font>**” 

3. **<u><font style="color:rgb(15, 17, 20);">Predictive analysis</font></u>**

What **<font style="color:#2F4BDA;">might happen in the future</font>**?”

4. **<u><font style="color:rgb(15, 17, 20);">Prescriptive analysis</font></u>**

“**<font style="color:#2F4BDA;">What should we do about it?”</font>**

[<font style="color:rgb(0, 86, 210);">Prescriptive analysis</font>](https://www.coursera.org/articles/descriptive-predictive-and-prescriptive-analytics) takes all the insights gathered from the first three types of analysis and **uses them to form recommendations **for how a company should act.

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/webp/42556572/1762333240019-b4a69fda-7195-4b43-9bcb-230a4a8cd50a.webp)

---

<font style="color:rgb(232, 232, 232);background-color:rgb(31, 31, 31);">Data analysis:  RAW INFORMATION --> ACTIONABLE INSIGHTS</font>

[https://www.geeksforgeeks.org/data-analysis/what-is-data-analysis/](https://www.geeksforgeeks.org/data-analysis/what-is-data-analysis/)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/webp/42556572/1762333457136-c018e149-57f4-42f8-8762-b7c146ef8464.webp)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762333687393-6fe2f93a-0b5a-4dd2-8829-7eed6e6005b8.png)

|  | Exploratory Data Analysis (EDA) | Statistical Analysis |
| --- | --- | --- |
| **目的** | **发现**数据中的模式、异常、分布特征 | **验证假设**、建立模型、推断关系 |
| **阶段** | 分析初期，用于**理解数据** | 分析中后期，**用于回答研究问题** |
| **方法** | 可视化（图表）、描述性统计 | 推断统计、回归、假设检验等 |
| **是否假设驱动** | 非假设驱动（开放探索） | 假设驱动（目标明确） |
| **典型工具** | Histogram, Boxplot, Correlation Matrix | t-test, ANOVA, Regression, Chi-square |


---

### PPT CONTENT
#### Three Levels of Analytics
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762333779332-0e733dc9-9aae-4a2f-877e-1193ff348f49.png)

##### Descriptive Analytics
 Descriptive Analytics（描述性分析）是数据分析的基础阶段，主要用于**总结、可视化数据，识别趋势、异常值和变量关系**。  

1. **Summarizes and visualizes data**
+ Creates meaningful **summaries** of large datasets** 汇总** 
+ Uses statistical methods to describe key features **使用统计方法描述关键特征** → 包括中位数、平均数、标准差、分布形态、集中趋势等
2. **Explores main characteristics and patterns ****探索主要特征与模式**
+ Identifies trends, **<font style="background-color:#FBDE28;">outliers</font>****,** and**<font style="background-color:#FBDE28;"> relationships</font>**
+ Provides insights into <u>data distribution</u>** 提供数据分布的洞察** → 例如是否呈正态分布、偏态分布，是否存在多峰结构。
3. **Foundation for ****<u>financial</u>**** reporting and business analysis**

**财务报告与商业分析的基础**

+ Supports regulatory** compliance 支持合规性要求** → 确保数据报告满足审计、监管或行业标准。
+ Informs initial business decision-making 为初步商业决策提供信息支持 → 帮助企业识别机会、优化资源配置、制定策略方向。

---

###### **Relationship：****<u>Scatter Plot（散点图）</u>**
A scatter plot is a graph that displays the relationship **between two numeric variables** using dots

+ Useful for identifying correlations, trends, and outliers



###### **Outliers: ****<u>Box plot</u>**
A box plot is a visual representation of a dataset's **distribution** that uses a **five-number summary** to show its <u>median, quartiles, and range</u>

Compare and constract two or more group

| **箱体较小** | IQR 较小 | 数据集中在中间 50% 区间，波动小，稳定性高 |
| --- | --- | --- |
| **箱体较大** | IQR 较大 | 数据在中间 50% 区间分布广，波动大，稳定性低 |
| **箱体偏移** | 中位数不居中 | 数据偏态分布，可能左偏或右偏 |
| **箱体对称** | 中位数居中 | 数据分布较均匀，可能接近正态分布 |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/jpeg/42556572/1762335270722-faf73e7c-58da-49e8-8aa6-bd34adcf3286.jpeg)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762335352470-d31cc288-7994-4bad-8a21-8d4c82b9c80b.png)

---

###### <font style="color:rgb(41,41,41);">Descriptive Analytics - Key Steps</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762335448558-4d1416b5-cd68-4e10-bb9a-ad65096b3c7e.png)

1. **<u>Data Profiling</u>****（数据剖析）--> 提前理解data**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762335521223-bea95109-e6be-4de1-b494-3c620e1e3857.png)

Examines data** structure and quality**

Identifies data **types, formats, and ranges**

+ Data structure：数据的组织方式，包括字段名称、数据类型、层级关系等  

=> 决定数据是否可读、可处理。

2. **<u>Data Cleansing</u>**

**Corrects** or **removes** errors and inconsistencies

**Handles** **missing** values and outliers 

+ eg. 用平均数来补充
3. **<u>Data integration</u>**

**Combines data from multiple sources** 整合来自多个来源的数据

**Creates a unified view of the data** 创建统一的数据视图

**典型场景：**

+ 合并 CRM 与 ERP 数据
+ 整合线上与线下销售记录
+ 跨部门数据汇总（如财务 + 营销）

---

###### <font style="color:rgb(41,41,41);">Descriptive Analytics - Methods</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762336023097-76c721c9-32d8-467b-ac93-d90ab38ec74c.png)

1.  Outlier Detection（异常值检测）  
+ **Z-score**：衡量数据点与均值的偏离程度，通常超过 ±3 被视为异常。
+ **Box Plot（箱线图）**：通过 IQR（四分位距）识别异常值。
2.  Normalization（归一化）  

 将数据缩放到特定范围（如 0 到 1）->  应用于机器学习模型前的数据准备 

3.  Standardization（标准化）  

 将数据转换为均值为 0、标准差为 1 的分布 -> 减少异常值的影响  

4.  Imputation（缺失值填补）  

 用估算值替代缺失数据  

常见填补方式：

+ 均值填补, 中位数填补, 插值法（如线性插值）, 模型预测填补（如 KNN、回归）

###### <font style="color:rgb(41,41,41);">Descriptive Statistical Tools</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762336577028-ec5f470c-2ce2-49ab-8bc4-8ae11cfa9161.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762336588721-cf812ae7-d76c-451f-97ff-cb6c4a3a97a1.png)

---

###### <font style="color:rgb(41,41,41);">Feature Engineering</font>
 特征（Feature）是数据中用于**描述对象属性、行为或状态的变量**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762337731776-755e04e2-7a12-4dbd-99d6-a26b99238071.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762337446404-5d272ab9-cbf7-4143-9129-a4806d5262ba.png)

[https://www.geeksforgeeks.org/machine-learning/what-is-feature-engineering/](https://www.geeksforgeeks.org/machine-learning/what-is-feature-engineering/)

RAW DATA ->USEFUL FEATURE

<font style="color:rgb(255, 255, 255);background-color:rgb(19, 20, 23);">The goal is to make the model better by providing relevant and easy-to-understand information.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762336887862-924e393b-a636-40a2-9a78-c6232217eade.png)

Common **Techniques** in Feature Engineering

1. **One-Hot Encoding**: [One-Hot Encoding](https://www.geeksforgeeks.org/machine-learning/ml-one-hot-encoding/) converts** categorical **variables into **binary indicators**, allowing them to be used by machine learning models.
2. **Binning**: [Binning](https://www.geeksforgeeks.org/machine-learning/binning-in-data-mining/) transforms **continuous** variables into **discrete** bins, making them categorical for easier analysis.

```python
import pandas as pd

data = {'Age': [23, 45, 18, 34, 67, 50, 21]}
df = pd.DataFrame(data)

bins = [0, 20, 40, 60, 100]
labels = ['0-20', '21-40', '41-60', '61+']

df['Age_Group'] = pd.cut(df['Age'], bins=bins, labels=labels, right=False)

print(df)
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762337294109-59532b70-1944-40de-aa73-53d3b00df462.png)

3. **Feature Splitting**: Divides a** single feature** into **multiple sub-features**, uncovering valuable insights and improving model performance.

```python
import pandas as pd

data = {'Full_Address': [
    '123 Elm St, Springfield, 12345', '456 Oak Rd, Shelbyville, 67890']}
df = pd.DataFrame(data)

df[['Street', 'City', 'Zipcode']] = df['Full_Address'].str.extract(
    r'([0-9]+\s[\w\s]+),\s([\w\s]+),\s(\d+)')

print(df)
```

```plain
Full_Address      Street         City Zipcode
0  123 Elm St, Springfield, 12345  123 Elm St  Springfield   12345
1  456 Oak Rd, Shelbyville, 67890  456 Oak Rd  Shelbyville   67890...
```

---

| ① | 数据剖析 | Data Profiling | 识别字段**类型、格式、范围、缺失率** |
| --- | --- | --- | --- |
| ② | 数据清洗 | Data Cleansing | 修复错误、处理缺失值与异常值 |
| ③ | 数据整合 | Data Integration | **合并**多源数据，统一字段与粒度 |
| ④ | 特征工程 | Feature Engineering | **构造、选择、转换用于建模的特征** |
| ⑤ | 建模分析 | Modeling & Analysis | 应用统计模型或机器学习算法 |


**<u></u>**

**<u>特征工程的核心目标是：</u>**

**将原始数据转换为对模型更有意义、更具预测力的特征集合。**

1. 特征选择（Feature Selection）

**删除无关**或冗余特征

2. 特征转换（Feature Transformation）
+ **标准化、归一化**、对数变换、分箱（binning）
+ 示例：将“收入”取对数，减少极端值影响
3. 特征构造（Feature Construction / Feature Creation）
+ 从**现有变量中构造新特征**
+ 示例：
    - “年龄 × 活跃度” → 表示“高活跃老用户”
    - “月消费额 / 月访问次数” → 表示“平均客单价”
4. 特征**编码**（Feature Encoding）
+ 类别变量转为数值（如 One-Hot、Label Encoding）
+ 示例：“性别” → 男=0，女=1

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762337934945-5f3ed34b-4099-4faf-b4e3-81213723c404.png)

---

###### Reflection Questions：
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762339872897-caaf5a97-a5c5-4bf5-88e2-6cdcc3bfb401.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762339930772-cc1b46a5-5ce4-4d02-a910-0a6645cfc2cb.png)

---

##### Predictive Analytics
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762407442100-6a8af0c7-3956-4f5a-97e6-de62fcb57114.png)

###### Key Concept
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762407535482-ba379998-ed04-4aca-a7f2-7096140082ca.png)

1. Training and Test Datasets（训练集与测试集）

 ：强调“训练是学习，测试是验证”  

2.  Model Fitting（模型拟合）  - 调整模型参数 -> 误差最小化
3. 

| Bias | 偏差 | 模型过于简单，无法捕捉数据规律，导致预测误差大 |
| --- | --- | --- |
| Variance | 方差 | 模型过于复杂，对训练数据过度敏感，泛化能力差 |
| Tradeoff | 权衡 | 需在偏差与方差之间找到平衡点，避免过拟合或欠拟合 |


###### Methods
重点在于：需要了解各方法的特征 --> 判断特定情形如何使用。

1. **<u>Linear Regression</u>**** => ****<font style="color:#2F4BDA;">prediction 用于预测连续性结果</font>**

**Linear relationship **between variables  两个变量之间的关系可以用一次方程表示  

Predicts** continuous outcomes**  是指可以取<u>无限多个数值</u>的结果变量  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762407967459-f4c99472-c204-4e6f-8bef-392aad0b9262.png)

2. **<u>Logistic Regression</u>**** => ****<font style="color:#2F4BDA;">Classification 二分类问题</font>**

如，是否购买

 Models probability of **binary outcomes**

 信用违约预测、疾病诊断、用户流失分析 ** **

3. **<u>Decision Trees（决策树）</u>****=> ****<font style="color:#2F4BDA;">可解释性强但易过拟合</font>****  **

****Creates hierarchical decision rules 

Easily interpretable but prone to **overfitting ->** 泛化能力差

4. ** ****<u>Random Forests（随机森林)</u>****=> ****<font style="color:#2F4BDA;">准确性高，适合复杂任务</font>****  **

Ensemble of decision trees 

Improves **accuracy** and reduces **overfitting**

###### **Advanced Techniques**
1. **K-means Clustering（K均值聚类）**

Clustering ≠ Classification，是无监督学习，用于**发现**数据中的**自然分组**

**Groups similar** data points **into clusters** 将相似的数据点分组为簇

+ 根据距离将数据划分为 K 个组，每组有一个中心点（质心）
+ Useful for **<font style="color:#2F4BDA;">customer segmentation</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762408484751-193c7095-93ef-4069-9e68-138a3d94307e.png)

2. **K-Nearest Neighbors (KNN)（K近邻算法）**

Classifies based on **similarity to nearby points** 根据与邻近点的相似性进行分类

   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762408541128-afecd144-237f-4cf6-993c-dfe6411c7f42.png)

+ 判断新用户是否会购买，参考其行为最相似的历史用户
3. **Support Vector Machines (SVM)（支持向量机）**

Finds optimal hyperplane to separate classes 寻找最佳超平面以区分类别

+ 最大化类别间的边界距离，提高泛化能力
+ High-dimensional data

  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762408583062-ee2a0abd-89c3-4506-8b50-f28fecfbe2f0.png)

4. **Neural Networks（神经网络）**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762408724041-9c635375-db3d-4d76-bb44-95a2d105122e.png)

Models complex non-linear relationship

+ <u>深度学习基础</u>，处理图像、语音、自然语言等
+ 由多层神经元组成，模拟人脑信息处理方式

###### Predictive Analytics – <font style="background-color:#FBDE28;">Evaluation</font>
1. **Cross-validation（交叉验证）**

[https://www.geeksforgeeks.org/machine-learning/cross-validation-machine-learning/](https://www.geeksforgeeks.org/machine-learning/cross-validation-machine-learning/)

**Assesses** model **performance** <u>on multiple data subsets</u>

+ <font style="color:rgb(0,0,0);">Helps prevent overfitting</font>

_Check how well a machine learning model __**performs on unseen data**__ while __**preventing overfitting. => **_<font style="color:rgb(255, 255, 255);background-color:rgb(19, 20, 23);">Ensuring that all data points are used for both training and testing</font><font style="color:rgb(255, 255, 255);background-color:rgb(19, 20, 23);">.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1762409069943-7ceb6784-5821-4086-b212-ed61e528e054.png)     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/webp/42556572/1762409083205-5281908a-6f73-4f2c-9151-4f7836825386.webp)

| **<font style="color:rgb(255, 255, 255);">Feature</font>** | **<font style="color:rgb(255, 255, 255);">K-Fold Cross-Validation</font>** | **<font style="color:rgb(255, 255, 255);">Holdout Method</font>** |
| :---: | :---: | :---: |
| **<font style="color:rgb(255, 255, 255);">Data Split</font>** | <font style="color:rgb(255, 255, 255);">Dataset is divided into</font>**<font style="color:rgb(255, 255, 255);"> k folds </font>**<font style="color:rgb(255, 255, 255);">and </font>**<u><font style="color:rgb(255, 255, 255);">each fold is used once</font></u>**<font style="color:rgb(255, 255, 255);"> as test set</font> | <font style="color:rgb(255, 255, 255);">Dataset is </font>**<font style="color:rgb(255, 255, 255);">split once</font>**<font style="color:rgb(255, 255, 255);">, typically into training and testing sets</font> |
| **<font style="color:rgb(255, 255, 255);">Training & Testing</font>** | <font style="color:rgb(255, 255, 255);">Model is trained and </font>**<u><font style="color:rgb(255, 255, 255);">tested k times</font></u>**<font style="color:rgb(255, 255, 255);">, each fold serving as test set once</font> | <font style="color:rgb(255, 255, 255);">Model is</font>**<u><font style="color:rgb(255, 255, 255);"> trained once on training set and tested once on </font></u>**<font style="color:rgb(255, 255, 255);">test set</font> |
| **<font style="color:rgb(255, 255, 255);">Bias & Variance</font>** | <font style="color:rgb(255, 255, 255);">Lower bias, more reliable performance estimate and variance depends on k</font> | **<font style="color:rgb(255, 255, 255);">Higher bias</font>**<font style="color:rgb(255, 255, 255);"> if the split is not representative and results can vary significantly</font> |
| **<font style="color:rgb(255, 255, 255);">Execution Time</font>** | <font style="color:rgb(255, 255, 255);">Slower, especially for large datasets because model is trained k times</font> | **<font style="color:rgb(255, 255, 255);">Faster, </font>**<font style="color:rgb(255, 255, 255);">only one training and testing cycle</font> |
| **<font style="color:rgb(255, 255, 255);">Best Use Case</font>** | **<u><font style="color:rgb(255, 255, 255);">Small to medium datasets where accuracy estimation is important</font></u>** | **<u><font style="color:rgb(255, 255, 255);">Very large datasets or when quick evaluation</font></u>**<font style="color:rgb(255, 255, 255);"> is needed</font> |




2. **Grid Search（网格搜索）**

Systematically works through multiple model parameters 系统地遍历多个模型参数组合

+ 寻找最佳参数组合以提升模型性能
3. **ROC Curves（ROC 曲线）**

Plots true positive rate against false positive rate 绘制真正率与假正率的关系图

+ **作用**：评估分类模型的性能
+ **指标**：AUC（曲线下面积）越大，模型越好

示例：比较不同模型在疾病预测中的准确性

---

###### Reflection Question
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765098176198-93186e09-5c83-4f65-97e1-8b5d873399dc.png)

| Marketing 市场部 | Predictive analytics can** forecast customer behavior, ad effectiveness **广告效果**, and market trends.** It helps identify which campaigns will succeed and which customer groups are most likely to buy. |
| --- | --- |
| Sales 销售部 | It can forecast sales volumes 销售额, customer demand, and churn risk 流失风险. By analyzing historical sales data, sales teams can set realistic targets and focus on high-value customers. |
| **Operations** <br/>运营部 | Predictive analytics can forecast **inventory** needs 库存需求, production schedules 生产计划, and supply chain risks. This reduces stockouts or overstock 缺货或库存过剩 and optimizes resource use. |
| Human Resources <br/>人力资源部 | It can predict employee turnover 流失率, recruitment needs, and training effectiveness. HR can plan ahead to stabilize workforce and reduce hiring risks.<br/>人力资源部门能提前制定招聘和培训计划，稳定团队，降低风险 |
| Finance 财务部 | Predictive analytics can forecast cash flow, ROI, and financial risks. This helps optimize budgets and improve capital efficiency. |


| 维度 | 市场部 (Marketing) | 销售部 (Sales) |
| --- | --- | --- |
| **关注点** | 市场和客户需求 | 客户购买和成交 |
| **工作性质** | 战略性、长期性 | 战术性、短期性 |
| **关系** | 为销售创造机会 | 把机会转化为收入 |


---

##### Prescriptive Analytics
###### Overview
+ 是什么？**Recommends optimal actions** based on predictions
    - Integrates <u>predictive insights</u> with <u>decision optimization</u>
    - _<font style="color:rgb(22, 22, 22);">Prescriptive analytics is the practice of analyzing data to identify patterns, which can be used to make predictions and </font>__**<font style="color:rgb(22, 22, 22);">determine optimal courses of action</font>**_
    - _<font style="color:rgb(22, 22, 22);">Prescriptive analytics adds a</font>__**<font style="color:rgb(22, 22, 22);"> recommendation layer </font>**__<font style="color:rgb(22, 22, 22);">on top of predictive analytics, and differs from it in terms of focus, scope and approach.</font>_
+ 特征：
    - Uses **advanced techniques** to optimize decisions
    - Applies mathematical optimization and simulation  数学优化和模拟方法 
    - Considers **multiple scenarios** and **constraints**
+ 需求：
    - Requires robust data foundation and quality
        * Accurate and comprehensive data
        * **Various** data **sources** and **types**
            + Structured Data, Unstructured Data, Streaming Data, Time-Series Data

规范性分析是数据分析的最高层次，它不仅预测未来会发生什么，还进一步告诉你**应该怎么做**。它通过整合预测结果、优化算法和模拟技术，帮助企业在**<u>复杂约束下做出最优决策</u>**。

###### Methods
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765099013869-ae198ed2-5e31-4604-8f51-1d9b28a068d8.png)

1. Simulation 模拟现实系统和流程，测试不同情境与假设  
    -  用于测试“如果……会怎样”的情境，适合风险评估与资源调度。  
2. Graph Analysis  分析数据中的关系与连接，优化网络结构与流动  
    -  常用于物流、社交网络、交通等领域，优化路径与连接。  
3. <u>Complex Event Processing</u> 复杂事件处理： 分析**实时**数据流，识别并**响应事件**模式  
    - **金融交易监控**：识别欺诈行为或异常交易模式
    - **网络安全**：实时检测攻击行为或异常访问
    - **电商推荐**：根据用户行为实时调整推荐内容  
    - **交通系统**：分析实时交通流，优化信号控制  
4. Neural Networks 神经网络： 建模复杂的非线性关系，可用于预测与优化 
    -  处理复杂数据关系，既能预测，也能用于优化，例如在动态定价或个性化推荐中。  

###### Prescriptive Analytics Project Lifecycle
1. **Prescriptive Analytics Project Phases**

    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765099574816-05e5894d-ecc5-4aba-8fd1-174e0a37d4b4.png)

2. **Managing the project Lifecycle**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765099837890-78646eaa-9425-4eee-a892-57a8b93b4a02.png)

3. **Operationalizing Data Projects 数据项目的运营化**

Data Project： 数据项目是指任何围绕数据展开的结构化工作 any structured initiative，包括数据的采集、处理、分析和应用，目的是解决问题、生成洞察或支持决策。它可以是构建数据仓库 building a data warehouse、开发机器学习模型 developing machine learning models、或设计可视化仪表板 creating dashboards 等。  

将数据项目的<u>落地实施</u>分为四个关键维度：

+  **Managing Massive Amounts of Data**  管理海量数据

| Implement **scalable** storage solutions | 实施可扩展的存储解决方案 |
| --- | --- |
| Optimize **data processing** pipelines | 优化数据处理流程 |


随着数据量的爆炸式增长，企业必须采用可扩展的存储架构（如云存储、分布式文件系统 cloud storage and distributed file systems），并优化数据处理管道（如使用并行处理、批处理与流处理结合 parallel processing, batch processing, and stream processing），以确保数据能高效、安全地被采集、存储和分析。  



+ ** Addressing Data Silos  **

| Integrate data from **various sources** | 整合来自不同来源的数据 |
| --- | --- |
| Promote data **sharing across departments** | 促进部门间的数据共享 |


 解决方法包括使用统一的数据平台、API接口、数据湖等技术  



+  **Ensuring Data Quality  **

| Implement** data governance** practices | 实施数据治理机制 |
| --- | --- |
| Establish **data quality metrics and monitoring** | 建立数据质量指标与监控体系 |


****

+ **Coordinating Big Data/AI Initiatives  **

| Align projects with overall** data strategy** | 将项目与整体数据战略对齐 |
| --- | --- |
| Foster **collaboration** between teams | 促进团队间的协作 |


---

4. **Challenges in Data Projects**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1765100419735-dcf6caae-6357-4d36-aadc-3621e3479276.png)

---

#### Data Project Management
###### Overview
| Emphasizes collaboration and iteration | 强调协作与迭代 |
| --- | --- |
| Encourages cross-functional teamwork | 鼓励跨职能团队合作 |
| Aligns data projects with strategic objectives | 使数据项目与战略目标保持一致 |
| Allows for flexibility and continuous improvement | 允许灵活调整与持续改进 |
| Closely linked to business decisions | 与业务决策紧密关联 |
| Balances technical and business perspectives | 平衡技术视角与业务视角 |
| Emphasizes collaboration and iteration | 强调协作与迭代 |
| Focuses on delivering actionable insights | 关注输出可执行的洞察结果 |


数据项目管理不仅仅是传统项目管理的简单套用，它需要考虑数据的复杂性、实时性和跨部门协作。重点在于：

+ **技术与业务并重**：既要懂数据架构，也要理解业务目标；
+ **灵活迭代**：数据项目常常在探索中调整方向；
+ **战略对齐**：数据分析必须服务于企业战略，而不是孤立存在；
+ **可执行洞察**：最终目标是提供能指导行动的分析结果，而不是仅仅展示数据。

######  Agile Principles for Data Projects  
| Individuals and interactions over processes and tools | 重视个体与互动胜过流程与工具 |
| --- | --- |
| Prioritizes team communication and collaboration | 优先考虑团队沟通与协作 |
| Values people over rigid methodologies | 重视人而非僵化的方法论 |
| Working solutions over comprehensive documentation | 优先交付可用解决方案而非冗长文档 |
| Focuses on delivering functional data products | 关注交付可用的数据产品 |
| Emphasizes practical results over extensive paperwork | 强调实际成果而非繁复文书 |
| Customer collaboration over contract negotiation | 客户协作优先于合同谈判 |
| Involves stakeholders throughout the project | 项目全过程中都要让利益相关者参与 |
| Adapts to changing requirements and needs | 适应不断变化的需求与目标 |
| Responding to change over following a plan | 响应变化优先于严格遵循计划 |
| Embraces flexibility in project execution | 在项目执行中拥抱灵活性 |
| Allows for pivots based on new insights or challenges | 根据新洞察或挑战进行方向调整 |


敏捷原则在数据项目中尤其重要，因为数据分析往往充满不确定性和探索性。关键点包括：

+ **以人为本**：数据科学家、工程师、业务人员的协作是成功关键；
+ **快速迭代**：数据产品应快速上线、持续优化；
+ **灵活应变**：面对新数据、新需求，要能快速调整方向；
+ **客户参与**：让业务方持续参与，确保分析结果有用、可落地；
+ **减少文档负担**：重视实际交付而非形式主义。

---

###### SCRUM Framework for Data Projects
 SCRUM 是一种敏捷项目管理方法，强调**短周期迭代、团队协作和持续反馈**。在数据项目中，它帮助团队快速交付可用的数据产品，并根据反馈不断优化。  

| **Sprints** | Short, time-boxed periods for completing work   Usually 1–4 weeks in length | 短周期冲刺阶段，用于集中完成特定工作 |
| --- | --- | --- |
| **Daily ****Stand-ups** | Brief daily team meetings   Share progress, plans, and obstacles | 每日站会，快速同步进度、计划和遇到的障碍 |
| **Sprint ****Reviews** | Demonstrate completed work to stakeholders   Gather feedback and adjust priorities | 向利益相关者展示成果，收集反馈并调整优先级 |
| **Sprint ****Retrospectives** | Reflect on team processes and performance   Identify improvements for future sprints | 冲刺回顾，反思团队流程与表现，提出改进建议用于下一轮冲刺 |


SCRUM 框架下的数据项目通常涉及**三个核心角色**，每个角色承担不同职责，确保项目顺利推进。

| Product Owner <br/>产品负责人 | Represents stakeholders and defines project vision   Prioritizes backlog 任务优先级排序 and ensures value delivery |
| --- | --- |
| Scrum Master <br/>敏捷教练 | Facilitates Scrum process and removes obstacles   Coaches 指导 team on Agile practices |
| Development Team<br/>开发团队 | Cross-functional group that executes the work   Includes data scientists, engineers, analysts, etc.<br/>跨职能执行团队，包含数据科学家、工程师、分析师等，负责实际工作执行 |




