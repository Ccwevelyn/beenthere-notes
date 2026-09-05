---
title: Final
type: note
description: 仅供参考~ 以老师的重点为准~
attachments:
  - label: PDF
    file: /uploads/data-science-final.pdf
grade: year-3
semester: spring
course: data-science-business-analytics
date: 2026-09-05
order: 3
published: true
---
+ <font style="color:rgb(0, 0, 0);background-color:rgb(255, 255, 230);">2026/05/08 (FRI) 19:00-22:00 澳門理工大學體育館</font>
+ **<font style="color:rgb(255,0,0);">5</font>**<font style="color:rgb(255,0,0);"> short-answer </font><font style="color:rgb(0,0,0);">questions and 2 </font><font style="color:rgb(255,0,0);">calculation </font><font style="color:rgb(0,0,0);">questions</font>
+ <font style="color:rgb(0,0,0);">带计算器！</font>

### <font style="color:rgb(0,0,0);">Basic knowledge of R operator </font>
#### Arithmetic Operators  
**算数运算符**： Used to perform basic mathematical calculations  

| **运算符** | **解释** | | **示例** | **输出** |
| :---: | :---: | --- | :---: | :---: |
| x <- 5，y <- 16 | | | | |
| `+` | Addition 加 | | `x + y` | 21 |
| `-` | Subtraction 减 | | `x - y` | -11 |
| `*` | Multiplication乘 | | `x * y` | 80 |
| `/` | Division 除 | | `y / x` | 3.2 |
| `^` | Exponentiation 幂运算 | | `y ^ x` | 1048576 |
| `%%` | Modulus 取余 | | `y %% x` | 1 |
| `%/%` | Integer division 取整 | | `5 %/% 2` | 2 |


#### Relational Operatiors
 **关系运算符**：Used to compare values and return logical results (TRUE or FALSE).  

| **运算符** | **解释** | **示例** | **输出** |
| :---: | :---: | :---: | :---: |
| x <- 5，y <- 16 | | | |
| `<` | Less than | `x < y` | TRUE |
| `>` | Greater than | `x > y` | FALSE |
| `<=` | Less than or equal to | `x <= 5` | TRUE |
| `>=` | Greater than or equal to | `y >= 20` | FALSE |
| `==` | Equal to | `y == 16` | TRUE |
| `!=` | Not equal to | `x != 5` | FALSE |


#### Logical Operators
**逻辑运算符**：Used to perform logical operations such as NOT, AND, and OR, returning Boolean values (TRUE or FALSE).

+ **AND**: 两个条件都必须为真，结果才会是 TRUE; 如果其中一个是 FALSE，结果就一定是 FALSE。
+ **OR**：只要有一个条件为 TRUE，返回 TRUE

| **运算符** | **解释** | | **示例** | **输出** |
| --- | :---: | --- | :---: | :---: |
| 0 被当作 FALSE<br/>非 0 被当作 TRUE | | | x <- c ( TRUE, FALSE, 0, 6 ) <br/>       y <-c ( FALSE, TRUE, FALSE, TRUE ) |
| `!` | Logical NOT, Get the inverse value | | `!x` | FALSE TRUE TRUE FALSE |
| `&` | **Element-wise** logical AND 逐一元素 | | `x & y` | FALSE FALSE FALSE TRUE |
| `&&` | Logical AND 只检查第一个元素 | | `x && y` | FALSE |
| `|` | **Element-wise** logical OR 逐一元素 | | `x | y` | TURE TRUE FALSE TRUE |
| `||` | Logical OR 只检查第一个元素 | | `x || y` | TURE |


【**拓展】**`**&&**`** 和 **`**||**`** 只检查第一个元素**

+ 在 R 里，很多对象都是 向量，所以像 `&` 和 `|` 这样的运算符会逐元素比较，返回一个向量结果。
+ 但是在 控制语句（比如 `if`、`while`）里，条件只能是一个单一的布尔值（TRUE 或 FALSE），不能是一个向量。
    - `&&` 和 `||` 的设计目的就是：**只检查第一个元素**，返回一个单一布尔值。  
    -  直接用于控制语句，不会因为返回一个向量而出错。  

#### Assignment Operators
 **赋值运算符**：Used to assign values to variables in R, either leftwards or rightwards, and sometimes across environments.

| **分类** | **运算符** | **解释** | |
| :---: | :---: | :---: | --- |
| Leftwards assignment | `<-`/`=` | 二者基本等价，常用。箭头指向的是变量名（被赋值的对象）Same environment | |
| | `<<-` | Parent/global environment<br/>赋值到父环境或全局环境，可以修改函数外部的变量   | |
| Rightwards assignment | `->>` | | |
| | `->` |  语法上可用，但实际很少使用，箭头指向的是变量名（被赋值的对象）Same environment | |


#### Additional content
##### （1）Operation on vector
In R, all operations are carried out in element-wise fashion. If vectors have different lengths, R uses recycling to match lengths.

1. **基本向量运算**

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777994357895-9c88f64d-75dc-4ee3-8df5-1a86e8d0aa3e.png)

2. **向量长度不一致时的循环补齐 (Recycling Rule)  **

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777994487181-50536350-e78a-4272-a707-4315122b3807.png)

3. **标量与向量运算  **

```r
x <- c(2,1,8,3)
x - 1 # Scalar 1 is recycled to 1,1,1,1
# [1] 1 0 7 2
```

+ 在 R 里，`x - 1` 的逻辑是：
    - `1` 被当作一个长度为 1 的向量。
    - R 会自动 **循环补齐**，变成 `1,1,1,1`，然后和 `x` 的每个元素逐一相减。
+ 所以结果是：( 2−1, 1−1, 8−1, 3−1 )=1, 0, 7, 2

 4. **非整倍数长度的警告  **

+ **警告 (Warning)** → 程序继续跑，有结果，但提醒注意可能的逻辑问题。  
+ **安全性考虑**：如果长向量的长度不是短向量的整数倍，补齐后最后一轮会“不完整”。
    - 比如 `x` 长度是 4，`c(1,2,3)` 长度是 3。
    - 补齐后是 `1,2,3,1`，但其实只补了 3 个完整元素 + 1 个额外元素。
    - R 担心你可能是 **无意写错**，所以会给出警告，提醒你注意长度不匹配。

```r
x <- c(2,1,8,3)
# 非整倍数补齐：长度为 3，不能整倍数补齐到 4
x + c(1,2,3)
# [1] 3 3 11 4
# Warning: longer object length is not a multiple of shorter object length
```

##### （2）Exercise
```r
x <- c(1:10)
x[(x > 8) | (x < 5)]
# 结果是 1 2 3 4 9 10
```

+ `x <- c(1:10)`：生成一个向量 `1,2,3,...,10`。
+ `(x > 8)`：逻辑判断，得到 `FALSE FALSE ... TRUE TRUE`（只有 9 和 10 大于 8）。
+ `(x < 5)`：逻辑判断，得到 `TRUE TRUE TRUE TRUE FALSE ...`（只有 1–4 小于 5）。
+ `(x > 8) | (x < 5)`：逻辑或，结果是前 4 个和最后 2 个为 TRUE。
+ `x[...]`：用逻辑向量做索引，筛选出对应位置的值 → `1 2 3 4 9 10`。

#### Final Question Prediction
+ **Short Q**
+ 参考 Mid- term
    -  Briefly describe the four fundamental data structures in R（12 marks）.  
    -  Please describe at least four data types in the R. For each one, provide a simple example（12 marks）
+ （List + Description + Example）* 4 = 12 marks
+ **List four types of operator in R and breif explain them.**

### <font style="color:rgb(0,0,0);">Hypothesis testing </font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1775473690264-c347b17b-01b8-4b48-985b-3011185c10b5.png)

