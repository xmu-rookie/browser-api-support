# XRInputSource.hand API 兼容性数据

## 基本信息

- **API名称**: `XRInputSource.hand`
- **MDN文档**: [XRInputSource.hand](https://developer.mozilla.org/docs/Web/API/XRInputSource/hand)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr-hand-input/#dom-xrinputsource-hand)
- **标签**: `web-features:webxr-hand-input`

## 使用示例

### 基本用法

```javascript
// XRInputSource.hand 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRInputSource.hand API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 131 |  |
| Chrome Android | 同主版本 |  |
| Edge | 93 | Hololens 2 only. |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 15.1 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 131

### Edge

- **支持版本**: 93
- **移除版本**: 111
- **注意事项**:
  - Hololens 2 only.

### Firefox

- **支持版本**: 不支持

### Oculus

- **支持版本**: 15.1

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRInputSource.hand是否支持
function isXRInputSourceHandSupported() {
    return 'hand' in xrinputsource && typeof xrinputsource.hand === 'function';
}

if (isXRInputSourceHandSupported()) {
    console.log('XRInputSource.hand 支持');
    // 使用XRInputSource.hand
} else {
    console.log('XRInputSource.hand 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRInputSource.hand polyfill
if (!xrinputsource.hand) {
    // 在这里添加polyfill实现
    console.log('加载XRInputSource.hand polyfill');
}
```

