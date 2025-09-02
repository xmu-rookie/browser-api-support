# PresentationRequest.reconnect API 兼容性数据

## 基本信息

- **API名称**: `PresentationRequest.reconnect`
- **MDN文档**: [PresentationRequest.reconnect](https://developer.mozilla.org/docs/Web/API/PresentationRequest/reconnect)
- **规范文档**: [查看规范](https://w3c.github.io/presentation-api/#reconnecting-to-a-presentation)
- **标签**: `web-features:presentation-api`

## 使用示例

### 基本用法

```javascript
// PresentationRequest.reconnect 使用示例
// 请查阅MDN文档了解具体用法
console.log('PresentationRequest.reconnect API');
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
// 检查PresentationRequest.reconnect是否支持
function isPresentationRequestReconnectSupported() {
    return 'reconnect' in presentationrequest && typeof presentationrequest.reconnect === 'function';
}

if (isPresentationRequestReconnectSupported()) {
    console.log('PresentationRequest.reconnect 支持');
    // 使用PresentationRequest.reconnect
} else {
    console.log('PresentationRequest.reconnect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PresentationRequest.reconnect polyfill
if (!presentationrequest.reconnect) {
    // 在这里添加polyfill实现
    console.log('加载PresentationRequest.reconnect polyfill');
}
```

