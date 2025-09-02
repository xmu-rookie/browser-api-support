# HTMLMediaElement.preservesPitch API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.preservesPitch`
- **MDN文档**: [HTMLMediaElement.preservesPitch](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/preservesPitch)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-preservespitch-dev)
- **标签**: `web-features:preserves-pitch`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.preservesPitch 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.preservesPitch API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 101 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Firefox

- **支持版本**: 101

### Safari

- **支持版本**: 17.2
- **支持版本**: 4
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.preservesPitch是否支持
function isHTMLMediaElementPreservesPitchSupported() {
    return 'preservesPitch' in htmlmediaelement && typeof htmlmediaelement.preservesPitch === 'function';
}

if (isHTMLMediaElementPreservesPitchSupported()) {
    console.log('HTMLMediaElement.preservesPitch 支持');
    // 使用HTMLMediaElement.preservesPitch
} else {
    console.log('HTMLMediaElement.preservesPitch 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.preservesPitch polyfill
if (!htmlmediaelement.preservesPitch) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.preservesPitch polyfill');
}
```

