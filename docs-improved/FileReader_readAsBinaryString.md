# FileReader.readAsBinaryString API 兼容性数据

## 基本信息

- **API名称**: `FileReader.readAsBinaryString`
- **MDN文档**: [FileReader.readAsBinaryString](https://developer.mozilla.org/docs/Web/API/FileReader/readAsBinaryString)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#readAsBinaryString)

## 使用示例

### 基本用法

```javascript
// FileReader.readAsBinaryString 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.readAsBinaryString API');
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
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
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

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查FileReader.readAsBinaryString是否支持
function isFileReaderReadAsBinaryStringSupported() {
    return 'readAsBinaryString' in filereader && typeof filereader.readAsBinaryString === 'function';
}

if (isFileReaderReadAsBinaryStringSupported()) {
    console.log('FileReader.readAsBinaryString 支持');
    // 使用FileReader.readAsBinaryString
} else {
    console.log('FileReader.readAsBinaryString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReader.readAsBinaryString polyfill
if (!filereader.readAsBinaryString) {
    // 在这里添加polyfill实现
    console.log('加载FileReader.readAsBinaryString polyfill');
}
```

