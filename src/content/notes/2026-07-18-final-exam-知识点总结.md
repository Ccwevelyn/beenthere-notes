---
title: Final-exam 知识点总结
description: 本文件覆盖人工智能课程大部分知识点~ 静下心来看完，一定会有收获。但是，具体内容以老师为准。
attachments:
  - label: PDF
    file: /uploads/ai-期末整理.pdf
grade: year-3
semester: spring
course: artificial-intelligence
date: 2026-07-19
order: 2
type: note
published: true
---
#### **Evaluation metrics and the way to calculate them**
##### Evaluation metrics for classification algorithms
######  <u>Confusion Matrix 混淆矩阵</u>
+ 分类模型常用的评价工具， especially **binary classification. ** 
+ 直观展示模型预测的正确与错误情况，帮助我们分析模型在哪些地方容易出错  
+ 四个核心元素：
    - **True Positive (TP 真阳性)**：模型预测为正，实际也为正。
    - **False Positive (FP 假阳性)**：模型预测为正，但实际为负。
    - **True Negative (TN 真阴性)**：模型预测为负，实际也为负。
    - **False Negative (FN 假阴性)**：模型预测为负，但实际为正。

                            <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777103342164-82e412b2-8d7c-4152-9a06-cd62d7c553ec.png)

混淆矩阵是分类模型的基础工具，它记录了预测结果与真实结果的对应关系。它包含四个元素：TP、FP、TN、FN。所有评价指标（Precision、Recall、F1）都直接由这四个数值计算而来。   

###### <u>Evaluation Metrics 评价指标 </u>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777103418643-f1881608-1f9e-433b-b854-b2448152fa09.png)

1. **Precision 精确率**

+ 在所有预测为正的样本中，有多少是真正的正样本。
+ **Interpretation**: 高精确率意味着模型很少把负样本误判为正。

**2. Recall 召回率**

+ 在所有实际为正的样本中，有多少被模型正确识别。
+ **Interpretation**: 高召回率意味着模型漏掉的正样本很少。

3. **F1 Score 综合指标**

+ 精确率和召回率的调和平均数，用来平衡两者。
+ **Interpretation**: 当需要兼顾“准确”与“全面”时，F1是最佳指标。

###### <u>Confusion Matrix in Multi-class Classification   多分类混淆矩阵</u>  
                                         <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777103599852-85ac37de-85ef-481d-8b1e-4e50169ce243.png)

+ 在多分类问题中，混淆矩阵不仅显示二分类的 TP、FP、TN、FN，还扩展到多个类别。
+ 对角线上的数值代表正确分类的样本数；非对角线上的数值代表被错误分类的样本数。
+ 对角线数值越高，说明模型在该类别上的表现越好。

######  <u>ROC Curve</u>
+ **True Positive Rate (TPR):** how often the model <font style="color:#2F4BDA;">correctly predicts the positive</font> cases also known as Sensitivity or Recall.
+ **False Positive Rate (FPR):** how often the model <font style="color:#2F4BDA;">incorrectly predicts a negative</font> case as positive.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777103730559-9e2a0f5f-bfe1-4738-8653-23268192309c.png)

 ROC 曲线用于分析软分类器在不同阈值下的性能。  

 通过改变阈值，可以得到一条曲线，**<font style="color:#2F4BDA;">越接近左上角说明模型性能越好</font>**。  

+ **模型给概率**：每个样本都有一个预测概率。
+ **设阈值**：大于阈值 → 判为正类；否则 → 判为负类。
+ **算两个比率**：
+ 真阳性率 TPR = 正类里被判对的比例
+ 假阳性率 FPR = 负类里被判错的比例
+ **换阈值**：从高到低不断调整阈值，每次得到一个 (FPR, TPR) 点。
+ **连成曲线**：所有点连起来，就是 ROC 曲线。

---

【拓展】如何得到**完美分类器 (Perfect Classifier)**

1. **完美分类器的假设**
    - 所有正类样本的预测概率都比所有负类样本高。
    - 换句话说，模型能完全区分正类和负类，没有重叠。
2. **阈值变化下的表现**
    - 阈值很高时：几乎所有样本都判为负类 → TPR = 0，FPR = 0。
    - 阈值稍微降低：所有正类都被正确识别 → TPR 快速升到 1，而负类仍然不会被误判 → FPR 保持在 0。
    - 阈值继续降低：正类已经全部识别出来，负类才开始被误判 → FPR 才开始增加。
3. **曲线趋势**
    - 因为 TPR 能在 FPR 还没增加时就达到 1，所以曲线会迅速贴近左上角。
    - 这就是蓝线的形状：先竖直上升到 (0,1)，再水平延伸到 (1,1)。

---

###### <u>AUC</u> (Area Under the ROC Curve)  
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777104654152-cf5268ab-c911-403d-ab07-5de59a91b1a3.png)

用来量化 ROC 曲线表现的一个指标，**面积越大，说明模型在各种阈值下都能保持较高的 TPR 和较低的 FPR  **

+ AUC = 100% → 完美分类器。
+ AUC = 50% → 随机猜测（对角线）。
+ AUC 在 70%–90% → 模型有一定区分能力，越接近 100% 越好。

###### <u>ROC Curve in multi-class classification</u>
横轴是假阳性率 (FPR)，纵轴是真阳性率 (TPR)。左上角 (FPR=0, TPR=1) 是理想点。**<font style="color:#2F4BDA;">曲线越陡、面积越大，模型越好</font>**。  

**二分类 vs 多分类**：

+ 在二分类中，TPR 和 FPR定义很清晰。
+ 在多分类中，需要先把问题“二值化”，常见方法有：
    1. **One-vs-Rest (一对多)**：把某一类当作正类，其他所有类合并为负类。
    2. **One-vs-One (一对一)**：每次只比较两个类别，得到两类之间的 ROC。

                                       <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777104866739-db1ef44c-6af4-4a34-abe8-ea8e3df620ad.png)

---

##### Evaluation metrics for a ranked list of documents
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777105143920-0113b3de-003e-4159-b41a-bb1528db3e24.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777105237398-959824d8-f023-4e20-83b7-7a94a954aecb.png)

**Exercise 1: Rank-based Evaluation Metrics, MAP@K, MRR@K**

(a)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777105486355-346dbc6b-39f2-4648-b714-f1bbbdb7d8d6.png)

<font style="color:rgb(0,0,255);">AP@5 = (1.0+0.67+0.75)/3 =2.42/3 = 0.81</font>

<font style="color:rgb(0,0,255);">AP@10 =(1.0+0.67+0.75+0.67+0.71+0.6)/6 = 4.4/6 = 0.73</font>

<font style="color:rgb(0,0,255);">RR@5 = 1</font>

<font style="color:rgb(0,0,255);">RR@10 = 1</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777105491717-9b1af3dc-8c63-411a-89c8-13399c6b89ec.png)

<font style="color:rgb(0,0,255);">AP@5 = 0.5/1 = 0.5</font>

<font style="color:rgb(0,0,255);">AP@10 = (0.5+0.25)/2 = 0.75/2= 0.375</font>

<font style="color:rgb(0,0,255);">RR@5 = 1/2 =0.5</font>

<font style="color:rgb(0,0,255);">RR@10 = 1/2 =0.5</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777105497469-8725bf1e-b6c4-4eed-afef-9496ba23ed60.png)

<font style="color:rgb(0,0,255);">AP@5 = 0.3/1 =0.3</font>

<font style="color:rgb(0,0,255);">AP@10 =(0.3+0.29+0.33)/3 = 0.92/3 = 0.31</font>

<font style="color:rgb(0,0,255);">RR@5 = 1/3 =0.33</font>

<font style="color:rgb(0,0,255);">RR@10 = 1/3 =0.33</font>

(b)

<font style="color:rgb(0,0,255);">MAP@5 =(0.81+0.5+0.3)/3 =1.61/3 = 0.537,</font>

<font style="color:rgb(0,0,255);">MAP@10 = (0.73+0.375+0.31)/3 = 1.415/3 = 0.47</font>

<font style="color:rgb(0,0,255);">MRR@5 =(1+0.5+0.33)/3 = 0.61</font>

<font style="color:rgb(0,0,255);">MRR@10=(1+0.5+0.33)/3 = 0.61</font>

##### Evaluation metrics for clustering algorithms
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777105838926-ddc3fd46-081f-4564-94c6-d71dd29c8647.png)

###### **External Evaluation**
+ 外部评价是指将聚类**结果**与**已有的“真实标签”**进行比较。External evaluation compares** clustering results with known ground truth labels.**
    - 优点：能直接衡量聚类的准确性。
    - 缺点：需要有标注数据，而在实际应用中往往难以获得。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777106966004-79fa8a9a-90cf-46f5-9bb7-21a7a3ccdb82.png)

**<u>Rand Index (RI) 兰德指数</u>**

+ RI 衡量聚类**结果**与**真实标签的一致性**。
    - 它统计所有样本对之间的关系：
        * 如果两个样本在真实标签和聚类结果中**都**属于同一簇 → 真阳性 (TP)。
        * 如果两个样本在真实标签和聚类结果中**都**属于不同簇 → 真阴性 (TN)。
        * 如果聚类结果和真实标签不一致 → 假阳性 (FP) 或假阴性 (FN)。
+ 值范围：0 到 1，越接近 1 表示聚类结果与真实标签越一致。

**<u>Adjusted Rand Index (ARI) 调整兰德指数</u>**

**RI 的问题：**

+ Rand Index (RI) 衡量聚类结果与真实标签的一致性。
+ 问题是：即使随机聚类，也可能得到较高的 RI，因为有些样本对会“碰巧一致”。

**ARI 的核心思想**：

+ 在 RI 的基础上，减去随机情况下的期望一致性 (Expected RI)。
+ 再做归一化，让结果落在 [-1, 1] 区间。

**数值解释：**

+ **接近 1** → 聚类结果与真实标签高度一致。
+ **接近 0** → 聚类结果和随机聚类差不多。
+ **小于 0** → 聚类结果比随机还差。

###### **Internal Evaluation**
+ 内部评价不依赖外部标签，而是根据<u>数据本身和聚类算法的性质</u>来评估。

**<u>Silhouette Coefficient 轮廓系数</u>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777106115828-2d071bd8-7664-4d2d-a59d-d23eea3e9d88.png)

轮廓系数衡量一个样本在簇内的紧密度与簇间的分离度。  

+ a：该样本与**同簇内**其他点的平均距离（簇内紧密度）。
+ b：该样本与**最近簇**的平均距离（簇间分离度）。
+ 值范围：[-1, 1]，越接近 1 表示聚类效果越好。

**如果只用 **b−a：

+ 结果没有标准化，数值大小依赖于数据的尺度。
+ 比如簇间距离很大时，b−a 也会很大，但这并不一定意味着聚类效果更好。

**归一化 (Normalization)**：把结果限制在 [-1, 1] 区间，方便比较不同数据集或不同算法。

+ 如果 a 很小、b 很大 → 值接近 1，说明聚类效果好。
+ 如果 a 接近 b → 值接近 0，说明边界模糊。
+ 如果 a>b → 值为负，说明样本更接近其他簇，聚类效果差。

---

**<u>Davies-Bouldin Index 戴维斯-鲍丁指数</u>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777106329322-b5078c0f-7d91-4333-b7e3-f37278c180ef.png)

用来衡量聚类的可分离性

**计算方法**：

1.  For each cluster, compute intra-cluster variance (scatter). 对每个簇，计算**簇内方差**（也叫簇内散度，表示簇内点的分散程度）。
2.  Compute centroid distances between clusters (separation).  计算簇与簇之间的**质心距离**（簇间分离度）。
3. 计算相似度

                          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777106687907-fdb10e2d-4ebc-470f-9f93-0edc21c51225.png)

4.  For each cluster, find its most similar neighbor cluster.  **找到每个簇最相似的邻近簇 找到使 ****<font style="color:#DF2A3F;">R</font>**<sub>**<font style="color:#DF2A3F;">ij</font>**</sub>**<font style="color:#DF2A3F;"> 最大的那个簇</font>**， Divide the sum of their intra-cluster variances by the centroid distance.  把两者的簇内方差之和除以质心距离。
5.  Average across all clusters → DBI.  对**所有簇取平均值**，就是 DBI。
+ DBI ≥ 0，没有上限。
+ 越小越好，说明簇间分离度大、簇内紧密度高。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777106569693-6c1e55d4-d77b-4226-8a76-049c32f0cfee.png)

---

**<u>Calinski-Harabasz Index 卡林斯基-哈拉巴兹指数</u>**

CHI 是一种内部聚类评价指标，用来衡量**簇间分离度和簇内紧密度**的比值。 

+ CHI 越大 → 簇间差异明显，簇内紧密度高 → 聚类效果好。
+ CHI 越小 → 簇间不明显，簇内分散 → 聚类效果差。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777106821487-4e2165bd-ad89-4b24-a53f-29c7b7a88c05.png) 

**B**：簇间方差（各簇质心与整体均值的平方距离之和，按簇大小加权）。

**W**：簇内方差（各点与所属簇质心的平方距离之和）。

**n**：数据点总数。

**k**：簇的数量。

**惩罚项：**

