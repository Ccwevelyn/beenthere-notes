---
title: 使用 MCA 进行选校
titleEn: Choosing schools with MCA
description: 主包定校时考量的一些变量。这不是选校定位。
descriptionEn: Variables I used when locking the main-offer school. This is not school positioning.
type: note
grade: application
semester: fall
course: application
date: 2026-11-24
order: 6
published: true
---

<div class="i18n-zh">

一开始定校，我总觉得手里在比两件互相独立的事：榜上的名次是一档，实验室、产业、城市、学费又是另一档。两头都重要，却不知道怎么放在同一把尺子上。

后来想起大三 Risk Management 里讲过 MCA（Multiple Criteria Analysis）：多条标准各自打分，再按权重合成一个综合分。我就把这套办法用到选校上，给自己一个可以拉动、可以对照的参考。下面这张图，是主包定校时我会看的那些变量。

![Naive Application 选校页：左侧权重与学校综合分列表](/uploads/naive-application-mca.png)

<a class="link-card" href="https://naive-application.netlify.app/" target="_blank" rel="noopener"><b>点击进入网页</b><strong>Naive Application</strong><i>naive-application.netlify&#46;app</i></a>

这个页面用 Multiple Criteria Analysis 给硕士选校排一个综合分。下面只说两件事：各项权重怎么加，以及一份名次怎么变成排名分。它**不是选校定位**，也不是录取预测。

## 权重怎么加

页面上的大项是综合排名、实验室资源、产业连接、环境、学费。每一项拉杆上的数字，是它在综合分里占的百分比。

综合分是各项相加。没拉满的部分不会重新分给别的项。某一项的贡献是：

这项的分数 ×（拉杆上的数字 ÷ 100）

五项拉杆加起来不能超过 100。没拉到的那一段就空着。某一项没有可用数字时，这一项跳过，它的权重也不分给其他项。

综合排名里面还有 QS、THE、U.S. News 三根拉杆。选了专业之后，再加一根 QS 学科。这几根只在综合排名内部配比：先把拉杆数字加总，再各自除以这个总和，合起来正好是综合排名的 100%。学校缺了哪一份榜，那一份不参加这次配比，剩下的按自己的数字重新配。

央国企、能源、互联网大厂、外企只改这三根排名拉杆的数字，不另算一个就业分。自己拖动 QS、THE 或 U.S. News 之后，这四个选项会取消。

实验室资源里，科研环境和师生比两根拉杆始终加起来是 100。拖动一根，另一根补上差额。

环境要先勾想去的地点类型。学校对上是 100 分，对不上是 40 分，没有标注就跳过。学费要先填一个最高学费：公布学费不超过这个数时，分数是（最高学费 − 学费）÷ 最高学费 × 100；超过则是 0。没有公布学费就跳过。学费用的是 StudyPath 从学校页面读到的最低公布档，不是住宿，也不是一年生活费。

## 名次怎么变成排名分

旧算法是一条平滑曲线，第 30 名和第 50 名几乎只差一点点。公开的人才和落户文件不是这样用排名的：它们在几道固定的名次线上切换待遇，同一档里不再逐名区分。

本页因此改成台阶。一道线之内分数大约只动 6 分（换算到 100 分制），跨过一道线则掉一档，大约 12 分以上。第 1 名是 100 分。第 1000 名及以后是 0 分。

<div class="table-scroll"><table>
<thead>
<tr>
<th>名次</th>
<th>还卡在哪些线里</th>
<th>这一档的分数</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>50、100、150、200、500</td><td>100</td></tr>
<tr><td>50</td><td>同上</td><td>93.8</td></tr>
<tr><td>51</td><td>100、150、200、500</td><td>81.3</td></tr>
<tr><td>100</td><td>同上</td><td>75.0</td></tr>
<tr><td>101</td><td>150、200、500</td><td>62.5</td></tr>
<tr><td>150</td><td>同上</td><td>56.3</td></tr>
<tr><td>151</td><td>200、500</td><td>43.8</td></tr>
<tr><td>200</td><td>同上</td><td>37.5</td></tr>
<tr><td>201</td><td>500</td><td>25.0</td></tr>
<tr><td>500</td><td>同上</td><td>18.8</td></tr>
<tr><td>501</td><td>没有</td><td>6.3</td></tr>
<tr><td>1000 及以后</td><td>没有</td><td>0</td></tr>
</tbody>
</table></div>

