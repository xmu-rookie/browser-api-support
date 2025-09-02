# Window.focus API 兼容性数据

## 基本信息

- **API名称**: `Window.focus`
- **MDN文档**: [Window.focus](https://developer.mozilla.org/docs/Web/API/Window/focus)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-window-focus-dev)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.focus 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.focus API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Starting in Chrome 66, opening a popup in fullscreen mode and calling this function will end fullscr... |
| Chrome Android | 18 |  |
| Deno | 不支持 |  |
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
- **注意事项**:
  - Starting in Chrome 66, opening a popup in fullscreen mode and calling this function will end fullscreen mode.

### Chrome Android

- **支持版本**: 18

### Deno

- **支持版本**: 不支持

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
// 检查Window.focus是否支持
function isWindowFocusSupported() {
    return 'focus' in window && typeof window.focus === 'function';
}

if (isWindowFocusSupported()) {
    console.log('Window.focus 支持');
    // 使用Window.focus
} else {
    console.log('Window.focus 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.focus polyfill
if (!window.focus) {
    // 在这里添加polyfill实现
    console.log('加载Window.focus polyfill');
}
```

