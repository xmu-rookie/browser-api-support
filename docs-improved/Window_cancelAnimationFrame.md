# Window.cancelAnimationFrame API 兼容性数据

## 基本信息

- **API名称**: `Window.cancelAnimationFrame`
- **MDN文档**: [Window.cancelAnimationFrame](https://developer.mozilla.org/docs/Web/API/Window/cancelAnimationFrame)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animationframeprovider-cancelanimationframe)
- **标签**: `web-features:request-animation-frame`

## 使用示例

### 基本用法

```javascript
// Window.cancelAnimationFrame 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.cancelAnimationFrame API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 23 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 23
- **支持版本**: 11
- **移除版本**: 23
- **前缀**: moz

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 7
- **支持版本**: 6
- **移除版本**: 7
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.cancelAnimationFrame是否支持
function isWindowCancelAnimationFrameSupported() {
    return 'cancelAnimationFrame' in window && typeof window.cancelAnimationFrame === 'function';
}

if (isWindowCancelAnimationFrameSupported()) {
    console.log('Window.cancelAnimationFrame 支持');
    // 使用Window.cancelAnimationFrame
} else {
    console.log('Window.cancelAnimationFrame 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.cancelAnimationFrame polyfill
if (!window.cancelAnimationFrame) {
    // 在这里添加polyfill实现
    console.log('加载Window.cancelAnimationFrame polyfill');
}
```

