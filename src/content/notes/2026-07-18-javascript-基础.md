---
title: Javascript 基础
description: 本文是 Javascript 基础。应试来说，意义不大。但是对于了解JS，小有帮助。
attachments:
  - label: PDF
    file: /uploads/javascript基础.pdf
grade: year-3
semester: fall
course: advanced-web-development
date: 2026-07-19
order: 1
type: note
published: true
---
##### 一、简介
运行在**客户端**(浏览器)的**编程语言**

JavaScript - 轻量级、解释型Web开发语言

现代浏览器都已嵌入JavaScript引擎

**JavaScript = ECMAScript + WebAPIs**【**DOM **-->操作文档 eg.页面中评论】+【 **BOM -**->操作浏览器 eg.浏览器弹窗】

ECMAScript：规定了基础语法

###### 代码放置位置
在解析网页源代码时，浏览器检索到<script>标签时，会自动调用JS引擎

1. 内部

**<font style="background-color:#FBDE28;"></body>上方</font>**

```html
...
<body>
  <script>
    alert("Hello World");
  </script>
</body>
```



<font style="color:#DF2A3F;">ATTENTION!</font>

引擎按照从上到下的顺序来解析网页源代码。

```html
<script>
  document.getElementById("box").style.fontsize ="50px"
</script>
<body>
  <p id="box">Hello</p>
</body>
```

此时，由于<p>未解析，因此脚本引擎无法找到id为box的元素

---

2. 外部

```html
<body>
    <script src="../js/02.js"></script>
</body>
```

附：

/ 代表根目录

./ 代表当前文件所在目录

../ 代表当前文件所在目录的上级目录

---

3. 内联

代码写在标签内部

```html
<body>
  <button onclick="alert('hello">click</button>
</body>
```

vue框架用这种模式

---

+ 公共函数和变量 - <head></head>之间
+ 页面加载期间执行的代码 - <body></body> 之间

**原因**：<font style="color:rgb(0, 29, 53);">网页解析通常是先解析</font>`<font style="color:rgb(0, 29, 53);"><head></font>`<font style="color:rgb(0, 29, 53);">部分，再解析</font>`<font style="color:rgb(0, 29, 53);"><body></font>`<font style="color:rgb(0, 29, 53);">部分。</font>

<font style="color:rgb(0, 29, 53);">在解析过程中，如果遇到</font>`<font style="color:rgb(0, 29, 53);"><script></font>`<font style="color:rgb(0, 29, 53);">标签，HTML页面的加载会暂停，并开始执行JavaScript代码或下载外部JS文件，直到脚本执行完毕才会继续加载页面。=> 放到</body>前，防止页面空白。</font>

---

###### 基本语法
1. 大小写敏感
2. 变量与常量
    1. 不支持用户自定义常量
    2. **var** 声明变量；支持直接使用未声明的变量，**初始值为undefined**。建议<u>先声明后使用</u>。
    3. **<font style="background-color:#FBDE28;">let</font>**<font style="background-color:#FBDE28;"> 变量名</font>   <font style="background-color:#FBDE28;">不允许多次声明一个变量 </font>（var允许，声明覆盖）

```javascript
let age = 18
age = 19  // 更改变量值
```

```javascript
let age = 18
let age = 19  //多次声明  Identifier 'age' has already been declared
```

    4. 变量声明位置应集中
    5. 全局变量/局部变量：当使用**var**在域内外分明声明初始化变量a时，不同作用域内显示不同的值。 
3. 运算符（三元运算符）
+ 使用场景：双分支

```html
条件 ？ 满足条件执行 ：不满足条件执行
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1755999988812-971efb87-da24-4ef9-af45-e827d0f0a65c.png)

一般用于取值，如 let sum = 3 <5 ? 3 : 5

---

4. 语句

程序的基本逻辑结构：**顺序、选择、循环**

    1. 条件语句（属于选择）

```plain
if (condition) //condition是表达式，值为true，则执行statements
  statements
