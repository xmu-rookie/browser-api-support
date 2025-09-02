# HTMLSlotElement.slotchange_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLSlotElement.slotchange_event`
- **MDN文档**: [HTMLSlotElement.slotchange_event](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/slotchange_event)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#eventdef-htmlslotelement-slotchange,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onslotchange)
- **标签**: `web-features:slot`
- **描述**: `slotchange` event

## 使用示例

### 基本用法

```javascript
// HTMLSlotElement.slotchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSlotElement.slotchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10.1
- **支持版本**: 10
- **移除版本**: 10.1
- **部分实现**: 是
- **注意事项**:
  - The `onslotchange` event handler property is not supported.

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSlotElement.slotchange_event是否支持
function isHTMLSlotElementSlotchange_eventSupported() {
    return 'slotchange_event' in htmlslotelement && typeof htmlslotelement.slotchange_event === 'function';
}

if (isHTMLSlotElementSlotchange_eventSupported()) {
    console.log('HTMLSlotElement.slotchange_event 支持');
    // 使用HTMLSlotElement.slotchange_event
} else {
    console.log('HTMLSlotElement.slotchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSlotElement.slotchange_event polyfill
if (!htmlslotelement.slotchange_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSlotElement.slotchange_event polyfill');
}
```