+ 如果只用 BW（簇间方差 / 簇内方差），随着簇数 k 增加，簇内方差 W 会自然减小（因为簇越来越小、越来越紧密）。
+ 这样会导致指标值不断增大，即使聚类没有真正改善，也会“虚假变好”，出现过拟合。
+ **校正因子的作用**
+ n−k/k−1 引入了一个与簇数相关的比例：
    - 当簇数 k 很大时，分母 k−1 增大，因子整体减小 → 抑制过拟合。
    - 当簇数合理时，因子不会过度压缩指标值。

###### **Visual Evaluation**
+ 通过可视化手段（如散点图、降维投影）来观察聚类结果是否合理。虽然主观性较强，但在探索性分析中非常有用。
    - 优点：直观、易于理解。
    - 缺点：依赖人的判断，缺乏客观量化。

#####  How to compute the evaluation metric scores.
##### 考题预测
###### **Predicted Question 1: List and explain at least 4 classification evaluation metrics **
<font style="color:rgb(0,0,255);">List at least 2 metric for classification</font>

1. **Confusion Matrix** 
2. **Precision** 
3. **Recall** 
4. **F1 Score** 
5. **AUC (Area Under ROC Curve)**

###### **Predicted Question 2: Compute and explain MAP and MRR**
<font style="color:rgb(0,0,255);">Assignment 2, evaluate the quality of trival the document? AP MAP RR MRR p@5;</font>

+ **AP@K (Average Precision)** – Average precision of relevant documents within top K results.
+ **MAP@K (Mean Average Precision)** – Mean of AP@K across all queries.
+ **RR@K (Reciprocal Rank)** – Reciprocal of the rank of the first relevant document.
+ **MRR@K (Mean Reciprocal Rank)** – Mean of RR@K across all queries.

###### **Predicted Question 3: List and explain 1–2 clustering evaluation metrics 默写公式！**
<font style="color:rgb(0,0,255);">One or two evaluation matric for Clustering(eg.K-means; ),  How to compute.</font>

**Answer:**

+ **Rand Index (RI)** ：Measures agreement between clustering and true labels. Range [0,1], closer to 1 = better.
+ **Adjusted Rand Index (ARI)** ：Corrects RI by subtracting chance agreement. Range [-1,1], closer to 1 = better.
+ **Silhouette Coefficient**Balances intra-cluster cohesion and inter-cluster separation.
+ **Davies–Bouldin Index (DBI)** – Average similarity between clusters. Lower values = better clustering.
+ **Calinski–Harabasz Index (CHI)** – Ratio of between-cluster variance to within-cluster variance, adjusted by factor. Higher values = better clustering.

###### **Predicted Question 4: Explain ROC curve and AUC**
+ **ROC Curve** – Plots True Positive Rate (TPR) vs False Positive Rate (FPR) at different thresholds.
+ **AUC** – Area under ROC curve.
    - AUC = 1 → Perfect classifier.
    - AUC = 0.5 → Random guessing.
    - AUC between 0.7– 0.9 → Good discrimination ability.

---

#### AI-related concepts
##### What' s AI? 
Artificial Intelligence focuses on **developing intelligent systems** that can perform tasks that typically require human intelligence. 

AI致力于让机器：

+  感知（perceive） 推理（reason） 学习（learn） 决策（decide）

##### What' s Turing Test? <font style="color:rgb(0,0,255);">Provide the answer in your own words.</font> 
A** measure of a machine's ability to exhibit intelligent behavior indistinguishable from a human**. It involves a human evaluator chatting with both a human and a machine; the machine passes if the evaluator cannot reliably distinguish it from the human.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/webp/42556572/1777109624552-d5aed92d-0f98-4707-813a-77e01f0abe4f.webp)

##### What' s AI model? 
**AI model  用来表示问题并解决问题的一种方法或结构  **

Different approaches or frameworks that are used to represent and solve problems in the field of AI.

+ Represent（表示问题）--> 把现实问题变成机器能理解的形式，如 0/1
+ Framework / approach --> 用什么方式来解决  

**ANS**: AI model is a **method or framework** used to **represent real-world problems** in a form that machines can understand and to solve those problems using algorithms.

---

##### How to train an AI model?
训练AI模型是一个**迭代优化过程**：模型通过数据学习输入到输出的映射关系，并通过不断微调参数来最小化损失函数。 Training an AI model is an** iterative optimization process** in which a model learns a mapping function from input to output by **minimizing a loss function **through continuous** fine-tuning **of parameters based on data.  

1. **Problem Definition（问题定义）**

Define task and objective  明确任务（分类 / 回归等）

2. **Data Pipeline（数据流程）**
    1. **<u>Data Collection</u>**（数据收集）: 数据来源（传感器 / 数据库 / API） 
    2. **<u>Data Preprocessing</u>**（预处理）:Clean, normalize, transform  清洗、归一化、转换
    3. **<u>Feature Engineering</u>****（**特征工程）Extract meaningful features  提取有用信息
3. **Model Initialization（模型初始化）:**Initialize parameters -- 初始化参数（通常是随机
4. **Training Loop**（训练循环）整个训练是一个循环（Iteration / Epoch）
    1. **Forward Pass（前向传播）: **输入 → 输出预测； Input data is fed into the model to generate predictions.  
    2. **Loss Function（损失函数）**: A loss function is used to measure the difference between predicted output and true values.  
    3. **Backpropagation（反向传播**）用链式法则计算梯度
        * 本质：每个参数对误差的影响 
        * The gradients of the loss with respect to each parameter are computed using the chain rule.  
5. **Optimization（优化）-->****<u> (Fine-tuning): </u>**Update parameters

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774797882837-bb4713cf-df23-4a30-a81e-da446b92d84b.png)

+ **Fine-tuning** refers to the process of adjusting model parameters iteratively to minimize the loss function.   参数微调是指通过反复调整模型参数，使损失函数最小化的过程。  

这个过程会重复：

+  每个 batch 
+  每个 epoch 

 直到：loss 收敛（converge）

6. **Evaluation**

 The model is evaluated on test data to measure performance and generalization.   使用测试集评估模型的性能和泛化能力。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774797478425-198b1349-7b33-4a91-beb8-67312d96b5fb.png)

---

##### What're logic-based, reflex-based, variables-based, and states-based models?
<font style="color:rgb(0,0,255);"> (4 model, understand what are them, Given a model -> determine which model it belongs to,eg. Bayesian) </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774784899157-21ca59e8-1151-4d1f-9ca6-25b2b36efdac.png)

###### **<u>Logic-based models（逻辑模型)</u>**
+ Use **symbolic** representations and logical rules to perform reasoning.  
+ 符号 + 逻辑规则 =>  人把规则写好 → AI照规则推理  
+ 本质不是学习（learning）是推理（reasoning）

**Techniques**

+  Propositional Logic  命题逻辑 用“真/假命题”来表示知识。  
    - 没有变量（no variables） 只能整体判断 true / false  ，用逻辑符号（¬ ∧ ∨ ⇒） 
    - 不能表达复杂关系
+  First-Order Logic  FOL，一阶逻辑  
    -  在命题逻辑基础上加入“变量、对象和关系”，加入量词。
+  Knowledge Base 用逻辑表示的一组“事实 + 规则”。一个“存知识 + 会推理”的系统

###### **<u>States-based models（状态模型）</u>****  **
+ 反射模型太简单，无法处理需要提前思考的任务。但是 state-based model 可以，因为可以模拟未来状态
+ Represent problems as states and solutions as paths.   把问题表示为“状态”，把解表示为“路径”  <u>Represent a problem as a set of states and search for a path to a goal.</u>  
+ State = 一步一步“走到目标”-->**<font style="color:#DF2A3F;"> 搜索路径</font>**

```markdown
State-based models
│
├── 1. Search problems没有随机性，所有结果都由你决定  
├── 2. MDP Markov Decision Process (MDP) 环境有随机性，结果不完全可控。  
└── 3. Adversarial games 存在对手，会影响你的决策结果  
```

**Techniques**

+  Tree Search（DFS / BFS） 
+  Markov Decision Process (MDP)  MDP 是一种在“有随机性环境中做决策”的数学模型。  

```plain
MDP = (S, A, P, R)
```

+  S = States（状态） 
+  A = Actions（动作） 
+  P = Transition probability（状态转移概率） 
+  R = Reward（奖励） 

本质：不是找一条路，而是找**“长期最优策略”**

###### **<u>Variables-based models（变量模型）</u>****  **
+ Solve problems by assigning values to variables under constraints.   通过给变量赋值来解决问题（满足约束） **  找一组变量，让所有条件成立  **

**Techniques**

+  Constraint Satisfaction Problems (CSP)   找一组答案 → **不能违反任何规则**  
+  Bayesian Networks  变量是“有概率的“；变量之间互相影响；Bayesian = 找“最可能”的答案（概率）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774789498904-c069ae41-5a53-48cb-9acd-188b7fb517b0.png)

|  | **CSP** | **Bayesian** |
| --- | :---: | :---: |
| 类型 | 硬约束 | 概率 |
| 结果 | 唯一正确解 | 概率最高解 |
| 例子 | 数独 | 医疗诊断是否生病 -> 有这些症状 生病的概率是80% |


###### **<u>Reflex-based models（反射模型 / 学习模型）</u>****   **
+ Learn a mapping from input to output using data.   
+ Input → Model → Output  

**Most models found in learning**

+  Neural Networks, Regression, SVM, Decision Trees, KNN

**Techniques  给数据 → 学规律 → 直接输出答案  **

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774790017946-243a7c7a-9b75-4584-82b7-5f9e67b1812c.png)

    

1. <u>Reflex-based（Low-level）</u>

特点：输入 → 输出，直接映射（no thinking） 没有记忆、没有推理 

例子：回归、分类、神经网络 

2. <u>State-based（中层）</u>

特点：有“状态 + 步骤” 可以规划（planning）、搜索路径 

本质：sequence of decisions 

例子：搜索、MDP、博弈 

3. <u>Variable-based（中高层）</u>

特点：变量之间有关系（可能有不确定性） 

能力：处理概率、不确定性 

本质：建模变量之间的依赖 

例子：Bayesian network、CSP 

4. <u>Logic-based（High-level） </u>符号 + 规则 + 推理 

---

##### How to design an AI system?<font style="color:rgb(0,0,255);"> </font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774795454194-583c1f97-9828-4466-99f2-883738e46b51.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774795471378-8b56d6ec-0cb9-4a02-8e0c-76f1b43d57c7.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774795487754-348c3f48-571f-43df-9187-ab2304cf2e02.png)

##### <font style="color:rgb(0,0,255);">Supervised/Semi/Un -main difference among them, define in your own words(What is)</font>
| 类型 | 标签 | 数据量 | 目标 |
| :---: | :---: | :---: | :---: |
| Supervised | 有标签 | 中等 | 学映射关系 |
| Unsupervised | 无标签 | 大 | 找结构 |
| Semi-supervised | 少量标签 | 很大 | 提升性能 |


###### <u>Supervised Learning（监督学习)</u>
+ Supervised learning uses** labeled data** to train a model. **带标签的数据**
+ 模型做的事情是：学习 **输入 → 输出的映射关系**
+ 常见任务: Classification, Regression（回归、预测价格） 
+ **优点 Advantages:**
    -  准确率高（High accuracy） 
    -  可控性强（Predictable） 
+ **缺点 Disadvantages:**
    -  需要大量标注数据（Label expensive） 
    -  人工成本高（Manual effort） 

###### <u>Unsupervised Learning（无监督学习）</u>
+ Unsupervised learning uses data **without labels**.
+ 模型需要：Discover hidden patterns or structure in data   发现数据中的**潜在结构**
+ 常见任务：Clustering, Dimensionality Reduction
+ **优点 Advantages:**
    -  可发现未知规律（Discover new patterns） 
+ **缺点 Disadvantages:**
    -  结果难解释（Hard to interpret） 
    -  不一定符合真实需求（Uncertain usefulness） 

###### <u>Semi-supervised Learning（半监督学习）</u>
+ Semi-supervised learning uses **a small amount of labeled data + large amount of unlabeled data**  
半监督学习使用**少量有标签 + 大量无标签数据**
+ **核心思想:** Use labeled data to guide learning, and unlabeled data to improve generalization  用少量标签“引导”，用大量数据“增强”
+ 半监督学习先通过有**标签数据学习映射关系**，再利用**无标签数据理解数据结构**，从而提升模型性能 
+ **优点 Advantages:**
    -  降低标注成本（Less labeling cost） 
    -  提高性能（Better performance than unsupervised） 
+ **缺点 Disadvantages:**
    -  实现复杂（More complex） 

---

##### 考题预测
###### **Predicted Question 1：What is AI?**
Artificial Intelligence (AI) is the field of building systems that can perform tasks requiring human intelligence, such as **perception, reasoning, learning, and decision-making**.

###### **Predicted Question 2：What is the Turing Test?**
The Turing Test measures whether a machine can exhibit intelligent behavior indistinguishable from a human. A human evaluator interacts with both a person and a machine; if the evaluator cannot reliably tell them apart, the machine passes.

###### **Predicted Question 3：What is an AI Model?**
An AI model is a **framework or method** used to represent real-world problems in a machine-readable form and solve them using algorithms.

+ Example: Neural networks, decision trees, Bayesian networks, K-means.

