# DedicatedWorkerGlobalScope.requestAnimationFrame API 兼容性数据

## 基本信息

- **API名称**: `DedicatedWorkerGlobalScope.requestAnimationFrame`
- **MDN文档**: [DedicatedWorkerGlobalScope.requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe)
- **标签**: `web-features:request-animation-frame-workers`

## 使用示例

### 基本用法

```javascript
// DedicatedWorkerGlobalScope.requestAnimationFrame 使用示例
// 请查阅MDN文档了解具体用法
console.log('DedicatedWorkerGlobalScope.requestAnimationFrame API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 | Not supported in nested Web Workers. See [bug 41483010](https://crbug.com/41483010). |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 99 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 67 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69
- **注意事项**:
  - Not supported in nested Web Workers. See [bug 41483010](https://crbug.com/41483010).

### Firefox

- **支持版本**: 99

### Safari

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 67

## 兼容性检查代码

### 特性检测

```javascript
// 检查DedicatedWorkerGlobalScope.requestAnimationFrame是否支持
function isDedicatedWorkerGlobalScopeRequestAnimationFrameSupported() {
    return 'requestAnimationFrame' in dedicatedworkerglobalscope && typeof dedicatedworkerglobalscope.requestAnimationFrame === 'function';
}

if (isDedicatedWorkerGlobalScopeRequestAnimationFrameSupported()) {
    console.log('DedicatedWorkerGlobalScope.requestAnimationFrame 支持');
    // 使用DedicatedWorkerGlobalScope.requestAnimationFrame
} else {
    console.log('DedicatedWorkerGlobalScope.requestAnimationFrame 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DedicatedWorkerGlobalScope.requestAnimationFrame polyfill
if (!dedicatedworkerglobalscope.requestAnimationFrame) {
    // 在这里添加polyfill实现
    console.log('加载DedicatedWorkerGlobalScope.requestAnimationFrame polyfill');
}
```

