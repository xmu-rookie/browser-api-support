# OVR_multiview2 API 兼容性数据

## 基本信息

- **API名称**: `OVR_multiview2`
- **MDN文档**: [OVR_multiview2](https://developer.mozilla.org/docs/Web/API/OVR_multiview2)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OVR_multiview2/)
- **标签**: `web-features:ovr-multiview2`

## 使用示例

### 基本用法

```javascript
// OVR_multiview2 使用示例
// 请查阅MDN文档了解具体用法
console.log('OVR_multiview2 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 | Only supported on Windows with ANGLE. |
| Chrome Android | 93 |  |
| Edge | 同主版本 |  |
| Firefox | 71 | Only supported on Windows with ANGLE. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 不支持 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 93
- **部分实现**: 是
- **注意事项**:
  - Only supported on Windows with ANGLE.

### Chrome Android

- **支持版本**: 93

### Firefox

- **支持版本**: 71
- **部分实现**: 是
- **注意事项**:
  - Only supported on Windows with ANGLE.

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查OVR_multiview2是否支持
function isOVR_multiview2Supported() {
    return 'OVR_multiview2' in window || typeof OVR_multiview2 !== 'undefined';
}

if (isOVR_multiview2Supported()) {
    console.log('OVR_multiview2 支持');
    // 使用OVR_multiview2
} else {
    console.log('OVR_multiview2 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OVR_multiview2 polyfill
if (!window.OVR_multiview2) {
    // 在这里添加polyfill实现
    console.log('加载OVR_multiview2 polyfill');
}
```

