# Navigator.pdfViewerEnabled API 兼容性数据

## 基本信息

- **API名称**: `Navigator.pdfViewerEnabled`
- **MDN文档**: [Navigator.pdfViewerEnabled](https://developer.mozilla.org/docs/Web/API/Navigator/pdfViewerEnabled)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-pdfviewerenabled)
- **标签**: `web-features:pdf-viewer`

## 使用示例

### 基本用法

```javascript
// Navigator.pdfViewerEnabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.pdfViewerEnabled API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 99 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 94

### Firefox

- **支持版本**: 99

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.pdfViewerEnabled是否支持
function isNavigatorPdfViewerEnabledSupported() {
    return 'pdfViewerEnabled' in navigator && typeof navigator.pdfViewerEnabled === 'function';
}

if (isNavigatorPdfViewerEnabledSupported()) {
    console.log('Navigator.pdfViewerEnabled 支持');
    // 使用Navigator.pdfViewerEnabled
} else {
    console.log('Navigator.pdfViewerEnabled 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.pdfViewerEnabled polyfill
if (!navigator.pdfViewerEnabled) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.pdfViewerEnabled polyfill');
}
```

