# XRHitTestSource API 兼容性数据

## 基本信息

- **API名称**: `XRHitTestSource`
- **MDN文档**: [XRHitTestSource](https://developer.mozilla.org/docs/Web/API/XRHitTestSource)
- **规范文档**: [查看规范](https://immersive-web.github.io/hit-test/#hit-test-source-interface)
- **标签**: `web-features:webxr-hit-test`

## 使用示例

### 基本用法

```javascript
// XRHitTestSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRHitTestSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | ❌ 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRHitTestSource是否支持
function isXRHitTestSourceSupported() {
    return 'XRHitTestSource' in window || typeof XRHitTestSource !== 'undefined';
}

if (isXRHitTestSourceSupported()) {
    console.log('XRHitTestSource 支持');
    // 使用XRHitTestSource
} else {
    console.log('XRHitTestSource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRHitTestSource polyfill
if (!window.XRHitTestSource) {
    // 在这里添加polyfill实现
    console.log('加载XRHitTestSource polyfill');
}
```

