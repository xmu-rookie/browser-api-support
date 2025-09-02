# XRHand.values API 兼容性数据

## 基本信息

- **API名称**: `XRHand.values`
- **标签**: `web-features:webxr-hand-input`

## 使用示例

### 基本用法

```javascript
// XRHand.values 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRHand.values API');
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
// 检查XRHand.values是否支持
function isXRHandValuesSupported() {
    return 'values' in xrhand && typeof xrhand.values === 'function';
}

if (isXRHandValuesSupported()) {
    console.log('XRHand.values 支持');
    // 使用XRHand.values
} else {
    console.log('XRHand.values 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRHand.values polyfill
if (!xrhand.values) {
    // 在这里添加polyfill实现
    console.log('加载XRHand.values polyfill');
}
```

