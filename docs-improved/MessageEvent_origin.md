# MessageEvent.origin API 兼容性数据

## 基本信息

- **API名称**: `MessageEvent.origin`
- **MDN文档**: [MessageEvent.origin](https://developer.mozilla.org/docs/Web/API/MessageEvent/origin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/comms.html#dom-messageevent-origin-dev)
- **标签**: `web-features:postmessage`

## 使用示例

### 基本用法

```javascript
// MessageEvent.origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('MessageEvent.origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 15.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
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

- **支持版本**: 1.4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 15.0.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查MessageEvent.origin是否支持
function isMessageEventOriginSupported() {
    return 'origin' in messageevent && typeof messageevent.origin === 'function';
}

if (isMessageEventOriginSupported()) {
    console.log('MessageEvent.origin 支持');
    // 使用MessageEvent.origin
} else {
    console.log('MessageEvent.origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MessageEvent.origin polyfill
if (!messageevent.origin) {
    // 在这里添加polyfill实现
    console.log('加载MessageEvent.origin polyfill');
}
```

