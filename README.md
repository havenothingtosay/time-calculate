# 时间差计算

### 支持3个功能：
1. add：计算给定时间对象一段时间后的时间
2. sub：计算给定时间对象一段时间前的时间
3. diff：计算两个时间对象之间的时间差

### 时间间隔参数
* D: 天数
* h: 小时数
* m: 分钟数
* s: 秒数

### 时间间隔：
add和sub的第二个参数都支持以下两种方式
1. object类型：{D:1,h:2,m:3,s:4}
2. string类型：'1D2h3m4s'

## add
返回一个时间对象
```js
new Time().add(new Date(),{D:1,h:2,m:3,s:4})
```
## sub
返回一个时间对象
```javascript
new Time().sub(new Date(),'1D2h3m4s')
```
## diff
返回给定格式的时间差描述。

第三个参数可以传入自定义的格式，默认格式：{D} days {h} hours {m} minutes {s} seconds
```ecmascript 6
let first=new Date("2017/06/23 08:00:20");
let second=new Date("2017/06/25 10:35:57");
new Time().diff(first,second,'{D}天，{h}小时，{m}分钟，{s}秒')
```