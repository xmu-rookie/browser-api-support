# Element.animationiteration_event API 兼容性数据

## 基本信息

- **API名称**: `Element.animationiteration_event`
- **MDN文档**: [Element.animationiteration_event](https://developer.mozilla.org/docs/Web/API/Element/animationiteration_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#eventdef-globaleventhandlers-animationiteration)
- **标签**: `web-features:web-animations`
- **描述**: `animationiteration` event

## 使用示例

### 基本用法

```javascript
// Element.animationiteration_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animationiteration_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The `onanimationiteration` event handler property is not supported. To listen to this event, use `do... |
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
  - The `onanimationiteration` event handler property is not supported. To listen to this event, use `document.addEventListener('animationiteration', function() {});`.

### Edge

- **支持版本**: 18
- **支持版本**: 81
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - The `onanimationiteration` event handler property is not supported. To listen to this event, use `document.addEventListener('animationiteration', function() {});`.

### Firefox

- **支持版本**: 51
- **支持版本**: 5
- **移除版本**: 51
- **部分实现**: 是
- **注意事项**:
  - The `onanimationiteration` event handler property is not supported. To listen to this event, use `document.addEventListener('animationiteration', function() {});`.

### Internet Explorer

- **支持版本**: 10
- **部分实现**: 是
- **注意事项**:
  - The `onanimationiteration` event handler property is not supported. To listen to this event, use `document.addEventListener('animationiteration', function() {});`.

### Safari

- **支持版本**: 9

