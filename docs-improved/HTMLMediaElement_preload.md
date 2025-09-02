# HTMLMediaElement.preload API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.preload`
- **MDN文档**: [HTMLMediaElement.preload](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preload)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-preload)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.preload 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.preload API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.preload是否支持
function isHTMLMediaElementPreloadSupported() {
    return 'preload' in htmlmediaelement && typeof htmlmediaelement.preload === 'function';
}

if (isHTMLMediaElementPreloadSupported()) {
    console.log('HTMLMediaElement.preload 支持');
    // 使用HTMLMediaElement.preload
} else {
    console.log('HTMLMediaElement.preload 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.preload polyfill
if (!htmlmediaelement.preload) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.preload polyfill');
}
```

