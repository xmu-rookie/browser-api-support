# DecompressionStream API 兼容性数据

## 基本信息

- **API名称**: `DecompressionStream`
- **MDN文档**: [DecompressionStream](https://developer.mozilla.org/docs/Web/API/DecompressionStream)
- **规范文档**: [查看规范](https://compression.spec.whatwg.org/#decompression-stream)
- **标签**: `web-features:compression-streams`

## 使用示例

### 基本用法

```javascript
// DecompressionStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('DecompressionStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.19 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### deno

- **支持版本**: 1.19

### Firefox

- **支持版本**: 113

### Node.js


### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DecompressionStream是否支持
function isDecompressionStreamSupported() {
    return 'DecompressionStream' in window || typeof DecompressionStream !== 'undefined';
}

if (isDecompressionStreamSupported()) {
    console.log('DecompressionStream 支持');
    // 使用DecompressionStream
} else {
    console.log('DecompressionStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DecompressionStream polyfill
if (!window.DecompressionStream) {
    // 在这里添加polyfill实现
    console.log('加载DecompressionStream polyfill');
}
```

