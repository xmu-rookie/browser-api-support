# CSPViolationReportBody.blockedURL API 兼容性数据

## 基本信息

- **API名称**: `CSPViolationReportBody.blockedURL`
- **MDN文档**: [CSPViolationReportBody.blockedURL](https://developer.mozilla.org/docs/Web/API/CSPViolationReportBody/blockedURL)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-csp/#dom-cspviolationreportbody-blockedurl)
- **标签**: `web-features:reporting`

## 使用示例

### 基本用法

```javascript
// CSPViolationReportBody.blockedURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSPViolationReportBody.blockedURL API');
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
// 检查CSPViolationReportBody.blockedURL是否支持
function isCSPViolationReportBodyBlockedURLSupported() {
    return 'blockedURL' in cspviolationreportbody && typeof cspviolationreportbody.blockedURL === 'function';
}

if (isCSPViolationReportBodyBlockedURLSupported()) {
    console.log('CSPViolationReportBody.blockedURL 支持');
    // 使用CSPViolationReportBody.blockedURL
} else {
    console.log('CSPViolationReportBody.blockedURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSPViolationReportBody.blockedURL polyfill
if (!cspviolationreportbody.blockedURL) {
    // 在这里添加polyfill实现
    console.log('加载CSPViolationReportBody.blockedURL polyfill');
}
```

