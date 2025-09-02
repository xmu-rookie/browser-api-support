# DataTransfer.types API 兼容性数据

## 基本信息

- **API名称**: `DataTransfer.types`
- **MDN文档**: [DataTransfer.types](https://developer.mozilla.org/docs/Web/API/DataTransfer/types)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransfer-types-dev)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransfer.types 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransfer.types API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | The property returns a [`DOMStringList`](https://developer.mozilla.org/docs/Web/API/DOMStringList).;... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | As of Opera 12, `Text` is returned instead of `text/plain` |
| Opera Android | ≤12.1 |  |
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

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - The property returns a [`DOMStringList`](https://developer.mozilla.org/docs/Web/API/DOMStringList).
  - `Text` is returned instead of `text/plain`

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - As of Opera 12, `Text` is returned instead of `text/plain`

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

