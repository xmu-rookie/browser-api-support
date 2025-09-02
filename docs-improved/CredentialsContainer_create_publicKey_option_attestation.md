# CredentialsContainer.create.publicKey_option.attestation API 兼容性数据

## 基本信息

- **API名称**: `CredentialsContainer.create.publicKey_option.attestation`
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-publickeycredentialcreationoptions-attestation)
- **标签**: `web-features:webauthn`
- **描述**: `attestation` option

## 使用示例

### 基本用法

```javascript
// CredentialsContainer.create.publicKey_option.attestation 使用示例
// 请查阅MDN文档了解具体用法
console.log('CredentialsContainer.create.publicKey_option.attestation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 70 |  |
| Edge | 18 |  |
| Firefox | 60 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 67

### Chrome Android

- **支持版本**: 70

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 60

### Safari

- **支持版本**: 13

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CredentialsContainer.create.publicKey_option.attestation是否支持
function isCredentialsContainerCreateSupported() {
    return 'create' in credentialscontainer && typeof credentialscontainer.create === 'function';
}

if (isCredentialsContainerCreateSupported()) {
    console.log('CredentialsContainer.create.publicKey_option.attestation 支持');
    // 使用CredentialsContainer.create.publicKey_option.attestation
} else {
    console.log('CredentialsContainer.create.publicKey_option.attestation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CredentialsContainer.create.publicKey_option.attestation polyfill
if (!credentialscontainer.create) {
    // 在这里添加polyfill实现
    console.log('加载CredentialsContainer.create.publicKey_option.attestation polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **direct**: 查看详细兼容性
- **enterprise**: 查看详细兼容性
- **indirect**: 查看详细兼容性
- **none**: 查看详细兼容性

