# FileReader.readAsArrayBuffer API 兼容性数据

## 基本信息

- **API名称**: `FileReader.readAsArrayBuffer`
- **MDN文档**: [FileReader.readAsArrayBuffer](https://developer.mozilla.org/docs/Web/API/FileReader/readAsArrayBuffer)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#readAsArrayBuffer)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// FileReader.readAsArrayBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.readAsArrayBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 32 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Deno

- **支持版本**: 1.3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.6

### Firefox Android

- **支持版本**: 32

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileReader.readAsArrayBuffer是否支持
function isFileReaderReadAsArrayBufferSupported() {
    return 'readAsArrayBuffer' in filereader && typeof filereader.readAsArrayBuffer === 'function';
}

if (isFileReaderReadAsArrayBufferSupported()) {
    console.log('FileReader.readAsArrayBuffer 支持');
    // 使用FileReader.readAsArrayBuffer
} else {
    console.log('FileReader.readAsArrayBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReader.readAsArrayBuffer polyfill
if (!filereader.readAsArrayBuffer) {
    // 在这里添加polyfill实现
    console.log('加载FileReader.readAsArrayBuffer polyfill');
}
```

