# Clipboard.type_text-html API 兼容性数据

## 基本信息

- **API名称**: `Clipboard.type_text-html`
- **标签**: `web-features:async-clipboard`
- **描述**: Supports `text/html` MIME type

## 使用示例

### 基本用法

```javascript
// Clipboard.type_text-html 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clipboard.type_text-html API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
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

- **支持版本**: 86

### Firefox

- **支持版本**: 127

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Clipboard.type_text-html是否支持
function isClipboardType_text-htmlSupported() {
    return 'type_text-html' in clipboard && typeof clipboard.type_text-html === 'function';
}

if (isClipboardType_text-htmlSupported()) {
    console.log('Clipboard.type_text-html 支持');
    // 使用Clipboard.type_text-html
} else {
    console.log('Clipboard.type_text-html 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Clipboard.type_text-html polyfill
if (!clipboard.type_text-html) {
    // 在这里添加polyfill实现
    console.log('加载Clipboard.type_text-html polyfill');
}
```