#### Final Question Prediction
+ **Short Q**
+ 参考 Mid- term（只有 A 卷考到了 Hypothesis testing 10 marks）

    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778053185230-f4c70cca-d82f-4daf-8af6-0090a38a36c2.png)

### <font style="color:rgb(0,0,0);">Linear optimization </font>
#### Introduction
**<font style="color:rgb(0,0,0);">Optimization Problems: </font>**

+ <font style="color:rgb(0,0,0);">Maximize or minimize </font>**<font style="color:rgb(255,0,0);">objective function</font>**<font style="color:rgb(0,0,0);">, and have a set of </font>**<font style="color:rgb(255,0,0);">constraints</font>**<font style="color:rgb(0,0,0);">. </font>
+ <font style="color:rgb(0,0,0);">Can be </font><font style="color:rgb(255,0,0);">linear or nonlinear</font><font style="color:rgb(0,0,0);">.</font>
+ <u><font style="color:rgb(0,0,0);">Typical application:</font></u>
    - **制造商**：制定生产计划和库存策略，既要满足未来需求，又要 **最小化生产和库存成本**。
    - **金融分析师**<font style="color:rgb(0,0,0);">：在股票和债券投资组合中选择方案，以 </font>**最大化投资回报**<font style="color:rgb(0,0,0);">。</font>

**Linear Optimization **线性优化** = Linear Programming **线性规划

+  通过 线性目标函数 + 线性约束条件 来求解最优解的问题  

#### <font style="color:rgb(0,0,0);">General Guidelines for Problem Formulation </font>
+ **<font style="color:rgb(0,0,0);">Problem formulation </font>**<font style="color:rgb(0,0,0);">or </font>**<font style="color:rgb(0,0,0);">modeling</font>**<font style="color:rgb(0,0,0);">: Process of translating the verbal statement of a problem </font>**<font style="color:rgb(0,0,0);">into</font>**<font style="color:rgb(0,0,0);"> a </font>**<font style="color:rgb(0,0,0);">mathematical statement</font>**<font style="color:rgb(0,0,0);">/ model</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778038964131-1a203919-07ee-4b88-89fa-3f5a702e8997.png)

1. **Understand the problem thoroughly **<font style="color:rgb(0,0,0);">彻底理解问题，明确业务背景和限制条件。</font>
2. **Describe the objective**<font style="color:rgb(0,0,0);"> 描述目标，要么最大化（如利润），要么最小化（如成本）。</font>
3. **Describe each constraint **<font style="color:rgb(0,0,0);">描述每个约束条件，比如工时、预算或资源限制。</font>
4. **Define the decision variables**<font style="color:rgb(0,0,0);"> 定义决策变量，即可控制的输入</font>
5. **Write the objective in terms of the decision variables **<font style="color:rgb(0,0,0);">用决策变量写出目标函数</font>
6. **Write the constraints in terms of the decision variables **<font style="color:rgb(0,0,0);">把资源限制转化为不等式。</font>

#### **<font style="color:rgb(0,0,0);">Case Study</font>**
##### **Background**
Par, Inc. is a small manufacturer of golf equipment and supplies. Management decided to enter the market for medium- and high-priced golf bags 进入中高端高尔夫球包市场. The distributor will buy all produced bags by the end of the third month. 分销商承诺在三个月内收购所有生产的球包。

**Production Operations**：

+ Cutting and dyeing the material  材料裁剪与染色  
+ Sewing  缝纫  
+ Finishing (adding umbrella holder, club separators, etc.)  后期加工
+ Inspection and packaging 检验与包装  

**Production Requirements Per Bag**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778038607450-db3fa6bd-9f59-48bd-bede-547001ac547c.png)

**Departmental Time Availability**  部门工时限制 

  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778038666721-addcc7ab-987c-41bc-bb30-24726f064a6b.png)

 **Profit Contribution  **

+ Standard bag: $10 per unit
+ Deluxe bag: $9 per unit

##### <font style="color:rgb(0,0,0);">Problem Formulation</font>
**<font style="color:rgb(0,0,0);">Illustration</font>**<font style="color:rgb(0,0,0);">: Par, Inc. (cont.): Develop a </font><font style="color:rgb(255,0,0);">mathematical model </font><font style="color:rgb(0,0,0);">of the Par, Inc. problem to determine the </font>**<font style="color:rgb(0,0,0);">number</font>**<font style="color:rgb(0,0,0);"> of standard bags and the number of deluxe bags to produce to </font><font style="color:rgb(255,0,0);">maximize total profit contribution</font><font style="color:rgb(0,0,0);">.</font>

###### <font style="color:rgb(0,0,0);">Understand the problem thoroughly</font>
<font style="color:rgb(0,0,0);">We selected the </font><font style="color:rgb(255,0,0);">Par, Inc. problem </font><font style="color:rgb(0,0,0);">to introduce linear programming. </font>

+ **<font style="color:rgb(0,0,0);">Question</font>**<font style="color:rgb(0,0,0);">: How many standard bags and how many deluxe bags should be produced to maximize total profit contribution? </font>

###### <font style="color:rgb(0,0,0);">Describe the </font>**<font style="color:rgb(0,0,0);">objective</font>**
+ <font style="color:rgb(0,0,0);">The objective is to </font><font style="color:rgb(255,0,0);">maximize the total</font>**<font style="color:rgb(255,0,0);"> </font>****<font style="color:rgb(0,0,0);">contribution to profit</font>**

###### <font style="color:rgb(0,0,0);">Describe each constraint</font>
 每个部门的工时有限。约束条件保证各部门的使用时间不能超过可用时间。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040304451-81a9348d-4579-442a-9285-5c714edabda4.png)

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040510291-1e40efe0-156b-4ae1-b2c3-b5c2cf0d555d.png)

###### Define the decision variable
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040383329-93f94f5e-b3eb-434b-add2-6b1d3c6e0abc.png)

###### Write the objective in terms of the decision variables
  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040453836-f9af67b6-4a12-429d-aef7-6e1ce7e29e55.png)

###### <font style="color:rgb(0,0,0);">Write the constraints in terms of the decision variables</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040549743-1a1dda47-783b-4174-a62c-57dc8e609416.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040564261-7ddb901d-2225-4125-ae40-b03523863804.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040583008-79a43390-1297-4a61-86ed-43539a16d3e5.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040603496-fd7a7982-39cc-43c8-8553-42384f5bf4f3.png)

##### Mathematical model
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778040711008-f17ade53-ad9d-4656-bc89-65472ce818cd.png)

Our job now is to **find the product mix** (the combination of values for S and D) that <u>satisfies all the constraints</u> and at the same time y<u>ields the highest objective function value.</u> 既满足所有约束条件，又能使目标函数的值达到最大。  

This is a linear programming model because both the objective function and all constraint functions are linear functions of the decision variables. 这是一个线性规划模型，因为目标函数和所有约束条件都是决策变量的线性函数。

A linear function means each variable appears in a separate term and is raised to the first power. 线性函数的特点是：每个变量单独出现，并且指数为 1。  

###### Linear programming model
线性规划模型 Linear programming model 成立需要满足三个假设 assumptions:

1. **Proportionality 比例性 **: The contribution to the objective function and the resources used in each constraint are proportional to the value of each decision variable. 每个决策变量对目标函数的贡献，以及在约束中消耗的资源，都与该变量的取值成比例。  
    - 做多少产品，就贡献多少利润、消耗多少资源，线性关系。
    - 举例：做 1 个标准包赚 $10，做 2 个标准包就赚 $20，做 3 个就是 $30 ——利润和数量成比例。
