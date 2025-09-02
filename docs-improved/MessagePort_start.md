# MessagePort.start API 兼容性数据

## 基本信息

- **API名称**: `MessagePort.start`
- **MDN文档**: [MessagePort.start](https://developer.mozilla.org/docs/Web/API/MessagePort/start)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/web-messaging.html#dom-messageport-start-dev)
- **标签**: `web-features:channel-messaging`

## 使用示例

### 基本用法

```javascript
// MessagePort.start 使用示例
// 请查阅MDN文档了解具体用法
console.log('MessagePort.start API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.12 |  |
| Edge | 12 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

### Deno

- **支持版本**: 1.12

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 41

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 11.7.0

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查MessagePort.start是否支持
function isMessagePortStartSupported() {
    return 'start' in messageport && typeof messageport.start === 'function';
}

if (isMessagePortStartSupported()) {
    console.log('MessagePort.start 支持');
    // 使用MessagePort.start
} else {
    console.log('MessagePort.start 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MessagePort.start polyfill
if (!messageport.start) {
    // 在这里添加polyfill实现
    console.log('加载MessagePort.start polyfill');
}
```

