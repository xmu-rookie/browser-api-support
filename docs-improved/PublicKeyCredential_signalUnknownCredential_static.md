# PublicKeyCredential.signalUnknownCredential_static API 兼容性数据

## 基本信息

- **API名称**: `PublicKeyCredential.signalUnknownCredential_static`
- **MDN文档**: [PublicKeyCredential.signalUnknownCredential_static](https://developer.mozilla.org/docs/Web/API/PublicKeyCredential/signalUnknownCredential_static)
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-publickeycredential-signalunknowncredential)
- **描述**: `signalUnknownCredential()` static method

## 使用示例

### 基本用法

```javascript
// PublicKeyCredential.signalUnknownCredential_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('PublicKeyCredential.signalUnknownCredential_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 132

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PublicKeyCredential.signalUnknownCredential_static是否支持
function isPublicKeyCredentialSignalUnknownCredential_staticSupported() {
    return 'signalUnknownCredential_static' in publickeycredential && typeof publickeycredential.signalUnknownCredential_static === 'function';
}

if (isPublicKeyCredentialSignalUnknownCredential_staticSupported()) {
    console.log('PublicKeyCredential.signalUnknownCredential_static 支持');
    // 使用PublicKeyCredential.signalUnknownCredential_static
} else {
    console.log('PublicKeyCredential.signalUnknownCredential_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PublicKeyCredential.signalUnknownCredential_static polyfill
if (!publickeycredential.signalUnknownCredential_static) {
    // 在这里添加polyfill实现
    console.log('加载PublicKeyCredential.signalUnknownCredential_static polyfill');
}
```