2. **Additivity 可分性 **: The total value of the objective function and resources used can be found by summing the contributions of all decision variables. 目标函数的总值和资源消耗可以通过所有决策变量的贡献相加得到  
    - 不同产品的贡献可以直接相加。
    - 举例：做 2 个标准包赚 $20，做 3 个豪华包赚 $27，总利润就是 $47，直接相加，不会有额外复杂的交互作用。
3. **Divisibility 可加性 **: The decision variables are continuous, meaning they can take any value greater than or equal to zero (together with non-negativity constraints). 决策变量是连续的，可以取任何大于或等于零的值（结合非负性约束）  
    - 决策变量可以是连续的，不一定只能是整数。
    - 举例：模型里可以出现“生产 2.5 个标准包”，虽然现实中不可能半个包，但数学模型允许这样计算，方便用线性规划方法求解。

总而言之，

+ **比例性**：一件一件地增加，贡献和消耗成比例。
+ **可加性**：不同产品的贡献可以直接加在一起。
+ **可分性**：变量可以是连续值，不必限制为整数。

##### **<font style="color:rgb(0,0,0);">Solving the Par, Inc. Problem</font>**
+ The optimal solution must have the **highest objective function value.**
+ The optimal solution must be feasible (**satisfy all constraints**).
+ Search over the** feasible region** (set of all possible solutions). 在可行域中寻找最优解：在所有满足条件的解里，找到利润最大的那个点  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778041786099-9c5032fd-d556-4b6e-8ad6-dd7cf267788f.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778042059580-c8f157cc-8325-471c-8f46-128b6097a16a.png)

###### Geometry of the Problem  
+ 只要每个决策变量都是一次方，并且没有相乘或平方项，这个函数就是线性的  
+ If constraints are **inequalities**, each constraint cuts the space into two**<font style="color:#213BC0;"> half spaces</font>**.  每个不等式约束会把空间切成两个半空间  
    - The intersection of these half spaces forms the **feasible region**.  所有半空间的交集就是可行域。  
    - 可行域通常是一个封闭的多边形，最优解一定在它的顶点  .

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778051094041-fc3eec32-9091-48f5-9e4e-017799730540.png)  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778051101532-35083ce7-93ac-40f7-8816-21ec326b8eed.png)

+ **<font style="color:rgb(0,0,0);">Feasible Region </font>**
    - 阴影区域就是**所有约束条件的交集**，区域内的每个点都满足所有工时限制 <font style="color:#2F4BDA;">constraint</font> 和非负性 <font style="color:#2F4BDA;">nonnegativity</font>。
    - <font style="color:rgb(0,0,0);">可行域就是“所有条件都满足的解的集合”，在图上表现为一个多边形区域。</font>
+ ** ****Optimal Solution  **
    - The optimal solution is the point **<u>in the feasible region </u>**that yields the **<u>highest</u>**** possible ****<u>objective function value</u>**.
    - **Contour lines** 等值线 represent sets of points with the same objective function value. 目标函数取相同值的所有点  
    - The highest contour line **intersecting** the feasible region gives the optimal solution.
+ For Par, Inc., the highest contour line is: 10S+9D=7668, and it touches the feasible region at **point 3**.
+ <font style="color:rgb(0,0,0);">Based on the geometry of Figure, To solve a </font>**<font style="color:rgb(0,0,0);">linear</font>**<font style="color:rgb(0,0,0);"> optimization problem we only have to search the </font>**<font style="color:rgb(255,0,0);">extreme points </font>**<font style="color:rgb(0,0,0);">of the </font>**<font style="color:rgb(0,0,0);">feasible region</font>**<font style="color:rgb(0,0,0);"> to find the </font><font style="color:rgb(255,0,0);">optimal solution</font><font style="color:rgb(0,0,0);">.</font>
    - <font style="color:rgb(0,0,0);">Extreme points are found where </font>**<font style="color:rgb(0,0,0);">constraints</font>**<font style="color:rgb(0,0,0);"> </font>**<font style="color:rgb(0,0,0);">intersect</font>**<font style="color:rgb(0,0,0);"> on the boundary of the </font>**<font style="color:rgb(0,0,0);">feasible region</font>**<font style="color:rgb(0,0,0);">.</font>
    - <font style="color:rgb(0,0,0);">To find the extreme point:</font>
        * <font style="color:rgb(0,0,0);">Each extreme point </font><font style="color:rgb(255,0,0);">lies at the intersection of two constraint lines</font>
        * 把约束条件当作直线，交点就是候选解  

          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778051638434-7ab59bdd-7ab9-4c49-af44-a24c4a90cbd0.png)

#####  Alternative Optimal Solutions  
**<font style="color:#DF2A3F;">多重</font>**<font style="color:rgb(0,0,0);">最优解：An </font>**<font style="color:rgb(0,0,0);">alternative optimal solution </font>**<font style="color:rgb(0,0,0);">is one in which the </font>**<font style="color:rgb(0,0,0);">optimal objective function contour line</font>**<font style="color:rgb(0,0,0);"> </font><font style="color:rgb(255,0,0);">coincides with </font><font style="color:rgb(0,0,0);">one of the binding</font>**<font style="color:rgb(0,0,0);"> constraint lines</font>**<font style="color:rgb(0,0,0);"> on the boundary of the feasible region. 当目标函数的等值线刚好与某个约束边界重合时  </font>

<font style="color:rgb(0,0,0);">在这种情况下，不止一个点能达到相同的最优目标值。  </font>

###### **<font style="color:rgb(0,0,0);">【案例】</font>**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778052082925-38b34b3d-6b3d-4f95-b9ca-60bea1d2241c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778052129583-cdd771a7-afc0-4fdf-ba67-df5a8eb1b4c2.png)

##### <font style="color:rgb(0,0,0);">Infeasibility</font>
+ Infeasibility 不可行性 means **<font style="color:#DF2A3F;">no solution 无解</font>** to the linear programming problem.
+ **No points** satisfy **<font style="color:#2F4BDA;">all the constraints</font>** and the**<font style="color:#2F4BDA;"> nonnegativity conditions</font>** simultaneously.
+ Graphically, a feasible region 可行域不存在 does not exist.
+ 原因：
    - Management's expectations are too high. 管理层的期望过高  
    - Too many restrictions have been placed on the problem. 给问题加了太多限制条件，导致没有解能满足所有条件  

           <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778052513145-03d15479-b413-4976-a9e3-5f030e399d47.png)

+ Management should be informed that resources are not sufficient to make 500 standard bags and 360 deluxe bags.
+ Provide details:
    - Minimum amounts of resources required 达到目标所需的最低资源量.
    - Current amounts available 当前实际可用的资源量.
    - Additional amounts needed to reach the target.

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778052616923-806ceac0-2b86-4bc4-99a5-1804b179b486.png)

##### Unbounded Solution
**Unbounded  无界解 **: The situation in which the value of the solution:

+ May be made infinitely large—for a maximization problem.
+ May be made infinitely small—for a minimization problem.
+ Without violating any of the constraints.

解的值可以无限大（最大化问题）或无限小（最小化问题），而且不会违反任何约束条件。

+ 出现的原因：The occurrence of an unbounded solution is often the result of a **missing constraint**.   
    - 比如老板只说“利润越大越好”，但没有限制工时或资源，那模型就会告诉你“无限生产”，利润无限大。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778052842569-9c356faf-a023-401f-bd2a-9af5ac4233ac.png)    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778052859236-9be0d063-bf5d-4d30-b3f8-7a99023d500b.png)

