# HTMLCanvasElement.contextlost_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.contextlost_event`
- **MDN文档**: [HTMLCanvasElement.contextlost_event](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/contextlost_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-contextlost)
- **标签**: `web-features:canvas-context-lost`
- **描述**: `contextlost` event

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.contextlost_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.contextlost_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 125

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.contextlost_event是否支持
function isHTMLCanvasElementContextlost_eventSupported() {
    return 'contextlost_event' in htmlcanvaselement && typeof htmlcanvaselement.contextlost_event === 'function';
}

if (isHTMLCanvasElementContextlost_eventSupported()) {
    console.log('HTMLCanvasElement.contextlost_event 支持');
    // 使用HTMLCanvasElement.contextlost_event
} else {
    console.log('HTMLCanvasElement.contextlost_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.contextlost_event polyfill
if (!htmlcanvaselement.contextlost_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.contextlost_event polyfill');
}
```

