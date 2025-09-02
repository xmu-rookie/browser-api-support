# EventTarget.EventTarget API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.EventTarget`
- **MDN文档**: [EventTarget.EventTarget](https://developer.mozilla.org/docs/Web/API/EventTarget/EventTarget)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-eventtarget-eventtarget①)
- **标签**: `web-features:events`
- **描述**: `EventTarget()` constructor

## 使用示例

### 基本用法

```javascript
// EventTarget.EventTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget.EventTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 64

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 59

### Node.js

- **支持版本**: 14.5.0

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventTarget.EventTarget是否支持
function isEventTargetEventTargetSupported() {
    return 'EventTarget' in eventtarget && typeof eventtarget.EventTarget === 'function';
}

if (isEventTargetEventTargetSupported()) {
    console.log('EventTarget.EventTarget 支持');
    // 使用EventTarget.EventTarget
} else {
    console.log('EventTarget.EventTarget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventTarget.EventTarget polyfill
if (!eventtarget.EventTarget) {
    // 在这里添加polyfill实现
    console.log('加载EventTarget.EventTarget polyfill');
}
```

