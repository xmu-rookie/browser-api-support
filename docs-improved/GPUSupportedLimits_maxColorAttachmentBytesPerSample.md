# GPUSupportedLimits.maxColorAttachmentBytesPerSample API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedLimits.maxColorAttachmentBytesPerSample`
- **MDN文档**: [GPUSupportedLimits.maxColorAttachmentBytesPerSample](https://developer.mozilla.org/docs/Web/API/GPUSupportedLimits#instance_properties)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpusupportedlimits-maxcolorattachmentbytespersample)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUSupportedLimits.maxColorAttachmentBytesPerSample 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedLimits.maxColorAttachmentBytesPerSample API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 121 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 141 | Currently supported on Windows only, in all contexts except for service workers. |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 113
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 121

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 141
- **部分实现**: 是
- **注意事项**:
  - Currently supported on Windows only, in all contexts except for service workers.

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUSupportedLimits.maxColorAttachmentBytesPerSample是否支持
function isGPUSupportedLimitsMaxColorAttachmentBytesPerSampleSupported() {
    return 'maxColorAttachmentBytesPerSample' in gpusupportedlimits && typeof gpusupportedlimits.maxColorAttachmentBytesPerSample === 'function';
}

if (isGPUSupportedLimitsMaxColorAttachmentBytesPerSampleSupported()) {
    console.log('GPUSupportedLimits.maxColorAttachmentBytesPerSample 支持');
    // 使用GPUSupportedLimits.maxColorAttachmentBytesPerSample
} else {
    console.log('GPUSupportedLimits.maxColorAttachmentBytesPerSample 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedLimits.maxColorAttachmentBytesPerSample polyfill
if (!gpusupportedlimits.maxColorAttachmentBytesPerSample) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedLimits.maxColorAttachmentBytesPerSample polyfill');
}
```

