# HTMLMediaElement.srcObject API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.srcObject`
- **MDN文档**: [HTMLMediaElement.srcObject](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/srcObject)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-srcobject-dev,https://w3c.github.io/media-source/#htmlmediaelement-extensions-srcobject)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.srcObject 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.srcObject API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 | Support added for `MediaSourceHandle` objects transferred from dedicated workers where they were obt... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 42 | Only supports `MediaStream` objects (see [bug 886194](https://bugzil.la/886194)). |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 108
- **部分实现**: 是
- **注意事项**:
  - Support added for `MediaSourceHandle` objects transferred from dedicated workers where they were obtained from `MediaSource.handle` (see [bug 40591101](https://crbug.com/40591101)).
- **支持版本**: 52
- **移除版本**: 108
- **部分实现**: 是
- **注意事项**:
  - Support added for `MediaStream` objects (see [bug 41186131](https://crbug.com/41186131)).

### Firefox

- **支持版本**: 42
- **部分实现**: 是
- **注意事项**:
  - Only supports `MediaStream` objects (see [bug 886194](https://bugzil.la/886194)).
- **支持版本**: 18
- **移除版本**: 58
- **前缀**: moz

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.srcObject是否支持
function isHTMLMediaElementSrcObjectSupported() {
    return 'srcObject' in htmlmediaelement && typeof htmlmediaelement.srcObject === 'function';
}

if (isHTMLMediaElementSrcObjectSupported()) {
    console.log('HTMLMediaElement.srcObject 支持');
    // 使用HTMLMediaElement.srcObject
} else {
    console.log('HTMLMediaElement.srcObject 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.srcObject polyfill
if (!htmlmediaelement.srcObject) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.srcObject polyfill');
}
```

