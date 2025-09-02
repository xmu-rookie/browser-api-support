# XRHand.size API 兼容性数据

## 基本信息

- **API名称**: `XRHand.size`
- **标签**: `web-features:webxr-hand-input`

## 使用示例

### 基本用法

```javascript
// XRHand.size 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRHand.size API');
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
// 检查XRHand.size是否支持
function isXRHandSizeSupported() {
    return 'size' in xrhand && typeof xrhand.size === 'function';
}

if (isXRHandSizeSupported()) {
    console.log('XRHand.size 支持');
    // 使用XRHand.size
} else {
    console.log('XRHand.size 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRHand.size polyfill
if (!xrhand.size) {
    // 在这里添加polyfill实现
    console.log('加载XRHand.size polyfill');
}
```

