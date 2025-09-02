# ReportBody.toJSON API 兼容性数据

## 基本信息

- **API名称**: `ReportBody.toJSON`
- **MDN文档**: [ReportBody.toJSON](https://developer.mozilla.org/docs/Web/API/ReportBody/toJSON)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// ReportBody.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReportBody.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 77 |  |
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

- **支持版本**: 77
- **需要标志**: 
  - dom.reporting.enabled: true

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReportBody.toJSON是否支持
function isReportBodyToJSONSupported() {
    return 'toJSON' in reportbody && typeof reportbody.toJSON === 'function';
}

if (isReportBodyToJSONSupported()) {
    console.log('ReportBody.toJSON 支持');
    // 使用ReportBody.toJSON
} else {
    console.log('ReportBody.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReportBody.toJSON polyfill
if (!reportbody.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载ReportBody.toJSON polyfill');
}
```

