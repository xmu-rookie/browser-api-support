# CSSGroupingRule API 兼容性数据

## 基本信息

- **API名称**: `CSSGroupingRule`
- **MDN文档**: [CSSGroupingRule](https://developer.mozilla.org/docs/Web/API/CSSGroupingRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#the-cssgroupingrule-interface)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSGroupingRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSGroupingRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 20

### Safari

- **支持版本**: 14.1
- **支持版本**: 3
- **移除版本**: 14.1
- **部分实现**: 是
- **注意事项**:
  - The `CSSGroupingRule` interface itself is not present, but many of the methods are available on various interfaces such as the [`CSSMediaRule`](https://developer.mozilla.org/docs/Web/API/CSSMediaRule) and [`CSSPageRule`](https://developer.mozilla.org/docs/Web/API/CSSPageRule) interfaces.

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSGroupingRule是否支持
function isCSSGroupingRuleSupported() {
    return 'CSSGroupingRule' in window || typeof CSSGroupingRule !== 'undefined';
}

if (isCSSGroupingRuleSupported()) {
    console.log('CSSGroupingRule 支持');
    // 使用CSSGroupingRule
} else {
    console.log('CSSGroupingRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSGroupingRule polyfill
if (!window.CSSGroupingRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSGroupingRule polyfill');
}
```

