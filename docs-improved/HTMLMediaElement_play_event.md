# HTMLMediaElement.play_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.play_event`
- **MDN文档**: [HTMLMediaElement.play_event](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/play_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-play,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onplay)
- **标签**: `web-features:video`
- **描述**: `play` event

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.play_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.play_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 3.1 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 3.1

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.play_event是否支持
function isHTMLMediaElementPlay_eventSupported() {
    return 'play_event' in htmlmediaelement && typeof htmlmediaelement.play_event === 'function';
}

if (isHTMLMediaElementPlay_eventSupported()) {
    console.log('HTMLMediaElement.play_event 支持');
    // 使用HTMLMediaElement.play_event
} else {
    console.log('HTMLMediaElement.play_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.play_event polyfill
if (!htmlmediaelement.play_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.play_event polyfill');
}
```

