# CSSStyleSheet.rules API 兼容性数据

## 基本信息

- **API名称**: `CSSStyleSheet.rules`
- **MDN文档**: [CSSStyleSheet.rules](https://developer.mozilla.org/docs/Web/API/CSSStyleSheet/rules)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-cssstylesheet-rules)

## 使用示例

### 基本用法

```javascript
// CSSStyleSheet.rules 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSStyleSheet.rules API');
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
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
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

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSStyleSheet.rules是否支持
function isCSSStyleSheetRulesSupported() {
    return 'rules' in cssstylesheet && typeof cssstylesheet.rules === 'function';
}

if (isCSSStyleSheetRulesSupported()) {
    console.log('CSSStyleSheet.rules 支持');
    // 使用CSSStyleSheet.rules
} else {
    console.log('CSSStyleSheet.rules 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSStyleSheet.rules polyfill
if (!cssstylesheet.rules) {
    // 在这里添加polyfill实现
    console.log('加载CSSStyleSheet.rules polyfill');
}
```

