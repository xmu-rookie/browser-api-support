# XRPose.linearVelocity API 兼容性数据

## 基本信息

- **API名称**: `XRPose.linearVelocity`
- **MDN文档**: [XRPose.linearVelocity](https://developer.mozilla.org/docs/Web/API/XRPose/linearVelocity)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrpose-linearvelocity)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRPose.linearVelocity 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRPose.linearVelocity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 15.0 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Oculus

- **支持版本**: 15.0

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRPose.linearVelocity是否支持
function isXRPoseLinearVelocitySupported() {
    return 'linearVelocity' in xrpose && typeof xrpose.linearVelocity === 'function';
}

if (isXRPoseLinearVelocitySupported()) {
    console.log('XRPose.linearVelocity 支持');
    // 使用XRPose.linearVelocity
} else {
    console.log('XRPose.linearVelocity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRPose.linearVelocity polyfill
if (!xrpose.linearVelocity) {
    // 在这里添加polyfill实现
    console.log('加载XRPose.linearVelocity polyfill');
}
```

