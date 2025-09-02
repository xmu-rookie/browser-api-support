# MessagePort API 兼容性数据

## 基本信息

- **API名称**: `MessagePort`
- **MDN文档**: [MessagePort](https://developer.mozilla.org/docs/Web/API/MessagePort)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/web-messaging.html#message-ports)
- **标签**: `web-features:channel-messaging`

## 使用示例

### 基本用法

```javascript
// MessagePort 使用示例
// 请查阅MDN文档了解具体用法
console.log('MessagePort API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.12 |  |
| Edge | 12 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

### deno

- **支持版本**: 1.12

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 41

### Internet Explorer

- **支持版本**: 10

### Node.js


### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查MessagePort是否支持
function isMessagePortSupported() {
    return 'MessagePort' in window || typeof MessagePort !== 'undefined';
}

if (isMessagePortSupported()) {
    console.log('MessagePort 支持');
    // 使用MessagePort
} else {
    console.log('MessagePort 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MessagePort polyfill
if (!window.MessagePort) {
    // 在这里添加polyfill实现
    console.log('加载MessagePort polyfill');
}
```

