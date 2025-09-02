# Event.target API 兼容性数据

## 基本信息

- **API名称**: `Event.target`
- **MDN文档**: [Event.target](https://developer.mozilla.org/docs/Web/API/Event/target)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-target③)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.target 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.target API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.target是否支持
function isEventTargetSupported() {
    return 'target' in event && typeof event.target === 'function';
}

if (isEventTargetSupported()) {
    console.log('Event.target 支持');
    // 使用Event.target
} else {
    console.log('Event.target 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.target polyfill
if (!event.target) {
    // 在这里添加polyfill实现
    console.log('加载Event.target polyfill');
}
```

