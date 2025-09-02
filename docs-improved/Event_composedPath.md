# Event.composedPath API 兼容性数据

## 基本信息

- **API名称**: `Event.composedPath`
- **MDN文档**: [Event.composedPath](https://developer.mozilla.org/docs/Web/API/Event/composedPath)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-composedpath①)
- **标签**: `web-features:shadow-dom`

## 使用示例

### 基本用法

```javascript
// Event.composedPath 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.composedPath API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.5.0 | Returns an array with either the event itself or empty.; This is not used in Node.js and is provided... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 53
- **支持版本**: 50
- **移除版本**: 53

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 59

### Node.js

- **支持版本**: 14.5.0
- **注意事项**:
  - Returns an array with either the event itself or empty.
  - This is not used in Node.js and is provided purely for completeness.

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.composedPath是否支持
function isEventComposedPathSupported() {
    return 'composedPath' in event && typeof event.composedPath === 'function';
}

if (isEventComposedPathSupported()) {
    console.log('Event.composedPath 支持');
    // 使用Event.composedPath
} else {
    console.log('Event.composedPath 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.composedPath polyfill
if (!event.composedPath) {
    // 在这里添加polyfill实现
    console.log('加载Event.composedPath polyfill');
}
```

