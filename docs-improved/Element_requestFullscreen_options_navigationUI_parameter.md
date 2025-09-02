# Element.requestFullscreen.options_navigationUI_parameter API 兼容性数据

## 基本信息

- **API名称**: `Element.requestFullscreen.options_navigationUI_parameter`
- **规范文档**: [查看规范](https://fullscreen.spec.whatwg.org/#dom-fullscreenoptions-navigationui)
- **标签**: `web-features:fullscreen`
- **描述**: `options.navigationUI` parameter

## 使用示例

### 基本用法

```javascript
// Element.requestFullscreen.options_navigationUI_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.requestFullscreen.options_navigationUI_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 71 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 71

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.requestFullscreen.options_navigationUI_parameter是否支持
function isElementRequestFullscreenSupported() {
    return 'requestFullscreen' in element && typeof element.requestFullscreen === 'function';
}

if (isElementRequestFullscreenSupported()) {
    console.log('Element.requestFullscreen.options_navigationUI_parameter 支持');
    // 使用Element.requestFullscreen.options_navigationUI_parameter
} else {
    console.log('Element.requestFullscreen.options_navigationUI_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.requestFullscreen.options_navigationUI_parameter polyfill
if (!element.requestFullscreen) {
    // 在这里添加polyfill实现
    console.log('加载Element.requestFullscreen.options_navigationUI_parameter polyfill');
}
```

