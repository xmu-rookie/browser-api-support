# EventTarget.addEventListener API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.addEventListener`
- **MDN文档**: [EventTarget.addEventListener](https://developer.mozilla.org/docs/Web/API/EventTarget/addEventListener)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-eventtarget-addeventlistener③)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// EventTarget.addEventListener 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget.addEventListener API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 | Before Chrome 49, the `type` and `listener` parameters were optional. |
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
| WebView Android | 1 | Before Chrome 49, the `type` and `listener` parameters were optional. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Before Chrome 49, the `type` and `listener` parameters were optional.

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
  - Older versions of IE supported an equivalent, proprietary `EventTarget.attachEvent()` method.

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 1
- **注意事项**:
  - Before Chrome 49, the `type` and `listener` parameters were optional.

## 兼容性检查代码

### 特性检测

```javascript
// 检查EventTarget.addEventListener是否支持
function isEventTargetAddEventListenerSupported() {
    return 'addEventListener' in eventtarget && typeof eventtarget.addEventListener === 'function';
}

if (isEventTargetAddEventListenerSupported()) {
    console.log('EventTarget.addEventListener 支持');
    // 使用EventTarget.addEventListener
} else {
    console.log('EventTarget.addEventListener 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventTarget.addEventListener polyfill
if (!eventtarget.addEventListener) {
    // 在这里添加polyfill实现
    console.log('加载EventTarget.addEventListener polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_parameter**: Form with `options` object supported (third parameter can be either options or a `Boolean`, for backwards compatibility)
- **useCapture_parameter_optional**: `useCapture` parameter is optional

