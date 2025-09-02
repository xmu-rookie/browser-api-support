# IdentityCredential.token API 兼容性数据

## 基本信息

- **API名称**: `IdentityCredential.token`
- **MDN文档**: [IdentityCredential.token](https://developer.mozilla.org/docs/Web/API/IdentityCredential/token)
- **规范文档**: [查看规范](https://w3c-fedid.github.io/FedCM/#dom-identitycredential-token)
- **标签**: `web-features:fedcm`

## 使用示例

### 基本用法

```javascript
// IdentityCredential.token 使用示例
// 请查阅MDN文档了解具体用法
console.log('IdentityCredential.token API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 |  |
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

- **支持版本**: 108

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IdentityCredential.token是否支持
function isIdentityCredentialTokenSupported() {
    return 'token' in identitycredential && typeof identitycredential.token === 'function';
}

if (isIdentityCredentialTokenSupported()) {
    console.log('IdentityCredential.token 支持');
    // 使用IdentityCredential.token
} else {
    console.log('IdentityCredential.token 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IdentityCredential.token polyfill
if (!identitycredential.token) {
    // 在这里添加polyfill实现
    console.log('加载IdentityCredential.token polyfill');
}
```

