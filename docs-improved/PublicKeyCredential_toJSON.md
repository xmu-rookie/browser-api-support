# PublicKeyCredential.toJSON API 兼容性数据

## 基本信息

- **API名称**: `PublicKeyCredential.toJSON`
- **MDN文档**: [PublicKeyCredential.toJSON](https://developer.mozilla.org/docs/Web/API/PublicKeyCredential/toJSON)
- **规范文档**: [查看规范](https://w3c.github.io/webauthn/#dom-publickeycredential-tojson)
- **标签**: `web-features:webauthn`
- **描述**: `toJSON()` method

## 使用示例

### 基本用法

```javascript
// PublicKeyCredential.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('PublicKeyCredential.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 129 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 119 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 129

### Firefox

- **支持版本**: 119

### Safari

- **支持版本**: 18.4

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PublicKeyCredential.toJSON是否支持
function isPublicKeyCredentialToJSONSupported() {
    return 'toJSON' in publickeycredential && typeof publickeycredential.toJSON === 'function';
}

if (isPublicKeyCredentialToJSONSupported()) {
    console.log('PublicKeyCredential.toJSON 支持');
    // 使用PublicKeyCredential.toJSON
} else {
    console.log('PublicKeyCredential.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PublicKeyCredential.toJSON polyfill
if (!publickeycredential.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载PublicKeyCredential.toJSON polyfill');
}
```

