# Permissions.permission_magnetometer API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_magnetometer`
- **标签**: `web-features:magnetometer`
- **描述**: `magnetometer` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_magnetometer 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_magnetometer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
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

- **支持版本**: 62
- **需要标志**: 
  - #enable-generic-sensor-extra-classes: Enabled

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_magnetometer是否支持
function isPermissionsPermission_magnetometerSupported() {
    return 'permission_magnetometer' in permissions && typeof permissions.permission_magnetometer === 'function';
}

if (isPermissionsPermission_magnetometerSupported()) {
    console.log('Permissions.permission_magnetometer 支持');
    // 使用Permissions.permission_magnetometer
} else {
    console.log('Permissions.permission_magnetometer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_magnetometer polyfill
if (!permissions.permission_magnetometer) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_magnetometer polyfill');
}
```

