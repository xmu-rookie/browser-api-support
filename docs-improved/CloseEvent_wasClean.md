# CloseEvent.wasClean API 兼容性数据

## 基本信息

- **API名称**: `CloseEvent.wasClean`
- **MDN文档**: [CloseEvent.wasClean](https://developer.mozilla.org/docs/Web/API/CloseEvent/wasClean)
- **规范文档**: [查看规范](https://websockets.spec.whatwg.org/#ref-for-dom-closeevent-wasclean②)
- **标签**: `web-features:websockets`

## 使用示例

### 基本用法

```javascript
// CloseEvent.wasClean 使用示例
// 请查阅MDN文档了解具体用法
console.log('CloseEvent.wasClean API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 8 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
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

- **支持版本**: 15

### Deno

- **支持版本**: 1.4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 8

### Internet Explorer

- **支持版本**: 10

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
// 检查CloseEvent.wasClean是否支持
function isCloseEventWasCleanSupported() {
    return 'wasClean' in closeevent && typeof closeevent.wasClean === 'function';
}

if (isCloseEventWasCleanSupported()) {
    console.log('CloseEvent.wasClean 支持');
    // 使用CloseEvent.wasClean
} else {
    console.log('CloseEvent.wasClean 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CloseEvent.wasClean polyfill
if (!closeevent.wasClean) {
    // 在这里添加polyfill实现
    console.log('加载CloseEvent.wasClean polyfill');
}
```

