# Permissions.permission_gyroscope API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_gyroscope`
- **标签**: `web-features:gyroscope`
- **描述**: `gyroscope` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_gyroscope 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_gyroscope API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
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

- **支持版本**: 51

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_gyroscope是否支持
function isPermissionsPermission_gyroscopeSupported() {
    return 'permission_gyroscope' in permissions && typeof permissions.permission_gyroscope === 'function';
}

if (isPermissionsPermission_gyroscopeSupported()) {
    console.log('Permissions.permission_gyroscope 支持');
    // 使用Permissions.permission_gyroscope
} else {
    console.log('Permissions.permission_gyroscope 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_gyroscope polyfill
if (!permissions.permission_gyroscope) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_gyroscope polyfill');
}
```

