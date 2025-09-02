# File.File API 兼容性数据

## 基本信息

- **API名称**: `File.File`
- **MDN文档**: [File.File](https://developer.mozilla.org/docs/Web/API/File/File)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#file-constructor)
- **标签**: `web-features:file`
- **描述**: `File()` constructor

## 使用示例

### 基本用法

```javascript
// File.File 使用示例
// 请查阅MDN文档了解具体用法
console.log('File.File API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 28 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 19.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 28

### Node.js

- **支持版本**: 19.2.0
- **支持版本**: 18.13.0
- **移除版本**: 19.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查File.File是否支持
function isFileFileSupported() {
    return 'File' in file && typeof file.File === 'function';
}

if (isFileFileSupported()) {
    console.log('File.File 支持');
    // 使用File.File
} else {
    console.log('File.File 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// File.File polyfill
if (!file.File) {
    // 在这里添加polyfill实现
    console.log('加载File.File polyfill');
}
```

