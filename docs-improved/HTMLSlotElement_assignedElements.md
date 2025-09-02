# HTMLSlotElement.assignedElements API 兼容性数据

## 基本信息

- **API名称**: `HTMLSlotElement.assignedElements`
- **MDN文档**: [HTMLSlotElement.assignedElements](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/assignedElements)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-slot-assignedelements-dev)
- **标签**: `web-features:slot`

## 使用示例

### 基本用法

```javascript
// HTMLSlotElement.assignedElements 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSlotElement.assignedElements API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 66 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Firefox

- **支持版本**: 66

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSlotElement.assignedElements是否支持
function isHTMLSlotElementAssignedElementsSupported() {
    return 'assignedElements' in htmlslotelement && typeof htmlslotelement.assignedElements === 'function';
}

if (isHTMLSlotElementAssignedElementsSupported()) {
    console.log('HTMLSlotElement.assignedElements 支持');
    // 使用HTMLSlotElement.assignedElements
} else {
    console.log('HTMLSlotElement.assignedElements 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSlotElement.assignedElements polyfill
if (!htmlslotelement.assignedElements) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSlotElement.assignedElements polyfill');
}
```