###### **Predicted Question 4：How to Train an AI Model?**
Training is an **iterative optimization process**:

1. Define the problem (classification, regression).
2. Collect and preprocess data.
3. Initialize model parameters.
4. Training loop: forward pass → loss function → backpropagation → optimization.
5. Fine-tune parameters until loss converges.
6. Evaluate on test data for performance and generalization.

###### **Predicted Question 4：Types of AI Models (4 categories)**
( 是什么？+ difference + 例子）

1. **Reflex-based models**：Direct input-output mapping, no memory or reasoning.
    - Examples: **Regression, SVM, Neural Networks.**
2. **State-based models** ：Represent problems as states and search for paths/strategies.
    - Examples: **Search algorithms, Markov Decision Processes, adversarial games**.
3. **Variable-based models**： Solve problems by assigning values to variables under constraints or probabilities.
    - Examples**: Constraint Satisfaction Problems (Sudoku), ****<u>Bayesian Networks</u>****.**
4. **Logic-based models**: Use symbolic rules and logical reasoning.
    - Examples: **Propositional Logic, First-Order Logic, Knowledge Bases.**

###### **Predicted Question 5：Supervised, Semi-supervised, and Unsupervised Learning**
（定义 + 例子）

1. **<u>Supervised Learning</u>**
+ Uses labeled data to learn the mapping from input → output.
    1. **Support Vector Machine** (SVM)for classification (e.g., spam email detection).
    2. **Linear Regression **for predicting house prices.
    3. **Decision Trees** for medical diagnosis.
    4. **K-Nearest Neighbors (KNN)** classifies a new data point based on the majority label of its _k_ nearest neighbors in the training set.  
2. **<u>Unsupervised Learning</u>**
+ Uses unlabeled data to discover hidden patterns or structures.
    1. **K-means** clustering for customer segmentation.
    2. Principal Component Analysis **(PCA) **for dimensionality reduction in image compression.
3. **<u>Semi-supervised Learning</u>**
+ Combines a small amount of labeled data with a large amount of unlabeled data to improve performance.
    1. **Text classification** where only a few documents are labeled, but many unlabeled documents help improve accuracy.
    2. **Image recognition**(e.g., labeling a small set of medical images, then using thousands of unlabeled ones to boost performance).
    3. **Speech recognition **where limited transcribed audio guides learning, and large amounts of raw audio improve generalization.

**Main difference:**

Supervised = labeled data, Unsupervised = no labels, Semi-supervised = mix of both.

###### **Predicted Question 6：How to Design an AI System**
如图。

###### **Predicted Question 7：**How to train an AI model? <font style="color:rgb(0,0,255);"> </font>
Training an AI model is an **iterative optimization process** where the model learns to map inputs to outputs by minimizing errors through repeated adjustments of its parameters.

**Steps:**

1. **Problem Definition**
    - <font style="color:rgb(0,0,255);">Define the task (classification, regression, clustering, etc.) and the objective.</font>
2. **Data Pipeline**
    - **Data Collection**<font style="color:rgb(0,0,255);">: Gather data from sensors, databases, or APIs.</font>
    - **Preprocessing**<font style="color:rgb(0,0,255);">: Clean, normalize, and transform data.</font>
    - **Feature Engineering**<font style="color:rgb(0,0,255);">: Extract meaningful features.</font>
3. **Model Initialization**
    - <font style="color:rgb(0,0,255);">Set initial parameters (often random).</font>
4. **Training Loop**
    - **Forward Pass**<font style="color:rgb(0,0,255);">: Input data → model prediction.</font>
    - **Loss Function**<font style="color:rgb(0,0,255);">: Measure difference between prediction and true values.</font>
    - **Backpropagation**<font style="color:rgb(0,0,255);">: Compute gradients of loss w.r.t. parameters.</font>
    - **Optimization**<font style="color:rgb(0,0,255);">: Update parameters to reduce loss.</font>
5. **Fine-Tuning**
    - <font style="color:rgb(0,0,255);">Iteratively adjust parameters until the loss converges (error stabilizes).</font>
6. **Evaluation**
    - <font style="color:rgb(0,0,255);">Test the model on unseen data to measure performance and generalization.</font>

---

#### The principles of traditional search algorithms such as Depth First Search, Breadth First Search, Cost First Search, A* Search, Best First Search, Simulated Annealing Search etc.
##### 知识点总结
###### Search 的分类
+ **无信息搜索**：像摸黑走路，只靠规则。
+ **有信息搜索**：像拿着地图和提示，更快找到目标。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777112198259-d8696b4d-7d9c-433d-97ae-e3da461acf60.png)

1. **无信息搜索（Un-informed / Blind Search）**

这种方法不依赖额外的知识，只是按照固定规则去探索：

+ 深度优先搜索 (**DFS**)：先走到最深的分支再回溯
    - 深度限制 (**DLS**)：设定最大深度，避免无限下探
    - 迭代加深 (**Iterative Deepening**)：逐步增加深度限制，兼顾效率和完整性
+ 广度优先搜索 (**BFS**)：一层一层展开，保证最短路径
+ 代价优先搜索 (**CFS**)：优先选择代价最小的路径
2. **有信息搜索（Informed / Heuristic Search）**

这种方法利用启发式信息（经验或估计）来更聪明地搜索：

+ **最佳优先搜索 (Best-First Search)**：根据启发式函数选择最优节点
    - **A\***：结合代价和启发式，常用且高效
+ **爬山算法 (Hill Climbing)**：不断选择更优的方向，但可能陷入局部最优
+ **约束满足 (Constraint Satisfaction)**：通过满足条件来缩小搜索范围

###### 表示
**State Space Graph**

+ 状态空间图是由 **状态 (state)** 组成的图，每个状态用一个节点表示。
+ 节点之间的箭头表示从一个状态到下一个状态的 **可能转移 (successor)**。
+ 它展示了系统在不同时间可能处于的所有状态。
+ 状态空间图可能包含 **环路 (loop)**，即某个状态可以回到之前的状态。

**Search Tree**

+ 搜索树是图的一种特殊形式。
+ 树的最顶端节点称为 **根节点 (root node)**，所有操作从根节点开始。
+ 在搜索树中，每一个节点代表的是 **一条路径 (path)**，而不仅仅是一个状态。
+ 这条路径对应于在状态空间图中采取的一系列动作，最终到达该节点的状态。
+ 因此，搜索树不仅表示状态，还表示 **计划 (plan)** 或 **动作序列 (sequence of actions)**。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777112633916-c14d83d2-b283-4e54-9ea8-ba5b1859c212.png)

###### 算法详解
1. **<u><font style="color:#D22D8D;">Depth-First Search (DFS)</font></u>**
+ 策略：优先扩展最深的节点。 Expand the **deepest node first**.  
+ 实现方式：使用 **栈 (LIFO, 后进先出)** 来存储前沿节点。
+ 工作流程：沿着一条路径尽可能深入，直到不能再扩展，再回溯到最近的分叉点，尝试其他路径

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777112935247-8311c1c9-912a-4e95-8c39-468f58b98e03.png)



2. **<u><font style="color:#D22D8D;">Breadth-First Search（BFS）</font></u>**
+ 策略： 优先扩展最浅的节点。 Expand the **shallowest node first**.  
+ 实现方式 (Implementation)： 使用 **队列 (FIFO, 先进先出)** 来存储前沿节点。
+ 工作流程 (Process)： 在决策树中，先完全搜索当前层的所有节点，再进入下一层。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777113141109-c1545346-06e2-4ae9-855a-afc532d315e4.png)



3. **<font style="color:#D22D8D;"> Uniform Cost Search（UCS）</font>**
+ g(n)：从起点到节点 n 的路径代价。
+ 策略： <font style="color:rgb(0,0,0);">expand lowest </font><font style="color:rgb(204,0,204);">g(n)</font>
+ 实现方式： 使用 优先队列 (priority queue)，按照 g(n) 排序。
+ 搜索顺序不是按字母，也不是按层次，而是**严格按照数字大小**来决定。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777114276412-6c783210-4486-4c13-989f-e6c755f01bfc.png)

 S(0) → P(1) → D(3) → B(4) → E(5) → A(6) → R(7) → F(8)→ E(9)  → G(10)  



4. **<font style="color:#D22D8D;">Greedy Search</font>**
+ 策略：扩展看起来最接近目标的节点 Expand the node that seems closest to the goal.  
+ 它依赖一个启发式函数 h(n)，通常是从当前节点到目标的直线距离或估计代价。

           <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777115111605-0aeef6d2-15f1-4f8b-a228-b61d32cab843.png)



5. **<u><font style="color:#D22D8D;">A* Search</font></u>**
+ <font style="color:rgb(0,0,0);">A* = tree search with priority queue ordered by </font><font style="color:rgb(211,3,202);">g(n) + h(n) </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777115189235-50d6ec3a-5ad5-4e3c-bcda-9dc33bd5e358.png)

|  | **Uniform-cost Search** | **Greedy Search** | **A* Search** |
| --- | --- | --- | --- |
| **排序依据** | 路径代价 g(n) | 启发式估计 h(n) | 综合代价 f(n)=g(n)+h(n) |
| **Strategy** | 扩展累计代价最小的节点 | 扩展看起来最接近目标的节点 | 扩展综合代价最小的节点 |
| **完整性** | 完整 (解存在则能找到) | 不完整 (可能陷入死路) | 完整 (在合理条件下) |
| **最优性** | 保证最优解 | 不保证最优解 | 保证最优解 (启发式可采纳时) |
| **Efficiency** | 慢，可能扩展很多节点 | 快，但可能走弯路 | 高效，结合了 UCS 的最优性和 Greedy 的速度 |
| **优点 ****(Pros)** | 不依赖启发式，保证最优 | 简单快速 | 既快又保证最优 |
| **缺点 ****(Cons)** | 时间和空间复杂度高 | 不保证最优，可能走弯路 | 需要设计合理的启发式函数 |




6. **<u><font style="color:#D22D8D;">Simulated Annealing</font></u>**
+ 模拟退火模仿的是物理学中“退火”过程：金属加热后逐渐冷却，原子会逐步稳定到能量最低的状态。
+ 在算法中，它从一个初始解开始，不断随机扰动（改变）当前解。
+ 如果新解更好，就接受它；如果更差，也可能以一定概率接受。
+ 这种“接受坏解”的概率会随着迭代次数逐渐降低，就像温度慢慢下降一样。

**普通随机搜索**：只是一遍遍试不同解，效率低，容易停在局部最优。

**模拟退火**：在随机尝试的基础上，加了一个“温度”控制机制：

+ 初期温度高 → 容易接受差解，探索范围大。
+ 后期温度低 → 只接受更好的解，逐渐收敛。

**核心步骤 (Key Steps)**

1. **定义问题 (Define the problem)：**确定目标函数（能量函数），比如 TSP 的总路径长度。
2. **初始化 (Initialization)：**设置初始温度和初始解。
3. **迭代 (Iteration)：**
    - 随机扰动当前解，得到新解。
    - 根据能量差和当前温度，决定是否接受新解。
4. **降温 (Cooling)：**温度逐渐降低，接受坏解的概率越来越小。
5. **终止 (Termination)：**当温度足够低或迭代次数达到上限时，输出当前最优解。

**优缺点 (Pros & Cons)**

+ **优点：**能跳出局部最优，找到更好的解；算法简单，容易实现。
+ **缺点：**收敛速度可能慢。需要合理设置温度下降策略，否则效果差。

##### 考题预测
###### **Predicted Question 1：**There are a number of search algorithms, such as DFS, BFS, A*, Simulated Annealing Search. In which setting, which algorithm works better than others? 
+ **Depth-First Search (DFS):** DFS works better when the solution is deep in the search tree or when memory is limited. It explores one branch fully before backtracking. DFS 更适合解在深层，或者内存有限的情况。它会沿着一条路径一直走到底，再回溯。
+ **Breadth-First Search (BFS):** BFS is more effective when the solution is shallow or when we need the shortest path in an unweighted graph. It expands nodes level by level. BFS 更适合解在浅层，或者在无权图中寻找最短路径。它逐层扩展节点。
+ **Uniform Cost Search (UCS):** UCS is useful when edges have different costs and we need the least-cost path. It guarantees optimality by expanding the lowest cumulative cost first. UCS 在边权不同的情况下很有用，能保证找到代价最小的路径。
+ **A* Search:** A* performs best when a good heuristic is available. It combines path cost and heuristic estimate, ensuring both efficiency and optimality. A* 在有合理启发式函数时最优，结合路径代价和启发式估计，既快又保证最优。
+ **Simulated Annealing:** Simulated Annealing is suitable for large-scale optimization problems like the Traveling Salesman Problem. It uses randomness and probability to escape local optima and approximate global solutions. 模拟退火适合大规模复杂优化问题，比如旅行商问题。它通过随机扰动和概率接受坏解来跳出局部最优，找到近似全局解。

###### **Predicted Question 2：**Given a dataset with the data organized in a <u>tree structure</u>, what's the <font style="color:rgb(0,0,255);">order</font> of the nodes in the tree when applying the given search algorithm? 
<font style="color:rgb(0,0,255);">（用不同search方法，order是什么）</font>

