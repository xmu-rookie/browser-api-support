# Window.closed API 兼容性数据

## 基本信息

- **API名称**: `Window.closed`
- **MDN文档**: [Window.closed](https://developer.mozilla.org/docs/Web/API/Window/closed)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-window-closed-dev)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.closed 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.closed API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.closed是否支持
function isWindowClosedSupported() {
    return 'closed' in window && typeof window.closed === 'function';
}

if (isWindowClosedSupported()) {
    console.log('Window.closed 支持');
    // 使用Window.closed
} else {
    console.log('Window.closed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.closed polyfill
if (!window.closed) {
    // 在这里添加polyfill实现
    console.log('加载Window.closed polyfill');
}
```

