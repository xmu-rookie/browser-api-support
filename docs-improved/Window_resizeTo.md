# Window.resizeTo API 兼容性数据

## 基本信息

- **API名称**: `Window.resizeTo`
- **MDN文档**: [Window.resizeTo](https://developer.mozilla.org/docs/Web/API/Window/resizeTo)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-window-resizeto)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.resizeTo 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.resizeTo API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 | Since Firefox 7, it's no longer possible for a web site to change the default size of a window in a ... |
| Firefox Android | 4 |  |
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

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Since Firefox 7, it's no longer possible for a web site to change the default size of a window in a browser if the window wasn't created by `window.open` or contains more than one tab. [See here](https://bugzil.la/565541#c24) for more details.

### Firefox Android

- **支持版本**: 4

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
// 检查Window.resizeTo是否支持
function isWindowResizeToSupported() {
    return 'resizeTo' in window && typeof window.resizeTo === 'function';
}

if (isWindowResizeToSupported()) {
    console.log('Window.resizeTo 支持');
    // 使用Window.resizeTo
} else {
    console.log('Window.resizeTo 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.resizeTo polyfill
if (!window.resizeTo) {
    // 在这里添加polyfill实现
    console.log('加载Window.resizeTo polyfill');
}
```

