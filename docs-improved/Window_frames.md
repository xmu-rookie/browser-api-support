# Window.frames API 兼容性数据

## 基本信息

- **API名称**: `Window.frames`
- **MDN文档**: [Window.frames](https://developer.mozilla.org/docs/Web/API/Window/frames)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-frames-dev)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.frames 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.frames API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
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
// 检查Window.frames是否支持
function isWindowFramesSupported() {
    return 'frames' in window && typeof window.frames === 'function';
}

if (isWindowFramesSupported()) {
    console.log('Window.frames 支持');
    // 使用Window.frames
} else {
    console.log('Window.frames 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.frames polyfill
if (!window.frames) {
    // 在这里添加polyfill实现
    console.log('加载Window.frames polyfill');
}
```

