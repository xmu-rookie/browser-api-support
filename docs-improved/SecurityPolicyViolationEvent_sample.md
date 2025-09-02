# SecurityPolicyViolationEvent.sample API 兼容性数据

## 基本信息

- **API名称**: `SecurityPolicyViolationEvent.sample`
- **MDN文档**: [SecurityPolicyViolationEvent.sample](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent/sample)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-csp/#dom-securitypolicyviolationevent-sample)
- **标签**: `web-features:csp`

## 使用示例

### 基本用法

```javascript
// SecurityPolicyViolationEvent.sample 使用示例
// 请查阅MDN文档了解具体用法
console.log('SecurityPolicyViolationEvent.sample API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查SecurityPolicyViolationEvent.sample是否支持
function isSecurityPolicyViolationEventSampleSupported() {
    return 'sample' in securitypolicyviolationevent && typeof securitypolicyviolationevent.sample === 'function';
}

if (isSecurityPolicyViolationEventSampleSupported()) {
    console.log('SecurityPolicyViolationEvent.sample 支持');
    // 使用SecurityPolicyViolationEvent.sample
} else {
    console.log('SecurityPolicyViolationEvent.sample 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SecurityPolicyViolationEvent.sample polyfill
if (!securitypolicyviolationevent.sample) {
    // 在这里添加polyfill实现
    console.log('加载SecurityPolicyViolationEvent.sample polyfill');
}
```

