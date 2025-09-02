# DeprecationReportBody.id API 兼容性数据

## 基本信息

- **API名称**: `DeprecationReportBody.id`
- **MDN文档**: [DeprecationReportBody.id](https://developer.mozilla.org/docs/Web/API/DeprecationReportBody/id)
- **规范文档**: [查看规范](https://wicg.github.io/deprecation-reporting/#dom-deprecationreportbody-id)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// DeprecationReportBody.id 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeprecationReportBody.id API');
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
| Safari | 不支持 |  |
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

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeprecationReportBody.id是否支持
function isDeprecationReportBodyIdSupported() {
    return 'id' in deprecationreportbody && typeof deprecationreportbody.id === 'function';
}

if (isDeprecationReportBodyIdSupported()) {
    console.log('DeprecationReportBody.id 支持');
    // 使用DeprecationReportBody.id
} else {
    console.log('DeprecationReportBody.id 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeprecationReportBody.id polyfill
if (!deprecationreportbody.id) {
    // 在这里添加polyfill实现
    console.log('加载DeprecationReportBody.id polyfill');
}
```

