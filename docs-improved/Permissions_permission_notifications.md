# Permissions.permission_notifications API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_notifications`
- **标签**: `web-features:notifications`
- **描述**: `notifications` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_notifications 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_notifications API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 46 | Alias for the `push` permission (returns the same value). |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 43

### Firefox

- **支持版本**: 46
- **注意事项**:
  - Alias for the `push` permission (returns the same value).

### Safari

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_notifications是否支持
function isPermissionsPermission_notificationsSupported() {
    return 'permission_notifications' in permissions && typeof permissions.permission_notifications === 'function';
}

if (isPermissionsPermission_notificationsSupported()) {
    console.log('Permissions.permission_notifications 支持');
    // 使用Permissions.permission_notifications
} else {
    console.log('Permissions.permission_notifications 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_notifications polyfill
if (!permissions.permission_notifications) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_notifications polyfill');
}
```

