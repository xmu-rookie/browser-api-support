# CredentialsContainer.store API 兼容性数据

## 基本信息

- **API名称**: `CredentialsContainer.store`
- **MDN文档**: [CredentialsContainer.store](https://developer.mozilla.org/docs/Web/API/CredentialsContainer/store)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#dom-credentialscontainer-store)
- **标签**: `web-features:credential-management`

## 使用示例

### 基本用法

```javascript
// CredentialsContainer.store 使用示例
// 请查阅MDN文档了解具体用法
console.log('CredentialsContainer.store API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
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

- **支持版本**: 51

### Firefox

- **支持版本**: 60

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查CredentialsContainer.store是否支持
function isCredentialsContainerStoreSupported() {
    return 'store' in credentialscontainer && typeof credentialscontainer.store === 'function';
}

if (isCredentialsContainerStoreSupported()) {
    console.log('CredentialsContainer.store 支持');
    // 使用CredentialsContainer.store
} else {
    console.log('CredentialsContainer.store 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CredentialsContainer.store polyfill
if (!credentialscontainer.store) {
    // 在这里添加polyfill实现
    console.log('加载CredentialsContainer.store polyfill');
}
```

