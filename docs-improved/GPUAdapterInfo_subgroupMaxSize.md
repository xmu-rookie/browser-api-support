# GPUAdapterInfo.subgroupMaxSize API 兼容性数据

## 基本信息

- **API名称**: `GPUAdapterInfo.subgroupMaxSize`
- **MDN文档**: [GPUAdapterInfo.subgroupMaxSize](https://developer.mozilla.org/docs/Web/API/GPUAdapterInfo/subgroupMaxSize)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpuadapterinfo-subgroupmaxsize)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUAdapterInfo.subgroupMaxSize 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUAdapterInfo.subgroupMaxSize API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 134 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 134
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

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
// 检查GPUAdapterInfo.subgroupMaxSize是否支持
function isGPUAdapterInfoSubgroupMaxSizeSupported() {
    return 'subgroupMaxSize' in gpuadapterinfo && typeof gpuadapterinfo.subgroupMaxSize === 'function';
}

if (isGPUAdapterInfoSubgroupMaxSizeSupported()) {
    console.log('GPUAdapterInfo.subgroupMaxSize 支持');
    // 使用GPUAdapterInfo.subgroupMaxSize
} else {
    console.log('GPUAdapterInfo.subgroupMaxSize 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUAdapterInfo.subgroupMaxSize polyfill
if (!gpuadapterinfo.subgroupMaxSize) {
    // 在这里添加polyfill实现
    console.log('加载GPUAdapterInfo.subgroupMaxSize polyfill');
}
```

