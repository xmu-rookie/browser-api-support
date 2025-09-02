# CloseEvent.CloseEvent API 兼容性数据

## 基本信息

- **API名称**: `CloseEvent.CloseEvent`
- **MDN文档**: [CloseEvent.CloseEvent](https://developer.mozilla.org/docs/Web/API/CloseEvent/CloseEvent)
- **规范文档**: [查看规范](https://websockets.spec.whatwg.org/#dom-closeevent-closeevent)
- **标签**: `web-features:websockets`
- **描述**: `CloseEvent()` constructor

## 使用示例

### 基本用法

```javascript
// CloseEvent.CloseEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('CloseEvent.CloseEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 16 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 14 |  |
| Firefox | 11 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 23.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 16

### Deno

- **支持版本**: 1.4

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 11

### Node.js

- **支持版本**: 23.0.0

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查CloseEvent.CloseEvent是否支持
function isCloseEventCloseEventSupported() {
    return 'CloseEvent' in closeevent && typeof closeevent.CloseEvent === 'function';
}

if (isCloseEventCloseEventSupported()) {
    console.log('CloseEvent.CloseEvent 支持');
    // 使用CloseEvent.CloseEvent
} else {
    console.log('CloseEvent.CloseEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CloseEvent.CloseEvent polyfill
if (!closeevent.CloseEvent) {
    // 在这里添加polyfill实现
    console.log('加载CloseEvent.CloseEvent polyfill');
}
```

