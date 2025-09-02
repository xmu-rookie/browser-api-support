# GPURenderPassEncoder.end API 兼容性数据

## 基本信息

- **API名称**: `GPURenderPassEncoder.end`
- **MDN文档**: [GPURenderPassEncoder.end](https://developer.mozilla.org/docs/Web/API/GPURenderPassEncoder/end)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpurenderpassencoder-end)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPURenderPassEncoder.end 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPURenderPassEncoder.end API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 121 |  |
| Deno | 1.39 |  |
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

- **支持版本**: 1.39
- **需要标志**: 
  - --unstable-webgpu: true
- **支持版本**: 1.8
- **移除版本**: 1.32

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
// 检查GPURenderPassEncoder.end是否支持
function isGPURenderPassEncoderEndSupported() {
    return 'end' in gpurenderpassencoder && typeof gpurenderpassencoder.end === 'function';
}

if (isGPURenderPassEncoderEndSupported()) {
    console.log('GPURenderPassEncoder.end 支持');
    // 使用GPURenderPassEncoder.end
} else {
    console.log('GPURenderPassEncoder.end 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPURenderPassEncoder.end polyfill
if (!gpurenderpassencoder.end) {
    // 在这里添加polyfill实现
    console.log('加载GPURenderPassEncoder.end polyfill');
}
```

