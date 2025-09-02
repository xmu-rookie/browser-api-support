# Clipboard.readText API 兼容性数据

## 基本信息

- **API名称**: `Clipboard.readText`
- **MDN文档**: [Clipboard.readText](https://developer.mozilla.org/docs/Web/API/Clipboard/readText)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dom-clipboard-readtext)
- **标签**: `web-features:async-clipboard`

## 使用示例

### 基本用法

```javascript
// Clipboard.readText 使用示例
// 请查阅MDN文档了解具体用法
console.log('Clipboard.readText API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 | The user must grant the `clipboard-read` permission. |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 | This method must be called within user gesture event handlers.; Web extensions require the `clipboar... |
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

- **支持版本**: 66
- **注意事项**:
  - The user must grant the `clipboard-read` permission.

### Firefox

- **支持版本**: 125
- **注意事项**:
  - This method must be called within user gesture event handlers.
  - Web extensions require the `clipboardRead` permission in manifest to read data. With this permission, the extension does not require a user interaction and does not display a paste prompt.
  - A paste prompt is displayed when the clipboard is read. If the clipboard contains same-origin content, the prompt is suppressed.

### Safari

- **支持版本**: 13.1