###### **Predicted Question 3：**How does <font style="color:rgb(0,0,255);">A*</font> search work for the Romania travelling problem and the N-puzzle problem? 
1. **<u>Romania travelling problem</u>**
+ g(n)： 保证真实性，反映已经付出的代价。
+ h(n)： 提供方向性，帮助搜索更快接近目标。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777116548442-4825a8ae-d784-4963-aaf2-a586a09087f7.png)

**真实路径代价 g(n)**

+ **定义：** 从起点到当前节点的实际代价。
+ **代表：** 已经走过的路程或花费。它是真实的、累积的，不会改变。

**启发式估计 h(n)**

+ **定义：** 从当前节点到目标的估计代价。
+ **代表：** 还剩下的路程的“猜测”，通常用直线距离或其他近似方法。
+ **h(n) 的来源：** 因为我们不知道到目标的真实剩余代价，所以用一个“估计函数”来近似。
+ **在路径问题中：** h(n) 通常取直线距离（比如地图上城市到 Bucharest 的直线距离）。



2. **<u>N-puzzle problem</u>**
+ **定义：** 一种滑块拼图游戏，有 8 个数字方块和 1 个空格，放在 3×3 的格子里。
+ **目标：** 通过移动空格，把方块排列成目标状态（通常是 1–8 顺序加一个空格）。
+ **动作规则：** 空格可以上下左右移动，与相邻方块交换位置。

          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777117155520-9d709acb-1390-4509-9979-b9f224e6041d.png)

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777117267537-19ddc71c-fc49-4857-a004-a26ac6da342e.png)

**g(n)** = 已经走过的步数（真实代价）。

+ **g(n) = 已经走过的真实路径代价**。
+ 它的作用是 **防止算法只贪图“看起来近”**，而忽略已经付出的代价。

**h(n)** = 还需要的估计步数（启发式） h(n) 可以是“**错位方块数**”或“曼哈顿距离”  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777117316175-9399bb45-b28c-4538-99b3-e7eaef626739.png)

---

###### **Predicted Question 4：**<font style="color:rgb(0,0,255);">2 种function F(x) = H(x)+G(x)  这两个function如何作用在F上的?</font>
In A* search, the evaluation function is defined as ** F(x)=G(x)+H(x)**

+ **G(x):** the actual cost from the start node to the current node. It represents the path cost already incurred. 已经走过的真实代价，表示从起点到当前节点的累计路径成本。  
+ **H(x):** the heuristic estimate of the cost from the current node to the goal. It represents the expected remaining cost. 启发式估计，表示从当前节点到目标的预计剩余代价。  
+ **F(x):** Combines both, giving the estimated total cost of a solution path that goes through node x. 两者之和，代表“经过当前节点到达目标的总估计代价”。  

The algorithm always expands the node with the **lowest F(x). **This ensures that the search balances between exploring nodes that are cheap so far (**low G(x)**) and nodes that appear close to the goal (low **H(x)**). 算法每次选择 **F(x) 最小的节点** 扩展。这样既考虑了已经付出的代价 (G)，又考虑了未来的估计 (H)，在速度和最优性之间取得平衡。 

If the heuristic H(x) is admissible (never overestimates), A* guarantees finding the optimal solution.  只靠 H 就是贪心，可能走弯路；只靠 G 就是 UCS，效率低；结合两者就是 A*，既快又保证最优 

---

###### **Predicted Question 5：**The principles of traditional **search** algorithms such as Depth First Search, Breadth First Search, Cost First Search, A* Search, Best First Search, Simulated Annealing Search etc.
+ **Depth First Search (DFS)**：DFS explores as far as possible along one branch before backtracking.** **深度优先搜索会沿着一条路径一直走到底，再回溯到最近的分叉点继续探索。适合深层解，但不保证最优。
+ **Breadth First Search (BFS)**：BFS expands the shallowest nodes first, exploring level by level.** **广度优先搜索逐层扩展节点，先找浅层解，能保证在无权图中找到最短路径，但需要大量内存。
+ **Cost First Search** (Uniform Cost Search, UCS)：UCS expands the node with the lowest cumulative path cost g(n).一致代价搜索按累计代价扩展节点，能保证找到最优解，但效率可能较低。
+ **A* Search**：A* combines path cost g(n)and heuristic estimate h(n), expanding the node with the lowest f(n)=g(n)+h(n). A* 搜索结合真实代价和启发式估计，既快又保证最优，是实际应用中最常用的搜索算法。
+ **Best First Search(Greedy Search)。** Best First Search expands the node that seems closest to the goal, based only on heuristic h(n).最佳优先搜索只依赖启发式估计，速度快，但不保证最优，可能走弯路。
+ **Simulated Annealing Search**：Simulated Annealing starts with a solution and iteratively perturbs it, sometimes accepting worse solutions with a probability that decreases over time, to escape local optima.** **模拟退火搜索从一个初始解开始，不断随机扰动，并以一定概率接受更差的解，这个概率会随时间降低，从而跳出局部最优，适合复杂优化问题。

###### **Predicted Question 6：**Given the data, there are many search algorithm, which algorithm should be better in the figure? （记忆图片）
---

#### How clustering algorithms work for us. E.g., understanding the principle of K-Means.
##### 知识点总结
###### Elbow method
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777121225282-cce8e887-4c6e-4960-9ec5-ba0688961441.png)

肘部法是一种常用来确定 **最佳簇数 K** 的方法。它通过计算 **平方误差和 (SSE, Sum of Squared Errors)** 来衡量聚类效果。

+ SSE 表示每个点到其簇中心的距离平方和，数值越小，说明簇内数据越紧密。
+  对每个簇 C<sub>k</sub>，计算所有点到簇中心 μ<sub>k</sub> 的距离平方，再对所有簇求和  

**肘部法的核心：** 找到 SSE 曲线的拐点，作为最佳簇数。

**意义：** 在过少簇数（误差大）和过多簇数（过度划分）之间找到平衡。

+ **当 K 较小时：** 增加簇数会显著降低 SSE，因为划分更合理。 __
+ **当 K 接近最佳值时：** SSE 的下降速度开始减缓。 __
+ **当 K 超过最佳值时：** SSE 继续下降，但改善非常有限。 __

###### Silhouette coefficient
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777121281530-47534ab7-2031-4650-a9d4-34f23e98fd8e.png)

**轮廓系数 (Silhouette Coefficient)**用来衡量一个样本在簇内的紧密度和与其他簇的分离度。它的取值范围在 [-1, 1]之间：

+ 越接近 1：说明该点被正确地分到合适的簇中，簇内紧密且与其他簇分离良好。
+ 接近 0：说明该点位于簇边界附近，可能属于多个簇。
+ 越接近 -1：说明该点可能被错误分配到某个簇。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777121537292-5ec58510-4850-41c9-8ff5-99fc3e1ecdc3.png)

**簇内紧密度 (a 小)：** 点和同簇的伙伴很接近。

**簇间分离度 (b 大)：** 点和其他簇的距离较远。

**综合评价 (s)：** 通过比较 a 和 b，得出该点是否被合理分配。

##### 考题预测
###### **Predicted Question 1：**What're the <font style="color:rgb(0,0,255);">key steps</font> for K-means
**Answer:**

+ **Initialization:** Choose k initial centroids (random or heuristic).
+ **E-step (Assignment):** Assign each data point to the nearest centroid.
+ **M-step (Update):** Recalculate each centroid as the mean of all points in the cluster.
+ **Repeat:** Iterate until centroids converge or assignments stop changing.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777118343303-57b91805-1bb3-45ed-8462-0f5cdb9dae60.png)

###### **Predicted Question 2: **What are the key steps of Gaussian Mixture (EM Algorithm)?
**Answer:**

+ **E-step:** Compute the probability that each point belongs to each Gaussian component.
+ **M-step:** Update parameters (mean, covariance, mixing coefficients) to maximize likelihood.
+ **Repeat:** Iterate until convergence.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777120811545-64d11178-01da-46bc-9013-df0e15b82190.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777120834865-0fa4614f-becc-40fc-96f8-aa56d1a5fae1.png)

###### **Predicted Question 3: **Advantages, disadvantages, and limitations of K-means and Gaussian Mixture
**K-means**

+ **Advantages:**
    - Simple: 算法逻辑清晰，容易实现。
    - Efficient: 时间复杂度 O(tkn)，适合大规模数据。
    - Scalable: 可以处理成千上万的数据点。
+ **Disadvantages:**
    - Sensitive to outliers:异常点会严重影响簇中心位置。
    - Requires k:必须提前指定簇数 k，但实际应用中往往难以事先知道。
    - Assumes spherical clusters:默认簇是凸的、近似球形的，无法识别复杂形状。
+ **Limitations:**
    - Categorical data:无法直接处理类别型数据（例如颜色红、蓝、绿的“均值”没有意义）。
    - Non-convex clusters:无法发现非凸簇，比如“环形”或“月牙形”分布。
+ **How to improve:**
    - 使用 K-medoids或 DBSCAN来处理噪声和非凸簇。
    - 使用 Elbow method或 Silhouette coefficient来选择最佳 k。
    - 多次随机初始化，减少陷入局部最优的风险。

**Gaussian Mixture**

+ **Advantages**:
    - Flexible: 可以建模椭圆簇，比 K-means 更灵活。
    - Probabilistic assignment: 每个点属于某个簇的概率，而不是硬性分配。
+ **Disadvantages :**
    - Computationally expensive: 需要迭代 EM 算法，计算量大。
    - Sensitive to initialization: 初始参数选择不好，容易陷入局部最优。
+ **Limitations:**
    - Gaussian assumption: 假设数据服从高斯分布，如果数据分布偏离高斯，效果会差。
+ **How to improve**
    - 使用 多次初始化 或 K-means 结果作为初始值。
    - 调整 协方差矩阵类型（full, diagonal, tied, spherical）来适应不同数据分布。
    - 使用 正则化 防止协方差矩阵奇异。

###### **Predicted Question 4: **How to obtain the optimal k in K-means
+ **Elbow Method:** Plot SSE vs. k. The “elbow point” indicates optimal k.
+ **Silhouette Coefficient:** Measures cohesion and separation; higher average score means better clustering.

###### **Predicted Question 5: **How to fine-tune parameters in clustering?
**Answer:**

+ **K-means:** Adjust k, initialization strategy, and distance metric.
+ **Gaussian Mixture:** Tune number of components, covariance type, and initialization.
+ **General improvements:** Use multiple runs with different seeds, apply dimensionality reduction, or use robust clustering methods (DBSCAN, spectral clustering).

###### 补充：Compute the distance, 在不同情况应该使用什么distance, 不同结果对于K-means的影响
---

#### How supervised classification algorithms work for us. E.g., understanding the principle of SVM, K-NN classification algorithms, and Naïve Bayes Classifier.
##### SVM
###### Objective   
<font style="color:rgb(255,102,0);">Support Vector Machine  -</font>> 分类 + Supervised learning

Maximize margin while minimizing classification error.    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774864059928-94afe96b-e03e-4525-9c04-b628a25831ab.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774861136933-198373c4-5638-4723-a18c-733ec554be4a.png)

**Finds the hyperplane that maximizes the margin between classes.  **

<font style="color:rgb(22, 22, 22);">通过查找</font>**<font style="color:rgb(22, 22, 22);">最优直线或超平面</font>**<font style="color:rgb(22, 22, 22);">来对数据进行分类，从而使 N 维空间中</font>**<font style="color:rgb(22, 22, 22);">每个类别之间的距离最大化</font>**<font style="color:rgb(22, 22, 22);">。</font>

A **hyperplane** is a <u>decision boundary</u> defined as:<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774863988691-9877fd17-2d5c-4c9c-80da-a0db7a60fd48.png)

 在所有能分开的线里面，选“间隔最大”的那条  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774862012284-e422476b-62df-4fca-962b-b1066a6c1a58.png)

###### Hard margin
 数据必须 **完全可分（linearly separable）**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774862154620-cff12cc6-88bf-4e02-8932-53becc7f8ead.png)

+ 每个点必须在正确一侧, 且离边界至少1单位
+ 但是这种情况很难发生，因此引入：Soft margin（允许错误）+ Kernel Trick（让直线变成曲线）

###### Soft margin
允许犯错，但要“尽量少错 + 保持大间隔”  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774862517534-d9482919-6f57-49fc-add9-dbf24d609260.png)

In soft margin SVM, w and b define the decision boundary, x<sub>i</sub> represents input samples, y<sub>i</sub> represents class labels, ξ<sub>i</sub> are slack variables measuring the degree of constraint violation, and C controls the trade-off between margin maximization and classification error.  

###### Kernel Trick
**Motivation**: Data is not linearly separable  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774862753965-8b3bc2fa-09d1-44d0-aa7f-9151a6cab5f5.png)

To solve this, we map the data into a higher-dimensional space using <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774864554357-07cb4014-33b3-40cf-8540-335011be2554.png)

In this new space, the data may become linearly separable.

However, explicitly computing <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774864595743-285b6880-3010-4462-8f2c-93b38b8af9ac.png) can be computationally expensive. The **kernel trick** solves this by computing inner products directly:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774864584960-851ff751-1563-44f6-aea8-150ec153fb7f.png)

 不需要真的计算高维映射，大大降低计算复杂度。  

**Kernel Trick **allows us to compute inner products in high-dimensional space without explicitly mapping data into that space. 不显式升维的情况下，得到高维空间的计算结果。  

