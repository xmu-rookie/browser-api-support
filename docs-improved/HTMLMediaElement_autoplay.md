# HTMLMediaElement.autoplay API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.autoplay`
- **MDN文档**: [HTMLMediaElement.autoplay](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/autoplay)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-autoplay)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.autoplay 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.autoplay API');
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

- **支持版本**: 3.5

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
// 检查HTMLMediaElement.autoplay是否支持
function isHTMLMediaElementAutoplaySupported() {
    return 'autoplay' in htmlmediaelement && typeof htmlmediaelement.autoplay === 'function';
}

if (isHTMLMediaElementAutoplaySupported()) {
    console.log('HTMLMediaElement.autoplay 支持');
    // 使用HTMLMediaElement.autoplay
} else {
    console.log('HTMLMediaElement.autoplay 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.autoplay polyfill
if (!htmlmediaelement.autoplay) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.autoplay polyfill');
}
```

