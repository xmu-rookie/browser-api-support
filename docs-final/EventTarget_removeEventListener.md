# EventTarget.removeEventListener API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.removeEventListener`
- **MDN文档**: [EventTarget.removeEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/removeEventListener)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-eventtarget-removeeventlistener②)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// EventTarget.removeEventListener 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget.removeEventListener API');
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
- **支持版本**: 6
- **移除版本**: 11
- **注意事项**:
  - Older versions of IE supported an equivalent, proprietary `EventTarget.detachEvent()` method.

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 相关子API

该API包含以下子功能：

- **options_parameter**: Form with `options` object supported (third parameter can be either options or a `Boolean`, for backwards compatibility)
- **useCapture_parameter_optional**: `useCapture` parameter is optional

