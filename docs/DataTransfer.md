# DataTransfer API 兼容性数据

## 基本信息

- **API名称**: `DataTransfer`
- **MDN文档**: [DataTransfer](https://developer.mozilla.org/docs/Web/API/DataTransfer)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#the-datatransfer-interface)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransfer 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransfer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 | As of Firefox 52, the [`DataTransfer.types`](https://developer.mozilla.org/docs/Web/API/DataTransfer/types) property returns a frozen array of [`DOMString`](https://developer.mozilla.org/docs/Web/API/DOMString)s as per spec, rather than a [`DOMStringList`](https://developer.mozilla.org/docs/Web/API/DOMStringList). |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5
- **注意事项**:
  - As of Firefox 52, the [`DataTransfer.types`](https://developer.mozilla.org/docs/Web/API/DataTransfer/types) property returns a frozen array of [`DOMString`](https://developer.mozilla.org/docs/Web/API/DOMString)s as per spec, rather than a [`DOMStringList`](https://developer.mozilla.org/docs/Web/API/DOMStringList).

### Internet Explorer

- **支持版本**: 8

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransfer是否支持
function isDataTransferSupported() {
    return 'DataTransfer' in window || typeof DataTransfer !== 'undefined';
}

if (isDataTransferSupported()) {
    console.log('DataTransfer 支持');
    // 使用DataTransfer
} else {
    console.log('DataTransfer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransfer polyfill
if (!window.DataTransfer) {
    // 在这里添加polyfill实现
    console.log('加载DataTransfer polyfill');
}
```

