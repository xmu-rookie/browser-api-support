# Document.exitPointerLock API 兼容性数据

## 基本信息

- **API名称**: `Document.exitPointerLock`
- **MDN文档**: [Document.exitPointerLock](https://developer.mozilla.org/docs/Web/API/Document/exitPointerLock)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#dom-document-exitpointerlock)
- **标签**: `web-features:pointer-lock`

## 使用示例

### 基本用法

```javascript
// Document.exitPointerLock 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.exitPointerLock API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 不支持 |  |
| Edge | 13 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37
- **支持版本**: 22
- **前缀**: webkit

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 50
- **支持版本**: 14
- **移除版本**: 50
- **前缀**: moz

### Safari

- **支持版本**: 10.1

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.exitPointerLock是否支持
function isDocumentExitPointerLockSupported() {
    return 'exitPointerLock' in document && typeof document.exitPointerLock === 'function';
}

if (isDocumentExitPointerLockSupported()) {
    console.log('Document.exitPointerLock 支持');
    // 使用Document.exitPointerLock
} else {
    console.log('Document.exitPointerLock 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.exitPointerLock polyfill
if (!document.exitPointerLock) {
    // 在这里添加polyfill实现
    console.log('加载Document.exitPointerLock polyfill');
}
```

