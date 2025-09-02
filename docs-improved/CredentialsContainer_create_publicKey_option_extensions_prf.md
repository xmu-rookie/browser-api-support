# CredentialsContainer.create.publicKey_option.extensions.prf API 兼容性数据

## 基本信息

- **API名称**: `CredentialsContainer.create.publicKey_option.extensions.prf`
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#prf-extension)
- **标签**: `web-features:webauthn`
- **描述**: `prf` extension (pseudo-random function)

## 使用示例

### 基本用法

```javascript
// CredentialsContainer.create.publicKey_option.extensions.prf 使用示例
// 请查阅MDN文档了解具体用法
console.log('CredentialsContainer.create.publicKey_option.extensions.prf API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 139 |  |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 | Only supported on macOS. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 116

### Firefox

- **支持版本**: 139
- **支持版本**: 135
- **移除版本**: 139
- **部分实现**: 是
- **注意事项**:
  - Not supported on macOS.

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 18
- **部分实现**: 是
- **注意事项**:
  - Only supported on macOS.

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CredentialsContainer.create.publicKey_option.extensions.prf是否支持
function isCredentialsContainerCreateSupported() {
    return 'create' in credentialscontainer && typeof credentialscontainer.create === 'function';
}

if (isCredentialsContainerCreateSupported()) {
    console.log('CredentialsContainer.create.publicKey_option.extensions.prf 支持');
    // 使用CredentialsContainer.create.publicKey_option.extensions.prf
} else {
    console.log('CredentialsContainer.create.publicKey_option.extensions.prf 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CredentialsContainer.create.publicKey_option.extensions.prf polyfill
if (!credentialscontainer.create) {
    // 在这里添加polyfill实现
    console.log('加载CredentialsContainer.create.publicKey_option.extensions.prf polyfill');
}
```

