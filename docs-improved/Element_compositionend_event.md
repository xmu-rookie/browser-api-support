# Element.compositionend_event API 兼容性数据

## 基本信息

- **API名称**: `Element.compositionend_event`
- **MDN文档**: [Element.compositionend_event](https://developer.mozilla.org/docs/Web/API/Element/compositionend_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-compositionend)
- **标签**: `web-features:composition-events`
- **描述**: `compositionend` event

## 使用示例

### 基本用法

```javascript
// Element.compositionend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.compositionend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 15

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.compositionend_event是否支持
function isElementCompositionend_eventSupported() {
    return 'compositionend_event' in element && typeof element.compositionend_event === 'function';
}

if (isElementCompositionend_eventSupported()) {
    console.log('Element.compositionend_event 支持');
    // 使用Element.compositionend_event
} else {
    console.log('Element.compositionend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.compositionend_event polyfill
if (!element.compositionend_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.compositionend_event polyfill');
}
```

