# Permissions.permission_storage-access API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_storage-access`
- **规范文档**: [查看规范](https://privacycg.github.io/storage-access/#permissions-integration)
- **标签**: `web-features:storage-access`
- **描述**: `storage-access` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_storage-access 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_storage-access API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 119 |  |
| Chrome Android | 120 |  |
| Edge | 85 |  |
| Firefox | 117 |  |
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

- **支持版本**: 119

### Chrome Android

- **支持版本**: 120

### Edge

- **支持版本**: 85

### Firefox

- **支持版本**: 117

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_storage-access是否支持
function isPermissionsPermission_storage-accessSupported() {
    return 'permission_storage-access' in permissions && typeof permissions.permission_storage-access === 'function';
}

if (isPermissionsPermission_storage-accessSupported()) {
    console.log('Permissions.permission_storage-access 支持');
    // 使用Permissions.permission_storage-access
} else {
    console.log('Permissions.permission_storage-access 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_storage-access polyfill
if (!permissions.permission_storage-access) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_storage-access polyfill');
}
```