```

注意：JavaScript解释器不会根据脚本的缩排方式进行判断 - 遵循就近原则 。故，应{ }.

```javascript
if(a>0){
  if(b>0)
    c = a + b;
}
else{
  c= -a + b;
}
```

```javascript
if(condition1){
  statement
} else if (condition2){
  statement
} else {
  statement
}
```

---

```javascript
switch(expression){
  case label1:
    statement1;
    break;
  case label2:
    statement2;
    break;
  ...
  default : statementn;
}
```

switch 语句计算 statement 的值，按出现先后顺序计算label，直至找到==的值；

如果没有匹配，执行default；如果没有default，跳出整个结构体。

---

    2. 循环语句

```javascript
while(condition){
  statements
}
```

condition == true，执行statements；否则，跳出循环体。

```javascript
do
  statement
while(condition);
```

首先执行statement --> condition 条件判断，若true -->执行statement

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1755960068980-d51c38d3-885d-4cac-9cc8-6c3947b59043.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1755960161592-c395f28c-4887-4b54-b007-0e0fe7a445fa.png)

---

```javascript
for(var i=0;i<10;1++){
  document.write(i);
}
//第二种写法：遍历object的所有属性（元素）
for(var i in document){
  document.write("document."+i+"<br/>");
```

---

    3. 跳转语句：break、continue、return
+ **break;**   退出循环/switch语句

```javascript
var i=0;
while(1){  // while(true)
  if(i>50) break;
  i++;
  document.write(i);}   //为保证嵌套结果正确执行，{}呈现段落
```

```javascript
x: for(a=1;a<10;a++){  //标签由一个合法字符名称加上一个冒号祖成
  document.write("<br/>"+a+"<br/>");
  for(var b=1; b<10;b++){
    if(a>5) break x  // 如果a>5,跳出标签
    document.write(b);
  }
}                 
```

跳转语句和标签结合使用，实现跳转到指定的行。

代码给外层 for 标记 x；在内层for中，使用 if 语句设置当a>5，跳出外层 for 语句。

---

+ continue ≈ break；continue **不会退出循环**，而是开始新的循环。
+ return 用于函数/闭包中；返回表达式的值。

---

    4. 异常处理语句
+ 暴露异常信号 - 抛出 throw
+ 捕获异常 catch

---

    5. var 语句和 function 语句
+ var 声明变量/进行变量初始化；默认，变量初始值 undefined
+ function定义函数

```javascript
function[name]([param][,param][...,param]){
  statements
}
```

---

    6. with 语句 -合并同类项 简化代码

---

5. 输入输出语法
    1. **输出语法**

```html
<script>
  //1.文档输出内容
  document.write("Hello World!");
  document.write("<h1>标题</h1>");
</script>
```

+ 作用：**<font style="background-color:#FBDE28;">向body中输出内容</font>**
+ _**<font style="color:#2F4BDA;">如果输出的内容是标签，也会被解析成网页元素</font>**_

```html
alert('content')
```

```html
//控制台打印 - Debug调试
        console.log("Check Console");
```

---

    2. **输入语法**

```html
 prompt("请输入内容");
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1755957198626-61a7d41a-9120-45c0-8689-3aaaa54f22c5.png)

---

5. Javascript代码执行顺序

一般情况下，按照从上到下的顺序执行；

**alert()和prompt(**) -- 弹窗；跳过页面渲染先被执行

---

6. 类型转换
    1. 隐式转换

