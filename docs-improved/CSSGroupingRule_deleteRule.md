# CSSGroupingRule.deleteRule API 兼容性数据

## 基本信息

- **API名称**: `CSSGroupingRule.deleteRule`
- **MDN文档**: [CSSGroupingRule.deleteRule](https://developer.mozilla.org/docs/Web/API/CSSGroupingRule/deleteRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssgroupingrule-deleterule)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSGroupingRule.deleteRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSGroupingRule.deleteRule API');
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
| Safari | 3 |  |
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

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSGroupingRule.deleteRule是否支持
function isCSSGroupingRuleDeleteRuleSupported() {
    return 'deleteRule' in cssgroupingrule && typeof cssgroupingrule.deleteRule === 'function';
}

if (isCSSGroupingRuleDeleteRuleSupported()) {
    console.log('CSSGroupingRule.deleteRule 支持');
    // 使用CSSGroupingRule.deleteRule
} else {
    console.log('CSSGroupingRule.deleteRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSGroupingRule.deleteRule polyfill
if (!cssgroupingrule.deleteRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSGroupingRule.deleteRule polyfill');
}
```

