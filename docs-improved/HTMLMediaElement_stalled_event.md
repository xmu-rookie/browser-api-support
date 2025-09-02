# HTMLMediaElement.stalled_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.stalled_event`
- **MDN文档**: [HTMLMediaElement.stalled_event](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/stalled_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-stalled,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onstalled)
- **标签**: `web-features:video`
- **描述**: `stalled` event

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.stalled_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.stalled_event API');
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
// 检查HTMLMediaElement.stalled_event是否支持
function isHTMLMediaElementStalled_eventSupported() {
    return 'stalled_event' in htmlmediaelement && typeof htmlmediaelement.stalled_event === 'function';
}

if (isHTMLMediaElementStalled_eventSupported()) {
    console.log('HTMLMediaElement.stalled_event 支持');
    // 使用HTMLMediaElement.stalled_event
} else {
    console.log('HTMLMediaElement.stalled_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.stalled_event polyfill
if (!htmlmediaelement.stalled_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.stalled_event polyfill');
}
```

