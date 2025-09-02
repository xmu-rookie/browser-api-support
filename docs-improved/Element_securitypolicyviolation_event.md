# Element.securitypolicyviolation_event API 兼容性数据

## 基本信息

- **API名称**: `Element.securitypolicyviolation_event`
- **MDN文档**: [Element.securitypolicyviolation_event](https://developer.mozilla.org/docs/Web/API/Element/securitypolicyviolation_event)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-csp/#eventdef-globaleventhandlers-securitypolicyviolation,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onsecuritypolicyviolation)
- **标签**: `web-features:csp`
- **描述**: `securitypolicyviolation` event

## 使用示例

### 基本用法

```javascript
// Element.securitypolicyviolation_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.securitypolicyviolation_event API');
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
// 检查Element.securitypolicyviolation_event是否支持
function isElementSecuritypolicyviolation_eventSupported() {
    return 'securitypolicyviolation_event' in element && typeof element.securitypolicyviolation_event === 'function';
}

if (isElementSecuritypolicyviolation_eventSupported()) {
    console.log('Element.securitypolicyviolation_event 支持');
    // 使用Element.securitypolicyviolation_event
} else {
    console.log('Element.securitypolicyviolation_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.securitypolicyviolation_event polyfill
if (!element.securitypolicyviolation_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.securitypolicyviolation_event polyfill');
}
```

