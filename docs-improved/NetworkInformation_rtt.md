# NetworkInformation.rtt API 兼容性数据

## 基本信息

- **API名称**: `NetworkInformation.rtt`
- **MDN文档**: [NetworkInformation.rtt](https://developer.mozilla.org/docs/Web/API/NetworkInformation/rtt)
- **规范文档**: [查看规范](https://wicg.github.io/netinfo/#dom-networkinformation-rtt)
- **标签**: `web-features:network-information`

## 使用示例

### 基本用法

```javascript
// NetworkInformation.rtt 使用示例
// 请查阅MDN文档了解具体用法
console.log('NetworkInformation.rtt API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 | The value is never greater than 3000 ms, as a non-standard anti-fingerprinting measure. |
| Chrome Android | 38 | The value is never greater than 3000 ms, as a non-standard anti-fingerprinting measure. |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 50 | The value is never greater than 3000 ms, as a non-standard anti-fingerprinting measure. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61
- **注意事项**:
  - The value is never greater than 3000 ms, as a non-standard anti-fingerprinting measure.

### Chrome Android

- **支持版本**: 38
- **注意事项**:
  - The value is never greater than 3000 ms, as a non-standard anti-fingerprinting measure.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 50
- **注意事项**:
  - The value is never greater than 3000 ms, as a non-standard anti-fingerprinting measure.

## 兼容性检查代码

### 特性检测

```javascript
// 检查NetworkInformation.rtt是否支持
function isNetworkInformationRttSupported() {
    return 'rtt' in networkinformation && typeof networkinformation.rtt === 'function';
}

if (isNetworkInformationRttSupported()) {
    console.log('NetworkInformation.rtt 支持');
    // 使用NetworkInformation.rtt
} else {
    console.log('NetworkInformation.rtt 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NetworkInformation.rtt polyfill
if (!networkinformation.rtt) {
    // 在这里添加polyfill实现
    console.log('加载NetworkInformation.rtt polyfill');
}
```

