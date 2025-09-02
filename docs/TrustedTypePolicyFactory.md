# TrustedTypePolicyFactory API 兼容性数据

## 基本信息

- **API名称**: `TrustedTypePolicyFactory`
- **MDN文档**: [TrustedTypePolicyFactory](https://developer.mozilla.org/docs/Web/API/TrustedTypePolicyFactory)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#trusted-type-policy-factory)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedTypePolicyFactory 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedTypePolicyFactory API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 83

### Firefox

- **支持版本**: 133

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查TrustedTypePolicyFactory是否支持
function isTrustedTypePolicyFactorySupported() {
    return 'TrustedTypePolicyFactory' in window || typeof TrustedTypePolicyFactory !== 'undefined';
}

if (isTrustedTypePolicyFactorySupported()) {
    console.log('TrustedTypePolicyFactory 支持');
    // 使用TrustedTypePolicyFactory
} else {
    console.log('TrustedTypePolicyFactory 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedTypePolicyFactory polyfill
if (!window.TrustedTypePolicyFactory) {
    // 在这里添加polyfill实现
    console.log('加载TrustedTypePolicyFactory polyfill');
}
```

