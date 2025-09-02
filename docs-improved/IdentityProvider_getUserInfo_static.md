# IdentityProvider.getUserInfo_static API 兼容性数据

## 基本信息

- **API名称**: `IdentityProvider.getUserInfo_static`
- **MDN文档**: [IdentityProvider.getUserInfo_static](https://developer.mozilla.org/docs/Web/API/IdentityProvider/getUserInfo_static)
- **规范文档**: [查看规范](https://w3c-fedid.github.io/FedCM/#dom-identityprovider-getuserinfo)
- **描述**: `getUserInfo()` static method

## 使用示例

### 基本用法

```javascript
// IdentityProvider.getUserInfo_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('IdentityProvider.getUserInfo_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 |  |
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

- **支持版本**: 116

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IdentityProvider.getUserInfo_static是否支持
function isIdentityProviderGetUserInfo_staticSupported() {
    return 'getUserInfo_static' in identityprovider && typeof identityprovider.getUserInfo_static === 'function';
}

if (isIdentityProviderGetUserInfo_staticSupported()) {
    console.log('IdentityProvider.getUserInfo_static 支持');
    // 使用IdentityProvider.getUserInfo_static
} else {
    console.log('IdentityProvider.getUserInfo_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IdentityProvider.getUserInfo_static polyfill
if (!identityprovider.getUserInfo_static) {
    // 在这里添加polyfill实现
    console.log('加载IdentityProvider.getUserInfo_static polyfill');
}
```

