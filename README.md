# RRMinerPool
---------------
使用Nodejs创建的挖矿任务分发中心（矿池）


## 依赖
1. python2.7
2. redis
3. kafka


## 功能
1. 防攻击（错误提交则屏蔽IP10分钟）
2. 汇集零散算力
3. 10分钟一次的奖励分配
4. 公平的分配模式（PPLNS）
5. 自带web挖矿服务器可以使用浏览器连接进行挖矿
6. 自带统计功能（kafka）


## RRHash算法
RRHASH通过一种三明治结构，能把几乎任何算法改造成哈希算法：先用某个标准哈希函数H把nonce和随机数种子seed扩展为大量的随机数输入I=H(nonce,seed)；用CPU擅长的算法A处理随机数输入I，得到一些输出O=A(I)；再用另外的哈希函数h计算这些输出的哈希值h(O)，以leading zero的数目判断是否满足难度要求。这种三明治结构，已经被ZCash证明是有效的了，我们只需要把中间部分的广义生日悖论问题修改为CPU擅长的其它算法。由于有收尾的标准哈希算法把关，h(A(H(nonce,seed)))可以满足哈希函数的雪崩特性和不可逆特性，满足PoW算法所需要的随机性、公平性和不可预测性。

自计算机诞生以来，人类所开发的适合CPU运行的算法数目极多，我们准备按照先易后难的顺序，逐步选择一些算法，添加到PoW算法集合中，我们计划第一期添加的算法包括如下类别：

1、  常见数据结构的建立和访问：各种树（红黑树、B树、B+树等），优先队列，斐波拉契堆，HashTable，Cockoo-HashTable，Bloom-Filter等等
2、  典型的排序算法
3、  典型的动态规划算法
4、  字符串匹配
5、  图算法（最短路径，All-pairs最短路径，最小支撑树，最大流）
6、  矩阵算法（乘法，转秩，求逆，求特征值等等）
7、  最小二乘法
8、  牛顿迭代法
9、  傅立叶变换
10、 维特比译码
11、 线性规划
12、 纠错算法（LDPC、ECC等）
13、 压缩算法（gzip、LZ4等）
14、 正则表达式
15、 逆波兰表达式求值

不同的算法有不同的访存行为，很多算法做到把L1、L2、L3 Cache以及DRAM接口都充分使用起来。因此，在必要的时候，我们会加入额外的、同算法本身无关的“填充逻辑”。填充逻辑以算法本身运行时的一些随机结果为输入，经过少量的计算，产生众多访存操作，把让存储系统忙起来。

## 工作流程
1. 获取交易信息
2. 打包
3. 任务创建
4. 建立链接
5. 等待结果
6. 奖励分配

## 完成情况（2018-8-15）
1. 任务获取及分配
2. 统计功能（实时连接数）
3. 错误提交屏蔽IP
4. 配合web端的任务模式