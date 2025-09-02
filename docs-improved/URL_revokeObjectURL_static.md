# URL.revokeObjectURL_static API 兼容性数据

## 基本信息

- **API名称**: `URL.revokeObjectURL_static`
- **MDN文档**: [URL.revokeObjectURL_static](https://developer.mozilla.org/docs/Web/API/URL/revokeObjectURL_static)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dfn-revokeObjectURL)
- **标签**: `web-features:file`
- **描述**: `revokeObjectURL()` static method

## 使用示例

### 基本用法

```javascript
// URL.revokeObjectURL_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL.revokeObjectURL_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.9 |  |
| Edge | 12 |  |
| Firefox | 19 | `revokeObjectURL()` is no longer available within the context of a `ServiceWorker`. |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 16.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 19

### Deno

- **支持版本**: 1.9

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 19
- **注意事项**:
  - `revokeObjectURL()` is no longer available within the context of a `ServiceWorker`.

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 16.7.0

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查URL.revokeObjectURL_static是否支持
function isURLRevokeObjectURL_staticSupported() {
    return 'revokeObjectURL_static' in url && typeof url.revokeObjectURL_static === 'function';
}

if (isURLRevokeObjectURL_staticSupported()) {
    console.log('URL.revokeObjectURL_static 支持');
    // 使用URL.revokeObjectURL_static
} else {
    console.log('URL.revokeObjectURL_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URL.revokeObjectURL_static polyfill
if (!url.revokeObjectURL_static) {
    // 在这里添加polyfill实现
    console.log('加载URL.revokeObjectURL_static polyfill');
}
```

