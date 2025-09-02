# Storage.length API 兼容性数据

## 基本信息

- **API名称**: `Storage.length`
- **MDN文档**: [Storage.length](https://developer.mozilla.org/docs/Web/API/Storage/length)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-length-dev)
- **标签**: `web-features:localstorage`

## 使用示例

### 基本用法

```javascript
// Storage.length 使用示例
// 请查阅MDN文档了解具体用法
console.log('Storage.length API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.10 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 6 |  |
| Internet Explorer | 8 |  |
| Oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.10

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Firefox Android

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 8

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Storage.length是否支持
function isStorageLengthSupported() {
    return 'length' in storage && typeof storage.length === 'function';
}

if (isStorageLengthSupported()) {
    console.log('Storage.length 支持');
    // 使用Storage.length
} else {
    console.log('Storage.length 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Storage.length polyfill
if (!storage.length) {
    // 在这里添加polyfill实现
    console.log('加载Storage.length polyfill');
}
```

