# HTMLCanvasElement.toDataURL.type_parameter_webp API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.toDataURL.type_parameter_webp`
- **描述**: `type` parameter supports `"image/webp"`

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.toDataURL.type_parameter_webp 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.toDataURL.type_parameter_webp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 17 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 96 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.5 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 17

### Firefox

- **支持版本**: 96

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 1.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.toDataURL.type_parameter_webp是否支持
function isHTMLCanvasElementToDataURLSupported() {
    return 'toDataURL' in htmlcanvaselement && typeof htmlcanvaselement.toDataURL === 'function';
}

if (isHTMLCanvasElementToDataURLSupported()) {
    console.log('HTMLCanvasElement.toDataURL.type_parameter_webp 支持');
    // 使用HTMLCanvasElement.toDataURL.type_parameter_webp
} else {
    console.log('HTMLCanvasElement.toDataURL.type_parameter_webp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.toDataURL.type_parameter_webp polyfill
if (!htmlcanvaselement.toDataURL) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.toDataURL.type_parameter_webp polyfill');
}
```

