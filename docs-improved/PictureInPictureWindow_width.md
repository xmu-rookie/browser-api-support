# PictureInPictureWindow.width API 兼容性数据

## 基本信息

- **API名称**: `PictureInPictureWindow.width`
- **MDN文档**: [PictureInPictureWindow.width](https://developer.mozilla.org/docs/Web/API/PictureInPictureWindow/width)
- **规范文档**: [查看规范](https://w3c.github.io/picture-in-picture/#dom-pictureinpicturewindow-width)
- **标签**: `web-features:picture-in-picture`

## 使用示例

### 基本用法

```javascript
// PictureInPictureWindow.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('PictureInPictureWindow.width API');
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
// 检查PictureInPictureWindow.width是否支持
function isPictureInPictureWindowWidthSupported() {
    return 'width' in pictureinpicturewindow && typeof pictureinpicturewindow.width === 'function';
}

if (isPictureInPictureWindowWidthSupported()) {
    console.log('PictureInPictureWindow.width 支持');
    // 使用PictureInPictureWindow.width
} else {
    console.log('PictureInPictureWindow.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PictureInPictureWindow.width polyfill
if (!pictureinpicturewindow.width) {
    // 在这里添加polyfill实现
    console.log('加载PictureInPictureWindow.width polyfill');
}
```