---

##### Understanding of K-Means
 K-means 是一种**无监督学习（****<font style="color:#2F4BDA;">unsupervised learning</font>****）**算法，用于把数据划分成 K 个簇（clusters），使得**同一簇内的数据尽可能相似**，不同簇之间尽可能不同。  

 "**k**" represents the **number of groups or clusters** we want to classify our items into.

###### Steps
1. **Initialization**: Randomly selecting k cluster centroids  初始中心.
2. **Assignment Step: **Each data point is assigned to the nearest centroid, forming clusters. 计算每个点到所有中心的距离，把它分配给最近的中心.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774863200190-218ecdf6-0af2-4a6e-942d-8e78b9ec8499.png)

3. **Update Step:** After the assignment, we recalculate the centroid of each cluster by averaging the points within it.  重新计算每个簇的中心（取平均值）  
4. **Repeat:** This process repeats until the centroids** no longer change or the maximum number of iterations is reached.**
    -  中心不再变化 
    -  或变化很小（收敛）

######  目标函数（Objective Function）  
 K-means 的目标是最小化簇内平方误差（WCSS）  

  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774863290661-4e4f1360-2449-4d87-9fef-4689c24693bf.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774863308964-7ef1055a-497e-4534-a8cb-a6d2007020ee.png)

本质： 让每个点尽量靠近它的中心  

###### 对比 KNN
| **Aspect** | **KNN (K-Nearest Neighbors)** | **K-means** |
| :---: | :---: | :---: |
| Learning Type | Supervised Learning | Unsupervised Learning |
| Labels Required | Yes | No  |
| Purpose | Classification / Regression | Clustering |
| Output | Predicted label or value | Cluster assignments |
| Meaning of K | Number of neighbors | Number of clusters |
| Core Idea | Based on nearest neighbors | Based on centroids (means) |
| Distance Usage | To find nearest data points | To assign points to clusters |
| Sensitivity | Sensitive to noise and irrelevant features | Sensitive to initialization and outliers |
| Data Requirement | Needs labeled dataset | Works on unlabeled dataset |


##### 重点概念梳理
###### Support Vector Machine (SVM)
**Objective (目标):**

+ 找到一个能最大化类别间隔的超平面，同时尽量减少分类错误。Maximize margin while minimizing classification error.

**Key Concepts (关键概念):**

+ **Hyperplane:** 决策边界，把不同类别分开。
+ **Support Vectors :** 最靠近边界的点，决定边界位置。
+ **Hard Margin:** 要求数据完全线性可分，每个点都在正确一侧。
+ **Soft Margin:** 允许少量错误，用松弛变量 ξ 来衡量违约程度。
+ **Kernel Trick:** 将数据映射到高维空间，使其线性可分，不需要显式计算高维坐标。

**Parameters (参数):**

+ **C:** 控制间隔大小与分类错误的权衡。大 → 惩罚错误更严，间隔变小；小 → 间隔更大，允许更多错误。
+ **w (权重向量):** 决定超平面的方向。
+ **b (偏置):** 决定超平面的位置。

**Impact (影响):**

+ 如果 **C 很大** → 分类器更严格，少错但可能过拟合。
+ 如果 **C 很小** → 分类器更宽松，间隔大，泛化能力更好。
+ **v/C 更大** → 表示对错误的容忍度更高，间隔更宽。

**Semi-supervised Extension (半监督扩展):**

+ 利用少量有标签数据来确定初始超平面，再结合无标签数据的分布结构进行调整。
+ 原理：假设数据簇结构能帮助 refine 决策边界。

###### K-Nearest Neighbors (KNN)
**Principle (原理):**

+ 根据最近的 k 个邻居的多数类别来决定新点的类别。Classify based on majority vote of k nearest neighbors.

**Main Steps (主要步骤):**

1. 选择 k 值。
2. 计算新点与所有训练点的距离。
3. 找到最近的 k 个邻居。
4. 通过多数投票决定类别。

**Optimal K (最佳 K):**

+ 小 k：容易受噪声影响，过拟合。
+ 大 k：更平滑，可能欠拟合。
+ 最佳 k 通常通过 **交叉验证 (cross-validation)** 来选择。

**Feature Scaling (特征缩放):**

+ KNN 基于距离度量，不同维度的量纲差异会影响结果。
+ 常用方法：
    - **标准化 (Standardization):** 转换为均值 0、方差 1。
    - **归一化 (Normalization):** 将数据缩放到 [0,1] 区间。

**Prediction (预测无标签数据):**

+ 给定数据集和 k，计算新点与所有点的距离，选出最近的 k 个邻居，用多数类别投票来预测标签。

##### 考题预测
###### **Predicted Question 1：**Explain the objective of SVM and the difference between hard margin and soft margin.
+ **Objective: **SVM aims to find the hyperplane that maximizes the margin between classes while minimizing classification error.
+ **Hard ****margin:**Requires data to be perfectly linearly separable, no misclassification allowed.
+ **Soft margin:**Allows some misclassification using slack variables, balancing margin size and classification error.

###### **Predicted Question 2：**What is the role of parameter C in SVM? What happens if C is very large or very small?
+ **C controls trade-off **between margin maximization and classification error.
+ **Large C: **Strictly penalizes misclassification, smaller margin, risk of overfitting.
+ **Small C: **Allows more slack, larger margin, better generalization but higher training error.

###### **Predicted Question 3：**How can SVM be extended to semi-supervised learning?
**Answer: **Semi-supervised SVM uses both labeled and unlabeled data. The hyperplane is first trained on labeled data, then refined using the distribution of unlabeled data (cluster assumption). This helps improve boundary placement when labeled data is limited.

###### **Predicted Question 4：**What is KNN? What are the main steps in KNN classification?
+ **KNN principle: **Classify a new point based on the majority label of its k nearest neighbors.
+ **Steps:**
    1. Choose k.
    2. Compute distances between the new point and all training points.
    3. Select the k nearest neighbors.
    4. Assign the majority class label.

###### **Predicted Question 5：**How to obtain the optimal K in KNN?
Optimal k is usually chosen via **cross-validation**. 

+ Small k => sensitive to noise (overfitting). 
+ Large k => smoother decision boundary (underfitting). 

The best k balances bias and variance.

The training set is used to train the model, the validation set is used for hyperparameter tuning, and the test set is used for final evaluation.

---

1. **Training Set（训练集）**

Used to train the model by** learning parameters** （如权重 w、偏置 b）

**2. Validation Set（验证集）**  
Used to tune hyperparameters and select the best model 验证集用于模型选择。  
用于调节**超参数（hyperparameters）**，选择最优模型

+ 超参数？--> 手动设置的
    -  K in KNN & K-means 
    -  C in SVM 
    -  learning rate 

3. **Test Set（测试集）**  
Used to evaluate the final performance of the model on unseen data.  
The test set **must NOT** be used during training or tuning.

| 名称 | 中文 | 作用 |
| --- | --- | --- |
| Training set | 训练集 | 训练模型 |
| Validation set | 验证集 | 调参 |
| Test set | 测试集 | 最终评估 |


+ The training set is used to train the model and learn parameters. 
+  The validation set is used to tune hyperparameters and select the best model. 
+  The test set is used to evaluate the final performance on unseen data.

**<u> K-fold Cross-validation</u>**

Split training data into K folds:

+  Train on K-1 folds K-1 用来训练 
+  Validate on 1 fold  1 份做验证 
+  Repeat K times 循环 K 次 

=>  最后取平均性能

---

###### **Predicted Question 6：**What is the impact of different K values on classification results?
**Answer:**

+ **Small k: **High variance, sensitive to outliers.
+ **Large k: **High bias, smoother but less precise.
+ **Optimal k: **Achieves balance between bias and variance.

###### **Predicted Question 7：**Why is feature scaling critical for KNN? What methods can be used?
****KNN relies on distance metrics. If features have different scales, large-scale features dominate the distance calculation.

+ **Methods:**
    - Standardization (mean = 0, variance = 1).
    - Normalization (rescale to [0,1]).

###### **Predicted Question 8：**Given a dataset and K value, how do you predict the label of an unlabeled data point?
Compute the distance between the unlabeled point and all training points, select the k nearest neighbors, and assign the label based on majority voting among those neighbors.

#### What's and how do you understand an AI system.
What is AI system; Training data set 为什么重要; step for decide AI model/ How to evalute your decision

##### Modeling–Inference–Learning Paradigm  
把AI系统分成三步：**怎么表示问题（Modeling）→ 怎么用它推理（Inference）→ 怎么从数据中学习（Learning）**

###### **Modeling**
Modeling is the process of **defining a mathematical or symbolic representation **of a problem, including variables, structure, and relationships.  

建模 = 把现实世界“抽象成一个可以计算的结构”

关注：

+ 有哪些变量（variables） 
+  它们之间怎么关联（relationships） 
+  用什么形式表达（rules / graph / function）

###### Inference
Inference is the process of **deriving conclusions or predictions from a given mode**l and observed **data**.  

推理 = “用模型算答案”

推理不改变模型，只是用模型  

Learning estimates parameters from data to improve the model, while inference uses the trained model to make predictions. Inference may be used during learning, but it does not update the model.

+ 学习阶段：用数据 → 调参数 → 提高准确率 
+ 推理阶段：用训练好的模型 → 预测结果 

###### Learning
Learning is the process of** improving the model** by estimating parameters or structure from data.  

通过数据：

+  调整参数（weights） 
+  或者调整结构（structure） 

##### 考题预测
###### **Predicted Question 1：**What is an AI system?
**Answer:** An AI system is a computational framework designed to perform tasks that normally require human intelligence, such as reasoning, learning, perception, and decision-making. It combines **models, inference, and learning**:

+ **Modeling:** Represent the problem domain (e.g., rules, graphs, neural networks).
+ **Inference:** Use reasoning or algorithms to draw conclusions from the model.
+ **Learning:** Improve performance by adjusting parameters based on data.

###### **Predicted Question 2：**Why is the training dataset important?
**Answer:** Training data is the foundation of supervised and unsupervised learning.

+ It provides examples for the AI system to learn patterns and relationships.
+ The **quality, size, and diversity** of the dataset directly affect model accuracy and generalization.
+ Poor or biased data leads to poor predictions and unfair outcomes.

###### **Predicted Question 3：**What are the steps to decide an AI model?
**Answer:**

+ **Define the problem:** Classification, regression, clustering, or search.
+ **Choose the model type:** Logic-based, state-based, variable-based, or reflex-based.
+ **Select algorithms:** e.g., Decision Trees, SVM, Neural Networks, K-means.
+ **Train and validate:** Fit the model with training data, evaluate with test data.
+ **Tune parameters:** Adjust hyperparameters (learning rate, regularization, etc.) for better performance.

###### **Predicted Question 4：**How to evaluate your decision (model choice)?
**Answer:**

+ **Quantitative metrics:**
    - Regression → MSE, RMSE, R².
    - Classification → Accuracy, Precision, Recall, F1-score, ROC-AUC.
    - Clustering → SSE, Silhouette coefficient.
+ **Qualitative factors:** Interpretability, scalability, robustness to noise.
+ **Bias-Variance tradeoff:** Ensure the model is neither underfitting nor overfitting.
+ **Cross-validation:** Test on unseen data to check generalization.

#### How deep learning algorithms work for us. The workflows of BP neural network, and CNN. 
The exam will NOT cover any questions related to Autoencoders, Graph Neural Networks, Recurrent Neural Networks, LSTM.

##### 知识点总结
###### 深度学习介绍
+ 机器学习与深度学习的区别
    - 特征处理
        * 机器学习：手动完成
        * 深度学习：不需要人工处理，通过大量数据的训练自动得到模型
            + 图像（人脸身份认证、物体识别、场景识别）、自然语言处理（机器翻译、文本识别、聊天对话）、语音（语音识别）等难以进行特征提取的领域
        * 机器学习效果不佳/ 特征需要复杂处理的地方
+ 深度学习代表算法 - **神经网络** Artificial Neural Network - ANN
    - 模仿生物神经网络结构和功能的计算模型
    - 包含：
        * 输入层
        * 隐藏层
        * 输出层

    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777263544522-28b0249f-0231-4a7a-b832-30949266eb81.png)      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777263899580-04e0af50-38c8-4b9c-a5d7-596d1251b06b.png)

    - 神经网络的**特点**
        * 每个连接都有**权重**，同一层神经元之间没有连接
        * 神经元当中会含有**激活函数**

###### Activation function
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777272743424-da5a44e1-29af-4c2b-88ac-5750ee424f35.png)

1. **引入非线性 (Introduce non-linearity)**

Activation functions add non-linearity, allowing neural networks to model complex relationships beyond simple linear mappings. 激活函数引入非线性，使神经网络能够学习超越线性映射的复杂关系。

2. **控制输出范围 (Control output range)**

They map inputs into specific ranges (e.g., [0,1] for Sigmoid, [-1,1] for Tanh), which stabilizes training. 它们把输入映射到特定范围（如 Sigmoid 的 [0,1]，Tanh 的 [-1,1]），帮助训练更稳定。

3. **保持梯度传播 (Maintain gradient flow)**

Proper activation functions prevent vanishing or exploding gradients, ensuring effective backpropagation. 合适的激活函数能避免梯度消失或爆炸，保证反向传播有效。

