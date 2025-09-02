# Clipboard.type_image-png API 兼容性数据

## 基本信息

- **API名称**: `Clipboard.type_image-png`
- **标签**: `web-features:async-clipboard`
- **描述**: Supports `image/png` MIME type

## 使用示例

### 基本用法

```javascript
// Clipboard.type_image-png 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clipboard.type_image-png API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 127 |  |
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

- **支持版本**: 76

### Firefox

- **支持版本**: 127

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Clipboard.type_image-png是否支持
function isClipboardType_image-pngSupported() {
    return 'type_image-png' in clipboard && typeof clipboard.type_image-png === 'function';
}

if (isClipboardType_image-pngSupported()) {
    console.log('Clipboard.type_image-png 支持');
    // 使用Clipboard.type_image-png
} else {
    console.log('Clipboard.type_image-png 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Clipboard.type_image-png polyfill
if (!clipboard.type_image-png) {
    // 在这里添加polyfill实现
    console.log('加载Clipboard.type_image-png polyfill');
}
```

