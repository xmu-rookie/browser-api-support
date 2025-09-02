# HTMLMediaElement.progress_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.progress_event`
- **MDN文档**: [HTMLMediaElement.progress_event](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/progress_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-progress,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onprogress)
- **标签**: `web-features:video`
- **描述**: `progress` event

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.progress_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.progress_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.progress_event是否支持
function isHTMLMediaElementProgress_eventSupported() {
    return 'progress_event' in htmlmediaelement && typeof htmlmediaelement.progress_event === 'function';
}

if (isHTMLMediaElementProgress_eventSupported()) {
    console.log('HTMLMediaElement.progress_event 支持');
    // 使用HTMLMediaElement.progress_event
} else {
    console.log('HTMLMediaElement.progress_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.progress_event polyfill
if (!htmlmediaelement.progress_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.progress_event polyfill');
}
```

