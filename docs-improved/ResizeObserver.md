# ResizeObserver API 兼容性数据

## 基本信息

- **API名称**: `ResizeObserver`
- **MDN文档**: [ResizeObserver](https://developer.mozilla.org/docs/Web/API/ResizeObserver)
- **规范文档**: [查看规范](https://drafts.csswg.org/resize-observer/#resize-observer-interface)
- **标签**: `web-features:resize-observer`

## 使用示例

### 基本用法

```javascript
// ResizeObserver 使用示例
// 请查阅MDN文档了解具体用法
console.log('ResizeObserver API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ResizeObserver是否支持
function isResizeObserverSupported() {
    return 'ResizeObserver' in window || typeof ResizeObserver !== 'undefined';
}

if (isResizeObserverSupported()) {
    console.log('ResizeObserver 支持');
    // 使用ResizeObserver
} else {
    console.log('ResizeObserver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ResizeObserver polyfill
if (!window.ResizeObserver) {
    // 在这里添加polyfill实现
    console.log('加载ResizeObserver polyfill');
}
```

