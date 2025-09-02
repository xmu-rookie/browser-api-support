# DataTransferItem.getAsString API 兼容性数据

## 基本信息

- **API名称**: `DataTransferItem.getAsString`
- **MDN文档**: [DataTransferItem.getAsString](https://developer.mozilla.org/docs/Web/API/DataTransferItem/getAsString)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransferitem-getasstring-dev)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransferItem.getAsString 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransferItem.getAsString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 11 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | ≤14 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 11

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 50

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransferItem.getAsString是否支持
function isDataTransferItemGetAsStringSupported() {
    return 'getAsString' in datatransferitem && typeof datatransferitem.getAsString === 'function';
}

if (isDataTransferItemGetAsStringSupported()) {
    console.log('DataTransferItem.getAsString 支持');
    // 使用DataTransferItem.getAsString
} else {
    console.log('DataTransferItem.getAsString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransferItem.getAsString polyfill
if (!datatransferitem.getAsString) {
    // 在这里添加polyfill实现
    console.log('加载DataTransferItem.getAsString polyfill');
}
```

