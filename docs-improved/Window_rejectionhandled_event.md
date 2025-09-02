# Window.rejectionhandled_event API 兼容性数据

## 基本信息

- **API名称**: `Window.rejectionhandled_event`
- **MDN文档**: [Window.rejectionhandled_event](https://developer.mozilla.org/docs/Web/API/Window/rejectionhandled_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#unhandled-promise-rejections,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onrejectionhandled)
- **描述**: `rejectionhandled` event

## 使用示例

### 基本用法

```javascript
// Window.rejectionhandled_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.rejectionhandled_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.40 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 11.3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Deno

- **支持版本**: 1.40

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 11

### Safari iOS

- **支持版本**: 11.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.rejectionhandled_event是否支持
function isWindowRejectionhandled_eventSupported() {
    return 'rejectionhandled_event' in window && typeof window.rejectionhandled_event === 'function';
}

if (isWindowRejectionhandled_eventSupported()) {
    console.log('Window.rejectionhandled_event 支持');
    // 使用Window.rejectionhandled_event
} else {
    console.log('Window.rejectionhandled_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.rejectionhandled_event polyfill
if (!window.rejectionhandled_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.rejectionhandled_event polyfill');
}
```

