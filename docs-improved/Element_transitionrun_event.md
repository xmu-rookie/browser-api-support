# Element.transitionrun_event API 兼容性数据

## 基本信息

- **API名称**: `Element.transitionrun_event`
- **MDN文档**: [Element.transitionrun_event](https://developer.mozilla.org/docs/Web/API/Element/transitionrun_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-transitions/#transitionrun)
- **标签**: `web-features:transitions`
- **描述**: `transitionrun` event

## 使用示例

### 基本用法

```javascript
// Element.transitionrun_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.transitionrun_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The `ontransitionrun` event handler property is not supported. To listen to this event, use `element... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 74

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 53

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `ontransitionrun` event handler property is not supported. To listen to this event, use `element.addEventListener('transitionrun', function() {});`.

### Safari

- **支持版本**: 13.1
- **支持版本**: 12
- **移除版本**: 13.1
- **部分实现**: 是
- **注意事项**:
  - The event handler exists but will never be called.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.transitionrun_event是否支持
function isElementTransitionrun_eventSupported() {
    return 'transitionrun_event' in element && typeof element.transitionrun_event === 'function';
}

if (isElementTransitionrun_eventSupported()) {
    console.log('Element.transitionrun_event 支持');
    // 使用Element.transitionrun_event
} else {
    console.log('Element.transitionrun_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.transitionrun_event polyfill
if (!element.transitionrun_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.transitionrun_event polyfill');
}
```

