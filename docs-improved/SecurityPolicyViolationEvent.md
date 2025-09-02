# SecurityPolicyViolationEvent API 兼容性数据

## 基本信息

- **API名称**: `SecurityPolicyViolationEvent`
- **MDN文档**: [SecurityPolicyViolationEvent](https://developer.mozilla.org/docs/Web/API/SecurityPolicyViolationEvent)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-csp/#report-violation)
- **标签**: `web-features:csp`

## 使用示例

### 基本用法

```javascript
// SecurityPolicyViolationEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SecurityPolicyViolationEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查SecurityPolicyViolationEvent是否支持
function isSecurityPolicyViolationEventSupported() {
    return 'SecurityPolicyViolationEvent' in window || typeof SecurityPolicyViolationEvent !== 'undefined';
}

if (isSecurityPolicyViolationEventSupported()) {
    console.log('SecurityPolicyViolationEvent 支持');
    // 使用SecurityPolicyViolationEvent
} else {
    console.log('SecurityPolicyViolationEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SecurityPolicyViolationEvent polyfill
if (!window.SecurityPolicyViolationEvent) {
    // 在这里添加polyfill实现
    console.log('加载SecurityPolicyViolationEvent polyfill');
}
```

