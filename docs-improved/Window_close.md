# Window.close API 兼容性数据

## 基本信息

- **API名称**: `Window.close`
- **MDN文档**: [Window.close](https://developer.mozilla.org/docs/Web/API/Window/close)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-window-close-dev)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 | Before Edge 79, scripts can close windows that weren't opened by the same script. |
| Firefox | 1 | Before Firefox 46, scripts can close windows that weren't opened by the same script. |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
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
- **注意事项**:
  - Before Edge 79, scripts can close windows that weren't opened by the same script.

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 46, scripts can close windows that weren't opened by the same script.

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.close是否支持
function isWindowCloseSupported() {
    return 'close' in window && typeof window.close === 'function';
}

if (isWindowCloseSupported()) {
    console.log('Window.close 支持');
    // 使用Window.close
} else {
    console.log('Window.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.close polyfill
if (!window.close) {
    // 在这里添加polyfill实现
    console.log('加载Window.close polyfill');
}
```

