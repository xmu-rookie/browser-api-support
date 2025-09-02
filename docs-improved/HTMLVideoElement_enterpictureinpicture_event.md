# HTMLVideoElement.enterpictureinpicture_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.enterpictureinpicture_event`
- **MDN文档**: [HTMLVideoElement.enterpictureinpicture_event](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
- **规范文档**: [查看规范](https://w3c.github.io/picture-in-picture/#eventdef-htmlvideoelement-enterpictureinpicture,https://w3c.github.io/picture-in-picture/#dom-htmlvideoelement-onenterpictureinpicture)
- **标签**: `web-features:picture-in-picture`
- **描述**: `enterpictureinpicture` event

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.enterpictureinpicture_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.enterpictureinpicture_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 105 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Chrome Android

- **支持版本**: 105

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 13.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLVideoElement.enterpictureinpicture_event是否支持
function isHTMLVideoElementEnterpictureinpicture_eventSupported() {
    return 'enterpictureinpicture_event' in htmlvideoelement && typeof htmlvideoelement.enterpictureinpicture_event === 'function';
}

if (isHTMLVideoElementEnterpictureinpicture_eventSupported()) {
    console.log('HTMLVideoElement.enterpictureinpicture_event 支持');
    // 使用HTMLVideoElement.enterpictureinpicture_event
} else {
    console.log('HTMLVideoElement.enterpictureinpicture_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.enterpictureinpicture_event polyfill
if (!htmlvideoelement.enterpictureinpicture_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.enterpictureinpicture_event polyfill');
}
```

