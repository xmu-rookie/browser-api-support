# NetworkInformation API 兼容性数据

## 基本信息

- **API名称**: `NetworkInformation`
- **MDN文档**: [NetworkInformation](https://developer.mozilla.org/docs/Web/API/NetworkInformation)
- **规范文档**: [查看规范](https://wicg.github.io/netinfo/#networkinformation-interface)
- **标签**: `web-features:network-information`

## 使用示例

### 基本用法

```javascript
// NetworkInformation 使用示例
// 请查阅MDN文档了解具体用法
console.log('NetworkInformation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 38 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 31 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 50 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Chrome Android

- **支持版本**: 38

### Firefox

- **支持版本**: 31
- **移除版本**: 32

### Firefox Android

- **支持版本**: 31
- **移除版本**: 99

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 50

## 兼容性检查代码

### 特性检测

```javascript
// 检查NetworkInformation是否支持
function isNetworkInformationSupported() {
    return 'NetworkInformation' in window || typeof NetworkInformation !== 'undefined';
}

if (isNetworkInformationSupported()) {
    console.log('NetworkInformation 支持');
    // 使用NetworkInformation
} else {
    console.log('NetworkInformation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NetworkInformation polyfill
if (!window.NetworkInformation) {
    // 在这里添加polyfill实现
    console.log('加载NetworkInformation polyfill');
}
```