+ 目标函数可以无限增大 <font style="color:rgb(255,0,0);">extends indefinitely</font>，因为没有限制生产数量。
+ 结果：无界解。
+ Reflection
    - In real-world linear programming models, an unbounded solution means the problem has been **improperly formulated  建模 不正确**.
    - If a profit maximization problem results in an unbounded solution, the mathematical model does **not represent** the real-world **problem sufficiently.**
    - In many cases, this error is the result of inadvertently **omitting a constraint **during problem formulation.

#### Final Question Prediction
+ Short Q? -> 考如何建模

### <font style="color:rgb(0,0,0);">Linear regression </font>
#### Mid-term
**<font style="color:rgb(0,0,0);">Q1：Describe the different variable selection procedures used in regression analysis, including their starting points and mechanisms (10 marks) </font>**

<font style="color:rgb(0,0,0);">Variable selection procedures are used to determine which independent variables should be included in a regression model. They generally fall into two categories: </font>**<font style="color:rgb(0,0,0);">Iterative Procedures </font>**<font style="color:rgb(0,0,0);">and the </font>**<font style="color:rgb(0,0,0);">Best Subsets Procedure</font>**<font style="color:rgb(0,0,0);">. </font>**<font style="color:rgb(0,0,0);">(2 marks) </font>**

1. **<font style="color:rgb(0,0,0);">Backward Elimination: (2 marks) </font>**
+ **<font style="color:rgb(0,0,0);">Mechanism: </font>**<font style="color:rgb(0,0,0);">It begins with a model containing </font>**<font style="color:rgb(0,0,0);">all </font>**<font style="color:rgb(0,0,0);">potential independent variables and removes them one by one based on a specific criterion. It stops when all remaining variables are significant at a specified level. </font>
+ **<font style="color:rgb(0,0,0);">Use Case: </font>**<font style="color:rgb(0,0,0);">It is best used when the sample size (𝑛) is significantly larger than the number of predictors (𝑝). </font>
2. **<font style="color:rgb(0,0,0);">Forward Selection: (2 marks) </font>**
+ **<font style="color:rgb(0,0,0);">Mechanism: </font>**<font style="color:rgb(0,0,0);">It begins with </font>**<font style="color:rgb(0,0,0);">no </font>**<font style="color:rgb(0,0,0);">variables in the model and adds them one by one based on a specific criterion. It stops when no remaining variables meet the threshold for addition. </font>
+ **<font style="color:rgb(0,0,0);">Use Case: </font>**<font style="color:rgb(0,0,0);">It is preferred for high-dimensional data (where 𝑝 > 𝑛) or massive datasets where computational efficiency is required. </font>
3. **<font style="color:rgb(0,0,0);">Stepwise Selection: (2 marks) </font>**
+ **<font style="color:rgb(0,0,0);">Mechanism: </font>**<font style="color:rgb(0,0,0);">Like forward selection, it begins with </font>**<font style="color:rgb(0,0,0);">no </font>**<font style="color:rgb(0,0,0);">variables. However, it is more dynamic: in each step, it adds the most significant variable that meets the 9 entry threshold, but then evaluates all variables currently in the model to remove the least significant one. It stops when no more variables can be added or removed. </font>
4. **<font style="color:rgb(0,0,0);">Best Subsets Procedure: (2 marks) </font>**
+ **<font style="color:rgb(0,0,0);">Mechanism: </font>**<font style="color:rgb(0,0,0);">This is an exhaustive approach that evaluates regression models for </font>**<font style="color:rgb(0,0,0);">every possible combination </font>**<font style="color:rgb(0,0,0);">of independent variables. It starts with all simple linear regressions, moves to all two-variable combinations, and continues until all subsets are tested and compared.</font>

---

**Q2：****<font style="color:rgb(0,0,0);">What strategies can be employed to avoid overfitting in regression modeling, and what are the primary methods of cross-validation used to assess model performance? (10 marks) </font>**

1. **<font style="color:rgb(0,0,0);">Strategies to Avoid Overfitting: (4 marks) </font>**
+ **<font style="color:rgb(0,0,0);">Variable Selection: </font>**<font style="color:rgb(0,0,0);">Only include independent variables that are expected to have a real and meaningful relationship with the dependent variable. </font>**<font style="color:rgb(0,0,0);">(1 mark) </font>**
+ **<font style="color:rgb(0,0,0);">Model Complexity: </font>**<font style="color:rgb(0,0,0);">Use complex models (such as quadratic or piecewise linear regression) only when there is a reasonable expectation that the complexity accurately depicts the underlying process. </font>**<font style="color:rgb(0,0,0);">(1 mark) </font>**
+ **<font style="color:rgb(0,0,0);">Human Oversight: </font>**<font style="color:rgb(0,0,0);">Do not let software dictate the final model. Use iterative procedures like stepwise or best-subsets regression as guidance rather than as the sole method for model generation. </font>**<font style="color:rgb(0,0,0);">(1 mark) </font>**
+ **<font style="color:rgb(0,0,0);">Cross-Validation: </font>**<font style="color:rgb(0,0,0);">Assess the model's performance using data other than the sample data used to build it. </font>**<font style="color:rgb(0,0,0);">(1 mark) </font>**
2. **<font style="color:rgb(0,0,0);">Cross-Validation Methods: </font>**
+ **<font style="color:rgb(0,0,0);">Holdout Method: </font>**<font style="color:rgb(0,0,0);">The data is divided into two sets: </font>**<font style="color:rgb(0,0,0);">(2 marks) </font>**
    - **<font style="color:rgb(0,0,0);">Training Set: </font>**<font style="color:rgb(0,0,0);">Used to build candidate models. </font>
    - **<font style="color:rgb(0,0,0);">Validation Set: </font>**<font style="color:rgb(0,0,0);">Used to compare model performances and select the final model for prediction. </font>
+ **<font style="color:rgb(0,0,0);">k-fold Cross-Validation: </font>**<font style="color:rgb(0,0,0);">The sample data is randomly divided into 𝑘equal-sized, mutually exclusive, and collectively exhaustive subsets (folds). The process is repeated over 𝑘iterations. </font>**<font style="color:rgb(0,0,0);">(2 marks) </font>**
+ **<font style="color:rgb(0,0,0);">Leave-one-out Cross-Validation: </font>**<font style="color:rgb(0,0,0);">For a sample of 𝑛observations, the model is estimated using 𝑛 − 1observations and evaluated on the single observation that was omitted. This process is repeated for every observation in the dataset. </font>**<font style="color:rgb(0,0,0);">(2 marks)</font>**

---

**<font style="color:rgb(0,0,0);">Q3: Define multicollinearity in multiple regression analysis, explain the primary problem it causes during hypothesis testing, and identify the common methods used to detect it. (10 marks)</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778062545498-96b9f6c2-ff64-4cae-baf0-e7cb66e5a52f.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778062554446-00936edb-31ff-45a3-b8b8-2d534b44f627.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778062579763-d2269815-6178-432f-94c3-75d62847544e.png)

#### Mid- term not involved
**<font style="color:rgb(15,17,21);">Addressing nonsignificant independent Variables  </font>**如何处理“不显著的自变量”  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1775476268326-f29938fe-aa20-4ad0-9ef4-a38635b7ccc2.png)

| 情况 | 处理方式 | 原因 |
| --- | --- | --- |
| 实践经验认为变量重要 | **保留** | 现实逻辑 > 统计显著性 |
| 删除后模型仍然好 | **删除** | 简化模型、减少噪声 |
| 截距不显著 | **特别处理，不可随便删** | 删除截距会改变模型结构 |


#### Final Question Prediction
+ Short Q；Linear regression** 不考计算**

### <font style="color:rgb(0,0,0);">Descriptive analysis: standardization and outliers </font>
#### <font style="color:rgb(0,0,0);">Measures of Location 位置度量</font>
+ **Measures of Location**：一组统计量，用来表示数据分布的“中心”或“典型值”。
+ 它们回答的问题是：**数据大致集中在哪里？**

