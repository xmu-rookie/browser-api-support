# HTMLInputElement.selectionDirection API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.selectionDirection`
- **MDN文档**: [HTMLInputElement.selectionDirection](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionDirection)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-textarea/input-selectiondirection-dev)
- **标签**: `web-features:input`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.selectionDirection 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.selectionDirection API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 8 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 15

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 8

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.selectionDirection是否支持
function isHTMLInputElementSelectionDirectionSupported() {
    return 'selectionDirection' in htmlinputelement && typeof htmlinputelement.selectionDirection === 'function';
}

if (isHTMLInputElementSelectionDirectionSupported()) {
    console.log('HTMLInputElement.selectionDirection 支持');
    // 使用HTMLInputElement.selectionDirection
} else {
    console.log('HTMLInputElement.selectionDirection 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.selectionDirection polyfill
if (!htmlinputelement.selectionDirection) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.selectionDirection polyfill');
}
```

