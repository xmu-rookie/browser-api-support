# File.name API 兼容性数据

## 基本信息

- **API名称**: `File.name`
- **MDN文档**: [File.name](https://developer.mozilla.org/docs/Web/API/File/name)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dfn-name)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// File.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('File.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 19.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 8 |  |
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

- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 19.2.0
- **支持版本**: 18.13.0
- **移除版本**: 19.0.0

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查File.name是否支持
function isFileNameSupported() {
    return 'name' in file && typeof file.name === 'function';
}

if (isFileNameSupported()) {
    console.log('File.name 支持');
    // 使用File.name
} else {
    console.log('File.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// File.name polyfill
if (!file.name) {
    // 在这里添加polyfill实现
    console.log('加载File.name polyfill');
}
```