##### <font style="color:rgb(0,0,0);">Median </font>
**<font style="color:rgb(0,0,0);">Median: </font>**<font style="color:rgb(0,0,0);">Value in the middle when the data are arranged in ascending order. </font>

+ <font style="color:rgb(0,0,0);">Odd number of observations: Middle value</font>
+ <font style="color:rgb(0,0,0);">Even number of observations: Average of two middle values</font>

##### <font style="color:rgb(0,0,0);">Mode 众数</font>
+ <font style="color:rgb(0,0,0);">Value that occurs most frequently in a data set.</font>
+ <font style="color:rgb(0,0,0);">存在多个 Mode 的情况</font>

##### <font style="color:rgb(0,0,0);">Mean</font>
###### <font style="color:rgb(0,0,0);">Mean/ Arithmetic Mean</font>
<!-- 这是一张图片，ocr 内容为：SAMPLE MEAN EX;-XY+X2+.......+XN X (2.2) N -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769833917603-42da6b94-3377-4807-859a-8a291223b5b4.png)

+ 适合 **独立的、可加的数据**，比如分数、温度、收入金额。
+ 每个数据点对整体的贡献是“线性”的，不需要考虑它和其他数据的乘法关系。

###### <font style="color:rgb(0,0,0);">Geometric Mean  </font>
+ <font style="color:rgb(0,0,0);">几何平均数：</font>适合 **比例或倍数关系的数据**，比如增长率、投资回报率、浓度变化。
+ 数据之间不是“独立相加”，而是 **相互作用（乘法依赖）**：一个时期的增长会影响下一个时期的基数。

<!-- 这是一张图片，ocr 内容为：SAMPLE GEOMETRIC MEAN X,-----------(XN)--(X)(X])------------------------(X))--(X))---------------------------------X)(X](X) (2.3) -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769833980455-0f83f8d6-b6ac-460f-aee2-9c9182a6d03d.png)

1. 算数平均数的局限
    - 适合加法关系
    - 涉及 **比例变化、增长率或倍数** 时，算术平均数会产生误导。  
2.  几何平均数的优势  
    - **乘法关系下的真实平均水平**：几何平均数考虑了数据的连乘效应。  
    - **应用场景**：金融（投资回报率、CAGR）、经济学（增长率）、科学（浓度、比例 )

**<font style="color:#DF2A3F;">【例题】</font>**

 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777996449312-10cb669d-e2b5-4162-835a-9e5503a76d58.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1777996458763-9fde7c49-efe5-4696-b043-4aed185ff5ab.png)

#### <font style="color:rgb(0,0,0);">Measures of Variability </font>
**Measures of Variability **<font style="color:rgb(0,0,0);">变异性度量</font>：用于描述数据的 **离散程度** 或 **分布范围**。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778035585652-0b11ba03-6552-4e19-85f7-c8ee49c8d0ae.png)

##### <font style="color:rgb(0,0,0);">Range </font>
+ **<font style="color:rgb(0,0,0);">Drawback:</font>**<font style="color:rgb(0,0,0);"> Range is based on only two of the observations and thus is </font><font style="color:rgb(255,0,0);">highly influenced </font><font style="color:rgb(0,0,0);">by </font>**<font style="color:rgb(0,0,0);">extreme value</font>**
    - <font style="color:rgb(0,0,0);">最大值 - 最小值</font>
    - <font style="color:rgb(0,0,0);">Range is based on only two of the observations and thus is </font><font style="color:rgb(255,0,0);">highly influenced </font><font style="color:rgb(0,0,0);">by extreme values. 受</font>**<font style="color:rgb(0,0,0);">极端值</font>**<font style="color:rgb(0,0,0);">影响</font>

##### <font style="color:rgb(0,0,0);">Variance 方差</font>
+ **<font style="color:rgb(0,0,0);">Variance </font>**<font style="color:rgb(0,0,0);">is a measure of variability that </font>**<font style="color:rgb(0,0,0);">utilizes all the data.</font>**
+ 衡量数据 **离散程度**的指标
+  对极端值非常敏感  
+ 方差的单位是原始单位的平方  
    - 通常用 **标准差 (Standard Deviation)** 来解释，因为它和原始单位一致。

<!-- 这是一张图片，ocr 内容为：SAMPLE STANDARD DEVIATION S二VS (2.5) -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769835242360-dcb72a4a-90a6-4fa4-b938-e765129e8c0f.png)

###### Sample Variance
+ **样本方差 (Sample Variance)**：通常我们只有样本数据，需要用样本来估计总体方差  
+ **<font style="color:#DF2A3F;">要 n - 1 ！！！</font>**
    - <font style="color:#000000;">样本均值从数据里算出来的，它“消耗”了一个自由度   Degrees of Freedom  </font>

<!-- 这是一张图片，ocr 内容为：SAMPLE VARIANCE Z(X;-X)2 (2.4) N-1 -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769834776456-e33277cf-951d-473c-ae15-f5c8473237d4.png)

**【例题】**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778035910282-645d3563-91b7-408f-8fc5-a81643427bd2.png)

###### **Population Variance**
+ **总体方差 (Population Variance)**：如果我们有整个**总体的数据**，分母用 N。  

<!-- 这是一张图片，ocr 内容为：2(X,-14) POPULATION VARIANCE: N -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769834850137-a4e1d315-b476-4f19-89cc-a1508b4d8e5b.png)

##### <font style="color:rgb(0,0,0);">Coefficient of Variation </font>**(CV)**
**算术平均数**告诉你“平均水平”。

**标准差**告诉你“波动大小”。

**CV**告诉你“波动大小占平均水平的比例”。

<font style="color:rgb(0,0,0);">The </font>**<font style="color:rgb(0,0,0);">coefficient of variation </font>**<font style="color:rgb(0,0,0);">is a descriptive statistic that indicates how large the standard deviation is relative to the mean</font>

<!-- 这是一张图片，ocr 内容为：COEFFICIENT OF VARIATION STANDARD DEVIATION % X 100 (2.6) MEAN -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769835284238-40b94a53-f4f2-45d7-bf4d-79f1450a8545.png)

**CV 越小越稳定，越大越不稳定  **

**【例题】**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778036088007-8dcbf9a4-a698-4553-9316-5544c5004d56.png)

#### <font style="color:rgb(0,0,0);">Analyzing Distributions </font>
##### <font style="color:rgb(0,0,0);">Percentiles  百分位数  </font>
+ Percentile 是衡量数据分布位置的指标  
+ 百分位数是一个值，它表示在数据集中有多少比例的观测值 **小于或等于该值**。  
+ **第 p 百分位数**：
    - 约有 **p% 的数据值小于它**
    - 约有 **(100 − p)% 的数据值大于它**

<!-- 这是一张图片，ocr 内容为：LOCATION OF THE PTH PERCENTILE LP - HO (N + 1) (2.7) 100 -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769849702343-b55fe16b-1e29-45e5-97ec-bb3422ed2e69.png)

##### <font style="color:rgb(0,0,0);">Quartiles 四分位数</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778036230980-83dc3691-7336-4d32-a37f-aeab7043277a.png)

+ **Interquartile Range (IQR)**
    - **IQR = Q₃ − Q₁**
    - 表示中间 **50%** 数据的分布范围
    - 常用于箱线图（Boxplot）中识别异常值

