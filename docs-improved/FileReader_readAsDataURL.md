# FileReader.readAsDataURL API 兼容性数据

## 基本信息

- **API名称**: `FileReader.readAsDataURL`
- **MDN文档**: [FileReader.readAsDataURL](https://developer.mozilla.org/docs/Web/API/FileReader/readAsDataURL)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#readAsDataURL)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// FileReader.readAsDataURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.readAsDataURL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 32 | Using the camera in Android 8.x raises an exception. See [bug 1511083](https://bugzil.la/1511083). |
| Internet Explorer | 10 |  |
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
- **注意事项**:
  - Using the camera in Android 8.x raises an exception. See [bug 1511083](https://bugzil.la/1511083).

### Internet Explorer

- **支持版本**: 10

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
// 检查FileReader.readAsDataURL是否支持
function isFileReaderReadAsDataURLSupported() {
    return 'readAsDataURL' in filereader && typeof filereader.readAsDataURL === 'function';
}

if (isFileReaderReadAsDataURLSupported()) {
    console.log('FileReader.readAsDataURL 支持');
    // 使用FileReader.readAsDataURL
} else {
    console.log('FileReader.readAsDataURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FileReader.readAsDataURL polyfill
if (!filereader.readAsDataURL) {
    // 在这里添加polyfill实现
    console.log('加载FileReader.readAsDataURL polyfill');
}
```

