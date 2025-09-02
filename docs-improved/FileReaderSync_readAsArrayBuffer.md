# FileReaderSync.readAsArrayBuffer API 兼容性数据

## 基本信息

- **API名称**: `FileReaderSync.readAsArrayBuffer`
- **MDN文档**: [FileReaderSync.readAsArrayBuffer](https://developer.mozilla.org/docs/Web/API/FileReaderSync/readAsArrayBuffer)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#readAsArrayBufferSyncSection)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// FileReaderSync.readAsArrayBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReaderSync.readAsArrayBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 8 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
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

- **支持版本**: 9

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 8

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileReaderSync.readAsArrayBuffer是否支持
function isFileReaderSyncReadAsArrayBufferSupported() {
    return 'readAsArrayBuffer' in filereadersync && typeof filereadersync.readAsArrayBuffer === 'function';
}

if (isFileReaderSyncReadAsArrayBufferSupported()) {
    console.log('FileReaderSync.readAsArrayBuffer 支持');
    // 使用FileReaderSync.readAsArrayBuffer
} else {
    console.log('FileReaderSync.readAsArrayBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReaderSync.readAsArrayBuffer polyfill
if (!filereadersync.readAsArrayBuffer) {
    // 在这里添加polyfill实现
    console.log('加载FileReaderSync.readAsArrayBuffer polyfill');
}
```