##### <font style="color:rgb(0,0,0);">z-Scores </font>
+ <font style="color:rgb(0,0,0);">The </font>**<font style="color:rgb(0,0,0);">z-score </font>**<font style="color:rgb(0,0,0);">measures the</font>**<font style="color:rgb(0,0,0);"> relative location</font>**<font style="color:rgb(0,0,0);"> of a value in the data set. </font>
    - 它回答的问题是：**这个值在整个数据分布中处于什么位置？**
+ <font style="color:rgb(0,0,0);">Helps to determine </font>**<font style="color:rgb(0,0,0);">how far</font>**<font style="color:rgb(0,0,0);"> </font><u><font style="color:rgb(0,0,0);">a particular value is from the mean</font></u><font style="color:rgb(0,0,0);"> relative to the data set's standard deviation. </font>
+ **z-score **<font style="color:rgb(0,0,0);">Often called the standardized value，表示某个数据点距离平均值有多远，并且是以 </font>**标准差为单位**<font style="color:rgb(0,0,0);">来衡量的  </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778036362733-c2f785e7-445c-4f76-b516-9d15dbe64f6f.png)

+ **z-score = 数据点与平均值的距离 ÷ 标准差**
+ 它是一个 **无单位的标准化指标**，用于衡量数据点在分布中的相对位置
+ 越远离 0，表示越偏离平均水平
+ **<font style="color:#117CEE;"> 一般认为∣Z∣>3 的数据点可能是异常值。</font>**  

##### <font style="color:rgb(0,0,0);">Empirical Rule  经验法则  </font>
<font style="color:rgb(0,0,0);">When the distribution of data exhibits a symmetric bell-shaped distribution, the </font>**<font style="color:rgb(0,0,0);">empirical rule </font>**<font style="color:rgb(0,0,0);">can be used to determine the </font>**<font style="color:rgb(0,0,0);">percentage of data values </font>**<font style="color:rgb(0,0,0);">that are </font><u><font style="color:rgb(0,0,0);">within a specified number of standard deviations of the mean</font></u><font style="color:rgb(0,0,0);">.</font>

 当数据呈现 **正态分布**时，经验法则可以用来估计**数据在平均值附近的分布比例**。 

 <!-- 这是一张图片，ocr 内容为：EMPIRICAL RULE 50% 50% 34% 13.5% 13.5% 34% 2.35% 2.35% 68% 95% 99.7% WALLSTREETMOJO -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769851226200-7cc73a11-ce26-4098-9253-3453070a8a51.png)

| **μ ****± ****1σ** | 约 68% | 大多数数据在平均值上下 1 个标准差之间 |
| --- | --- | --- |
| **μ ****± ****2σ** | 约 95% | 几乎所有数据在平均值上下 2 个标准差之间 |
| **μ ****± ****3σ** | 约 99.7% | 几乎全部数据都在平均值上下 **3 个标准差**之间 |


##### <font style="color:rgb(0,0,0);">Identifying Outliers</font>
+ **<font style="color:rgb(0,0,0);">Outliers</font>**<font style="color:rgb(0,0,0);">: Extreme values in a data set.</font>

<!-- 这是一张图片，ocr 内容为：DETECTING OUTLIERS WITH Z-SCORES NOT UNUSUAL MODERATELY MODERATELY UNUSUAL UNUSUAL OUTLIERS OUTLIERS Z-3 Z1 Z2 Z-2 Z三-1 Z3 0三Z -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769851279787-042706d8-7e79-43f8-aa4f-f46b8ec7875a.png)

**<font style="color:rgb(0,0,0);">A </font>**_**<font style="color:rgb(255,0,0);">z-</font>**_**<font style="color:rgb(255,0,0);">score less than –3 or greater than +3 is an outlier</font>****<font style="color:rgb(0,0,0);">.</font>**

#### Final Question Prediction
+ 参考 Mid -term
+ 计算题 12 marks

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778054741395-0645089d-b3f3-4c50-83a2-bc2ae5bb0c2c.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778054978101-62615c72-1e3b-4ac4-9a83-6398fb004330.png)

### <font style="color:rgb(0,0,0);">Measures of associations between two variables </font>
#### <font style="color:rgb(0,0,0);">Scatter Charts 散点图</font>
+ 散点图是一种用 **点** 来 <font style="color:rgb(0,0,0);">analyzing the relationship between two variables</font>
+ 每个点代表一个观测值的 **两个变量坐标**：横轴一个变量，纵轴另一个变量。
+ 它能帮助我们识别变量之间是否存在 **相关性、趋势或异常值**

                    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778036730280-7ec020f6-b824-438a-8988-da3f941ce45a.png)

#### <font style="color:rgb(0,0,0);">Covariance  协方差  </font>
+ **<font style="color:rgb(0,0,0);">Covariance </font>**<font style="color:rgb(0,0,0);">is a descriptive measure of the </font>**<font style="color:rgb(0,0,0);">linear association</font>**<font style="color:rgb(0,0,0);"> between two variables  衡量两个变量之间 </font>**线性关系方向**
+  它回答的问题是：**两个变量是否一起变化？如果是，它们是同向还是反向？ **

| **Cov(X,Y) ****> ****0** | 两变量 **正相关 **<font style="color:rgb(255,0,0);">Positively related</font> |
| --- | --- |
| **Cov(X,Y) ****< ****0** | 两变量 **负相关 **<font style="color:rgb(255,0,0);">Negatively related</font> |
| **Cov(X,Y) ****<font style="color:#DF2A3F;">≈</font>**** 0** | 两变量之间没有明显线性关系 Not linearly related |


<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778055422157-69724c1d-ee48-46de-8654-2b094c50d82e.png)

##### **Sample covariance**
+ 抽样调查 - 用样本估计总体

<!-- 这是一张图片，ocr 内容为：SAMPLE COVARIANCE Z(X:-X)(Y) (2.9) XY N一 -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769851459710-f2f6b404-e3fa-40b5-badf-53577b044d17.png)

**【例题】**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778037086227-df898c69-c444-45f1-88ad-4ac019cfed76.png)

##### Population **covariance**
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778036890143-bbff2cfb-e2a5-40f4-b15d-0e7baa366b11.png)

##### The Problem: Unit Dependency
+ 协方差反映方向和强度，但受单位影响，**不适合横向比较**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778037182533-699d738f-3e32-42b3-a179-f318db9a97ac.png)

+ <font style="color:rgb(0,0,0);">协方差的值受两个变量的单位影响：</font>
    - <font style="color:rgb(0,0,0);">如果 </font><font style="color:rgb(0,0,0);">X</font><font style="color:rgb(0,0,0);"> 是“小时”，</font><font style="color:rgb(0,0,0);">Y</font><font style="color:rgb(0,0,0);"> 是“分数”，协方差单位是“小时 × 分数”</font>
    - <font style="color:rgb(0,0,0);">如果把小时换成分钟，协方差值会变成原来的 60 倍</font>
+ <font style="color:rgb(0,0,0);">所以：</font>**协方差的数值不能直接比较不同变量或不同数据集的关系强弱**

#### <font style="color:rgb(0,0,0);">Correlation Coefficient</font>
+ <font style="color:rgb(0,0,0);">判断变量关系强弱</font>
+ **Covariance -> ****<font style="color:rgb(0,0,0);">Correlation Coefficient</font>**
+ <font style="color:rgb(0,0,0);">The </font>**<font style="color:rgb(0,0,0);">correlation coefficient </font>**<font style="color:rgb(0,0,0);">measures the relationship between two variables. </font>
+ <font style="color:rgb(255,0,0);">Not affected </font><font style="color:rgb(0,0,0);">by the units of measurement for </font>_<font style="color:rgb(0,0,0);">x </font>_<font style="color:rgb(0,0,0);">and </font>_<font style="color:rgb(0,0,0);">y.</font>_

