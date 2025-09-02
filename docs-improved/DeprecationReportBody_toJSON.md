# DeprecationReportBody.toJSON API 兼容性数据

## 基本信息

- **API名称**: `DeprecationReportBody.toJSON`
- **MDN文档**: [DeprecationReportBody.toJSON](https://developer.mozilla.org/docs/Web/API/DeprecationReportBody/toJSON)
- **规范文档**: [查看规范](https://wicg.github.io/deprecation-reporting/#dom-deprecationreportbody-tojson)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// DeprecationReportBody.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('DeprecationReportBody.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
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

- **支持版本**: 69

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DeprecationReportBody.toJSON是否支持
function isDeprecationReportBodyToJSONSupported() {
    return 'toJSON' in deprecationreportbody && typeof deprecationreportbody.toJSON === 'function';
}

if (isDeprecationReportBodyToJSONSupported()) {
    console.log('DeprecationReportBody.toJSON 支持');
    // 使用DeprecationReportBody.toJSON
} else {
    console.log('DeprecationReportBody.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DeprecationReportBody.toJSON polyfill
if (!deprecationreportbody.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载DeprecationReportBody.toJSON polyfill');
}
```

