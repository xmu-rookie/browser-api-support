# HTMLCanvasElement.toBlob.type_parameter_png API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.toBlob.type_parameter_png`
- **描述**: `type` parameter supports `"image/png"`

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.toBlob.type_parameter_png 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.toBlob.type_parameter_png API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 18 |  |
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

- **支持版本**: 50

### Firefox

- **支持版本**: 18

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.toBlob.type_parameter_png是否支持
function isHTMLCanvasElementToBlobSupported() {
    return 'toBlob' in htmlcanvaselement && typeof htmlcanvaselement.toBlob === 'function';
}

if (isHTMLCanvasElementToBlobSupported()) {
    console.log('HTMLCanvasElement.toBlob.type_parameter_png 支持');
    // 使用HTMLCanvasElement.toBlob.type_parameter_png
} else {
    console.log('HTMLCanvasElement.toBlob.type_parameter_png 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.toBlob.type_parameter_png polyfill
if (!htmlcanvaselement.toBlob) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.toBlob.type_parameter_png polyfill');
}
```

