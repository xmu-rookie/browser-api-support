# SharedWorker API 兼容性数据

## 基本信息

- **API名称**: `SharedWorker`
- **MDN文档**: [SharedWorker](https://developer.mozilla.org/docs/Web/API/SharedWorker)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#shared-workers-and-the-sharedworker-interface)
- **标签**: `web-features:shared-workers`

## 使用示例

### 基本用法

```javascript
// SharedWorker 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedWorker API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | ❌ 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 29 |  |
| Firefox Android | 33 |  |
| oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 未知 |  |
| Safari iOS | 未知 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 29

### Firefox Android

- **支持版本**: 33

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11
- **移除版本**: 14

### Safari


### Safari iOS


### Samsung Internet

- **支持版本**: 4.0
- **移除版本**: 5.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedWorker是否支持
function isSharedWorkerSupported() {
    return 'SharedWorker' in window || typeof SharedWorker !== 'undefined';
}

if (isSharedWorkerSupported()) {
    console.log('SharedWorker 支持');
    // 使用SharedWorker
} else {
    console.log('SharedWorker 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedWorker polyfill
if (!window.SharedWorker) {
    // 在这里添加polyfill实现
    console.log('加载SharedWorker polyfill');
}
```