```javascript
console.log('hello'+1) //+两边只要有一个字符串，会将另外一个转成字符串
console.log(2-'2') //除+外的算数运算符，会把数据转成数字类型
console.log(+'123')  // +作为正号解析可以转换数字型
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756002342004-7256bb7c-346b-4f00-bb12-5cbeeb8a217e.png)

    2. 显示转换
+ 自己写代码告诉系统转成什么类型
+ 转换为数字型 
    - Number(数据)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756002824816-69430085-9f8c-49fa-8048-53a1d7d9a73f.png)

    - parseInt(数据） - 只保留整数，不四舍五入
        * <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756003046943-e0161c5e-9205-4e4b-998c-bbb1c6e683ec.png)  -- 这种在Number中会报错NaN
    - parseFloat(数据) - 可以保留小数 <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756003293896-c5d793b4-f7a8-4017-9347-e160e8a6b11c.png) 
    - <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756003332605-5258a96d-cf7a-4826-af81-c927a5c2f779.png) -- 只能截去尾巴



进制转换：

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758509254707-b38b0e39-fb5a-464b-b3c2-b6d67e55b9e8.png)

---

7. 内置对象（对象=属性+方法）

如，document.write() ; Javascript内部提供的对象

+ 内置对象 - Math

```html
<body>
    <script>
        //属性
        console.log(Math.PI); //3.141592653589793
        //方法
        console.log(Math.ceil(1.1)); //天花板: 向上取整 -> 2
        console.log(Math.floor(1.9)); //地板：向下取整 -> 1
        console.log(Math.round(1.5)); //四舍五入 -> 2
        console.log(Math.round(1.4)); //四舍五入 -> 1
        console.log(Math.max(1, 2, 3, 4, 5)); //最大值 -> 5
        console.log(Math.min(1, 2, 3, 4, 5)); //最小值 -> 1
        console.log(Math.abs(-1)); //绝对值 -> 1
    </script>
