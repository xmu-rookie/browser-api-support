# MLGraphBuilder.reshape API 兼容性数据

## 基本信息

- **API名称**: `MLGraphBuilder.reshape`
- **规范文档**: [查看规范](https://www.w3.org/TR/webnn/#api-mlgraphbuilder-reshape-method)
- **标签**: `web-features:webnn`

## 使用示例

### 基本用法

```javascript
// MLGraphBuilder.reshape 使用示例
// 请查阅MDN文档了解具体用法
console.log('MLGraphBuilder.reshape API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 | Supported on CPUs, GPUs and NPUs on macOS. |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 126
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled
- **注意事项**:
  - Supported on CPUs, GPUs and NPUs on macOS.
- **支持版本**: 119
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled
- **注意事项**:
  - Supported on GPUs and NPUs on Windows.
- **支持版本**: 112
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled
- **注意事项**:
  - Supported on CPUs on Windows, ChromeOS and Linux.

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MLGraphBuilder.reshape是否支持
function isMLGraphBuilderReshapeSupported() {
    return 'reshape' in mlgraphbuilder && typeof mlgraphbuilder.reshape === 'function';
}

if (isMLGraphBuilderReshapeSupported()) {
    console.log('MLGraphBuilder.reshape 支持');
    // 使用MLGraphBuilder.reshape
} else {
    console.log('MLGraphBuilder.reshape 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MLGraphBuilder.reshape polyfill
if (!mlgraphbuilder.reshape) {
    // 在这里添加polyfill实现
    console.log('加载MLGraphBuilder.reshape polyfill');
}
```

