# CustomEvent.worker_support API 兼容性数据

## 基本信息

- **API名称**: `CustomEvent.worker_support`
- **标签**: `web-features:events`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// CustomEvent.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomEvent.worker_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 48 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 19.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 48

### Node.js

- **支持版本**: 19.0.0

### Safari

- **支持版本**: 12

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomEvent.worker_support是否支持
function isCustomEventWorker_supportSupported() {
    return 'worker_support' in customevent && typeof customevent.worker_support === 'function';
}

if (isCustomEventWorker_supportSupported()) {
    console.log('CustomEvent.worker_support 支持');
    // 使用CustomEvent.worker_support
} else {
    console.log('CustomEvent.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomEvent.worker_support polyfill
if (!customevent.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载CustomEvent.worker_support polyfill');
}
```

