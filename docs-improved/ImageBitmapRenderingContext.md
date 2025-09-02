# ImageBitmapRenderingContext API 兼容性数据

## 基本信息

- **API名称**: `ImageBitmapRenderingContext`
- **MDN文档**: [ImageBitmapRenderingContext](https://developer.mozilla.org/docs/Web/API/ImageBitmapRenderingContext)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#the-imagebitmaprenderingcontext-interface)
- **标签**: `web-features:imagebitmaprenderingcontext`

## 使用示例

### 基本用法

```javascript
// ImageBitmapRenderingContext 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageBitmapRenderingContext API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 46

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageBitmapRenderingContext是否支持
function isImageBitmapRenderingContextSupported() {
    return 'ImageBitmapRenderingContext' in window || typeof ImageBitmapRenderingContext !== 'undefined';
}

if (isImageBitmapRenderingContextSupported()) {
    console.log('ImageBitmapRenderingContext 支持');
    // 使用ImageBitmapRenderingContext
} else {
    console.log('ImageBitmapRenderingContext 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageBitmapRenderingContext polyfill
if (!window.ImageBitmapRenderingContext) {
    // 在这里添加polyfill实现
    console.log('加载ImageBitmapRenderingContext polyfill');
}
```