###### CNN 特征提取
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777271500509-50fca589-2c83-4fa7-8cbb-541faf5f4641.png)

在 CNN 中，“多层”是它最重要的设计思想之一。每一层都在不同层次上提取特征，逐步从简单到复杂。

This multi-layer hierarchy mimics human vision: local details first, then global understanding.

+ **浅层特征 (Shallow features)**
    - ****Early convolutional layers capture low-level features such as edges, lines, and simple textures.
    - 比如边缘、线条和简单纹理。
+ **中层特征 (Intermediate features)**
    - Middle layers **combine** these simple features into more complex patterns, such as corners, shapes, or repeated textures. 中层卷积层把简单特征组合成更复杂的模式，比如角点、形状或重复纹理。
+ **深层特征 (Deep features)**
    - Deeper layers capture high-level semantic features 高级语义特征, such as faces, objects, or categories.

在感受野一定的情况下，层数越多，每一层的输出就是上一层特征的组合。这样层层叠加，提取到的特征就更加丰富和显著。  

+ **感受野**：决定单个神经元能看到的输入范围。
+ **多层结构**：在固定感受野下，后续层不是扩大范围，而是综合前层的特征。
+ **结果**：多层让模型从简单特征逐步组合成复杂模式，即使感受野大小不变，特征表达也更强。

---

###### CNN 池化操作
池化（Pooling）是 CNN 中的重要操作，用来**缩小特征图的尺寸，同时保留主要信息**。它的核心思想是：在一个小区域内进行聚合（最大值或平均值），减少数据量但保留关键特征。

+ **Max Pooling**
    - 在局部区域取最大值，突出最显著的特征。
+ **Average Pooling**
    - 在局部区域取平均值，使特征更平滑。

**作用**

+ Reduce computation and parameters
+ Prevent overfitting
+ Provide translation invariance 提供平移不变性（同一特征在不同位置仍能识别）

举例

+ 输入特征图大小：4×4
+ 使用 2×2 的 Max Pooling → 每个区域取最大值 → 输出特征图大小变为 2×2。

###### Back propagation
Objective: Minimizing the difference between predicted and actual outputs

It works by propagating errors backward through the network, using the **chain rule** of calculus to compute gradients and then iteratively updating the weights and biases. 

Combined with optimization techniques like gradient descent, backpropagation enables the model to reduce loss across epochs and effectively learn complex patterns from data.

**Working of Back Propagation Algorithm**

The Back Propagation algorithm involves two main steps: the Forward Pass and the Backward Pass.

1. **Forward Pass**

In forward pass the input data is fed into the input layer. These **inputs** combined with their respective **weights** are **passed to hidden layers**. 

+ Before applying an activation function, a bias is added to the weighted inputs.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/webp/42556572/1777437590328-25f9f241-2087-4784-9998-44159f2c70b6.webp)

2. **Backward Pass**

In the backward pass the error (the difference between the** predicted and actual output**) is** propagated back **through the network **to adjust the weights and biases**. 

One common method for error calculation is the [Mean Squared Error (MSE)](https://www.geeksforgeeks.org/maths/mean-squared-error/) given by:

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777437768401-d3b3b87c-66de-454a-96ab-fb38ab1ad1f0.png)

Once the error is calculated the network **adjusts weights using gradients** which are** computed with the chain rule**. These gradients indicate **how much each weight and bias should be adjusted **to minimize the error in the next iteration.  计算出误差后，网络会利用链式法则计算梯度来调整权重。这些梯度指示了在下一次迭代中，每个权重和偏置应该调整多少才能使误差最小化。



**Example**

**<u>Forward Propagation</u>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/webp/42556572/1777438020876-78d4e238-ecaf-4a70-826e-98ef0a50adcd.webp)

1. **计算加权和 (Weighted Sum)**

每个神经元先把输入值乘以权重，再加起来。  

在隐藏层 h1： (0.2×0.35)+(0.2×0.7)= 0.21

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777438490723-763df8c1-cc8f-4db2-ac0f-4d40386aa782.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777438518759-394d2991-f987-4c81-a2a4-48ab9eb7bc81.png)

2. **Sigmoid Function**

 把加权和放进 Sigmoid 函数，结果会在 0 到 1 之间。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777438401177-61567e13-f813-4f1a-94d8-f3cdea3cc4be.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777438412020-2ddeae85-14fa-4b76-9663-7c02e6e6d3b9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/webp/42556572/1777438576211-9694b6de-c566-462c-8563-d0f7d184f938.webp)

3. **Error Calculation**

Our actual output is 0.5 but we obtained 0.67_. _

误差：Error= 0.5−0.67=−0.17

**<u>Back Propagation</u>**

1. **权重更新公式 Calculating Gradients**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777438880631-0720a247-bd6d-4936-9019-395d977ab136.png)

Multiply by the learning rate to control the adjustment size, preventing updates from being too aggressive or too slow.  乘学习率，是为了控制更新的幅度，避免改得太猛或太慢  

2. **输出层误差项  **

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777439099430-6a4e81b8-a2f9-4d20-abea-b9784526e628.png)

**y**<sub>**target **</sub>**− y：**预测和目标的差距，决定修正方向和力度 determining correction direction and strength. 

**y(1−y)**：Sigmoid 的导数，表示神经元在当前位置的敏感度 representing sensitivity at the current state.  

两者相乘，得到该神经元的实际责任。  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777439592563-1a7b80e8-7613-4762-9d9e-121f206baeef.png) 

 这是由 **链式法则 (Chain Rule)** 推导出来的。误差函数对权重的偏导需要经过激活函数的导数。对于 Sigmoid，导数是 y(1−y)。因此，输出层的 δ = 差距 × 敏感度。  

3. **Hidden Unit Error **隐藏层误差项

 隐藏层的误差项不是直接和目标比较，而是通过下一层的误差 δ 传递回来，再乘以本层的敏感度。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777439674963-94149c80-2798-4cac-ad11-ee1f161db2b1.png)

 This shows each hidden neuron shares responsibility based on its influence on the next layer.  

 隐藏层没有直接的目标值，因此它的误差来自下一层的 δ。通过链式法则，误差逐层传递，每一层的 δ 都是“下一层误差 × 本层敏感度”。  

4. **Weight Updates**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777439707707-cb852284-6b53-47ff-ab7e-0f77f6c91185.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777439735775-abb00556-d393-4db2-ae9a-1504efd26f14.png)

5. **迭代训练 (Iterative Training)**

更新权重后再做前向传播，得到新的输出：y<sub>3</sub>=0.57, y<sub>4</sub>=0.56, y<sub>5</sub>=0.61。虽然还没达到目标 0.5，但误差减小了。这个过程会不断重复，直到输出接近目标。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/webp/42556572/1777439831819-3beffaf9-1bf7-49e8-94ae-c171882bffc5.webp)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777440260235-40bf865c-99db-4ef5-be3e-9ae7ce9ea25c.png)

In BP networks, parameters are updated using gradient descent. The output error term depends on prediction gap and sigmoid derivative, while hidden unit errors are passed back from the next layer and combined with current sensitivity. Weight updates equal learning rate × error term × input. Iterative training reduces error and enables learning.  

---

###### <font style="color:rgb(255,102,0);">Bayesian Inference</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441073270-7a3e2939-8440-4dc0-89de-a69186be6237.png)

 贝叶斯推断是一种统计推断方法，它利用贝叶斯定理在获得新证据后更新假设的概率。它的核心思想是：先有一个“先验概率”，随着数据的到来，通过“似然函数”修正，得到新的“后验概率”。  

+ P(H)：先验概率，表示在没有数据之前对假设的初始信念。
+ P(D∣H)：似然，表示在假设成立的情况下，观察到数据的概率。
+ P(D)：证据，表示在所有可能假设下观察到数据的总体概率。
+ P(H∣D)：后验概率，表示在观察到数据之后，假设的更新概率。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441363914-6636c0bf-fde2-4c51-aacf-5abc19f143d8.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441625974-6cbd70e3-9d74-443c-896c-cf4cb9fc19a2.png)

 朴素贝叶斯分类器是一种特殊的贝叶斯分类器，它假设在给定类别标签的情况下，各特征之间相互独立。这个假设简化了似然的计算，使得分类器在计算上更高效。尽管这个假设比较“朴素”，但在实际应用中，尤其是文本分类和垃圾邮件过滤中，朴素贝叶斯表现非常好。  

**<u>案例：</u>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441742026-583ae3ec-0d84-4106-8629-501c61d80ffe.png)

给定一个训练数据表，包含两个特征 X<sup>(1)</sup> 和 X<sup>(2)</sup>，以及类别**标签** Y∈{1,−1}。 

要求：用朴素贝叶斯分类器来学习，并预测新样本 x=(2,S)<sup>T </sup>的类别。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441997518-95d70689-5a41-4677-9638-059b9c4f7b7b.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441971809-82ed3718-c88c-459e-8c37-4bdef357c3b3.png)

---

##### 考题预测
###### **Predicted Question 1：**What are activation function? Provide 2 examples
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777122695382-c90b4cad-7619-47d3-9563-f753b9c5563e.png)

###### **Predicted Question 2：**Given a multi-layer neural network and its input data, what's the output?
 多层神经网络的输出计算方法就是“输入乘权重加偏置，再经过激活函数，层层传递直到最后一层  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777273733157-3997ea2a-b179-4b3b-9f7b-3e4e5bdd9316.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777273990947-e30a871c-750a-4297-91a7-7b5c2cc1aac1.png)

###### **Predicted Question 3：**Given a neural network, what’s the <font style="color:rgb(0,0,255);">number </font>of neurons in the network, the number of <font style="color:rgb(0,0,255);">weights</font>, and the number of parameters?
1. **Number of Neurons**  神经元数
+ Basic computational units
+ Each neuron takes inputs, computes a weighted sum, **applies an activation function, **and produces an output.

**例子**：输入层有 3 个输入，隐藏层有 4 个神经元，输出层有 2 个神经元 → 总神经元数 = 3 + 4 + 2 = 9。

2. **Number of Weights** 权重数
+ 权重是连接两层神经元之间的系数coefficients，决定输入对输出的影响。**每一条连接都有一个权重**。

**例子**：输入层有 3 个神经元，隐藏层有 4 个神经元 → 连接数 = 3×4=12，所以权重数 = 12。

普通全连接神经网络 (Fully Connected Neural Network)，它的特点就是：上一层的每一个神经元都和下一层的每一个神经元相连，所以在这里是直接 3*4.

3. **Number of Parameters **参数数
+ 参数 = 权重 + 偏置 (bias)。偏置是每个神经元额外的一个参数，用来调整输出。

**例子**：隐藏层有 4 个神经元，每个神经元有 3 个输入 → 权重数 = 12；再加上 4 个偏置 → 参数总数 = 12 + 4 = 16。

**<u>神经元是计算单元，权重是连接的系数，参数是权重加偏置。</u>**

**<u></u>**

**题目1（CNN）**：输入层大小 32×32×3，卷积层有 10 个 5×5 filter。问：参数数是多少？

1. **卷积核的结构**
    - 每个 filter（卷积核）要覆盖输入的深度（这里是 3 个通道：RGB）。
    - 所以一个 filter 的大小是 5×5×3。
2. **参数的组成**
    - 每个 filter 的参数包括：
        * **权重 (weights)**：每个位置一个权重，总数 = 5×5×3=75。
        * **偏置 (bias)**：**<font style="color:#2F4BDA;">每个 filter 额外有一个偏置参数</font>**。
            + **<u>CNN</u>**<u>：Bias 数量 = Filter 数量。</u>
            + **<u>全连接网络</u>**<u>：Bias 数量 = 神经元数量。</u>
    - 所以每个 filter 的参数总数 = 75+1=76。
3. **多个 filter 的情况**
    - 一共有 10 个 filter。
    - 每个 filter 都有 76 个参数。
    - 总参数数 = 76×10=760。

**题目2（ANN）****Given a neural network, how to count neurons, weights, and parameters?**

+ **Neurons: **Count all nodes in the hidden layers plus the output layer.
+ **Weights: **Each connection between neurons has one weight.
+ **Parameters: **Parameters = weights + biases.

Given:

+ **Input layer**: 3 neurons
+ **Hidden layer**: 4 neurons
+ **Output layer:** 2 neurons

Calculation:

+ **Weights: **3×4+4×2=20
+ **Biases: **4+2=6
+ **Total parameters: **20+6=26

---

###### **Predicted Question 4：**Given a CNN and a filter, what is the size of the output data
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777274954600-d88f8b5f-e948-4faf-b981-807304c37e4c.png)

**题目1**：输入大小 32×32×3，filter 大小 5×5，stride = 1，padding = 2，filter 数量 = 10。

+ Width (32−5+2×2)/1+1=32
+ Height (32−5+2×2)/1+1=32
+ Depth  number of filters = 10
+ **Output size = W*H*D **= 32×32×10.

---

**题目2：**输入矩阵与输出矩阵 (Input & Output Matrix Example)

```plain
1 2 3 4
5 6 7 8
9 0 1 2
3 4 5 6
```

```plain
1 0
0 1
```

**卷积操作 (Convolution operation)**：

