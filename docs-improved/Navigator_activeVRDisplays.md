# Navigator.activeVRDisplays API 兼容性数据

## 基本信息

- **API名称**: `Navigator.activeVRDisplays`
- **MDN文档**: [Navigator.activeVRDisplays](https://developer.mozilla.org/docs/Web/API/Navigator/activeVRDisplays)
- **标签**: `web-features:webvr`

## 使用示例

### 基本用法

```javascript
// Navigator.activeVRDisplays 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.activeVRDisplays API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 79 | Supported only by Google Daydream. |
| Edge | 15 | WebVR content requires a Windows Mixed Reality headset or the Windows Mixed Reality Portal Simulator... |
| Firefox | 98 |  |
| Firefox Android | 55 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 79
- **移除版本**: 80
- **注意事项**:
  - Supported only by Google Daydream.

### Edge

- **支持版本**: 15
- **移除版本**: 79
- **注意事项**:
  - WebVR content requires a Windows Mixed Reality headset or the Windows Mixed Reality Portal Simulator.

### Firefox

- **支持版本**: 98
- **需要标志**: 
  - dom.vr.enabled: true
- **支持版本**: 64
- **移除版本**: 98
- **注意事项**:
  - Only on macOS and Windows.
- **支持版本**: 55
- **移除版本**: 64
- **注意事项**:
  - Only on Windows.

### Firefox Android

- **支持版本**: 55
- **移除版本**: 98

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.activeVRDisplays是否支持
function isNavigatorActiveVRDisplaysSupported() {
    return 'activeVRDisplays' in navigator && typeof navigator.activeVRDisplays === 'function';
}

if (isNavigatorActiveVRDisplaysSupported()) {
    console.log('Navigator.activeVRDisplays 支持');
    // 使用Navigator.activeVRDisplays
} else {
    console.log('Navigator.activeVRDisplays 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.activeVRDisplays polyfill
if (!navigator.activeVRDisplays) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.activeVRDisplays polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required