</body>
```

+ 随机数 **Math.random()**，随机数函数，返回一个0-1之间且包括0，不包括1的随机小数 **[0,1)**

```javascript
console.log(Math.random()); //随机数 -> 0~1之间的小数
//如何生成0-10的随机数？
Math.floor(Math.random()*(10+1))
//如何生成N-M的随机数？
Math.floor(Math.random()*(M-N+1))+N
```

##### 二、数组
**Array** 按**顺序**保存数据的数据类型（对象）

存放任意数据类型

1. 声明

**let** arr = **[** 数据1, 数据2, 数据3 **]**

let arr = new Array**(**1, 2, 3, 4 **)**

2. 取值

**数组名[下标**]

数据.length --> 数组长度

3. 遍历数组

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757907659825-1b07f8b0-bbc8-421f-b3d9-c5fa7af4fb44.png)

4. 操作数组（增，删，改，查）
    1. 查：数组[下标]
    2. 改：数据[下标] = 新值

           <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757908678565-6f7af16c-1e52-41fc-a9f7-2ad1c70bf5f2.png)

    3. 增

**数组.push()**，将一个或多个元素添加到数组的**末尾**，并**返回**该数组的**新长度**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757909059196-0fa41b6a-517d-47ba-8dee-cab0aef77d2c.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757909393447-89e37fbc-2adf-4042-92cd-921d87473a47.png)

console.log(arr.push('grape')) -> 显示的是一个值

**数组.unshift()**， 添加到数据**开头**，并返回新长度

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757909495953-8a1fd83e-1cb1-46fc-8d0b-64f9ac6c9980.png)

    4. 删

**arr.pop()**，删除数组中**最后一个元素**，并返回**该元素的值**

**小括号里不带参数！！！**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757910272387-9aad03d8-73e8-4dbd-84f3-ad89433bc229.png)

console.log(arr) -> 显示的是arr对象，arr是一个对象

 它具有数字索引（0, 1, 2...）和一些内建方法，比如 `.push()`, `.pop()`, `.map()`, `.filter()`

`console.log()` 会在浏览器控制台中以结构化方式显示数组内容  

**arr.shift()**，删除数组**第一个**元素，并**返回该元素的值**

**arr.splice(起始位置, 删除几个元素)，**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757910821914-de680c49-e233-45d1-bc45-e1ad41d2200e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757910792585-2febbc62-8d1e-4b49-92e4-8ebe6783d33e.png)

    - 如果省略默认从指定的起始位置删除到最后
    - 起初索引从0开始

---

##### 三、函数
1. 声明

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757911297868-5834ef2d-9517-44b0-9d8d-76b471c8f8c2.png)

    - 尽量小驼峰命名
    - 前缀应为动词

             <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757911189176-d094d041-8897-4edc-a51a-4f72d82ab7cb.png)

2. 使用

**函数名()**

注意：函数必须在**调用后**才会被执行

+ alert(), parseInt() - 这种名字后面跟**小括号**的**本质**都是**函数的调用**
3. 作用域 scope
    - 局部 -->局部声明的变量，外部不可以使用
    1. 函数作用域 - 只能在**函数内部被访问**，外部无法直接访问；<u>函数的参数</u>也是函数内部的**局部变量**
    2. 块作用域 - 被  { } 包裹；

        <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757936569118-0a47541f-9ab6-4041-8302-2d839a6f88ee.png)

    - 全局 --> 尽可能少的声明全部变量，防止全局变量被污染
4. 作用域链 - 本质上是变量查找机制
    - 优先查找**当前函数作用域**
    - 若无，**依次逐级**查找**父级作用**域

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757936989287-9dea1f42-b0c7-4393-aa81-5f2ade5d3b3f.png)

**<font style="background-color:#FBDE28;"> 子可以继承（访问）父，父不能访问子</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1757937254663-838f99e1-0edd-489d-8a13-6fadec415073.png)

5. **<font style="color:#DF2A3F;">匿名函数</font>**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758007542054-a553f863-8f17-41a3-88c1-068d8221e2f1.png)

+ **没有名字的函数，无法直接使用**
+ 使用方式
    - **函数表达式 **-> 将匿名函数赋值给一个变量，通过变量名进行调用

               <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758007945839-55bd2514-ad6b-4416-9f06-1aae2b06fb0a.png)

理解：let，先声明后调用 --> 函数表达式相当于把函数赋值给了let

    - **立即执行函数 -- **避免全局变量之间的污染；不需要调用，只要写完立即执行

          <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758008432593-2cc52b3b-fe1f-4c60-b04e-83fa0ee7f94e.png)  -- 最后的（）调用函数。<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758008541029-afea11d1-bbea-4be0-9450-0ff82d971fd9.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758008616402-911b933c-3428-4bb8-b9ff-d84b5e4f1292.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758008662714-2c352604-4474-4c90-a76a-7e97dd73eae8.png)

多个立即执行函数之间一定要有分号隔开！！！

6. **<font style="background-color:#FBDE28;">箭头函数</font>** --> 函数表达式更加简洁；更适用于那些**本来需要匿名函数**的地方 

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758009262969-6c7fb6e4-8f5c-484e-8c0c-ea4849e34b8b.png)     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758009421725-30d070b9-8651-45a1-b968-f656a975a0b0.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758009395758-8b68e7ac-992e-44db-bebd-6fef453d2d1e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758009595930-80629191-7c01-4764-96fc-cf2ce5f8bfb1.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758009932343-80d23bbf-9b34-4435-a520-b70cb5e1c385.png)

1. 需要先声明，再调用
2. 只有一个形参，可以省略小括号；只有一行代码，可以省略大括号

---

+ 箭头函数有剩余参数**...args**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1758010717029-239b15bc-de7a-4ec4-84e4-ad706bbcfbe1.png)

JavaScript 的 **剩余参数（rest parameter）语法 **`...arr` 来接收不定数量的参数。这个语法不仅适用于箭头函数，也完全可以用于**传统函数声明**。  

```javascript
function getSum(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getSum(1, 2, 3, 4, 5)); // 输出 15
```

##### 四、对象
1. 是什么？

**<font style="color:#DF2A3F;">无序</font>**数据结合；数组是有序的数据集合

详细描述某个事物

2. **创建对象**

<font style="background-color:#FBDE28;">let 对象名 = { }</font>

let 对象名 = new Object() 【系统给出的构造函数】

**<font style="background-color:#FBDE28;">构造函数创建对象</font>**

+ 构造函数：一种特殊的函数，主要用来**初始化对象**
    - 用于快速**创建**多个**类似的对象**
    - _构造函数内不要写return，返回值即为__**新创建的对象**_
+ 约定：
    - 命名以大写字母开头。
    - 只能由“new”操作符执行。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759120278883-afdd7814-b676-422b-accd-f46207e42069.png)   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759120124630-57b8f938-572e-40f1-9df1-c2c62b670f4b.png)

**this** 指向**创建的对象** <u>等同于 object.name = uname</u>

uname 由 new Pig('peppy',7) 直接赋值

this.name -> 这个name代表属性

---

+ 实例成员&静态成员
    1. 实例成员：通过**构造函数**创建的对象称为**实例对象**，实例对象中的**属性和方法**成为**实例成员**。
        * 构造函数创建的**实例对象**彼此独立，互不影响。
    2. **构造函数的属性和方法**被成为**静态成员（**静态属性和静态方法）
        * 只能构造函数来访问
        * 静态方法中 this 指向构造函数
        * <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759122096465-c93603ba-661c-4088-8a4a-ba0695f816bb.png)

---

+ **<u>内置构造函数</u>**

Javascript主要6种数据类型：

1. 基本数据类型：字符串、数值、布尔、undefined、null
2. 引用数据类型：对象

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759122786649-3ef08d10-c8ca-437c-82f9-7a908e76ba88.png)

+ Javascript 提供内置**构造函数！（大写）**

    <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759122843873-a6eccf1c-42c6-46cc-8783-3b8d9ee92268.png)

1. _**Object**_

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759122884819-9da6abc5-37a4-43d6-a186-6e442fe80026.png)

+ **Object.keys** ->静态方法获取对象中所有属性（键）

        <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759123254630-8534a920-3e3d-4ab4-ad1a-8e0667a85b1a.png)

+ **Object.assign**

       <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759123374936-bab52b5b-6ab7-4903-9d83-bdb56ed846a3.png) =>(新，老）

      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759123504950-55477e7c-6ed5-42a7-b89a-16ab8d2e1c78.png) => 可以理解为合并/给一个对象添加新属性

---

2. _**Array**_

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759717595988-13b1202b-b06c-415a-9fe1-81d583af02c8.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759717676099-40210cc1-04f0-480f-b08d-06fff6dc2c9a.png)

`<font style="background-color:#FBDE28;">forEach</font>`<font style="background-color:#FBDE28;">：</font>**<font style="background-color:#FBDE28;">遍历数组</font>**<font style="background-color:#FBDE28;">但不返回新数组</font>

```javascript
array.forEach(function(element, index, array) {
  // 对每个元素执行操作
});
```

```javascript
const nums = [1, 2, 3];
nums.forEach((num, i) => {
  console.log(`第${i}项是：${num}`);
});
```

---

`<font style="background-color:#FBDE28;">filter</font>`<font style="background-color:#FBDE28;">：筛选数组元素，返回新数组</font>

```javascript
const newArray = array.filter(function(element, index, array) {
  return 条件表达式; // 返回 true 的元素会被保留
});
```

**用途：**用于根据条件提取子集。

```javascript
const nums = [1, 2, 3, 4];
const even = nums.filter(num => num % 2 === 0); // [2, 4]
```

```javascript
const nums = [10, 20, 30, 40];
const result = nums.filter((num, index) => index % 2 === 0);
// 输出：[10, 30]
```

---

`<font style="background-color:#FBDE28;">map</font>`<font style="background-color:#FBDE28;">：对每个元素进行转换，返回新数组</font>

```javascript
const newArray = array.map(function(element, index, array) {
  return 新值;
});
```

**用途：**用于生成新数组，常用于界面渲染、数据转换。

```javascript
const nums = [1, 2, 3];
const doubled = nums.map(num => num * 2); // [2, 4, 6]
```

```javascript
const nums = [5, 10, 15];
const result = nums.map((num, index) => num + index);
// 输出：[5, 11, 17]
```



**<font style="background-color:#FBDE28;">reduce</font>**<font style="background-color:#FBDE28;">：返回累计处理的结果，经常用于求和等</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759718617243-c7b89954-7d18-42cf-9daf-b4f3a3b28d86.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759718579939-2a5884ce-e135-44f4-8469-420a8a814dd4.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759718745261-0364d49c-817b-47a1-bf36-65eeccdad3ba.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759719412598-ceaca339-e7c5-4434-a669-3cca6d316397.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759719527634-085bd997-ef22-4e1a-b285-da2cf1c68d17.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759719557877-2538c98e-0b34-48a9-b52d-87d4258cb5c1.png)

**查找MDN!!!**

---

2. 对象有**属性（特征）**和**方法（行为）**组成
+ 属性：成对出现，包含属性名和值；多个属性 , 隔开。
+ 属性就是依附在对象上的变量

```javascript
let obj = {
  uname:"TOM" ,//字符串需要加“”
  age: 18,
}
console.log(typeof obj)
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759115747562-76cfb1e0-0bb3-4555-8a26-76a49f8516c5.png)

