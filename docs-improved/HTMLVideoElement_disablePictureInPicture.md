# HTMLVideoElement.disablePictureInPicture API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.disablePictureInPicture`
- **MDN文档**: [HTMLVideoElement.disablePictureInPicture](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- **规范文档**: [查看规范](https://w3c.github.io/picture-in-picture/#dom-htmlvideoelement-disablepictureinpicture)
- **标签**: `web-features:picture-in-picture`

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.disablePictureInPicture 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.disablePictureInPicture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 105 |  |
| Edge | 同主版本 |  |
| Firefox | 122 | When this property is set to `true`, the overlay button to disable picture-in-picture (PiP) is hidde... |
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

- **支持版本**: 122
- **部分实现**: 是
- **注意事项**:
  - When this property is set to `true`, the overlay button to disable picture-in-picture (PiP) is hidden, but the user can still enable PiP.
- **支持版本**: 116
- **移除版本**: 122
- **部分实现**: 是
- **注意事项**:
  - This property is undefined, but still has an effect if set to a value.
  - When this property is set to `true`, the overlay button to disable picture-in-picture (PiP) is hidden, but the user can still enable PiP.

### Safari

- **支持版本**: 13.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLVideoElement.disablePictureInPicture是否支持
function isHTMLVideoElementDisablePictureInPictureSupported() {
    return 'disablePictureInPicture' in htmlvideoelement && typeof htmlvideoelement.disablePictureInPicture === 'function';
}

if (isHTMLVideoElementDisablePictureInPictureSupported()) {
    console.log('HTMLVideoElement.disablePictureInPicture 支持');
    // 使用HTMLVideoElement.disablePictureInPicture
} else {
    console.log('HTMLVideoElement.disablePictureInPicture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.disablePictureInPicture polyfill
if (!htmlvideoelement.disablePictureInPicture) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.disablePictureInPicture polyfill');
}
```

