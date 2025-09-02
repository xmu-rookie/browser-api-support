# Permissions.permission_top-level-storage-access API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_top-level-storage-access`
- **规范文档**: [查看规范](https://privacycg.github.io/requestStorageAccessFor/#permissions-integration)
- **标签**: `web-features:storage-access`
- **描述**: `top-level-storage-access` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_top-level-storage-access 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_top-level-storage-access API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 |  |
| Chrome Android | 120 |  |
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

- **支持版本**: 113

### Chrome Android

- **支持版本**: 120

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_top-level-storage-access是否支持
function isPermissionsPermission_top-level-storage-accessSupported() {
    return 'permission_top-level-storage-access' in permissions && typeof permissions.permission_top-level-storage-access === 'function';
}

if (isPermissionsPermission_top-level-storage-accessSupported()) {
    console.log('Permissions.permission_top-level-storage-access 支持');
    // 使用Permissions.permission_top-level-storage-access
} else {
    console.log('Permissions.permission_top-level-storage-access 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_top-level-storage-access polyfill
if (!permissions.permission_top-level-storage-access) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_top-level-storage-access polyfill');
}
```