4. 增删改查

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759115847305-72373b3f-64ba-40ad-ae5f-6d9c47fd2d69.png)

    1. **查** -> **<font style="background-color:#FBDE28;">对象名.</font>****属性**（ 属性在对象内才生效）/console.log(obj.uname)

                  -> **对象名["**属性**"]**

            <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759116624414-57631542-c800-4824-b594-f1f1a067dfdb.png)   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759117051930-2689ced1-fe32-4d29-b37b-7f25bf7205fc.png)

    2. **改 **->** 对象名.属性名 = 新值**

              <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759116148334-fe925351-b647-4c89-b38f-037e923f6a9b.png) =>JavaScript 是**顺序执行**的

    3. **增** -> **对象名.属性名 = 新值**
    4. **删 delete obj.age**

           <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759116417183-ed3735e5-37da-4a38-ae89-0f7ba0c67ce4.png)  

 在 JavaScript 中，如果你访问一个对象中**不存在的属性**，不会抛出错误，而是返回 `undefined`

5. 方法/ **方法属性之间，隔开**

> <font style="color:rgb(0, 92, 197);">function</font><font style="color:rgb(0, 0, 0);"> </font>_<font style="color:rgb(0, 0, 0);">name </font>_<font style="color:rgb(0, 0, 0);">(p1, p2, p3) { </font><font style="color:slategray;">// code } => 普通函数</font>
>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759117261595-92d80017-f380-47e2-b253-db550a084e47.png)  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759117369758-e633573b-1600-4379-ba03-d7edd8c2f68b.png) 

