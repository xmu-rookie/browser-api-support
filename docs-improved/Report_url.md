# Report.url API 兼容性数据

## 基本信息

- **API名称**: `Report.url`
- **MDN文档**: [Report.url](https://developer.mozilla.org/docs/Web/API/Report/url)
- **规范文档**: [查看规范](https://w3c.github.io/reporting/#dom-report-url)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// Report.url 使用示例
// 请查阅MDN文档了解具体用法
console.log('Report.url API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Firefox

- **支持版本**: 65
- **需要标志**: 
  - dom.reporting.enabled: true

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Report.url是否支持
function isReportUrlSupported() {
    return 'url' in report && typeof report.url === 'function';
}

if (isReportUrlSupported()) {
    console.log('Report.url 支持');
    // 使用Report.url
} else {
    console.log('Report.url 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Report.url polyfill
if (!report.url) {
    // 在这里添加polyfill实现
    console.log('加载Report.url polyfill');
}
```

