# File API 兼容性数据

## 基本信息

- **API名称**: `File`
- **MDN文档**: [File](https://developer.mozilla.org/docs/Web/API/File)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#file-section)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// File 使用示例
// 请查阅MDN文档了解具体用法
console.log('File API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 7 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 20.0.0 | Before 23.0.0, `File` instance cannot be cloned. |
| Oculus | 同主版本 |  |
| Opera | 11.5 |  |
| Opera Android | 11.5 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 13

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 7
- **支持版本**: 3
- **移除版本**: 7
- **注意事项**:
  - Non-standard implementation.

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 20.0.0
- **注意事项**:
  - Before 23.0.0, `File` instance cannot be cloned.
- **支持版本**: 19.2.0
- **移除版本**: 20.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `buffer` module.
- **支持版本**: 18.13.0
- **移除版本**: 19.0.0
- **部分实现**: 是
- **注意事项**:
  - Available as a part of the `buffer` module.

### Opera

- **支持版本**: 11.5

### Opera Android

- **支持版本**: 11.5

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查File是否支持
function isFileSupported() {
    return 'File' in window || typeof File !== 'undefined';
}

if (isFileSupported()) {
    console.log('File 支持');
    // 使用File
} else {
    console.log('File 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// File polyfill
if (!window.File) {
    // 在这里添加polyfill实现
    console.log('加载File polyfill');
}
```