document.write()，也是这个原理

+ 方法名可以使用“”隔开，一般情况下省略，除非遇到特殊符号（空格、中横线）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759121930417-82e3a93c-77f9-48f5-b45a-618356f15e8f.png)

---

6. 遍历 - 遍历输出对象内的元素
    - 对象是**无序的键值对**，**没有规律**，没有有规律的下标
    - 对象没有像数组一样的length属性，所以无法确认长度

```javascript
let obj = {
  uname: 'andy',
  age: 18,
  sex: 'male'
}
for (let k in obj){
  console.log(k) //打印属性名
  console.log(obj[k]) //打印属性值
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759118048861-5e878738-2581-4f34-a2d7-75731e54d7b9.png) <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759118081297-a37bd83c-8515-4fc7-a57d-c60c5aa6020a.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759118686030-bffd98b8-9ea0-4c91-afb7-cbe4ecfc8041.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759118815225-b923e2ee-3ca7-4cfa-bc97-0054a0cae094.png)

---

**解构赋值**

1. 数组解构

数组**单元值** **批量赋值**给**<u><font style="color:#2F4BDA;">变量</font></u>**的 简洁语法

```javascript
const arr = [100, 60, 80]
//数组解构
const [max, min, avg] = arr  > max,min,avg 没有声明 这里需要const
或者
const [max, min, avg] = [100, 60, 80]
//等价于
const max = arr[0]
...
```

典型应用：交互2个变量

```javascript
let a = 1
let b = 2; 
//不能用const，因为交换变量重新赋值 
[b,a] = [a,b]    > 这里不需要 +const，因为 a和 b 已经声明了
```

注意！**[a, b] array开头必须要加分号**

---

```javascript
const [a, b, c, d] = [1, 2, 3]
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d)  //undefined
```

```javascript
const [a, b, ...c]= [1, 2, 3, 4]
console.log(a) // 1
console.log(b) // 2
console.log(c) // [3, 4] 真数组
```

```javascript
const [a = 0, b = 0] =[1, 2]
```

```javascript
const [a,b,,d] = [1, 2, 3, 4]  > 以，为分割点
console.log(a) //1
consoe.log(b)  //2
console.log(d) //4
```

+ 数组解构支持多维数组

```javascript
const arr = [1, 2, [3, 4]]
const.log(arr[0])
const.log(arr[2][0]) //3

