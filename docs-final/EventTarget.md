# EventTarget API 兼容性数据

## 基本信息

- **API名称**: `EventTarget`
- **MDN文档**: [EventTarget](https://developer.mozilla.org/docs/Web/API/EventTarget)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-eventtarget)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// EventTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget API');
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
| Internet Explorer | 6 |  |
| Node.js | 15.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
| Safari | 1 | `window.EventTarget` did not exist on versions of Safari before 10.1. |
| Safari iOS | 1 | `window.EventTarget` did not exist on versions of Safari iOS before 10.3. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 |  |
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

- **支持版本**: 6

### Node.js

- **支持版本**: 15.0.0
- **支持版本**: 14.5.0
- **移除版本**: 15.0.0
- **部分实现**: 是
- **注意事项**:
  - Only available as an internal instance.

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1
- **注意事项**:
  - `window.EventTarget` did not exist on versions of Safari before 10.1.

### Safari iOS

- **支持版本**: 1
- **注意事项**:
  - `window.EventTarget` did not exist on versions of Safari iOS before 10.3.

### WebView Android

- **支持版本**: 1

