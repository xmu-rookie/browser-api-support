# Element.touchend_event API 兼容性数据

## 基本信息

- **API名称**: `Element.touchend_event`
- **MDN文档**: [Element.touchend_event](https://developer.mozilla.org/docs/Web/API/Element/touchend_event)
- **规范文档**: [查看规范](https://w3c.github.io/touch-events/#event-touchend,https://w3c.github.io/touch-events/#dom-globaleventhandlers-ontouchend)
- **标签**: `web-features:touch-events`
- **描述**: `touchend` event

## 使用示例

### 基本用法

```javascript
// Element.touchend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.touchend_event API');
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
// 检查Element.touchend_event是否支持
function isElementTouchend_eventSupported() {
    return 'touchend_event' in element && typeof element.touchend_event === 'function';
}

if (isElementTouchend_eventSupported()) {
    console.log('Element.touchend_event 支持');
    // 使用Element.touchend_event
} else {
    console.log('Element.touchend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.touchend_event polyfill
if (!element.touchend_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.touchend_event polyfill');
}
```

