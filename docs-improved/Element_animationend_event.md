# Element.animationend_event API 兼容性数据

## 基本信息

- **API名称**: `Element.animationend_event`
- **MDN文档**: [Element.animationend_event](https://developer.mozilla.org/docs/Web/API/Element/animationend_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#eventdef-globaleventhandlers-animationend)
- **标签**: `web-features:web-animations`
- **描述**: `animationend` event

## 使用示例

### 基本用法

```javascript
// Element.animationend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animationend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The `onanimationend` event handler property is not supported. To listen to this event, use `document... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79
- **支持版本**: 81
- **前缀**: webkit
- **支持版本**: 43
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - The `onanimationend` event handler property is not supported. To listen to this event, use `document.addEventListener('animationend', function() {});`.

### Edge

- **支持版本**: 18
- **支持版本**: 81
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - The `onanimationend` event handler property is not supported. To listen to this event, use `document.addEventListener('animationend', function() {});`.

### Firefox

- **支持版本**: 51
- **支持版本**: 5
- **移除版本**: 51
- **部分实现**: 是
- **注意事项**:
  - The `onanimationend` event handler property is not supported. To listen to this event, use `document.addEventListener('animationend', function() {});`.

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `onanimationend` event handler property is not supported. To listen to this event, use `document.addEventListener('animationend', function() {});`.

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.animationend_event是否支持
function isElementAnimationend_eventSupported() {
    return 'animationend_event' in element && typeof element.animationend_event === 'function';
}

if (isElementAnimationend_eventSupported()) {
    console.log('Element.animationend_event 支持');
    // 使用Element.animationend_event
} else {
    console.log('Element.animationend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.animationend_event polyfill
if (!element.animationend_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.animationend_event polyfill');
}
```

