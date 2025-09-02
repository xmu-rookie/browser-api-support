# SharedWorkerGlobalScope.close API 兼容性数据

## 基本信息

- **API名称**: `SharedWorkerGlobalScope.close`
- **MDN文档**: [SharedWorkerGlobalScope.close](https://developer.mozilla.org/docs/Web/API/SharedWorkerGlobalScope/close)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-sharedworkerglobalscope-close-dev)
- **标签**: `web-features:shared-workers`

## 使用示例

### 基本用法

```javascript
// SharedWorkerGlobalScope.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedWorkerGlobalScope.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 29 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 16 |  |
| Safari iOS | 16 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 29

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 16
- **支持版本**: 5
- **移除版本**: 7

### Safari iOS

- **支持版本**: 16
- **支持版本**: 5
- **移除版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedWorkerGlobalScope.close是否支持
function isSharedWorkerGlobalScopeCloseSupported() {
    return 'close' in sharedworkerglobalscope && typeof sharedworkerglobalscope.close === 'function';
}

if (isSharedWorkerGlobalScopeCloseSupported()) {
    console.log('SharedWorkerGlobalScope.close 支持');
    // 使用SharedWorkerGlobalScope.close
} else {
    console.log('SharedWorkerGlobalScope.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedWorkerGlobalScope.close polyfill
if (!sharedworkerglobalscope.close) {
    // 在这里添加polyfill实现
    console.log('加载SharedWorkerGlobalScope.close polyfill');
}
```

