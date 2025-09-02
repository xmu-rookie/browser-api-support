# Permissions.request API 兼容性数据

## 基本信息

- **API名称**: `Permissions.request`
- **规范文档**: [查看规范](https://wicg.github.io/permissions-request/#dom-permissions-request)
- **标签**: `web-features:permissions`

## 使用示例

### 基本用法

```javascript
// Permissions.request 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.request API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 46 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 46
- **需要标志**: 
  - #enable-experimental-web-platform-features: Enabled

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.request是否支持
function isPermissionsRequestSupported() {
    return 'request' in permissions && typeof permissions.request === 'function';
}

if (isPermissionsRequestSupported()) {
    console.log('Permissions.request 支持');
    // 使用Permissions.request
} else {
    console.log('Permissions.request 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.request polyfill
if (!permissions.request) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.request polyfill');
}
```

