# react-mutable-number

[![wtfpl badge](https://img.shields.io/github/license/wu-yu-xuan/react-mutable-number)](https://github.com/wu-yu-xuan/react-mutable-number/blob/master/LICENSE)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/wu-yu-xuan/react-mutable-number)

react 组件, 显示从一个数字变化到另一个数字的动态效果, 例如:

```JavaScript
<MutableNumber value={0} />
```

rerender:

```javascript
<MutableNumber value={100} />
```

就会看到 0 -> 10 -> ... -> 90 -> 100 的变化效果

## props

| name            | type   | description                                                       | default |
| --------------- | ------ | ----------------------------------------------------------------- | ------- |
| value           | number | 要显示的值, 当它改变时会产生从先前值到当前值的变化效果            | ------- |
| duration        | number | 动画的总共持续时间, 单位: 毫秒                                    | 1000    |
| refreshDuration | number | 刷新速率, 每隔一段时间刷新一次 单位: 毫秒                         | 10      |
| fractionDigits  | number | 用于格式化输出, 要保留的小数位数, 参见 `Number.prototype.toFixed` | 0       |

## test

运行 `yarn test` 来运行测试用例

---

pr is welcome :smile:
