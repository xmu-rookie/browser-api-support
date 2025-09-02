# Element.pointercancel_event API 兼容性数据

## 基本信息

- **API名称**: `Element.pointercancel_event`
- **MDN文档**: [Element.pointercancel_event](https://developer.mozilla.org/docs/Web/API/Element/pointercancel_event)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#the-pointercancel-event,https://w3c.github.io/pointerevents/#dom-globaleventhandlers-onpointercancel)
- **标签**: `web-features:pointer-events-api`
- **描述**: `pointercancel` event

## 使用示例

### 基本用法

```javascript
// Element.pointercancel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.pointercancel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 |  |
| Firefox Android | 79 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Edge

- **支持版本**: 12
- **支持版本**: 12
- **移除版本**: 79
- **前缀**: ms

### Firefox

- **支持版本**: 59

### Firefox Android

- **支持版本**: 79

### Internet Explorer

- **支持版本**: 11
- **支持版本**: 10
- **前缀**: ms

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.pointercancel_event是否支持
function isElementPointercancel_eventSupported() {
    return 'pointercancel_event' in element && typeof element.pointercancel_event === 'function';
}

if (isElementPointercancel_eventSupported()) {
    console.log('Element.pointercancel_event 支持');
    // 使用Element.pointercancel_event
} else {
    console.log('Element.pointercancel_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.pointercancel_event polyfill
if (!element.pointercancel_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.pointercancel_event polyfill');
}
```