50 到 100 之间从 81.3 降到 75.0。第 10 名和第 30 名都还在前 50 这一档里，大约是 98.9 和 96.3，没有单独的台阶。

QS、THE、U.S. News 各自先按自己的名次套这张表，再按综合排名内部的配比合成一个排名分。选了专业时，QS 学科名次也用同一张表，用的是这门学科榜自己的序号。下面这些文件写的是学校综合排名，不是学科排名。

## 这些线从哪来

每一道线都对应一份写明了名次、并且因此改变待遇的公开文件。同一道线之内，文件把学校当成同一档。

- **50，以及 51–100 合成一档。** 上海市人社局 2022 年 6 月 8 日的复工复产人才特殊支持：世界排名前 50 的留学回国人员，全职来沪后可直接申办落户；51–100 名缴社保满 6 个月后可申办，并取消社保缴费基数要求。认定参照 THE、U.S. News、QS 和软科。这项写明执行到 2023 年 6 月，不是现在的上海落户细则。它是官方文本里把前 50 和 51–100 分成两种待遇、又把 51–100 当成一档的出处。[上海市人社局](https://rsj.sh.gov.cn/tsj_17090/20220608/t0035_1407350.html)
- **100。** 连云港市国资委 2026 年市属国企选聘：国（境）外高校范围是 2025 年 QS 世界排名前 100 的应届硕士、博士。第 100 名以内是同一条资格。[连云港市国资委](http://gzw.lyg.gov.cn/lygsrmzfgyzcjdglwyh/tzgg/content/1ab79f2f-d42c-434f-8186-b17562f0135b.html)
- **150。** 深圳市南山区 2025 年 4 月 28 日公开答复：新引进入户补贴要求 QS、THE、软科、U.S. News 任一前 150，或教育部「双一流」建设高校及建设学科。[南山区](https://www.szns.gov.cn/hdjlpt/detail?pid=3146874)
- **200。** 福州市人社局 2026 年 2 月 24 日通知：ARWU、QS、THE 任一前 200 的海外高校，硕士、本科落地补助高于其他海外高校。前 200 以内不再按更细名次分金额。[福州市人民政府](https://www.fuzhou.gov.cn/zwgk/tzgg/202603/t20260303_5290788.htm)
- **500。** 上海市人才工作局《留学回国人员申办上海常住户口实施细则》（沪人才规〔2025〕3 号，2025 年 12 月 1 日起施行）把境外高水平大学定为 THE、U.S. News、QS、软科世界排名前 500。现行细则里没有前 50 和 51–100 的分档。海淀区 2026 年青年人才工作居住证指南把境外高校定为最新 QS、THE、U.S. News 前 500。[文件库](https://service.shanghai.gov.cn/XingZhengWenDangKuJyh/XZGFDetails.aspx?docid=251211153125AXa5k6Rx23GCtI2Tuh4)，[浦东国际人才港转载](https://www.pd-italent.com/Article/202512/202512020003.shtml)，[海淀区指南](https://www.beijing.gov.cn/fuwu/bmfw/bmzt/gzjzhzh/hdq/202609/P020260918561859215429.pdf)

软科出现在上海、南山和福州的文件里。这个页面没有软科名次，所以软科不参加计算。南山和福州还并行使用「双一流」名单；那是一份学校名单，不是世界排名上的一道名次线，本页没有把它换成一个分数。

## 没有写进去的分法

查上述政府和高校招聘文件时，没有找到把世界排名前 10 或前 30 单独规定成一种待遇的公告，也没有找到按学校所在国家改用另一套名次线的官方办法。同一条前 100，对美国学校和英国学校用的是同一个数字。

U.S. News 的 Best Graduate Schools 是按专业排的，不是一份世界大学前 30 的门槛。因此这里没有做「美国学校按前 30 切一刀、其他国家按另一套切」。前 10 和前 30 都留在前 50 这一档里，只保留榜单本身的先后，不另设台阶。

</div>

<div class="i18n-en">

When I first tried to lock a school, it felt like two separate comparisons: ranking on one side, labs, industry, city, and fees on the other. Both mattered. I did not have one scale for them.

I later remembered MCA (Multiple Criteria Analysis) from a Year-3 Risk Management course: score each criterion, then combine them with weights. I applied that to school choice, as a reference I could move and inspect. The screenshot below is the set of variables I looked at when locking the main offer.

![Naive Application: weights on the left and a scored school list](/uploads/naive-application-mca.png)

<a class="link-card" href="https://naive-application.netlify.app/" target="_blank" rel="noopener"><b>Click to open the page</b><strong>Naive Application</strong><i>naive-application.netlify&#46;app</i></a>

The page ranks master's programmes with Multiple Criteria Analysis. Below I only cover two things: how the weights add, and how a rank becomes a ranking score. This is **not school positioning**, and it is not an admission forecast.

## How the weights add

The top-level items are overall ranking, lab resources, industry links, environment, and tuition. The number on each slider is its share of the composite score.

The composite is a sum. Unused weight is not redistributed. One item contributes:

score × (slider ÷ 100)

The five sliders cannot exceed 100. The unused stretch stays empty. If an item has no number, it is skipped, and its weight is not given to the others.

Inside overall ranking there are sliders for QS, THE, and U.S. News. After you pick a subject, a QS subject slider is added. These only remix inside overall ranking: the slider numbers are summed, then each is divided by that sum, so they add to 100% of overall ranking. A missing ranking is left out of that mix; the rest are renormalised on their own numbers.

The state-owned, energy, big-internet, and foreign-firm buttons only change those three ranking sliders. They do not create a separate employment score. If you drag QS, THE, or U.S. News yourself, the four buttons clear.

Inside lab resources, research setting and staff–student ratio always add to 100. Move one, the other takes the remainder.

Environment needs a location type first. A match is 100, a miss is 40, no label is skipped. Tuition needs a maximum fee: if the published fee is at or below it, the score is (max − fee) ÷ max × 100; if above, 0. No published fee is skipped. The fee is the lowest published band StudyPath read from the school page, not housing, and not a year of living costs.

## How a rank becomes a score

The old curve was smooth, so rank 30 and rank 50 barely differed. Public talent and hukou texts do not use rank that way: they switch treatment at a few fixed lines, and do not distinguish names inside the same band.

This page therefore uses steps. Inside one band the score moves by about 6 points on a 100-point scale. Crossing a line drops a band, by about 12 points or more. Rank 1 is 100. Rank 1000 and after is 0.

<div class="table-scroll"><table>
<thead>
<tr>
<th>Rank</th>
<th>Lines still in force</th>
<th>Score in this band</th>
</tr>
</thead>
<tbody>
<tr><td>1</td><td>50, 100, 150, 200, 500</td><td>100</td></tr>
<tr><td>50</td><td>same</td><td>93.8</td></tr>
<tr><td>51</td><td>100, 150, 200, 500</td><td>81.3</td></tr>
<tr><td>100</td><td>same</td><td>75.0</td></tr>
<tr><td>101</td><td>150, 200, 500</td><td>62.5</td></tr>
<tr><td>150</td><td>same</td><td>56.3</td></tr>
<tr><td>151</td><td>200, 500</td><td>43.8</td></tr>
<tr><td>200</td><td>same</td><td>37.5</td></tr>
<tr><td>201</td><td>500</td><td>25.0</td></tr>
<tr><td>500</td><td>same</td><td>18.8</td></tr>
<tr><td>501</td><td>none</td><td>6.3</td></tr>
<tr><td>1000+</td><td>none</td><td>0</td></tr>
</tbody>
</table></div>

Between 50 and 100 the score falls from 81.3 to 75.0. Ranks 10 and 30 still sit in the top-50 band, at about 98.9 and 96.3. There is no extra step for them.

QS, THE, and U.S. News each run this table on their own rank, then mix by the overall-ranking weights. If a subject is selected, the QS subject rank uses the same table and the subject's own index. The documents below refer to overall university rank, not subject rank.

## Where the lines come from

Each line matches a public text that names a rank and, because of that rank, changes treatment. Inside one line, the text treats schools as one band.

- **50, and 51–100 as one band.** Shanghai HRSS, 8 June 2022, special support for returning talent: top 50 can apply for hukou after taking a full-time post in Shanghai; 51–100 can apply after six months of social insurance, with the contribution-base rule lifted. THE, U.S. News, QS, and ShanghaiRanking are named. The text ran to June 2023. It is not the current Shanghai hukou rule. It is the official source that splits top 50 from 51–100 and treats 51–100 as one band. [Shanghai HRSS](https://rsj.sh.gov.cn/tsj_17090/20220608/t0035_1407350.html)
- **100.** Lianyungang SASAC 2026 municipal SOE hiring: overseas universities means QS 2025 top 100 for graduating master's and doctoral students. Rank 100 is in; 101 is not. [Lianyungang SASAC](http://gzw.lyg.gov.cn/lygsrmzfgyzcjdglwyh/tzgg/content/1ab79f2f-d42c-434f-8186-b17562f0135b.html)
- **150.** Nanshan, Shenzhen, public reply of 28 April 2025: the new-arrival subsidy needs any of QS, THE, ShanghaiRanking, U.S. News in the top 150, or a Double First-Class university or discipline. [Nanshan](https://www.szns.gov.cn/hdjlpt/detail?pid=3146874)
- **200.** Fuzhou HRSS notice of 24 February 2026: overseas universities in the ARWU, QS, or THE top 200 get a higher landing grant than other overseas universities. Inside the top 200 the amount does not split by finer rank. [Fuzhou](https://www.fuzhou.gov.cn/zwgk/tzgg/202603/t20260303_5290788.htm)
- **500.** Shanghai Talent Bureau rules on hukou for returned students (Hu Talent Reg. [2025] No. 3, from 1 December 2025) define a high-level overseas university as THE, U.S. News, QS, or ShanghaiRanking world top 500. The current rule has no top-50 / 51–100 split. Haidian's 2026 youth talent residence guide uses the latest QS, THE, and U.S. News top 500. [Document store](https://service.shanghai.gov.cn/XingZhengWenDangKuJyh/XZGFDetails.aspx?docid=251211153125AXa5k6Rx23GCtI2Tuh4), [Pudong reprint](https://www.pd-italent.com/Article/202512/202512020003.shtml), [Haidian guide](https://www.beijing.gov.cn/fuwu/bmfw/bmzt/gzjzhzh/hdq/202609/P020260918561859215429.pdf)

ShanghaiRanking appears in the Shanghai, Nanshan, and Fuzhou texts. This page has no ShanghaiRanking ranks, so it is left out of the score. Nanshan and Fuzhou also use the Double First-Class list. That is a named set of schools, not a world-rank cut, so it is not turned into a score here.

## Cuts that were not written in

In those government and hiring texts I did not find a rule that treats world top 10 or top 30 as its own benefit band, nor an official method that uses a different set of cuts by country. The same top 100 is the same number for a US school and a UK school.

U.S. News Best Graduate Schools is ranked by field. It is not a world top-30 gate. This page therefore does not cut US schools at 30 and other countries on another set. Ranks 10 and 30 stay in the top-50 band. Only the league table's own order is kept; no extra step is added.

</div>
