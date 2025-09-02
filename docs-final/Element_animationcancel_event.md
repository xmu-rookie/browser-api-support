# Element.animationcancel_event API 兼容性数据

## 基本信息

- **API名称**: `Element.animationcancel_event`
- **MDN文档**: [Element.animationcancel_event](https://developer.mozilla.org/docs/Web/API/Element/animationcancel_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations/#eventdef-globaleventhandlers-animationcancel)
- **标签**: `web-features:web-animations`
- **描述**: `animationcancel` event

## 使用示例

### 基本用法

```javascript
// Element.animationcancel_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animationcancel_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 | The `onanimationcancel` event handler property is not supported. To listen to this event, use `eleme... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 54 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 83
- **部分实现**: 是
- **注意事项**:
  - The `onanimationcancel` event handler property is not supported. To listen to this event, use `element.addEventListener('animationcancel', function() {});`. See [bug 41404325](https://crbug.com/41404325).

### Firefox

- **支持版本**: 54

### Safari

- **支持版本**: 13.1
- **支持版本**: 12
- **移除版本**: 13.1
- **部分实现**: 是
- **注意事项**:
  - Although the `onanimationcancel` event handler property is supported, the `animationcancel` event is never fired.

