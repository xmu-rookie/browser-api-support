# Credential.isConditionalMediationAvailable_static API 兼容性数据

## 基本信息

- **API名称**: `Credential.isConditionalMediationAvailable_static`
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#dom-credential-isconditionalmediationavailable)
- **标签**: `web-features:credential-management`
- **描述**: `isConditionalMediationAvailable()` static method

## 使用示例

### 基本用法

```javascript
// Credential.isConditionalMediationAvailable_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Credential.isConditionalMediationAvailable_static API');
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
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16

## 兼容性检查代码

### 特性检测

```javascript
// 检查Credential.isConditionalMediationAvailable_static是否支持
function isCredentialIsConditionalMediationAvailable_staticSupported() {
    return 'isConditionalMediationAvailable_static' in credential && typeof credential.isConditionalMediationAvailable_static === 'function';
}

if (isCredentialIsConditionalMediationAvailable_staticSupported()) {
    console.log('Credential.isConditionalMediationAvailable_static 支持');
    // 使用Credential.isConditionalMediationAvailable_static
} else {
    console.log('Credential.isConditionalMediationAvailable_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Credential.isConditionalMediationAvailable_static polyfill
if (!credential.isConditionalMediationAvailable_static) {
    // 在这里添加polyfill实现
    console.log('加载Credential.isConditionalMediationAvailable_static polyfill');
}
```

