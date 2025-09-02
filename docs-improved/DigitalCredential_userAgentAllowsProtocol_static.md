# DigitalCredential.userAgentAllowsProtocol_static API 兼容性数据

## 基本信息

- **API名称**: `DigitalCredential.userAgentAllowsProtocol_static`
- **规范文档**: [查看规范](https://w3c-fedid.github.io/digital-credentials/#dom-digitalcredential-useragentallowsprotocol)
- **描述**: `userAgentAllowsProtocol()` static method

## 使用示例

### 基本用法

```javascript
// DigitalCredential.userAgentAllowsProtocol_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('DigitalCredential.userAgentAllowsProtocol_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DigitalCredential.userAgentAllowsProtocol_static是否支持
function isDigitalCredentialUserAgentAllowsProtocol_staticSupported() {
    return 'userAgentAllowsProtocol_static' in digitalcredential && typeof digitalcredential.userAgentAllowsProtocol_static === 'function';
}

if (isDigitalCredentialUserAgentAllowsProtocol_staticSupported()) {
    console.log('DigitalCredential.userAgentAllowsProtocol_static 支持');
    // 使用DigitalCredential.userAgentAllowsProtocol_static
} else {
    console.log('DigitalCredential.userAgentAllowsProtocol_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DigitalCredential.userAgentAllowsProtocol_static polyfill
if (!digitalcredential.userAgentAllowsProtocol_static) {
    // 在这里添加polyfill实现
    console.log('加载DigitalCredential.userAgentAllowsProtocol_static polyfill');
}
```

