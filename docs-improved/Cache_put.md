# Cache.put API 兼容性数据

## 基本信息

- **API名称**: `Cache.put`
- **MDN文档**: [Cache.put](https://developer.mozilla.org/docs/Web/API/Cache/put)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#cache-put)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Cache.put 使用示例
// 请查阅MDN文档了解具体用法
console.log('Cache.put API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 | Requires HTTPS from version 46. |
| Chrome Android | 同主版本 |  |
| Deno | 1.26 |  |
| Edge | 16 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 | Requires HTTPS from Samsung Internet 5.0. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43
- **注意事项**:
  - Requires HTTPS from version 46.

### Deno

- **支持版本**: 1.26

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 11.1

### Samsung Internet

- **支持版本**: 4.0
- **注意事项**:
  - Requires HTTPS from Samsung Internet 5.0.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Cache.put是否支持
function isCachePutSupported() {
    return 'put' in cache && typeof cache.put === 'function';
}

if (isCachePutSupported()) {
    console.log('Cache.put 支持');
    // 使用Cache.put
} else {
    console.log('Cache.put 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Cache.put polyfill
if (!cache.put) {
    // 在这里添加polyfill实现
    console.log('加载Cache.put polyfill');
}
```

