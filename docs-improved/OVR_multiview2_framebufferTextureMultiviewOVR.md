# OVR_multiview2.framebufferTextureMultiviewOVR API 兼容性数据

## 基本信息

- **API名称**: `OVR_multiview2.framebufferTextureMultiviewOVR`
- **MDN文档**: [OVR_multiview2.framebufferTextureMultiviewOVR](https://developer.mozilla.org/docs/Web/API/OVR_multiview2/framebufferTextureMultiviewOVR)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OVR_multiview2/)
- **标签**: `web-features:ovr-multiview2`

## 使用示例

### 基本用法

```javascript
// OVR_multiview2.framebufferTextureMultiviewOVR 使用示例
// 请查阅MDN文档了解具体用法
console.log('OVR_multiview2.framebufferTextureMultiviewOVR API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 71 |  |
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

### Firefox

- **支持版本**: 71

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查OVR_multiview2.framebufferTextureMultiviewOVR是否支持
function isOVR_multiview2FramebufferTextureMultiviewOVRSupported() {
    return 'framebufferTextureMultiviewOVR' in ovr_multiview2 && typeof ovr_multiview2.framebufferTextureMultiviewOVR === 'function';
}

if (isOVR_multiview2FramebufferTextureMultiviewOVRSupported()) {
    console.log('OVR_multiview2.framebufferTextureMultiviewOVR 支持');
    // 使用OVR_multiview2.framebufferTextureMultiviewOVR
} else {
    console.log('OVR_multiview2.framebufferTextureMultiviewOVR 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OVR_multiview2.framebufferTextureMultiviewOVR polyfill
if (!ovr_multiview2.framebufferTextureMultiviewOVR) {
    // 在这里添加polyfill实现
    console.log('加载OVR_multiview2.framebufferTextureMultiviewOVR polyfill');
}
```

