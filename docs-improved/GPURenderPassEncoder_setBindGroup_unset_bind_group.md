# GPURenderPassEncoder.setBindGroup.unset_bind_group API 兼容性数据

## 基本信息

- **API名称**: `GPURenderPassEncoder.setBindGroup.unset_bind_group`
- **标签**: `web-features:webgpu`
- **描述**: Pass `null` to unset bind group

## 使用示例

### 基本用法

```javascript
// GPURenderPassEncoder.setBindGroup.unset_bind_group 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPURenderPassEncoder.setBindGroup.unset_bind_group API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 117 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 121 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
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

- **支持版本**: 117
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 121

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPURenderPassEncoder.setBindGroup.unset_bind_group是否支持
function isGPURenderPassEncoderSetBindGroupSupported() {
    return 'setBindGroup' in gpurenderpassencoder && typeof gpurenderpassencoder.setBindGroup === 'function';
}

if (isGPURenderPassEncoderSetBindGroupSupported()) {
    console.log('GPURenderPassEncoder.setBindGroup.unset_bind_group 支持');
    // 使用GPURenderPassEncoder.setBindGroup.unset_bind_group
} else {
    console.log('GPURenderPassEncoder.setBindGroup.unset_bind_group 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPURenderPassEncoder.setBindGroup.unset_bind_group polyfill
if (!gpurenderpassencoder.setBindGroup) {
    // 在这里添加polyfill实现
    console.log('加载GPURenderPassEncoder.setBindGroup.unset_bind_group polyfill');
}
```

