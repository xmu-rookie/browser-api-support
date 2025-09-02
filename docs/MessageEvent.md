# MessageEvent API 兼容性数据

## 基本信息

- **API名称**: `MessageEvent`
- **MDN文档**: [MessageEvent](https://developer.mozilla.org/docs/Web/API/MessageEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/comms.html#the-messageevent-interface)
- **标签**: `web-features:postmessage`

## 使用示例

### 基本用法

```javascript
// MessageEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('MessageEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 15.0.0 |  |
| oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
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

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查MessageEvent是否支持
function isMessageEventSupported() {
    return 'MessageEvent' in window || typeof MessageEvent !== 'undefined';
}

if (isMessageEventSupported()) {
    console.log('MessageEvent 支持');
    // 使用MessageEvent
} else {
    console.log('MessageEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MessageEvent polyfill
if (!window.MessageEvent) {
    // 在这里添加polyfill实现
    console.log('加载MessageEvent polyfill');
}
```