<!-- 这是一张图片，ocr 内容为：SAMPLE CORRELATION COEFFICIENT (2.10) LXY SXSY WHERE SAMPLE CORRELATION COEFFICIENT 三 SAMPLE COVARIANCE 三 SXY LE STANDARD DEVIATION OF X SAMPLE S SX SAMPLE STANDARD DEVIATION OF Y 三 SY -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769852426391-f3d754d1-f6a1-4c9f-91bc-ec75dcbeed88.png)

+ **<font style="color:rgb(0,0,0);">相关系数</font>**<font style="color:rgb(0,0,0);">是</font>**<font style="color:rgb(0,0,0);">协方差的标准化版本</font>**_<font style="color:rgb(0,0,0);">，</font>_无单位、范围固定、可比较性强:** 无单位、范围在 [−1,+1]**

                       <!-- 这是一张图片，ocr 内容为：INTERPRETATION OF OF CORRELATION COEFFICIENT: -1-+1 RELATIONSHIP BETWEEN THE X AND Y VARIABLES R VALUE NEGATIVE LINEAR 0V NO LINEAR RELATIONSHIP NEAR O POSITIVE LINEAR V0 -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769852834682-51d362b9-797d-4698-ab7e-4c57e5983d0d.png)

**【例题】**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778037452416-ba613dbc-7f9e-4556-a268-09f3f6f3dc0a.png)

##### Problem: Non-linear relationship
<!-- 这是一张图片，ocr 内容为：$1,600 CONTROL $1,400 DOLLARS SPENT ON ENVIRONMENTAL CO $1,200 $1,000 $800 $600 $400 $200 $0 0 20 40 08 09 100 OUTSIDE TEMPERATURE(F) -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1769853168462-afbe0a04-cff1-43c3-bfe7-500a2cb5466f.png)

+ **<font style="color:#213BC0;">Nonlinear Relationship Producing a Correlation Coefficient Near Zero</font>**

#### **Final Question Prediction**
+ 参考 Mid -term
+ 计算题（20 marks）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778055131362-b13f8ac3-d6fa-4e3f-a45a-7a63b799303a.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778055138344-99c24479-62d8-4591-b7a3-0144923ef2ee.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778055158754-85f807c9-27e5-419b-88bc-417a381e4dbd.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778055164971-7ced731a-2115-4b50-8f1c-c53ada10be47.png)

### <font style="color:rgb(0,0,0);">Time Series Analysis and Forecasting</font>
#### **<font style="color:rgb(0,0,0);">Time Series Patterns</font>**
+ **<font style="color:rgb(0,0,0);">Time series: </font>**<font style="color:rgb(0,0,0);">A sequence of observations on a variable measured at </font><font style="color:rgb(255,0,0);">successive 连续的 points in time or over successive </font><font style="color:rgb(0,0,0);">periods of time</font>
+ <font style="color:rgb(0,0,0);">To identify the underlying pattern in the data, a useful first step is to construct </font><font style="color:rgb(255,0,0);">a time series plot</font>
    - <font style="color:rgb(255,0,0);">Horizontal </font><font style="color:rgb(0,0,0);">axis：</font><font style="color:rgb(255,0,0);">T</font>**<font style="color:rgb(255,0,0);">ime</font>**
    - <font style="color:rgb(255,0,0);">Vertical axis：</font><font style="color:rgb(0,0,0);">Values of the </font>**<font style="color:rgb(255,0,0);">time series variable</font>**

##### **<font style="color:rgb(0,0,0);">Horizontal Pattern </font>**
+ <font style="color:rgb(0,0,0);">Exists when the data </font>**<font style="color:rgb(0,0,0);">fluctuate randomly around a constant mean</font>**<font style="color:rgb(0,0,0);"> over time.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778055811825-fdf9992f-399e-409a-bbd1-10aafad90788.png)

**Stationary time series 平稳时间序列** is one whose <u>statistical properties are independent of time 统计特性不随时间变化</u>

+ The process generating the data has a constant mean. 数据生成过程的均值是恒定的
+ The variability of the time series is constant over time. 序列的波动性（方差）在整个时间内保持不变。

数据的平均水平和波动幅度一直稳定，不会因为时间推移而改变。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778056122222-79e480ab-7723-4619-a44a-5da4417e1c6b.png)

业务条件的变化可能会让时间序列整体水平发生转移。  

+ **平稳序列**：均值和方差不随时间变化。
+ **水平转移 (Shift in Level)**：外部事件导致均值突然改变。
+ **案例意义**：时间序列分析不仅要看趋势和波动，还要考虑外部事件对数据的影响。

##### **<font style="color:rgb(0,0,0);">Trend Pattern </font>**
+ 指时间序列中的长期变化，表现为**持续的上升或下降**。
+ 它反映的是结构性的长期因素，而不是短期的随机波动。

<font style="color:rgb(0,0,0);">A trend is usually the result of long-term factors such as: </font>

+ <font style="color:rgb(255,0,0);">Population increases or decreases. </font>
+ <font style="color:rgb(255,0,0);">Shifting demographic characteristics of the population. </font>
+ <font style="color:rgb(255,0,0);">Improving technology. </font>
+ <font style="color:rgb(255,0,0);">Changes in the competitive landscape. </font>
+ <font style="color:rgb(255,0,0);">Changes in consumer preferences.</font>

<details class="lake-collapse"><summary id="u3f6454b6"><span class="ne-text" style="font-size: 14px">解释</span></summary><p id="u0e914b40" class="ne-p"><strong><span class="ne-text" style="font-size: 13px">Population increases or decreases</span></strong></p><ul class="ne-ul"><li id="ud52803ca" data-lake-index-type="0"><span class="ne-text" style="font-size: 13px">人口增长会推动消费需求，人口减少则可能导致市场萎缩。</span></li></ul><p id="uaed9671e" class="ne-p"><strong><span class="ne-text" style="font-size: 13px">Shifting demographic characteristics of the population </span></strong><span class="ne-text" style="font-size: 13px">人口结构特征的变化。</span></p><ul class="ne-ul"><li id="u15e5ddb6" data-lake-index-type="0"><span class="ne-text" style="font-size: 13px">老龄化社会会增加医疗需求，年轻人口增加则可能推动教育和娱乐产业。</span></li></ul><p id="u22c87edb" class="ne-p"><strong><span class="ne-text" style="font-size: 13px">Improving technology </span></strong><span class="ne-text" style="font-size: 13px">技术进步。</span></p><ul class="ne-ul"><li id="uf12b745f" data-lake-index-type="0"><span class="ne-text" style="font-size: 13px">新技术提升生产效率，降低成本，推动长期增长。</span></li></ul><p id="u93802fee" class="ne-p"><strong><span class="ne-text" style="font-size: 13px">Changes in the competitive landscape </span></strong><span class="ne-text" style="font-size: 13px">竞争格局的变化。</span></p><ul class="ne-ul"><li id="u5e1435e2" data-lake-index-type="0"><span class="ne-text" style="font-size: 13px">新进入者或行业整合会改变市场份额，形成长期趋势。</span></li></ul><p id="u9043fbba" class="ne-p"><strong><span class="ne-text" style="font-size: 13px">Changes in consumer preferences </span></strong><span class="ne-text" style="font-size: 13px">消费者偏好的变化。</span></p><ul class="ne-ul"><li id="u83a133df" data-lake-index-type="0"><span class="ne-text" style="font-size: 13px"> 环保意识增强会推动绿色产品的长期需求。</span></li></ul></details>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778057806675-6552b7c7-3e3b-4c95-9288-d4c2ff7090c1.png)

<font style="color:rgb(0,0,0);">总体上升趋势：</font>

