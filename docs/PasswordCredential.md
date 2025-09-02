# PasswordCredential API 兼容性数据

## 基本信息

- **API名称**: `PasswordCredential`
- **MDN文档**: [PasswordCredential](https://developer.mozilla.org/docs/Web/API/PasswordCredential)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#passwordcredential-interface)
- **标签**: `web-features:password-credentials`

## 使用示例

### 基本用法

```javascript
// PasswordCredential 使用示例
// 请查阅MDN文档了解具体用法
console.log('PasswordCredential API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
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
// 检查PasswordCredential是否支持
function isPasswordCredentialSupported() {
    return 'PasswordCredential' in window || typeof PasswordCredential !== 'undefined';
}

if (isPasswordCredentialSupported()) {
    console.log('PasswordCredential 支持');
    // 使用PasswordCredential
} else {
    console.log('PasswordCredential 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PasswordCredential polyfill
if (!window.PasswordCredential) {
    // 在这里添加polyfill实现
    console.log('加载PasswordCredential polyfill');
}
```

