# IdentityCredential.disconnect_static API 兼容性数据

## 基本信息

- **API名称**: `IdentityCredential.disconnect_static`
- **MDN文档**: [IdentityCredential.disconnect_static](https://developer.mozilla.org/docs/Web/API/IdentityCredential/disconnect_static)
- **规范文档**: [查看规范](https://w3c-fedid.github.io/FedCM/#dom-identitycredential-disconnect)
- **描述**: `disconnect()` static method

## 使用示例

### 基本用法

```javascript
// IdentityCredential.disconnect_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('IdentityCredential.disconnect_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 122 |  |
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

- **支持版本**: 122

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IdentityCredential.disconnect_static是否支持
function isIdentityCredentialDisconnect_staticSupported() {
    return 'disconnect_static' in identitycredential && typeof identitycredential.disconnect_static === 'function';
}

if (isIdentityCredentialDisconnect_staticSupported()) {
    console.log('IdentityCredential.disconnect_static 支持');
    // 使用IdentityCredential.disconnect_static
} else {
    console.log('IdentityCredential.disconnect_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IdentityCredential.disconnect_static polyfill
if (!identitycredential.disconnect_static) {
    // 在这里添加polyfill实现
    console.log('加载IdentityCredential.disconnect_static polyfill');
}
```

