# Permissions.permission_screen-wake-lock API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_screen-wake-lock`
- **规范文档**: [查看规范](https://w3c.github.io/screen-wake-lock/#the-screen-wake-lock-powerful-feature)
- **标签**: `web-features:screen-wake-lock`
- **描述**: `screen-wake-lock` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_screen-wake-lock 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_screen-wake-lock API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
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

- **支持版本**: 84

### Firefox

- **支持版本**: 126
- **支持版本**: 122
- **移除版本**: 126
- **部分实现**: 是
- **注意事项**:
  - The value is recognized, but has no effect.

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_screen-wake-lock是否支持
function isPermissionsPermission_screen-wake-lockSupported() {
    return 'permission_screen-wake-lock' in permissions && typeof permissions.permission_screen-wake-lock === 'function';
}

if (isPermissionsPermission_screen-wake-lockSupported()) {
    console.log('Permissions.permission_screen-wake-lock 支持');
    // 使用Permissions.permission_screen-wake-lock
} else {
    console.log('Permissions.permission_screen-wake-lock 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_screen-wake-lock polyfill
if (!permissions.permission_screen-wake-lock) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_screen-wake-lock polyfill');
}
```

