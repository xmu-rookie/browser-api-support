# Element.animationstart_event API 兼容性数据

## 基本信息

- **API名称**: `Element.animationstart_event`
- **MDN文档**: [Element.animationstart_event](https://developer.mozilla.org/docs/Web/API/Element/animationstart_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#eventdef-globaleventhandlers-animationstart)
- **标签**: `web-features:web-animations`
- **描述**: `animationstart` event

## 使用示例

### 基本用法

```javascript
// Element.animationstart_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animationstart_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The `onanimationstart` event handler property is not supported. To listen to this event, use `docume... |
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
  - The `onanimationstart` event handler property is not supported. To listen to this event, use `document.addEventListener('animationstart', function() {});`.

### Edge

- **支持版本**: 18
- **支持版本**: 81
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - The `onanimationstart` event handler property is not supported. To listen to this event, use `document.addEventListener('animationstart', function() {});`.

### Firefox

- **支持版本**: 51
- **支持版本**: 5
- **移除版本**: 51
- **部分实现**: 是
- **注意事项**:
  - The `onanimationstart` event handler property is not supported. To listen to this event, use `document.addEventListener('animationstart', function() {});`.

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `onanimationstart` event handler property is not supported. To listen to this event, use `document.addEventListener('animationstart', function() {});`.

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.animationstart_event是否支持
function isElementAnimationstart_eventSupported() {
    return 'animationstart_event' in element && typeof element.animationstart_event === 'function';
}

if (isElementAnimationstart_eventSupported()) {
    console.log('Element.animationstart_event 支持');
    // 使用Element.animationstart_event
} else {
    console.log('Element.animationstart_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.animationstart_event polyfill
if (!element.animationstart_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.animationstart_event polyfill');
}
```

