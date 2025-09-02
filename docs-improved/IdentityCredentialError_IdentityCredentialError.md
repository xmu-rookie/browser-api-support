# IdentityCredentialError.IdentityCredentialError API 兼容性数据

## 基本信息

- **API名称**: `IdentityCredentialError.IdentityCredentialError`
- **规范文档**: [查看规范](https://w3c-fedid.github.io/FedCM/#dom-identitycredentialerror-identitycredentialerror)
- **描述**: `IdentityCredentialError()` constructor

## 使用示例

### 基本用法

```javascript
// IdentityCredentialError.IdentityCredentialError 使用示例
// 请查阅MDN文档了解具体用法
console.log('IdentityCredentialError.IdentityCredentialError API');
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 120

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IdentityCredentialError.IdentityCredentialError是否支持
function isIdentityCredentialErrorIdentityCredentialErrorSupported() {
    return 'IdentityCredentialError' in identitycredentialerror && typeof identitycredentialerror.IdentityCredentialError === 'function';
}

if (isIdentityCredentialErrorIdentityCredentialErrorSupported()) {
    console.log('IdentityCredentialError.IdentityCredentialError 支持');
    // 使用IdentityCredentialError.IdentityCredentialError
} else {
    console.log('IdentityCredentialError.IdentityCredentialError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IdentityCredentialError.IdentityCredentialError polyfill
if (!identitycredentialerror.IdentityCredentialError) {
    // 在这里添加polyfill实现
    console.log('加载IdentityCredentialError.IdentityCredentialError polyfill');
}
```

