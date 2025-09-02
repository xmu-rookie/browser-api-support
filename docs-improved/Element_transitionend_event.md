# Element.transitionend_event API 兼容性数据

## 基本信息

- **API名称**: `Element.transitionend_event`
- **MDN文档**: [Element.transitionend_event](https://developer.mozilla.org/docs/Web/API/Element/transitionend_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-transitions/#transitionend)
- **标签**: `web-features:transitions`
- **描述**: `transitionend` event

## 使用示例

### 基本用法

```javascript
// Element.transitionend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.transitionend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The `ontransitionend` event handler property is not supported. To listen to this event, use `element... |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26
- **支持版本**: 1
- **前缀**: webkit

### Edge

- **支持版本**: 18
- **支持版本**: 79
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - The `ontransitionend` event handler property is not supported. To listen to this event, use `element.addEventListener('transitionend', function() {});`.

### Firefox

- **支持版本**: 51

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `ontransitionend` event handler property is not supported. To listen to this event, use `element.addEventListener('transitionend', function() {});`.

### Opera

- **支持版本**: 12.1
- **支持版本**: 15
- **前缀**: webkit
- **支持版本**: 11.6
- **移除版本**: 15
- **前缀**: o

### Opera Android

- **支持版本**: 12.1
- **支持版本**: 14
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 14
- **前缀**: o

### Safari

- **支持版本**: 7
- **支持版本**: 4
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.transitionend_event是否支持
function isElementTransitionend_eventSupported() {
    return 'transitionend_event' in element && typeof element.transitionend_event === 'function';
}

if (isElementTransitionend_eventSupported()) {
    console.log('Element.transitionend_event 支持');
    // 使用Element.transitionend_event
} else {
    console.log('Element.transitionend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.transitionend_event polyfill
if (!element.transitionend_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.transitionend_event polyfill');
}
```

