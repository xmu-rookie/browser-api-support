# CSSImportRule.supportsText API 兼容性数据

## 基本信息

- **API名称**: `CSSImportRule.supportsText`
- **MDN文档**: [CSSImportRule.supportsText](https://developer.mozilla.org/docs/Web/API/CSSImportRule/supportsText)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssimportrule-supportstext)
- **标签**: `web-features:supports`

## 使用示例

### 基本用法

```javascript
// CSSImportRule.supportsText 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSImportRule.supportsText API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 121

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 17.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSImportRule.supportsText是否支持
function isCSSImportRuleSupportsTextSupported() {
    return 'supportsText' in cssimportrule && typeof cssimportrule.supportsText === 'function';
}

if (isCSSImportRuleSupportsTextSupported()) {
    console.log('CSSImportRule.supportsText 支持');
    // 使用CSSImportRule.supportsText
} else {
    console.log('CSSImportRule.supportsText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSImportRule.supportsText polyfill
if (!cssimportrule.supportsText) {
    // 在这里添加polyfill实现
    console.log('加载CSSImportRule.supportsText polyfill');
}
```