const [a,b,[c,d]] = [1,2,[3,4]]
```

2. **对象解构**

对象属性和方法快速赋值给一系列变量

注意！！！**<font style="color:#2F4BDA;background-color:#FBDE28;">对象属性值需要和赋值的变量名相同 </font>**（uname与uname）

但是，同时不能与外部冲突。

```javascript
const obj = {
  uname:'jack'
  age: 18
}
//解构语法
const{ uname, age} = obj
等价于
const uname = obj.uname

// 对象解构的变量名，可以重新改名  =>  旧变量名：新变量名
// 冒号表示 “什么值：赋值给谁”
const{ uname: username,age } = obj
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759716683809-aa377702-7390-4b42-833f-33b83e7e7216.png)

---

**constructor** => 构造函数

```javascript
console.log(Star.prototype.constructor) === Star) // True
```

构造函数中，prototype中含有constructor属性，指向构造函数本身

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1759717202883-fbdf0935-7527-48bf-b6ff-b7d2c0f5e792.png)

---

##### 五、APIs
###### 变量声明
var、let、const（变量未来<u>不会重新赋值</u>）

建议 **<font style="color:#2F4BDA;">const</font>**（语义化更好）> let > var

+ const - 简单数据类型 - 不能变

   - 复杂数据类型（**引用数据类型**） - 内容可以变，地址不能变

+ const 声明的变量，**里面存的**不是值，**是地址**！！！地址不变、不会报错。
+ 数组、对象用const来声明；
+ let：基本数据类型的值/引用数据类型地址变化（如，i++

```javascript
const arr = ['red','pink']
arr.push('blue')  // 添加对象地址不改变 
arr = [1,2,4]    //对象赋新值，地址改变

const names = []
names = [1,2,3]  //这是赋新值，不是增添
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756018043123-111fe134-ab7f-47a2-8c9e-6b7278735832.png)

---

###### Web API 基本认知
1. 作用和分类
+ 使用 JavaScript 操作 html 和 浏览器
+ DOM（文档对象模型）、BOM（浏览器对象模型）

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756018682837-a268cad8-04eb-4076-9753-ed3b7edb1ed2.png)

2. DOM 是API

Document Oject Model - 文档对象模型 

+ **操作网页内容**（如，特效与用户交互）
3. DOM 树

直观体现标签与标签的关系

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756019404262-7a3855d1-8bd0-4b9e-b622-7d5f5b7b3514.png)

4. **DOM对象**

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756020050498-01b66cd8-5591-4baf-9a1d-70662e89f600.png)  <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756020084145-1d635e25-b3ef-4a2f-9824-a00a04c071a5.png)

+ 核心思想：将网页内容当作**对象**处理  
+ <font style="color:#2F4BDA;">DOM对象：浏览器根据 </font>**<font style="color:#2F4BDA;">html标签</font>**<font style="color:#2F4BDA;"> 生成 </font>**<font style="color:#2F4BDA;">JavaScript对象</font>**
    - 所有标签属性可以在这个对象上面找到
    - 修改对象属性 -> 自动映射到标签
+ document 对象
    - 是 DOM 提供的一个对象
    - 提供的属性和方法是用来访问和操作网页内容的
    - 所有网页内容都在document中

---

###### 获取DOM元素 - 操作标签内容
1. 根据<u>CSS选择器</u>来**<font style="color:#2F4BDA;">获取DOM元素</font>**
    - 选择匹配的第一个元素：**document.querySelector**("css选择器")
    - 值可以直接更改！

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756048727808-95c712c0-937a-41bc-9afe-12d2bdafec93.png)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756048768750-ff6d0bf6-59d4-4c87-802e-93312302526a.png)

     <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756048791332-9dc0645e-7c4c-4b4d-854b-4dcb7a011391.png)

    - 选择匹配的<u>多个</u>元素
        * **document.querySelectorAll**('css选择器')
        * 返回值：NodeList 对象集合 
            + 伪数组：有长度、索引号；但无pop()，push()... 想要得到每一个元素要for遍历
            + 只要用querySelectorAll 就是伪数组，哪怕只有一个元素
        * 值无法直接更改，需要遍历

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756049065018-5289ae86-e8ec-4b75-8c53-4d1e9254725a.png)   <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756049084823-6a661c91-f6cb-4f55-b8db-d5debc61234e.png)

```html
<body>
    <ul class='nav'>
        <li>dashboard</li>
        <li>introduction</li>
        <li>contact</li>
    </ul>
    <script>
        //获取所有li元素
        const lis = document.querySelectorAll('.nav li');
        for(let i=0;i<lis.length;i++){
            console.log(lis[i]); //每一个小li对象
        }
    </script>
