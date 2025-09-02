# Document.exitFullscreen API 兼容性数据

## 基本信息

- **API名称**: `Document.exitFullscreen`
- **MDN文档**: [Document.exitFullscreen](https://developer.mozilla.org/docs/Web/API/Document/exitFullscreen)
- **规范文档**: [查看规范](https://fullscreen.spec.whatwg.org/#ref-for-dom-document-exitfullscreen①)
- **标签**: `web-features:fullscreen`

## 使用示例

### 基本用法

```javascript
// Document.exitFullscreen 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.exitFullscreen API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 71 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 64 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 58 |  |
| Opera Android | 50 |  |
| Safari | 16.4 |  |
| Safari iOS | 16.4 | Only available on iPad, not on iPhone.; Shows an overlay button which can not be disabled. Swiping d... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 71
- **支持版本**: 15
- **前缀**: webkit

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **前缀**: webkit
- **支持版本**: 12
- **移除版本**: 14

### Firefox

- **支持版本**: 64
- **支持版本**: 9

### Internet Explorer

- **支持版本**: 11
- **前缀**: ms

### Opera

- **支持版本**: 58
- **支持版本**: 15
- **前缀**: webkit
- **支持版本**: 12.1
- **移除版本**: 15

### Opera Android

- **支持版本**: 50
- **支持版本**: 14
- **前缀**: webkit
- **支持版本**: 12.1
- **移除版本**: 14

### Safari

- **支持版本**: 16.4
- **支持版本**: 5.1
- **前缀**: webkit

### Safari iOS

- **支持版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - Only available on iPad, not on iPhone.
  - Shows an overlay button which can not be disabled. Swiping down exits fullscreen mode, making it unsuitable for some use cases like games.
- **支持版本**: 12
- **前缀**: webkit
- **部分实现**: 是
- **注意事项**:
  - Only available on iPad, not on iPhone.

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.exitFullscreen是否支持
function isDocumentExitFullscreenSupported() {
    return 'exitFullscreen' in document && typeof document.exitFullscreen === 'function';
}

if (isDocumentExitFullscreenSupported()) {
    console.log('Document.exitFullscreen 支持');
    // 使用Document.exitFullscreen
} else {
    console.log('Document.exitFullscreen 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.exitFullscreen polyfill
if (!document.exitFullscreen) {
    // 在这里添加polyfill实现
    console.log('加载Document.exitFullscreen polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **returns_promise**: Returns a `Promise`

