# Credential.type API 兼容性数据

## 基本信息

- **API名称**: `Credential.type`
- **MDN文档**: [Credential.type](https://developer.mozilla.org/docs/Web/API/Credential/type)
- **规范文档**: [查看规范](https://w3c.github.io/webappsec-credential-management/#dom-credential-type)
- **标签**: `web-features:credential-management`

## 使用示例

### 基本用法

```javascript
// Credential.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('Credential.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
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

- **支持版本**: 51

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 60

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Credential.type是否支持
function isCredentialTypeSupported() {
    return 'type' in credential && typeof credential.type === 'function';
}

if (isCredentialTypeSupported()) {
    console.log('Credential.type 支持');
    // 使用Credential.type
} else {
    console.log('Credential.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Credential.type polyfill
if (!credential.type) {
    // 在这里添加polyfill实现
    console.log('加载Credential.type polyfill');
}
```

