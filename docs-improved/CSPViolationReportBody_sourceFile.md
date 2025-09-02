# CSPViolationReportBody.sourceFile API 兼容性数据

## 基本信息

- **API名称**: `CSPViolationReportBody.sourceFile`
- **MDN文档**: [CSPViolationReportBody.sourceFile](https://developer.mozilla.org/docs/Web/API/CSPViolationReportBody/sourceFile)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-csp/#dom-cspviolationreportbody-sourcefile)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// CSPViolationReportBody.sourceFile 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSPViolationReportBody.sourceFile API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
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

- **支持版本**: 74

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
// 检查CSPViolationReportBody.sourceFile是否支持
function isCSPViolationReportBodySourceFileSupported() {
    return 'sourceFile' in cspviolationreportbody && typeof cspviolationreportbody.sourceFile === 'function';
}

if (isCSPViolationReportBodySourceFileSupported()) {
    console.log('CSPViolationReportBody.sourceFile 支持');
    // 使用CSPViolationReportBody.sourceFile
} else {
    console.log('CSPViolationReportBody.sourceFile 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSPViolationReportBody.sourceFile polyfill
if (!cspviolationreportbody.sourceFile) {
    // 在这里添加polyfill实现
    console.log('加载CSPViolationReportBody.sourceFile polyfill');
}
```

