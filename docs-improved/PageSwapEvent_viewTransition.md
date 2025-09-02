# PageSwapEvent.viewTransition API 兼容性数据

## 基本信息

- **API名称**: `PageSwapEvent.viewTransition`
- **MDN文档**: [PageSwapEvent.viewTransition](https://developer.mozilla.org/docs/Web/API/PageSwapEvent/viewTransition)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-pageswapevent-viewtransition)
- **标签**: `web-features:view-transitions`

## 使用示例

### 基本用法

```javascript
// PageSwapEvent.viewTransition 使用示例
// 请查阅MDN文档了解具体用法
console.log('PageSwapEvent.viewTransition API');
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
| Safari | 18.2 |  |
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

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查PageSwapEvent.viewTransition是否支持
function isPageSwapEventViewTransitionSupported() {
    return 'viewTransition' in pageswapevent && typeof pageswapevent.viewTransition === 'function';
}

if (isPageSwapEventViewTransitionSupported()) {
    console.log('PageSwapEvent.viewTransition 支持');
    // 使用PageSwapEvent.viewTransition
} else {
    console.log('PageSwapEvent.viewTransition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PageSwapEvent.viewTransition polyfill
if (!pageswapevent.viewTransition) {
    // 在这里添加polyfill实现
    console.log('加载PageSwapEvent.viewTransition polyfill');
}
```