+ 左上角区域：1∗1+2∗0+5∗0+6∗1=7
+ 右移一步：2∗1+3∗0+6∗0+7∗1=9
+ 继续滑动直到覆盖整张图。

```plain
7 9 11
15 7 9
7 6 7
```

---

###### **Predicted Question 5：**What is<font style="color:rgb(0,0,255);"> convolutional operation</font> and <font style="color:rgb(0,0,255);">max pooling operation</font> in CNN? 
+ **Convolutional operation** in CNN means sliding a filter across the input to** extract features  **卷积操作就是用一个小矩阵（卷积核）在输入图像上滑动，每次计算局部区域的加权和，得到一个新的特征图，用来提取边缘、纹理等局部特征。  
+ **Max pooling operation** <u>reduces the size</u> of feature maps by keeping only the maximum value in each local region.   最大池化是下采样方法，用一个小窗口（如 2×2）在特征图上滑动，每次取窗口中的最大值，得到更小的特征图，同时保留最显著的特征。  

Together, they allow CNNs to learn important patterns efficiently.

###### **Predicted Question 6：**Why CNN is important in many AI applications?<font style="color:rgb(0,0,255);"> (At least one reason)</font>
+ **Feature extraction**: CNNs use convolutional filters to detect edges, textures, shapes, and complex patterns without manual feature engineering.**特征提取**：CNN 能自动从数据中提取特征（边缘、纹理、形状），不需要人工设计特征。
+ **Translation invariance**: Through pooling, CNNs can recognize objects even if they shift position in the image.  **平移不变性**：通过池化操作，CNN 可以识别位置不同的同一对象。
+ **Efficiency**: Weight sharing in filters reduces the number of parameters, making training faster and less prone to overfitting.  **高效性**：卷积核的权重共享减少了参数数量，训练更快、更稳定。

###### **Predicted Question 7：**How can CNN help for classification?
CNN 之所以能帮助分类，是因为它能自动提取数据特征。浅层识别简单边缘，深层捕捉复杂模式，池化提高鲁棒性，最后全连接层把特征组合起来，输出正确的类别 CNN helps classification because it automatically extracts features from data. Early layers detect simple edges, deeper layers capture complex patterns, pooling makes the model robust, and finally the fully connected layers combine these features to predict the correct class.  

1. **Feature extraction**: CNNs use convolutional filters to automatically detect edges, textures, shapes, and complex patterns in the input data.
2. **Hierarchical representation**: Early layers capture simple features (like lines or corners), while deeper layers capture complex structures (like faces or objects).
3. **Pooling for invariance**: Max pooling reduces the size of feature maps and makes the model more robust to shifts or distortions.
4. **Efficient learning**: Weight sharing in filters reduces the number of parameters, making CNNs easier to train and less prone to overfitting.
5. **Classification step**: After feature extraction, the final fully connected layers combine these features to assign the input to a specific class (e.g., cat vs. dog).

 CNNs help classification by automatically learning and combining features into class predictions.

1. **特征提取**：CNN 用卷积核自动检测输入数据中的边缘、纹理、形状和复杂模式。
2. **层次化表示**：浅层提取简单特征（如线条、角点），深层提取复杂结构（如人脸、物体）。
3. **池化操作**：最大池化缩小特征图尺寸，使模型对位置变化和轻微变形更鲁棒。
4. **高效学习**：卷积核的权重共享减少参数数量，训练更快、更稳定。
5. **分类步骤**：在特征提取后，最后的全连接层将这些特征组合起来，把输入分到具体类别（如猫 vs 狗）。

###### **Predicted Question 8：**How to update parameter in <font style="color:rgb(0,0,255);">BP</font> networks?
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777122763269-1892a8aa-27f5-449a-884d-156e5c978c4f.png)

###### **Predicted Question 9：**How does Deep Learning differ from traditional machine learning algorithms?
1. **Machine Learning **

Designing algorithms and statistical models that** allow computer systems to learn from data **and improve their performance on specific tasks **without being explicitly programmed. **

 ML is a subset of AI that allows systems to** learn from data without explicit programming**.

+ 自动找规律（patterns） 
+ 做预测（prediction）
2. **Deep Learning**

Deep neural networks are artificial neural networks with **multiple layers** of interconnected nodes (neurons).  Learn **hierarchical representations of data**, enabling them to model **complex** patterns and relationships. 

Deep Learning is a **subfield** of ML **using deep neural networks.  **

+ 图像识别、语音识别 、NLP（ChatGPT）
+ DL = 用神经网络学习复杂模式  

