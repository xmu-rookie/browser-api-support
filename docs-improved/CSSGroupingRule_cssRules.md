# CSSGroupingRule.cssRules API 兼容性数据

## 基本信息

- **API名称**: `CSSGroupingRule.cssRules`
- **MDN文档**: [CSSGroupingRule.cssRules](https://developer.mozilla.org/docs/Web/API/CSSGroupingRule/cssRules)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssgroupingrule-cssrules)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSGroupingRule.cssRules 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSGroupingRule.cssRules API');
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
// 检查CSSGroupingRule.cssRules是否支持
function isCSSGroupingRuleCssRulesSupported() {
    return 'cssRules' in cssgroupingrule && typeof cssgroupingrule.cssRules === 'function';
}

if (isCSSGroupingRuleCssRulesSupported()) {
    console.log('CSSGroupingRule.cssRules 支持');
    // 使用CSSGroupingRule.cssRules
} else {
    console.log('CSSGroupingRule.cssRules 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSGroupingRule.cssRules polyfill
if (!cssgroupingrule.cssRules) {
    // 在这里添加polyfill实现
    console.log('加载CSSGroupingRule.cssRules polyfill');
}
```

