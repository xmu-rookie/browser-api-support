# CacheStorage.keys API 兼容性数据

## 基本信息

- **API名称**: `CacheStorage.keys`
- **MDN文档**: [CacheStorage.keys](https://developer.mozilla.org/docs/Web/API/CacheStorage/keys)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#cache-storage-keys)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// CacheStorage.keys 使用示例
// 请查阅MDN文档了解具体用法
console.log('CacheStorage.keys API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 16 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CacheStorage.keys是否支持
function isCacheStorageKeysSupported() {
    return 'keys' in cachestorage && typeof cachestorage.keys === 'function';
}

if (isCacheStorageKeysSupported()) {
    console.log('CacheStorage.keys 支持');
    // 使用CacheStorage.keys
} else {
    console.log('CacheStorage.keys 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CacheStorage.keys polyfill
if (!cachestorage.keys) {
    // 在这里添加polyfill实现
    console.log('加载CacheStorage.keys polyfill');
}
```

