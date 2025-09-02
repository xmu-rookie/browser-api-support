# Window.devicePixelRatio API 兼容性数据

## 基本信息

- **API名称**: `Window.devicePixelRatio`
- **MDN文档**: [Window.devicePixelRatio](https://developer.mozilla.org/docs/Web/API/Window/devicePixelRatio)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-window-devicepixelratio)
- **标签**: `web-features:devicepixelratio`

## 使用示例

### 基本用法

```javascript
// Window.devicePixelRatio 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.devicePixelRatio API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 18 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 11.1 |  |
| Opera Android | 11.1 |  |
| Safari | 3 | In Safari, the `devicePixelRatio` does not change when the page is zoomed. See [bug 124862](https://... |
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

- **支持版本**: 18

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 11.1

### Opera Android

- **支持版本**: 11.1

### Safari

- **支持版本**: 3
- **部分实现**: 是
- **注意事项**:
  - In Safari, the `devicePixelRatio` does not change when the page is zoomed. See [bug 124862](https://webkit.org/b/124862).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.devicePixelRatio是否支持
function isWindowDevicePixelRatioSupported() {
    return 'devicePixelRatio' in window && typeof window.devicePixelRatio === 'function';
}

if (isWindowDevicePixelRatioSupported()) {
    console.log('Window.devicePixelRatio 支持');
    // 使用Window.devicePixelRatio
} else {
    console.log('Window.devicePixelRatio 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.devicePixelRatio polyfill
if (!window.devicePixelRatio) {
    // 在这里添加polyfill实现
    console.log('加载Window.devicePixelRatio polyfill');
}
```

