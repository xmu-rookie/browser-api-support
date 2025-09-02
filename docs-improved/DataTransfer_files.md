# DataTransfer.files API 兼容性数据

## 基本信息

- **API名称**: `DataTransfer.files`
- **MDN文档**: [DataTransfer.files](https://developer.mozilla.org/docs/Web/API/DataTransfer/files)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#dom-datatransfer-files-dev)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DataTransfer.files 使用示例
// 请查阅MDN文档了解具体用法
console.log('DataTransfer.files API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
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

- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DataTransfer.files是否支持
function isDataTransferFilesSupported() {
    return 'files' in datatransfer && typeof datatransfer.files === 'function';
}

if (isDataTransferFilesSupported()) {
    console.log('DataTransfer.files 支持');
    // 使用DataTransfer.files
} else {
    console.log('DataTransfer.files 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DataTransfer.files polyfill
if (!datatransfer.files) {
    // 在这里添加polyfill实现
    console.log('加载DataTransfer.files polyfill');
}
```

