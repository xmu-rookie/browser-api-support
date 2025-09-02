# CredentialsContainer.create API 兼容性数据

## 基本信息

- **API名称**: `CredentialsContainer.create`
- **MDN文档**: [CredentialsContainer.create](https://developer.mozilla.org/docs/Web/API/CredentialsContainer/create)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#dom-credentialscontainer-create)
- **标签**: `web-features:credential-management`

## 使用示例

### 基本用法

```javascript
// CredentialsContainer.create 使用示例
// 请查阅MDN文档了解具体用法
console.log('CredentialsContainer.create API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 60 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 60

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查CredentialsContainer.create是否支持
function isCredentialsContainerCreateSupported() {
    return 'create' in credentialscontainer && typeof credentialscontainer.create === 'function';
}

if (isCredentialsContainerCreateSupported()) {
    console.log('CredentialsContainer.create 支持');
    // 使用CredentialsContainer.create
} else {
    console.log('CredentialsContainer.create 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CredentialsContainer.create polyfill
if (!credentialscontainer.create) {
    // 在这里添加polyfill实现
    console.log('加载CredentialsContainer.create polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **publicKey_option**: `publicKey` option