</body>
</html>
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756049837911-78feab1f-ad2e-4149-aeca-92f80f886cf4.png)

---

2. 小结
    1. 获取页面中的标签方法：querySelectorAll() , querySelector()
    2. 区别：
        * querySelector() - 只能选择一个元素，可以直接操作
        * querySelectorAll() - 可以选择多个元素，得到的是伪数组，需要遍历得到每一个元素
    3. 小括号内参数注意事项：
        * 里面写css选择器
        * 必须是字符串，必须加引号。

---

3. 其他获取DOM元素方法

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756050158084-00ef874b-f870-429a-b993-5ad7d4b49bd2.png)

---

###### 操作元素内容
DOM对象<u>根据标签生成</u>。操作标签 -- 操作DOM对象

修改标签内容：

1. **.innerText**

```html
<body>
    <div class="box">content here</div>
    <script>
        //1. 获取.box元素
        const box = document.querySelector('.box')
        //2. 修改文字内容 对象.innerText 属性
        console.log(box.innerText); //获取文字内容
        box.innerText = 'new content' //修改文字内容
        console.log(box.innerText); //获取修改后的文字内容
    </script>
</body>
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756090552754-02f92109-c71f-40b2-9c0d-df8130486168.png) - innerText 获得的是纯文本

同时，<u>不解析标签</u>；如，box.innerText = '<strong>new content</strong>'

2. **<font style="background-color:#FBDE28;">.innerHTML</font>**

<u>会解析标签</u>

```html
//3.innerHTML 解析标签
        box.innerHTML = '<h2>hello</h2><p>this is a paragraph</p>'
```

---

###### 操作元素属性
1. 操作元素常用属性

如，href、title、src等

+ 语法：**对象 . 属性 = 值**
+ 获取元素 + 修改属性

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756122509165-e01ec86a-8417-4876-9090-d22771bbbf3a.png)      <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756122723186-76f0de5f-b0f1-4f79-91d4-15c81e8de706.png)   ${random}

---

2. 操作元素样式属性
    1. 通过**style**属性操作CSS

**对象.style.样式属性** = '值'

记得加单位px！

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756123473562-ba308fac-3ba7-4af0-9fa0-c18cd171c360.png)



    2. 操作类名**className**操作CSS
        * 元素.className = '新类名'
        * <u>新值覆盖旧值</u> 若想一并实现新旧功能 如 div.className = 'nav box' (即如果想添加类，需要写以前的类名，否则会覆盖类名）
    3. <font style="background-color:#FBDE28;">操作</font>**<font style="background-color:#FBDE28;">classList</font>**<font style="background-color:#FBDE28;">操作类控制css</font>

为解决className容易覆盖以前的类名，我们可以通过**classList**方式追加和删除类名

+ 不会覆盖之前的类名

             <!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756911587126-b39d23c1-0f08-4e73-a012-fb884e43027b.png)

---

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756913155416-1382772d-3e65-4482-812a-ee543a23fe9e.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2025/png/42556572/1756913239535-7c41f1d5-5d2d-46ca-a59e-10efaf2d49a7.png)

---



