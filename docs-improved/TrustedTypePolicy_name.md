# TrustedTypePolicy.name API 兼容性数据

## 基本信息

- **API名称**: `TrustedTypePolicy.name`
- **MDN文档**: [TrustedTypePolicy.name](https://developer.mozilla.org/docs/Web/API/TrustedTypePolicy/name)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#dom-trustedtypepolicy-name)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedTypePolicy.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedTypePolicy.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 83

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查TrustedTypePolicy.name是否支持
function isTrustedTypePolicyNameSupported() {
    return 'name' in trustedtypepolicy && typeof trustedtypepolicy.name === 'function';
}

if (isTrustedTypePolicyNameSupported()) {
    console.log('TrustedTypePolicy.name 支持');
    // 使用TrustedTypePolicy.name
} else {
    console.log('TrustedTypePolicy.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedTypePolicy.name polyfill
if (!trustedtypepolicy.name) {
    // 在这里添加polyfill实现
    console.log('加载TrustedTypePolicy.name polyfill');
}
```

