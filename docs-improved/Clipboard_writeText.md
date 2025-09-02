# Clipboard.writeText API 兼容性数据

## 基本信息

- **API名称**: `Clipboard.writeText`
- **MDN文档**: [Clipboard.writeText](https://developer.mozilla.org/docs/Web/API/Clipboard/writeText)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dom-clipboard-writetext)
- **标签**: `web-features:async-clipboard`

## 使用示例

### 基本用法

```javascript
// Clipboard.writeText 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clipboard.writeText API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 | From version 107, this method must be called within user gesture event handlers, or the user must gr... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 | This method must be called within user gesture event handlers.; Web extensions require the `clipboar... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 | This method must be called within user gesture event handlers. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66
- **注意事项**:
  - From version 107, this method must be called within user gesture event handlers, or the user must grant the `clipboard-write` permission.
  - Before version 107, the user must grant the `clipboard-write` permission.

### Firefox

- **支持版本**: 63
- **注意事项**:
  - This method must be called within user gesture event handlers.
  - Web extensions require the `clipboardRead` permission in manifest to read data. With this permission, the extension does not require a user interaction and does not display a paste prompt.
  - A paste prompt is displayed when the clipboard is read. If the clipboard contains same-origin content, the prompt is suppressed.

### Safari

- **支持版本**: 13.1
- **注意事项**:
  - This method must be called within user gesture event handlers.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Clipboard.writeText是否支持
function isClipboardWriteTextSupported() {
    return 'writeText' in clipboard && typeof clipboard.writeText === 'function';
}

if (isClipboardWriteTextSupported()) {
    console.log('Clipboard.writeText 支持');
    // 使用Clipboard.writeText
} else {
    console.log('Clipboard.writeText 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Clipboard.writeText polyfill
if (!clipboard.writeText) {
    // 在这里添加polyfill实现
    console.log('加载Clipboard.writeText polyfill');
}
```

