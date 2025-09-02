# HTMLElement.draggable API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.draggable`
- **MDN文档**: [HTMLElement.draggable](https://developer.mozilla.org/docs/Web/API/HTMLElement/draggable)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#dom-draggable)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// HTMLElement.draggable 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.draggable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 2

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.draggable是否支持
function isHTMLElementDraggableSupported() {
    return 'draggable' in htmlelement && typeof htmlelement.draggable === 'function';
}

if (isHTMLElementDraggableSupported()) {
    console.log('HTMLElement.draggable 支持');
    // 使用HTMLElement.draggable
} else {
    console.log('HTMLElement.draggable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.draggable polyfill
if (!htmlelement.draggable) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.draggable polyfill');
}
```

