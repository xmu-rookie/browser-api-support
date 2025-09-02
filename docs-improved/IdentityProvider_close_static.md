# IdentityProvider.close_static API 兼容性数据

## 基本信息

- **API名称**: `IdentityProvider.close_static`
- **MDN文档**: [IdentityProvider.close_static](https://developer.mozilla.org/docs/Web/API/IdentityProvider/close_static)
- **规范文档**: [查看规范](https://w3c-fedid.github.io/FedCM/#dom-identityprovider-close)
- **描述**: `close()` static method

## 使用示例

### 基本用法

```javascript
// IdentityProvider.close_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('IdentityProvider.close_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 120 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 120

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IdentityProvider.close_static是否支持
function isIdentityProviderClose_staticSupported() {
    return 'close_static' in identityprovider && typeof identityprovider.close_static === 'function';
}

if (isIdentityProviderClose_staticSupported()) {
    console.log('IdentityProvider.close_static 支持');
    // 使用IdentityProvider.close_static
} else {
    console.log('IdentityProvider.close_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IdentityProvider.close_static polyfill
if (!identityprovider.close_static) {
    // 在这里添加polyfill实现
    console.log('加载IdentityProvider.close_static polyfill');
}
```

