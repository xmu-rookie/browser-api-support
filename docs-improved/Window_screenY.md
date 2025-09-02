# Window.screenY API 兼容性数据

## 基本信息

- **API名称**: `Window.screenY`
- **MDN文档**: [Window.screenY](https://developer.mozilla.org/docs/Web/API/Window/screenY)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-window-screeny)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.screenY 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.screenY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 28, Gecko was using device pixels instead of CSS pixels; in other words, it was assum... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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
  - Before Firefox 28, Gecko was using device pixels instead of CSS pixels; in other words, it was assuming a value of `screenPixelsPerCSSPixel` of 1 for any device.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.screenY是否支持
function isWindowScreenYSupported() {
    return 'screenY' in window && typeof window.screenY === 'function';
}

if (isWindowScreenYSupported()) {
    console.log('Window.screenY 支持');
    // 使用Window.screenY
} else {
    console.log('Window.screenY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.screenY polyfill
if (!window.screenY) {
    // 在这里添加polyfill实现
    console.log('加载Window.screenY polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **relative-multi-screen**: Relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

