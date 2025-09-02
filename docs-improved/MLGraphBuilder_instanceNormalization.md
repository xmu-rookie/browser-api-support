# MLGraphBuilder.instanceNormalization API 兼容性数据

## 基本信息

- **API名称**: `MLGraphBuilder.instanceNormalization`
- **规范文档**: [查看规范](https://www.w3.org/TR/webnn/#api-mlgraphbuilder-instancenorm)
- **标签**: `web-features:webnn`

## 使用示例

### 基本用法

```javascript
// MLGraphBuilder.instanceNormalization 使用示例
// 请查阅MDN文档了解具体用法
console.log('MLGraphBuilder.instanceNormalization API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 127 | Supported on CPUs on Windows, ChromeOS and Linux. |
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

- **支持版本**: 127
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled
- **注意事项**:
  - Supported on CPUs on Windows, ChromeOS and Linux.
- **支持版本**: 126
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled
- **注意事项**:
  - Supported on CPUs, GPUs and NPUs on macOS.
- **支持版本**: 122
- **需要标志**: 
  - #web-machine-learning-neural-network: Enabled
- **注意事项**:
  - Supported on GPUs and NPUs on Windows.

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
// 检查MLGraphBuilder.instanceNormalization是否支持
function isMLGraphBuilderInstanceNormalizationSupported() {
    return 'instanceNormalization' in mlgraphbuilder && typeof mlgraphbuilder.instanceNormalization === 'function';
}

if (isMLGraphBuilderInstanceNormalizationSupported()) {
    console.log('MLGraphBuilder.instanceNormalization 支持');
    // 使用MLGraphBuilder.instanceNormalization
} else {
    console.log('MLGraphBuilder.instanceNormalization 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MLGraphBuilder.instanceNormalization polyfill
if (!mlgraphbuilder.instanceNormalization) {
    // 在这里添加polyfill实现
    console.log('加载MLGraphBuilder.instanceNormalization polyfill');
}
```

