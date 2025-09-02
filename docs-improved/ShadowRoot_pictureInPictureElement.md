# ShadowRoot.pictureInPictureElement API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.pictureInPictureElement`
- **MDN文档**: [ShadowRoot.pictureInPictureElement](https://developer.mozilla.org/docs/Web/API/ShadowRoot/pictureInPictureElement)
- **规范文档**: [查看规范](https://w3c.github.io/picture-in-picture/#dom-pictureinpictureevent-pictureinpicturewindow)
- **标签**: `web-features:picture-in-picture`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.pictureInPictureElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.pictureInPictureElement API');
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
| WebView Android | 同主版本 |  |
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.pictureInPictureElement是否支持
function isShadowRootPictureInPictureElementSupported() {
    return 'pictureInPictureElement' in shadowroot && typeof shadowroot.pictureInPictureElement === 'function';
}

if (isShadowRootPictureInPictureElementSupported()) {
    console.log('ShadowRoot.pictureInPictureElement 支持');
    // 使用ShadowRoot.pictureInPictureElement
} else {
    console.log('ShadowRoot.pictureInPictureElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.pictureInPictureElement polyfill
if (!shadowroot.pictureInPictureElement) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.pictureInPictureElement polyfill');
}
```

