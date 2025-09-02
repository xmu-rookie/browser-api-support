# Document.exitFullscreen.returns_promise API 兼容性数据

## 基本信息

- **API名称**: `Document.exitFullscreen.returns_promise`
- **标签**: `web-features:fullscreen`
- **描述**: Returns a `Promise`

## 使用示例

### 基本用法

```javascript
// Document.exitFullscreen.returns_promise 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.exitFullscreen.returns_promise API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 64 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Firefox

- **支持版本**: 64

### Safari

- **支持版本**: 16.4

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.exitFullscreen.returns_promise是否支持
function isDocumentExitFullscreenSupported() {
    return 'exitFullscreen' in document && typeof document.exitFullscreen === 'function';
}

if (isDocumentExitFullscreenSupported()) {
    console.log('Document.exitFullscreen.returns_promise 支持');
    // 使用Document.exitFullscreen.returns_promise
} else {
    console.log('Document.exitFullscreen.returns_promise 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.exitFullscreen.returns_promise polyfill
if (!document.exitFullscreen) {
    // 在这里添加polyfill实现
    console.log('加载Document.exitFullscreen.returns_promise polyfill');
}
```

