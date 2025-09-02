# NetworkInformation.effectiveType API 兼容性数据

## 基本信息

- **API名称**: `NetworkInformation.effectiveType`
- **MDN文档**: [NetworkInformation.effectiveType](https://developer.mozilla.org/docs/Web/API/NetworkInformation/effectiveType)
- **规范文档**: [查看规范](https://wicg.github.io/netinfo/#dom-networkinformation-effectivetype)
- **标签**: `web-features:network-information`

## 使用示例

### 基本用法

```javascript
// NetworkInformation.effectiveType 使用示例
// 请查阅MDN文档了解具体用法
console.log('NetworkInformation.effectiveType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 38 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 45 |  |
| Safari | 不支持 |  |
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

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 45

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 50

## 兼容性检查代码

### 特性检测

```javascript
// 检查NetworkInformation.effectiveType是否支持
function isNetworkInformationEffectiveTypeSupported() {
    return 'effectiveType' in networkinformation && typeof networkinformation.effectiveType === 'function';
}

if (isNetworkInformationEffectiveTypeSupported()) {
    console.log('NetworkInformation.effectiveType 支持');
    // 使用NetworkInformation.effectiveType
} else {
    console.log('NetworkInformation.effectiveType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NetworkInformation.effectiveType polyfill
if (!networkinformation.effectiveType) {
    // 在这里添加polyfill实现
    console.log('加载NetworkInformation.effectiveType polyfill');
}
```

