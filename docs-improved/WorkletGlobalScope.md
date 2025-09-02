# WorkletGlobalScope API 兼容性数据

## 基本信息

- **API名称**: `WorkletGlobalScope`
- **MDN文档**: [WorkletGlobalScope](https://developer.mozilla.org/docs/Web/API/WorkletGlobalScope)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/worklets.html#workletglobalscope)
- **标签**: `web-features:audio-worklet`

## 使用示例

### 基本用法

```javascript
// WorkletGlobalScope 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkletGlobalScope API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 76 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Firefox

- **支持版本**: 76

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkletGlobalScope是否支持
function isWorkletGlobalScopeSupported() {
    return 'WorkletGlobalScope' in window || typeof WorkletGlobalScope !== 'undefined';
}

if (isWorkletGlobalScopeSupported()) {
    console.log('WorkletGlobalScope 支持');
    // 使用WorkletGlobalScope
} else {
    console.log('WorkletGlobalScope 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkletGlobalScope polyfill
if (!window.WorkletGlobalScope) {
    // 在这里添加polyfill实现
    console.log('加载WorkletGlobalScope polyfill');
}
```

