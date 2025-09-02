# PageSwapEvent.activation API 兼容性数据

## 基本信息

- **API名称**: `PageSwapEvent.activation`
- **MDN文档**: [PageSwapEvent.activation](https://developer.mozilla.org/docs/Web/API/PageSwapEvent/activation)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-pageswapevent-activation)
- **标签**: `web-features:view-transitions`

## 使用示例

### 基本用法

```javascript
// PageSwapEvent.activation 使用示例
// 请查阅MDN文档了解具体用法
console.log('PageSwapEvent.activation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
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

- **支持版本**: 124

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查PageSwapEvent.activation是否支持
function isPageSwapEventActivationSupported() {
    return 'activation' in pageswapevent && typeof pageswapevent.activation === 'function';
}

if (isPageSwapEventActivationSupported()) {
    console.log('PageSwapEvent.activation 支持');
    // 使用PageSwapEvent.activation
} else {
    console.log('PageSwapEvent.activation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PageSwapEvent.activation polyfill
if (!pageswapevent.activation) {
    // 在这里添加polyfill实现
    console.log('加载PageSwapEvent.activation polyfill');
}
```

