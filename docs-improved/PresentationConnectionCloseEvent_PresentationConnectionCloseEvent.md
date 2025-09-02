# PresentationConnectionCloseEvent.PresentationConnectionCloseEvent API 兼容性数据

## 基本信息

- **API名称**: `PresentationConnectionCloseEvent.PresentationConnectionCloseEvent`
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#dom-presentationconnectioncloseevent-constructor)
- **标签**: `web-features:presentation-api`
- **描述**: `PresentationConnectionCloseEvent()` constructor

## 使用示例

### 基本用法

```javascript
// PresentationConnectionCloseEvent.PresentationConnectionCloseEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationConnectionCloseEvent.PresentationConnectionCloseEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
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

- **支持版本**: 50

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PresentationConnectionCloseEvent.PresentationConnectionCloseEvent是否支持
function isPresentationConnectionCloseEventPresentationConnectionCloseEventSupported() {
    return 'PresentationConnectionCloseEvent' in presentationconnectioncloseevent && typeof presentationconnectioncloseevent.PresentationConnectionCloseEvent === 'function';
}

if (isPresentationConnectionCloseEventPresentationConnectionCloseEventSupported()) {
    console.log('PresentationConnectionCloseEvent.PresentationConnectionCloseEvent 支持');
    // 使用PresentationConnectionCloseEvent.PresentationConnectionCloseEvent
} else {
    console.log('PresentationConnectionCloseEvent.PresentationConnectionCloseEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationConnectionCloseEvent.PresentationConnectionCloseEvent polyfill
if (!presentationconnectioncloseevent.PresentationConnectionCloseEvent) {
    // 在这里添加polyfill实现
    console.log('加载PresentationConnectionCloseEvent.PresentationConnectionCloseEvent polyfill');
}
```

