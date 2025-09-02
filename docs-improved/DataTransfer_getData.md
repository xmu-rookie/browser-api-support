# DataTransfer.getData API 兼容性数据

## 基本信息

- **API名称**: `DataTransfer.getData`
- **MDN文档**: [DataTransfer.getData](https://developer.mozilla.org/docs/Web/API/DataTransfer/getData)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransfer-getdata-dev)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransfer.getData 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransfer.getData API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
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

- **支持版本**: 8

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransfer.getData是否支持
function isDataTransferGetDataSupported() {
    return 'getData' in datatransfer && typeof datatransfer.getData === 'function';
}

if (isDataTransferGetDataSupported()) {
    console.log('DataTransfer.getData 支持');
    // 使用DataTransfer.getData
} else {
    console.log('DataTransfer.getData 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransfer.getData polyfill
if (!datatransfer.getData) {
    // 在这里添加polyfill实现
    console.log('加载DataTransfer.getData polyfill');
}
```

