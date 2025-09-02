# Permissions.permission_window-management API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_window-management`
- **规范文档**: [查看规范](https://w3c.github.io/window-management/#api-permission-api-integration)
- **标签**: `web-features:window-management`
- **描述**: `window-management` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_window-management 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_window-management API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 111 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 111

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_window-management是否支持
function isPermissionsPermission_window-managementSupported() {
    return 'permission_window-management' in permissions && typeof permissions.permission_window-management === 'function';
}

if (isPermissionsPermission_window-managementSupported()) {
    console.log('Permissions.permission_window-management 支持');
    // 使用Permissions.permission_window-management
} else {
    console.log('Permissions.permission_window-management 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_window-management polyfill
if (!permissions.permission_window-management) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_window-management polyfill');
}
```

