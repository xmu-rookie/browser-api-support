# XMLHttpRequest.setAttributionReporting API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.setAttributionReporting`
- **MDN文档**: [XMLHttpRequest.setAttributionReporting](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/setAttributionReporting)
- **规范文档**: [查看规范](https://wicg.github.io/attribution-reporting-api/#dom-xmlhttprequest-setattributionreporting)
- **标签**: `web-features:attribution-reporting`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.setAttributionReporting 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.setAttributionReporting API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.setAttributionReporting是否支持
function isXMLHttpRequestSetAttributionReportingSupported() {
    return 'setAttributionReporting' in xmlhttprequest && typeof xmlhttprequest.setAttributionReporting === 'function';
}

if (isXMLHttpRequestSetAttributionReportingSupported()) {
    console.log('XMLHttpRequest.setAttributionReporting 支持');
    // 使用XMLHttpRequest.setAttributionReporting
} else {
    console.log('XMLHttpRequest.setAttributionReporting 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.setAttributionReporting polyfill
if (!xmlhttprequest.setAttributionReporting) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.setAttributionReporting polyfill');
}
```

