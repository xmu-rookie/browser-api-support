# PasswordCredential.iconURL API 兼容性数据

## 基本信息

- **API名称**: `PasswordCredential.iconURL`
- **MDN文档**: [PasswordCredential.iconURL](https://developer.mozilla.org/docs/Web/API/PasswordCredential/iconURL)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#dom-credentialuserdata-iconurl)
- **标签**: `web-features:password-credentials`

## 使用示例

### 基本用法

```javascript
// PasswordCredential.iconURL 使用示例
// 请查阅MDN文档了解具体用法
console.log('PasswordCredential.iconURL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
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

- **支持版本**: 51

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PasswordCredential.iconURL是否支持
function isPasswordCredentialIconURLSupported() {
    return 'iconURL' in passwordcredential && typeof passwordcredential.iconURL === 'function';
}

if (isPasswordCredentialIconURLSupported()) {
    console.log('PasswordCredential.iconURL 支持');
    // 使用PasswordCredential.iconURL
} else {
    console.log('PasswordCredential.iconURL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PasswordCredential.iconURL polyfill
if (!passwordcredential.iconURL) {
    // 在这里添加polyfill实现
    console.log('加载PasswordCredential.iconURL polyfill');
}
```

