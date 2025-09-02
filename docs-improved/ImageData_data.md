# ImageData.data API 兼容性数据

## 基本信息

- **API名称**: `ImageData.data`
- **MDN文档**: [ImageData.data](https://developer.mozilla.org/docs/Web/API/ImageData/data)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-imagedata-data)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// ImageData.data 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageData.data API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.39 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.39

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageData.data是否支持
function isImageDataDataSupported() {
    return 'data' in imagedata && typeof imagedata.data === 'function';
}

if (isImageDataDataSupported()) {
    console.log('ImageData.data 支持');
    // 使用ImageData.data
} else {
    console.log('ImageData.data 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageData.data polyfill
if (!imagedata.data) {
    // 在这里添加polyfill实现
    console.log('加载ImageData.data polyfill');
}
```

