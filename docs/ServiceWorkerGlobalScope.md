# ServiceWorkerGlobalScope API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope`
- **MDN文档**: [ServiceWorkerGlobalScope](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#serviceworkerglobalscope-interface)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 24 |  |
| Opera Android | 24 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | ❌ 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Opera

- **支持版本**: 24

### Opera Android

- **支持版本**: 24

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerGlobalScope是否支持
function isServiceWorkerGlobalScopeSupported() {
    return 'ServiceWorkerGlobalScope' in window || typeof ServiceWorkerGlobalScope !== 'undefined';
}

if (isServiceWorkerGlobalScopeSupported()) {
    console.log('ServiceWorkerGlobalScope 支持');
    // 使用ServiceWorkerGlobalScope
} else {
    console.log('ServiceWorkerGlobalScope 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope polyfill
if (!window.ServiceWorkerGlobalScope) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope polyfill');
}
```

