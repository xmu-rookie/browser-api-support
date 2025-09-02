# Cache.match API 兼容性数据

## 基本信息

- **API名称**: `Cache.match`
- **MDN文档**: [Cache.match](https://developer.mozilla.org/docs/Web/API/Cache/match)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#cache-match)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Cache.match 使用示例
// 请查阅MDN文档了解具体用法
console.log('Cache.match API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.26 | Currently doesn't support query options |
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

- **支持版本**: 43

### Deno

- **支持版本**: 1.26
- **注意事项**:
  - Currently doesn't support query options

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 41

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Cache.match是否支持
function isCacheMatchSupported() {
    return 'match' in cache && typeof cache.match === 'function';
}

if (isCacheMatchSupported()) {
    console.log('Cache.match 支持');
    // 使用Cache.match
} else {
    console.log('Cache.match 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Cache.match polyfill
if (!cache.match) {
    // 在这里添加polyfill实现
    console.log('加载Cache.match polyfill');
}
```

