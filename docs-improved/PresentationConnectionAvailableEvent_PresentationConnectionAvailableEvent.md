# PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent API 兼容性数据

## 基本信息

- **API名称**: `PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent`
- **MDN文档**: [PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent](https://developer.mozilla.org/docs/Web/API/PresentationConnectionAvailableEvent/PresentationConnectionAvailableEvent)
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#dom-presentationconnectionavailableevent-constructor)
- **标签**: `web-features:presentation-api`
- **描述**: `PresentationConnectionAvailableEvent()` constructor

## 使用示例

### 基本用法

```javascript
// PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
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
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent是否支持
function isPresentationConnectionAvailableEventPresentationConnectionAvailableEventSupported() {
    return 'PresentationConnectionAvailableEvent' in presentationconnectionavailableevent && typeof presentationconnectionavailableevent.PresentationConnectionAvailableEvent === 'function';
}

if (isPresentationConnectionAvailableEventPresentationConnectionAvailableEventSupported()) {
    console.log('PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent 支持');
    // 使用PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent
} else {
    console.log('PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent polyfill
if (!presentationconnectionavailableevent.PresentationConnectionAvailableEvent) {
    // 在这里添加polyfill实现
    console.log('加载PresentationConnectionAvailableEvent.PresentationConnectionAvailableEvent polyfill');
}
```