<font style="color:rgb(0,0,0);">V</font><font style="color:rgb(0,0,0);">isual inspection of the time series plot shows some </font><font style="color:rgb(255,0,0);">up-and-down </font><font style="color:rgb(0,0,0);">movement over the past 10 years, but the time series seems also to have a systematically </font><font style="color:rgb(255,0,0);">increasing, or upward, trend.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778058077559-620be110-7d9d-4f16-be54-ced46bd45275.png)

<font style="color:rgb(0,0,0);">Non- linear 增长：</font>

<font style="color:rgb(0,0,0);">The time series increases in </font>**<font style="color:rgb(255,0,0);">a nonlinear </font>**<font style="color:rgb(0,0,0);">fashion; that is, the rate of change of revenue does not increase by a constant amount from one year to the next.  增长速度不是固定的  </font>

##### **<font style="color:rgb(0,0,0);">Seasonal Pattern </font>**
+ **<font style="color:rgb(0,0,0);">Seasonal patterns </font>**<font style="color:rgb(255,0,0);">are recurring patterns </font><font style="color:rgb(0,0,0);">over successive periods of time. 指在连续的时间周期中反复出现的规律性模式  </font>
    - A retailer selling bathing suits expects low sales in fall and winter, and peak sales in spring and summer every year.
+ <font style="color:rgb(0,0,0);">Seasonal patterns can also occur within shorter cycles, e.g., daily traffic volume shows peaks at rush hour, moderate flow during the day, and low flow at night.  </font><font style="color:rgb(0,0,0);">季节性不仅限于一年周期，也可能出现在更短周期，比如一天内的交通流量：早晚高峰最高，中午适中，午夜到凌晨最低  </font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778058504306-89ef7a88-fdf9-441d-bdfa-a87b4d54e9d7.png)

##### **<font style="color:rgb(0,0,0);">Trend and Seasonal Pattern </font>**
+ <font style="color:rgb(0,0,0);">Some time series include both a trend and a seasonal pattern</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778058477306-3c94a095-77ee-40c2-9ada-7d35e334b316.png)

##### **<font style="color:rgb(0,0,0);">Cyclical Pattern </font>**
A cyclical pattern **周期性模式** exists if the time series plot shows an alternating sequence of points **below and above the trendline** that lasts for more than one year. 如果时间序列图在趋势线的上下方交替波动，并且这种波动持续超过一年，就说明存在周期性模式。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778058956989-3077e0e8-63ab-4a02-a5d2-867d1467bce0.png)

+ **周期性效应**通常与长期趋势效应结合在一起。
+ 两者合并后称为 **趋势-周期效应**。

#### **<font style="color:rgb(0,0,0);">Forecast Accuracy</font>**
##### Method
+ **<font style="color:rgb(0,0,0);">Naïve forecasting method</font>**<font style="color:rgb(0,0,0);">: Using the </font><u><font style="color:rgb(0,0,0);">most recent data</font></u><font style="color:rgb(0,0,0);"> to predict future data</font>
+ **Average of Past Values method**: use the average of <u>all the historical data </u>available as the forecast for the next period. 
+ **<font style="color:rgb(0,0,0);">Moving Averages：</font>**<font style="color:rgb(0,0,0);">Uses the average of the most recent k</font>_<font style="color:rgb(0,0,0);"> </font>_<font style="color:rgb(0,0,0);">data values in the time series as the forecast for the next period.</font>
+ **<font style="color:rgb(0,0,0);">Exponential Smoothing：</font>**<font style="color:rgb(0,0,0);">Uses a </font><font style="color:rgb(255,0,0);">weighted average </font><font style="color:rgb(0,0,0);">of past time series values as a forecast.</font>

###### 【详解】
1. **<font style="color:rgb(0,0,0);">Moving Averages</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778060770974-dd1d5fc4-0e3d-4000-b159-f8db624b2c8d.png)

+ 用最近 k 个观测值的平均数来预测下一期。
+ 能平滑掉短期波动。<font style="color:rgb(0,0,0);">The time series curve after moving average becomes </font>**<font style="color:rgb(0,0,0);">smoother </font>**<font style="color:rgb(0,0,0);">and the fluctuation amplitude is smaller</font>
+ 适合没有明显趋势或季节性的序列。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778060805674-82af2f1b-b590-442b-99a9-6b16f834c416.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778060815086-297216fe-c371-4192-87d0-9828d3a72c77.png)

2. **<font style="color:rgb(0,0,0);">Exponential Smoothing</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778060926290-5b92722c-e508-401f-8ed8-8a8f886da7b6.png)

+ Smoothing constant 平滑常数（0 ≤ α ≤ 1）  
    - α 越大，预测越“敏感”，更快跟随最新数据变化。
    - α 越小，预测越“平滑”，更稳定但反应较慢。
+ 指数平滑就是“把最新的实际值和之前的预测值混合”，最近的数据权重更高，过去的数据权重逐渐减小。  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778061483129-997d1b86-5dac-40e7-b127-e1ff562f3dad.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778061495928-ceb2aed2-bfa6-467b-a0b4-3d57e05f1e42.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778061545223-2e8c3d9b-b4a2-49b4-9665-58390b90e3d1.png)

+ **Meaning of Choosing α  **
    - 如果时间序列数据 **随机波动很大**，就要选 **较小的 **α，这样预测更平滑，不会被噪声影响太多。
    - 如果数据 **变化趋势明显**，就要选 **较大的 **α，预测能更快跟上最新变化。
    - 最理想的办法是选择能让 **均方误差 (MSE)** 最小的 α。

##### Measures
###### <font style="color:rgb(0,0,0);">Forecast error</font>
<font style="color:rgb(0,0,0);">Difference between the </font>**<font style="color:rgb(0,0,0);">actual</font>**<font style="color:rgb(0,0,0);"> and the forecasted values for period t.</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059259009-f59ac55f-bf93-4045-9e57-37c72f55a5cd.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059358823-c85fc2f2-643c-49ef-9f47-e1de3f4c152a.png)

###### <font style="color:rgb(0,0,0);">Mean forecast error (MFE). </font>
<font style="color:rgb(0,0,0);">Mean or average of the forecast errors</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059388694-f0291709-1773-42a4-b485-20fd1d5a9926.png)

###### <font style="color:rgb(0,0,0);">Mean absolute error (MAE)</font>
**<font style="color:rgb(0,0,0);">Mean Absolute Error (MAE)</font>**<font style="color:rgb(0,0,0);">: </font>**<font style="color:rgb(0,0,0);">referred to as the mean absolute deviation (MAD). </font>**

它避免了正负预测误差相互抵消的问题  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059491430-785f6910-9152-4bc4-a411-b5176e604432.png)

###### <font style="color:rgb(0,0,0);">Mean squared error (MSE)</font>
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059665947-a4903774-8357-426a-83cb-8627f9041a1e.png)

###### <font style="color:rgb(0,0,0);">Mean absolute percentage error (MAPE)</font>
 为什么需要 MAPE？

+ The size of MAE or MSE depends on the **scale** of the data.
+ It is difficult to compare forecasts **across different time intervals**
    - Monthly vs. Weekly sales.
+ It is also difficult to compare** across different time series** 
    - Gasoline vs. Oil filters. 汽油销量 vs. 滤油器销量  

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059710167-433b6c47-0e9d-459b-89f0-08c91b71d2eb.png)

+ MAPE 就是“平均预测误差占实际值的百分比”
+ **<font style="color:rgb(15,17,21);">The closer to 0%, the better. MAPE = 0% indicates a perfect forecast (very rare)</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/42556572/1778059901824-641232c0-8d19-4b57-a46f-4c5fc0680ede.png)

#### **Final Question Prediction**
+ Short Q 和计算都有可能

