# ExtendableMessageEvent.ports API 兼容性数据

## 基本信息

- **API名称**: `ExtendableMessageEvent.ports`
- **MDN文档**: [ExtendableMessageEvent.ports](https://developer.mozilla.org/docs/Web/API/ExtendableMessageEvent/ports)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#extendablemessage-event-ports)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ExtendableMessageEvent.ports 使用示例
// 请查阅MDN文档了解具体用法
console.log('ExtendableMessageEvent.ports API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ExtendableMessageEvent.ports是否支持
function isExtendableMessageEventPortsSupported() {
    return 'ports' in extendablemessageevent && typeof extendablemessageevent.ports === 'function';
}

if (isExtendableMessageEventPortsSupported()) {
    console.log('ExtendableMessageEvent.ports 支持');
    // 使用ExtendableMessageEvent.ports
} else {
    console.log('ExtendableMessageEvent.ports 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ExtendableMessageEvent.ports polyfill
if (!extendablemessageevent.ports) {
    // 在这里添加polyfill实现
    console.log('加载ExtendableMessageEvent.ports polyfill');
}
```

