# SharedStorageWorkletGlobalScope API 兼容性数据

## 基本信息

- **API名称**: `SharedStorageWorkletGlobalScope`
- **MDN文档**: [SharedStorageWorkletGlobalScope](https://developer.mozilla.org/docs/Web/API/SharedStorageWorkletGlobalScope)
- **规范文档**: [查看规范](https://wicg.github.io/shared-storage/#sharedstorageworkletglobalscope)
- **标签**: `web-features:shared-storage`

## 使用示例

### 基本用法

```javascript
// SharedStorageWorkletGlobalScope 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedStorageWorkletGlobalScope API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 126

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedStorageWorkletGlobalScope是否支持
function isSharedStorageWorkletGlobalScopeSupported() {
    return 'SharedStorageWorkletGlobalScope' in window || typeof SharedStorageWorkletGlobalScope !== 'undefined';
}

if (isSharedStorageWorkletGlobalScopeSupported()) {
    console.log('SharedStorageWorkletGlobalScope 支持');
    // 使用SharedStorageWorkletGlobalScope
} else {
    console.log('SharedStorageWorkletGlobalScope 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedStorageWorkletGlobalScope polyfill
if (!window.SharedStorageWorkletGlobalScope) {
    // 在这里添加polyfill实现
    console.log('加载SharedStorageWorkletGlobalScope polyfill');
}
```

