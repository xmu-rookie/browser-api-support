# CSSStyleSheet.removeRule API 兼容性数据

## 基本信息

- **API名称**: `CSSStyleSheet.removeRule`
- **MDN文档**: [CSSStyleSheet.removeRule](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/removeRule)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssstylesheet-removerule)
- **描述**: `removeRule()`

## 使用示例

### 基本用法

```javascript
// CSSStyleSheet.removeRule 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSStyleSheet.removeRule API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 68 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 68

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSStyleSheet.removeRule是否支持
function isCSSStyleSheetRemoveRuleSupported() {
    return 'removeRule' in cssstylesheet && typeof cssstylesheet.removeRule === 'function';
}

if (isCSSStyleSheetRemoveRuleSupported()) {
    console.log('CSSStyleSheet.removeRule 支持');
    // 使用CSSStyleSheet.removeRule
} else {
    console.log('CSSStyleSheet.removeRule 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSStyleSheet.removeRule polyfill
if (!cssstylesheet.removeRule) {
    // 在这里添加polyfill实现
    console.log('加载CSSStyleSheet.removeRule polyfill');
}
```

