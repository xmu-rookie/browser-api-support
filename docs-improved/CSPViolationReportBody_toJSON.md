# CSPViolationReportBody.toJSON API 兼容性数据

## 基本信息

- **API名称**: `CSPViolationReportBody.toJSON`
- **MDN文档**: [CSPViolationReportBody.toJSON](https://developer.mozilla.org/docs/Web/API/CSPViolationReportBody/toJSON)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// CSPViolationReportBody.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSPViolationReportBody.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 56 |  |
| Opera Android | 48 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 10.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 56

### Opera Android

- **支持版本**: 48

### Safari

- **支持版本**: 18.4

### Samsung Internet

- **支持版本**: 10.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSPViolationReportBody.toJSON是否支持
function isCSPViolationReportBodyToJSONSupported() {
    return 'toJSON' in cspviolationreportbody && typeof cspviolationreportbody.toJSON === 'function';
}

if (isCSPViolationReportBodyToJSONSupported()) {
    console.log('CSPViolationReportBody.toJSON 支持');
    // 使用CSPViolationReportBody.toJSON
} else {
    console.log('CSPViolationReportBody.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSPViolationReportBody.toJSON polyfill
if (!cspviolationreportbody.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载CSPViolationReportBody.toJSON polyfill');
}
```

