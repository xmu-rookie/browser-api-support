# Cache.addAll API 兼容性数据

## 基本信息

- **API名称**: `Cache.addAll`
- **MDN文档**: [Cache.addAll](https://developer.mozilla.org/docs/Web/API/Cache/addAll)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#cache-addAll)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Cache.addAll 使用示例
// 请查阅MDN文档了解具体用法
console.log('Cache.addAll API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 46 | Requires HTTPS. |
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

- **支持版本**: 46
- **注意事项**:
  - Requires HTTPS.

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
// 检查Cache.addAll是否支持
function isCacheAddAllSupported() {
    return 'addAll' in cache && typeof cache.addAll === 'function';
}

if (isCacheAddAllSupported()) {
    console.log('Cache.addAll 支持');
    // 使用Cache.addAll
} else {
    console.log('Cache.addAll 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Cache.addAll polyfill
if (!cache.addAll) {
    // 在这里添加polyfill实现
    console.log('加载Cache.addAll polyfill');
}
```

