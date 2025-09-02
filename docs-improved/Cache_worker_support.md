# Cache.worker_support API 兼容性数据

## 基本信息

- **API名称**: `Cache.worker_support`
- **标签**: `web-features:service-workers`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// Cache.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('Cache.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 | Before version 43, only service workers are supported. From version 43, all worker types and the mai... |
| Chrome Android | 同主版本 |  |
| Deno | 1.26 |  |
| Edge | 16 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40
- **注意事项**:
  - Before version 43, only service workers are supported. From version 43, all worker types and the main thread are supported.

### Deno

- **支持版本**: 1.26

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### Samsung Internet

- **支持版本**: 4.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查Cache.worker_support是否支持
function isCacheWorker_supportSupported() {
    return 'worker_support' in cache && typeof cache.worker_support === 'function';
}

if (isCacheWorker_supportSupported()) {
    console.log('Cache.worker_support 支持');
    // 使用Cache.worker_support
} else {
    console.log('Cache.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Cache.worker_support polyfill
if (!cache.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载Cache.worker_support polyfill');
}
```

