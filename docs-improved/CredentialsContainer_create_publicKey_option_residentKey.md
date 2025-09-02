# CredentialsContainer.create.publicKey_option.residentKey API 兼容性数据

## 基本信息

- **API名称**: `CredentialsContainer.create.publicKey_option.residentKey`
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-authenticatorselectioncriteria-residentkey)
- **标签**: `web-features:webauthn`

## 使用示例

### 基本用法

```javascript
// CredentialsContainer.create.publicKey_option.residentKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('CredentialsContainer.create.publicKey_option.residentKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
| Chrome Android | 108 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 128 |  |
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

- **支持版本**: 89

### Chrome Android

- **支持版本**: 108

### Firefox

- **支持版本**: 114

### Firefox Android

- **支持版本**: 128

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CredentialsContainer.create.publicKey_option.residentKey是否支持
function isCredentialsContainerCreateSupported() {
    return 'create' in credentialscontainer && typeof credentialscontainer.create === 'function';
}

if (isCredentialsContainerCreateSupported()) {
    console.log('CredentialsContainer.create.publicKey_option.residentKey 支持');
    // 使用CredentialsContainer.create.publicKey_option.residentKey
} else {
    console.log('CredentialsContainer.create.publicKey_option.residentKey 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CredentialsContainer.create.publicKey_option.residentKey polyfill
if (!credentialscontainer.create) {
    // 在这里添加polyfill实现
    console.log('加载CredentialsContainer.create.publicKey_option.residentKey polyfill');
}
```

