# XRHand.forEach API 兼容性数据

## 基本信息

- **API名称**: `XRHand.forEach`
- **标签**: `web-features:webxr-hand-input`

## 使用示例

### 基本用法

```javascript
// XRHand.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRHand.forEach API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 131 |  |
| Chrome Android | 同主版本 |  |
| Edge | 93 | Hololens 2 only. |
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

- **支持版本**: 131

### Edge

- **支持版本**: 93
- **移除版本**: 111
- **注意事项**:
  - Hololens 2 only.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRHand.forEach是否支持
function isXRHandForEachSupported() {
    return 'forEach' in xrhand && typeof xrhand.forEach === 'function';
}

if (isXRHandForEachSupported()) {
    console.log('XRHand.forEach 支持');
    // 使用XRHand.forEach
} else {
    console.log('XRHand.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRHand.forEach polyfill
if (!xrhand.forEach) {
    // 在这里添加polyfill实现
    console.log('加载XRHand.forEach polyfill');
}
```

