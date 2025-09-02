# XRSession.pauseDepthSensing API 兼容性数据

## 基本信息

- **API名称**: `XRSession.pauseDepthSensing`
- **规范文档**: [查看规范](https://immersive-web.github.io/depth-sensing/#dom-xrsession-pausedepthsensing)

## 使用示例

### 基本用法

```javascript
// XRSession.pauseDepthSensing 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSession.pauseDepthSensing API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 139 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 139

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRSession.pauseDepthSensing是否支持
function isXRSessionPauseDepthSensingSupported() {
    return 'pauseDepthSensing' in xrsession && typeof xrsession.pauseDepthSensing === 'function';
}

if (isXRSessionPauseDepthSensingSupported()) {
    console.log('XRSession.pauseDepthSensing 支持');
    // 使用XRSession.pauseDepthSensing
} else {
    console.log('XRSession.pauseDepthSensing 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSession.pauseDepthSensing polyfill
if (!xrsession.pauseDepthSensing) {
    // 在这里添加polyfill实现
    console.log('加载XRSession.pauseDepthSensing polyfill');
}
```

