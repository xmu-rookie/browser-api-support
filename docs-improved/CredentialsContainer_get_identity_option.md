# CredentialsContainer.get.identity_option API 兼容性数据

## 基本信息

- **API名称**: `CredentialsContainer.get.identity_option`
- **规范文档**: [查看规范](https://w3c-fedid.github.io/FedCM/#dom-credentialrequestoptions-identity)
- **标签**: `web-features:fedcm`
- **描述**: `identity` option

## 使用示例

### 基本用法

```javascript
// CredentialsContainer.get.identity_option 使用示例
// 请查阅MDN文档了解具体用法
console.log('CredentialsContainer.get.identity_option API');
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
// 检查CredentialsContainer.get.identity_option是否支持
function isCredentialsContainerGetSupported() {
    return 'get' in credentialscontainer && typeof credentialscontainer.get === 'function';
}

if (isCredentialsContainerGetSupported()) {
    console.log('CredentialsContainer.get.identity_option 支持');
    // 使用CredentialsContainer.get.identity_option
} else {
    console.log('CredentialsContainer.get.identity_option 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CredentialsContainer.get.identity_option polyfill
if (!credentialscontainer.get) {
    // 在这里添加polyfill实现
    console.log('加载CredentialsContainer.get.identity_option polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **context_option**: `identity.context`
- **error_api**: Error API
- **mode_option**: `identity.mode`
- **providers_multiple**: Support for multiple `providers`
- **providers_option_domainHint**: `identity.providers.domainHint`
- **providers_option_fields**: `identity.providers.fields`
- **providers_option_loginHint**: `identity.providers.loginHint`
- **providers_option_params**: `identity.providers.params`

