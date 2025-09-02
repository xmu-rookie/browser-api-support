# GPUAdapterInfo.isFallbackAdapter API 兼容性数据

## 基本信息

- **API名称**: `GPUAdapterInfo.isFallbackAdapter`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpuadapterinfo-isfallbackadapter)

## 使用示例

### 基本用法

```javascript
// GPUAdapterInfo.isFallbackAdapter 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUAdapterInfo.isFallbackAdapter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 136 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 141 | Currently supported on Windows only, in all contexts except for service workers. |
| Firefox Android | 不支持 |  |
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

- **支持版本**: 136

### Firefox

- **支持版本**: 141
- **部分实现**: 是
- **注意事项**:
  - Currently supported on Windows only, in all contexts except for service workers.

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUAdapterInfo.isFallbackAdapter是否支持
function isGPUAdapterInfoIsFallbackAdapterSupported() {
    return 'isFallbackAdapter' in gpuadapterinfo && typeof gpuadapterinfo.isFallbackAdapter === 'function';
}

if (isGPUAdapterInfoIsFallbackAdapterSupported()) {
    console.log('GPUAdapterInfo.isFallbackAdapter 支持');
    // 使用GPUAdapterInfo.isFallbackAdapter
} else {
    console.log('GPUAdapterInfo.isFallbackAdapter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUAdapterInfo.isFallbackAdapter polyfill
if (!gpuadapterinfo.isFallbackAdapter) {
    // 在这里添加polyfill实现
    console.log('加载GPUAdapterInfo.isFallbackAdapter polyfill');
}
```

