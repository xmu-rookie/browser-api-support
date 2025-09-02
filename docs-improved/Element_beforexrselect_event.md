# Element.beforexrselect_event API 兼容性数据

## 基本信息

- **API名称**: `Element.beforexrselect_event`
- **MDN文档**: [Element.beforexrselect_event](https://developer.mozilla.org/docs/Web/API/Element/beforexrselect_event)
- **规范文档**: [查看规范](https://immersive-web.github.io/dom-overlays/#onbeforexrselect)
- **标签**: `web-features:webxr-dom-overlays`
- **描述**: `beforexrselect` event

## 使用示例

### 基本用法

```javascript
// Element.beforexrselect_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.beforexrselect_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 83

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.beforexrselect_event是否支持
function isElementBeforexrselect_eventSupported() {
    return 'beforexrselect_event' in element && typeof element.beforexrselect_event === 'function';
}

if (isElementBeforexrselect_eventSupported()) {
    console.log('Element.beforexrselect_event 支持');
    // 使用Element.beforexrselect_event
} else {
    console.log('Element.beforexrselect_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.beforexrselect_event polyfill
if (!element.beforexrselect_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.beforexrselect_event polyfill');
}
```

