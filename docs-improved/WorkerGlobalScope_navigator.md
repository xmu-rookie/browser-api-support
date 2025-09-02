# WorkerGlobalScope.navigator API 兼容性数据

## 基本信息

- **API名称**: `WorkerGlobalScope.navigator`
- **MDN文档**: [WorkerGlobalScope.navigator](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/navigator)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-navigator-dev)
- **标签**: `web-features:dedicated-workers`

## 使用示例

### 基本用法

```javascript
// WorkerGlobalScope.navigator 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerGlobalScope.navigator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.8 |  |
| Edge | 17 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 11.5 |  |
| Opera Android | 同主版本 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.8

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 11.5

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerGlobalScope.navigator是否支持
function isWorkerGlobalScopeNavigatorSupported() {
    return 'navigator' in workerglobalscope && typeof workerglobalscope.navigator === 'function';
}

if (isWorkerGlobalScopeNavigatorSupported()) {
    console.log('WorkerGlobalScope.navigator 支持');
    // 使用WorkerGlobalScope.navigator
} else {
    console.log('WorkerGlobalScope.navigator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerGlobalScope.navigator polyfill
if (!workerglobalscope.navigator) {
    // 在这里添加polyfill实现
    console.log('加载WorkerGlobalScope.navigator polyfill');
}
```

