# VRDisplayCapabilities.maxLayers API 兼容性数据

## 基本信息

- **API名称**: `VRDisplayCapabilities.maxLayers`
- **MDN文档**: [VRDisplayCapabilities.maxLayers](https://developer.mozilla.org/docs/Web/API/VRDisplayCapabilities/maxLayers)
- **标签**: `web-features:webvr`

## 使用示例

### 基本用法

```javascript
// VRDisplayCapabilities.maxLayers 使用示例
// 请查阅MDN文档了解具体用法
console.log('VRDisplayCapabilities.maxLayers API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 98 |  |
| Firefox Android | 55 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 | Google Cardboard supported in Samsung Internet 7.0. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Edge

- **支持版本**: 15
- **移除版本**: 79

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

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 6.0
- **注意事项**:
  - Google Cardboard supported in Samsung Internet 7.0.

## 兼容性检查代码

### 特性检测

```javascript
// 检查VRDisplayCapabilities.maxLayers是否支持
function isVRDisplayCapabilitiesMaxLayersSupported() {
    return 'maxLayers' in vrdisplaycapabilities && typeof vrdisplaycapabilities.maxLayers === 'function';
}

if (isVRDisplayCapabilitiesMaxLayersSupported()) {
    console.log('VRDisplayCapabilities.maxLayers 支持');
    // 使用VRDisplayCapabilities.maxLayers
} else {
    console.log('VRDisplayCapabilities.maxLayers 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VRDisplayCapabilities.maxLayers polyfill
if (!vrdisplaycapabilities.maxLayers) {
    // 在这里添加polyfill实现
    console.log('加载VRDisplayCapabilities.maxLayers polyfill');
}
```

