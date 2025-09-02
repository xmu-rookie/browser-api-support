# ClipboardEvent.clipboardData API 兼容性数据

## 基本信息

- **API名称**: `ClipboardEvent.clipboardData`
- **MDN文档**: [ClipboardEvent.clipboardData](https://developer.mozilla.org/docs/Web/API/ClipboardEvent/clipboardData)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#clipboardevent-clipboarddata)
- **标签**: `web-features:clipboard-events`

## 使用示例

### 基本用法

```javascript
// 使用剪贴板API
// 写入剪贴板
navigator.clipboard.writeText('复制的文本').then(() => {
    console.log('文本已复制到剪贴板');
});

// 读取剪贴板
navigator.clipboard.readText().then(text => {
    console.log('剪贴板内容:', text);
});
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22

### Internet Explorer

- **支持版本**: 5

### Safari

- **支持版本**: 10.1

