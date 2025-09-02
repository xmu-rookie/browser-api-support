# Element.touchstart_event API 兼容性数据

## 基本信息

- **API名称**: `Element.touchstart_event`
- **MDN文档**: [Element.touchstart_event](https://developer.mozilla.org/docs/Web/API/Element/touchstart_event)
- **规范文档**: [查看规范](https://w3c.github.io/touch-events/#event-touchstart,https://w3c.github.io/touch-events/#dom-globaleventhandlers-ontouchstart)
- **标签**: `web-features:touch-events`
- **描述**: `touchstart` event

## 使用示例

### 基本用法

```javascript
// Element.touchstart_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.touchstart_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 52 |  |
| Firefox Android | 6 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | ≤3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 22

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 52

### Firefox Android

- **支持版本**: 6

### Opera

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: ≤3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.touchstart_event是否支持
function isElementTouchstart_eventSupported() {
    return 'touchstart_event' in element && typeof element.touchstart_event === 'function';
}

if (isElementTouchstart_eventSupported()) {
    console.log('Element.touchstart_event 支持');
    // 使用Element.touchstart_event
} else {
    console.log('Element.touchstart_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.touchstart_event polyfill
if (!element.touchstart_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.touchstart_event polyfill');
}
```

