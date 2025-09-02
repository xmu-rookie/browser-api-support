# Window.pageswap_event API 兼容性数据

## 基本信息

- **API名称**: `Window.pageswap_event`
- **MDN文档**: [Window.pageswap_event](https://developer.mozilla.org/docs/Web/API/Window/pageswap_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-pageswap)
- **标签**: `web-features:view-transitions`
- **描述**: `pageswap` event

## 使用示例

### 基本用法

```javascript
// Window.pageswap_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.pageswap_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
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

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.pageswap_event是否支持
function isWindowPageswap_eventSupported() {
    return 'pageswap_event' in window && typeof window.pageswap_event === 'function';
}

if (isWindowPageswap_eventSupported()) {
    console.log('Window.pageswap_event 支持');
    // 使用Window.pageswap_event
} else {
    console.log('Window.pageswap_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.pageswap_event polyfill
if (!window.pageswap_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.pageswap_event polyfill');
}
```

