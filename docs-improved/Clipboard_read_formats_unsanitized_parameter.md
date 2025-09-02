# Clipboard.read.formats_unsanitized_parameter API 兼容性数据

## 基本信息

- **API名称**: `Clipboard.read.formats_unsanitized_parameter`
- **MDN文档**: [Clipboard.read.formats_unsanitized_parameter](https://developer.mozilla.org/docs/Web/API/Clipboard/read#unsanitized)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dictdef-clipboardunsanitizedformats)
- **标签**: `web-features:clipboard-unsanitized-formats`
- **描述**: `formats.unsanitized` parameter

## 使用示例

### 基本用法

```javascript
// Clipboard.read.formats_unsanitized_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clipboard.read.formats_unsanitized_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 122 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 122

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Clipboard.read.formats_unsanitized_parameter是否支持
function isClipboardReadSupported() {
    return 'read' in clipboard && typeof clipboard.read === 'function';
}

if (isClipboardReadSupported()) {
    console.log('Clipboard.read.formats_unsanitized_parameter 支持');
    // 使用Clipboard.read.formats_unsanitized_parameter
} else {
    console.log('Clipboard.read.formats_unsanitized_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Clipboard.read.formats_unsanitized_parameter polyfill
if (!clipboard.read) {
    // 在这里添加polyfill实现
    console.log('加载Clipboard.read.formats_unsanitized_parameter polyfill');
}
```

