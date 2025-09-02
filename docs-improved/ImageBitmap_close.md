# ImageBitmap.close API 兼容性数据

## 基本信息

- **API名称**: `ImageBitmap.close`
- **MDN文档**: [ImageBitmap.close](https://developer.mozilla.org/docs/Web/API/ImageBitmap/close)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-imagebitmap-close-dev)
- **标签**: `web-features:createimagebitmap`

## 使用示例

### 基本用法

```javascript
// ImageBitmap.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageBitmap.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.40 |  |
| Edge | 同主版本 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 37 |  |
| Opera Android | 37 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.40

### Firefox

- **支持版本**: 46

### Opera

- **支持版本**: 37

### Opera Android

- **支持版本**: 37

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageBitmap.close是否支持
function isImageBitmapCloseSupported() {
    return 'close' in imagebitmap && typeof imagebitmap.close === 'function';
}

if (isImageBitmapCloseSupported()) {
    console.log('ImageBitmap.close 支持');
    // 使用ImageBitmap.close
} else {
    console.log('ImageBitmap.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageBitmap.close polyfill
if (!imagebitmap.close) {
    // 在这里添加polyfill实现
    console.log('加载ImageBitmap.close polyfill');
}
```