```markdown
Machine Learning（所有方法）
 ├─ Decision Tree（决策树）
 ├─ SVM
 ├─ Regression
 └─ Deep Learning（神经网络）
 └─ ...
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774783243805-95ccd409-6cb0-4dd0-8bf0-df2f8f29a193.png?x-oss-process=image%2Fformat%2Cwebp)   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774783264986-7c9f533c-9e1b-41ea-ba07-8359fc7e7665.png)

**Machine Learning **requires** manual feature extraction**, while **Deep Learning** learns features **automatically.  **

---

###### **Predicted Question 10: What is Bayesian inference?**
 贝叶斯推断是一种统计推断方法，它利用贝叶斯定理在获得新数据后更新我们对假设的信念。它通过结合先验知识（先验概率）和数据的似然函数，计算得到后验概率，从而实现对假设的动态修正。  

Bayesian inference is a statistical method that uses Bayes’ theorem to update our belief about a hypothesis when new data is observed. It combines prior knowledge (prior probability) with the likelihood of the data to compute the posterior probability, thereby refining the hypothesis iteratively.

###### **Predicted Question 11: Define posterior, prior, likelihood, Bayes' theorem**
 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777441525066-3e384583-5b65-4180-9952-80e833599e75.png)

###### **Predicted Question 12: How to build a Naive Bayes classifier?**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777122786712-e1750500-9bfb-48ef-9f53-9381ca2bdbea.png)

###### **Predicted Question 13: List different distribution and parameters**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777443597690-0ca9987b-bb14-4d38-8fcc-d4bccda22db3.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777443606240-c23cfcb4-4723-4374-bdaa-72bdacacd601.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777443644091-b2a3636d-3be7-4cf8-92de-372c5a29d46f.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777443654991-c8c8e209-ff2d-4aa2-b90e-bc387243c904.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777443701485-fb0dc9c0-1875-484a-a9db-0d28baaf81af.png)

---

###### **Predicted Question 14: Frequentist vs Bayesian probability**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442264704-a6141aae-e83b-47aa-aa44-99516c60b8e2.png)

+ 频率派认为参数是固定的，不是随机变量，因此参数本身没有概率。概率只用于描述事件在长期重复试验中的频率。例如，抛硬币时，如果结果是正面，那么概率就是 100%；如果是反面，那么概率就是 0%。  
+ 贝叶斯派认为参数是随机变量，概率表示的是我们对事件的信念程度。抛硬币时，贝叶斯派会认为正反面的概率是基于个人信念或先验知识的，没有绝对正确答案。随着数据的增加，可以用贝叶斯定理更新这种信念。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442331306-1bce733f-faef-4aa5-864d-8678c8244766.png)

**Frequentist **

+ **Advantages:**
    - 可以讨论方法的质量和“答案是否正确”。
    - 在某些场景下更容易定义统计显著性。
+ **Disadvantages:**
    - 概念较难理解，例如 p 值和置信区间的定义复杂且容易被误解。

**Bayesian **

+ **Advantages:**
    - 定义更直观，例如可信区间比置信区间更符合直觉。
    - 可以结合先验知识，灵活更新信念。
+ **Disadvantages:**
    - 没有“固定正确答案”的概念，只能说某个结果更可能或更不可能。
    - 方法质量难以用传统意义上的“正确与否”来衡量。

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442429206-b5ded574-614b-4995-a3f4-ba0cdb199b1b.png)

**核心思想 (Key Idea)：** 参数是固定的，不是随机变量，因此参数本身没有概率。概率只用于描述事件在长期重复试验中的频率。

**常用方法 (Methods)：**

+ 区间估计 (Interval estimation)
+ 假设检验 (Hypothesis test)
+ 最大似然估计 (Maximum Likelihood Estimation, MLE)：通过最大化似然函数来估计参数，使得在假设的模型下，观测数据出现的概率最大。

频率派认为参数是固定的，概率是长期频率。MLE 是常用方法，相当于在贝叶斯框架下使用均匀先验时的 MAP 估计。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442429206-b5ded574-614b-4995-a3f4-ba0cdb199b1b.png)

**核心思想 (Key Idea)：** 参数是随机变量，概率表示我们对参数的信念程度。随着数据的到来，可以用贝叶斯定理更新这种信念。

**常用方法 (Methods)：**

+ 先验分布 (Prior distribution)：在没有数据之前的信念。
+ 后验分布 (Posterior distribution)：结合数据更新后的信念。
+ 最大后验估计 (Maximum A Posteriori Estimation, MAP)：后验分布的众数，用来作为参数的点估计。MAP 与 MLE 类似，但在优化目标中加入了先验分布。

贝叶斯派认为参数是随机变量，概率是信念。MAP 是后验分布的众数，结合了先验知识和数据。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442545915-7de92336-fce6-4e95-8322-c19e3921ccb6.png)

**核心思想 (Key Idea)：** 参数是固定的，概率是长期频率。频率派方法更适合大样本、重复试验的场景。

**应用场景 (Applications)：**

+ **临床试验 (Clinical Trials)：** 在医学研究中，样本量大、风险高，频率派方法常被采用。
+ **质量控制 (Quality Control)：** 在制造业中，通过重复抽样来监控产品质量。
+ **经济预测 (Economic Forecasting)：** 基于大数据集进行长期预测。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442545915-7de92336-fce6-4e95-8322-c19e3921ccb6.png)

**核心思想 (Key Idea)：** 参数是随机变量，概率表示信念程度。贝叶斯方法可以结合先验知识，并随着新数据不断更新。

**应用场景 (Applications)：**

+ **自然语言处理 (Natural Language Processing)：** 朴素贝叶斯常用于文本分类。
+ **股票市场分析 (Stock Market Analysis)：** 能快速结合新信息，适合动态市场。
+ **气候建模 (Climate Modeling)：** 在不确定性高的情况下，结合先验科学知识进行建模。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777442848165-80e489c1-b412-4346-b91d-e94ca05bc9e6.png)

| **Dimension** | **Frequentist ****Statistics ****(频率派统计)** | **Bayesian ****Statistics ****(贝叶斯统计)** |
| --- | --- | --- |
| **Core Idea** | 参数是固定的，不是随机变量；概率是长期频率。 Parameters are fixed; probability = long-run frequency. | 参数是随机变量；概率表示信念程度，可随数据更新。 Parameters are random; probability = belief, updated with data. |
| **Probability Meaning** | 事件在无限重复试验中的频率。 Frequency of events in repeated trials. | 主观信念或知识的不确定性。 Subjective belief or uncertainty. |
| **Methods** | 假设检验 (Hypothesis Testing) 置信区间 (Confidence Intervals) 回归分析 (Regression Analysis) 最大似然估计 MLE | 贝叶斯推断 (Bayesian Inference) 可信区间 (Credible Intervals) 预测建模 (Predictive Modeling) 最大后验估计 MAP |
| **区间估计 ****/ ****Interval ****Estimation** | 置信区间 (Confidence Interval)：在长期重复试验中，参数落入区间的频率。 Confidence interval: frequency-based coverage. | 可信区间 (Credible Interval)：参数落入区间的主观概率。 Credible interval: subjective probability of parameter lying in interval. |
| **参数性质 ****/ ****Parameter ****Nature** | 固定值 (Fixed quantity)。 Fixed, no randomness. | 随机变量 (Random variable)。 Treated as random variable. |
| **Applications** | 临床试验 (Clinical Trials) 质量控制 (Quality Control) 经济预测 (Economic Forecasting) | 自然语言处理 (NLP, Naive Bayes) 股票市场分析 (Stock Market Analysis) 气候建模 (Climate Modeling) |
| **Advantages** | 能讨论方法质量和“正确答案”。 <br/>Can discuss method quality and correctness. | 定义直观，可信区间更符合直觉；能结合先验知识。 Intuitive definitions; incorporates prior knowledge. |
| **Disadvantages** | 概念复杂，p 值和置信区间容易被误解。 Concepts complex; p-values and CIs often misunderstood. | 没有固定正确答案，只能比较可能性。 <br/>No fixed right answer, only relative likelihoods. |
| **典型估计方法 ****/ ****Estimation** | MLE：最大化似然函数。 <br/>MLE: maximize likelihood function. | MAP：最大化后验分布。<br/> MAP: maximize posterior distribution. |




**What is the difference between Frequentist and Bayesian statistics?**

 频率派认为参数是固定的，概率是长期频率，常用方法有假设检验、置信区间和 MLE；贝叶斯派认为参数是随机变量，概率是信念，常用方法有贝叶斯推断、可信区间和 MAP。 Frequentists treat parameters as fixed and probability as long-run frequency, using hypothesis testing, confidence intervals, and MLE. Bayesians treat parameters as random variables and probability as belief, using Bayesian inference, credible intervals, and MAP.  

---

**<u>哪个更好？</u>**

“哪个更好”其实是一个错误的问题。贝叶斯方法和频率派方法并不是绝对优劣，而是适用于不同的决策场景。关键在于理解它们的假设和用途。Bayesian and Frequentist methods are not inherently superior or inferior; they are suited to different decision-making contexts. The key is understanding their assumptions and utilities.

**Bayesian 方法的适用场景** 

+ ****在没有默认行动方案时，贝叶斯方法更实用。它能结合先验知识，并随着新数据不断更新信念，适合处理不确定性高、需要灵活调整的场景。 例如：股票市场分析、气候建模、自然语言处理。
+ ****Bayesian methods are more practical when there is no default action. They incorporate prior knowledge and update beliefs with new data, making them suitable for contexts with high uncertainty and flexible decision-making. Examples include stock market analysis, climate modeling, and natural language processing.

**Frequentist 方法的适用场景**

+ ****在样本量大、采样程序明确的情况下，频率派方法更合适。它强调长期频率和固定参数，适合临床试验、质量控制和经济预测等场景。
+ ****Frequentist methods are more suitable when large datasets and clear sampling procedures are available. They emphasize long-run frequencies and fixed parameters, making them appropriate for clinical trials, quality control, and economic forecasting.

---

###### **Predicted Question 15: Difference between Naive Bayes and SVM**
+ **朴素贝叶斯 (Naïve Bayes)：**基于概率的分类方法，假设特征之间相互独立。计算速度快，尤其适合文本分类。 A probabilistic classifier that assumes feature independence. It is fast and works well for text classification.
+ **支持向量机 (SVM)：**基于间隔的分类方法，通过寻找最优超平面来区分不同类别。在高维空间中表现非常有效。A margin-based classifier that finds the optimal hyperplane. It is effective in high-dimensional spaces.

---

###### **Predicted Question 16: Advantage/Disadvantage of Naive Bayes**
+ **优点：** 简单、快速，适合小数据集，在文本分类中效果好。
+ **缺点：** 强烈依赖特征独立性假设，不适合特征相关性强的场景。
+ **局限性：** 如果独立性假设被严重违反，性能会明显下降。
+ **Advantages:** Simple, fast, works well with small datasets, and effective for text classification.
+ **Disadvantages:** Strong independence assumption, not suitable for correlated features.
+ **Limitations:** Performance drops significantly if the independence assumption is violated.

---

#### Linear regression and logistic regression.
##### Underfitting vs. Good fit vs. Overfitting
模型的目标是**学习数据中的规律，并能够泛化（generalize）到新数据**

根据模型在** 训练集（training data）**和**测试集（testing data）**上的表现，可以分为三种情况： 

+ Underfitting（欠拟合） 
+  Good Fit（良好拟合） 
+  Overfitting（过拟合）

 本质是：**Bias–Variance Tradeoff（偏差-方差权衡）**

** 模型误差 = Bias² + Variance + Noise  **

The total prediction error of a model can be decomposed into three components: **Bias², Variance, and Noise.** 

+ **<u>Bias</u>** measures the error due to **overly simplistic assumptions**, 
+ **<u>Variance</u>** measures the **sensitivity** of the model to fluctuations in the training data, 
+ **<u>Noise</u>** represents the irreducible **error** inherent in the data. 

This decomposition explains the trade-off between underfitting and overfitting.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774851175817-0865f1bc-fdbf-4144-9f11-32cb62a0a816.png)

+ **Bias** is the error caused by overly **simple assumptions** in the model.
+ **Variance** is the error caused by the model being **too sensitive to small fluctuations** in <u>the training data  </u>

          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774850127692-895ad29a-0a97-40df-93d5-bbf21b412fbb.png)

1. **<u><font style="background-color:#FBDE28;">Underfitting - 欠拟合</font></u>**

Underfitting occurs when the **model is too simple** to capture the underlying pattern of the data.  -- 过于简单

+ Training accuracy：低（<50%） 
+ Testing accuracy：低

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774850347651-f07ea29a-6c9c-4312-99d6-47c65014aa86.png)

 用一条直线去拟合明显是弯曲的数据  

+ **<u>本质原因</u>**：**High Bias（高偏差）**
+ **<u>解决方法</u>**

增加模型复杂度：

+  用多项式（Polynomial Regression） 
+  增加特征（feature engineering） 

数据处理：

+  数据**清洗**（data wrangling） 
    -  去噪声（Noise removal）  
    -  处理缺失值（Missing values）  
    -  特征工程（Feature Engineering）-> 提取有意义的特征 -> 增/删
+  添加有用特征 

换模型：

+  Linear → Non-linear model



2. **<u><font style="background-color:#FBDE28;">Good fit</font></u>**

具有 Good generalization（良好泛化能力） 

A good fit occurs when the model performs **well on both training and testing data**.

+  Training accuracy：高
+  Testing accuracy：高 

二者差距小 --> 说明模型学到了“规律”，不是死记数据

+ **<u>本质: </u>****Bias 和 Variance 平衡**

****

3. **<u><font style="background-color:#FBDE28;">Overfitting - 过拟合 - 模型太复杂</font></u>**

Overfitting occurs when the **model fits the training data too** well but** fails to generalize to new data.**

Poor generalization（泛化差） 

+  Training accuracy：非常高（>90%） 
+  Testing accuracy：很低（<65%） 

曲线：**疯狂弯曲**

**<u>本质原因</u>**： **High Variance（高方差）**

+  模型太敏感 
+  连“**噪声 noise**”都学进去了 

**<u>解决方法</u>**

（1）减少模型复杂度

+ 正则化 => 不要让模型太复杂
    -  Ridge Regression（L2） 
    -  Lasso Regression（L1） 
+  降低多项式阶数 
+  减少参数 

（2）增加数据量：数据多 → 不容易记住噪声



**<u><font style="color:#DF2A3F;">【关于正则化的手段】</font></u>**

1. 模型为什么会过拟合？

在线性回归里：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774851613028-0093ab32-da65-4c2c-aa92-8071ebf0a62f.png)

模型是靠这些 **权重 w **来决定形状的

2. 如果不限制：模型就可以疯狂扭曲来“贴数据”=>
+  训练很好  
+  测试很差（过拟合） 
3. 限制是否扭曲 --> **<u>限制“权重大小"</u>**  --> **Regularization（正则化）**
+ 权重大小 v.s. 是否扭曲？

如，<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774851846114-33b22a9f-0cc3-48da-ae8a-31d8a68a74fa.png)

**情况1：权重很小**

+ w<sub>1 </sub>= 0.5
+ w<sub>2 </sub>= 0.3

 输出变化很平缓  
 图像：**比较直、比较平滑**

**情况2：权重很大**

+ w<sub>1 </sub>= 100
+ w<sub>2</sub> = −120

 输入一点点变化 → 输出大幅波动  
 图像：**疯狂扭曲 / 很陡 / 很不稳定**

+ **权重越大 → 模型越“敏感” → 越容易扭曲  **

如果权重被限制：模型只能学大趋势

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852545322-5a9d6cab-2b1f-4636-b102-3fe9db897c21.png)  => 这个限制就是正则化，对应两种 Penalty。 

4. **<u><font style="color:#213BC0;">两种限制方式</font></u>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852356771-128c14b3-cf03-4fb8-8976-925c94c6b4c8.png)

**Ridge** regression uses **L2** regularization, which shrinks coefficients smoothly due to its quadratic penalty, while **Lasso** uses **L1** regularization, which introduces sparsity because its penalty has sharp corners, encouraging some coefficients to become exactly zero.

+ 数学形式  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852467598-59af4417-4bf7-4c83-940d-6cc2834babf9.png)

 λ（lambda） = 正则化强度（控制“你要多严格限制模型”）  => 图片红色区域

+ 惩罚方式

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852503486-c207aa5f-7b39-4b05-9b3d-fbeba158b83b.png)



**<u>4.1.1 Ridge（L2）</u>**   ---  惩罚平方

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852632685-5a7e42f3-58c9-4326-b3b7-966a761c0593.png)

对大权重的影响更大

**导数/斜率：**

+ <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852771829-afe733b4-14fe-4ec8-8f33-3e60a66a2592.png)  => 在任何地方都平滑变化



黑色椭圆 --> **loss function（误差）等高线**

+  越往中心 → 误差越小 
+  中心那个点 是**最理想但可能过拟合的解**

红色形状（关键）--> **正则化约束**

+ 只能在这个范围里选参数

最终解（交点）--> 椭圆不断缩小，**椭圆第一次碰到红色边界的地方**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774856225118-e14d5fe4-8682-478e-b07c-6a777402098d.png) => <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774856238186-43b1ccbf-a178-4928-8766-26790a4f8396.png)   => 对每个方向惩罚一样 & 平滑

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774855795370-85834496-6d9c-4a20-b666-66fc5fc2ea31.png)

 接触点通常在“圆的边上“，不在坐标轴上 => 所有特征还在 



**<u>4.1.2 Lasso（L1）</u>**  --- 惩罚绝对值

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852705239-8936c192-a514-4466-809f-1dada87dee0d.png)

 惩罚是“线性的”

**导数/斜率：**

+ <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774852901189-c7b73436-5b5e-40e2-8a6f-e6916483121c.png)   => 在 0，没有导数

导数本质是：在某个点，**左边的斜率 = 右边的斜率**

在 0：没有一个统一的斜率  =>** 不可导（no derivative）**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774856057114-0db55d0e-68c6-4569-b8c6-46cddc377d47.png)

 尖角在坐标轴上，椭圆碰到尖角。 一个参数直接变 0  =>  特征被删除。



**<u>能不能变成 0 => 能不能自动删特征（feature selection）</u>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774853284819-5f39dbfe-4f67-4606-a317-559464dd734d.png)

如果允许 w<sub> 2 </sub>= 0，<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774853336164-fdfe7586-bc1d-495e-b74e-87545c95a051.png) => x<sub>2</sub> 被彻底忽略 => 自动删除一个变量

+ Lasso：当 w = 0 => 自动删掉
    - 更简单, 更容易解释；更少噪声 
+ Ridge：不会删, 都留着，只是变小
    - 更稳定, 但有冗余
5. 为什么能过防止过拟合？=>模型复杂度来自哪里？
+  参数多；参数大 

正则化 => 限制参数：

+  Ridge：让参数小 
+  Lasso：让一部分消失 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774856940452-22b5b5f0-ce6e-412d-98e4-a6ce3669fc66.png)



#####  Stepwise Selection（逐步特征选择）  
和 Lasso 等类似，——都是在做：选哪些变量（features）该留下，哪些该删掉

 **Stepwise selection** is a feature selection method that** iteratively adds or removes variables** based on **a model fit criterion**, including forward selection, backward elimination, and bidirectional selection.  

|  | **Stepwise** | **Lasso** |
| --- | :---: | :---: |
| 方法 | 手动试 | 数学优化 |
| 速度 | 慢 | 快 |
| 稳定性 | 不稳定 | 更稳定 |
| 删除变量 | 逐步 | 自动 |


+ ** Forward Selection**（前向选择): 一个一个加
    - 加 x₁ → 看效果;  加 x₂ → 看效果，选“提升最大”的那个
+  **Backward Elimination**（后向删除) ：一个一个删，选影响最小的那个
+  **Bidirectional**（双向）  

#####  How to fine-tune the parameters（如何优化参数）
 通过最小化误差（loss function）来调整参数（w, b）  

The parameters are optimized by **minimizing the Mean Squared Error (MSE)** using **gradient descent.**  

常用方法：

+  梯度下降（Gradient Descent）

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1774863641782-2c1c8af8-b06a-4e7c-b8e3-2e105c16c5fc.png)

+ **Gradient descent** is an optimization algorithm that updates parameters** in the direction of the negative gradient** to minimize the loss function.   通过沿着梯度的反方向更新参数，使损失函数最小  

---

##### 考题预测（也许会有图像）
###### **Predicted Question 1：**How to compute the error for regression models (linear & logistic)?
+ **Linear Regression:** Error is measured by the difference between predicted and actual values. Common metrics:
    - **MSE (Mean Squared Error):** average of squared differences.
    - **RMSE (Root Mean Squared Error):** square root of MSE, same unit as target variable.
    - **MAE (Mean Absolute Error):** average of absolute differences, less sensitive to outliers.
    - **R² (Coefficient of Determination):** proportion of variance explained by the model.
+ **Logistic Regression:** Since output is probability, error is measured using:
    - **Log-Loss (Cross-Entropy Loss):** penalizes wrong confident predictions.
    - **Classification metrics:** Accuracy, Precision, Recall, F1-score, ROC-AUC.

###### **Predicted Question 2：**How to update the parameters in regression models?
   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777119923106-ad89c8b3-a165-4db8-8de2-e1c7219c05a1.png)

###### **Predicted Question 3: **How to avoid overfitting in regression models?
+ **Regularization:**
    - **Ridge Regression (L2 penalty):** shrinks coefficients but not to zero.
    - **LASSO Regression (L1 penalty):** forces some coefficients to zero, feature selection.
    - **Elastic Net:** combines L1 and L2.
+ **Other strategies:**
    - Use **cross-validation** to tune hyperparameters.
    - Reduce model complexity (e.g., lower polynomial degree).
    - Increase training data.
    - Apply **feature selection** or **stepwise regression**.

---

#### Open questions related to the understanding of AI, and the applications of AI.
How people use ChatGPT in our daily life, if we are engineer, how can we improve Challenges





