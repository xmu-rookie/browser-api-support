# Permissions.permission_ambient-light-sensor API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_ambient-light-sensor`
- **标签**: `web-features:ambient-light`
- **描述**: `ambient-light-sensor` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_ambient-light-sensor 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_ambient-light-sensor API');
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
  - #enable-experimental-web-platform-features: Enabled

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_ambient-light-sensor是否支持
function isPermissionsPermission_ambient-light-sensorSupported() {
    return 'permission_ambient-light-sensor' in permissions && typeof permissions.permission_ambient-light-sensor === 'function';
}

if (isPermissionsPermission_ambient-light-sensorSupported()) {
    console.log('Permissions.permission_ambient-light-sensor 支持');
    // 使用Permissions.permission_ambient-light-sensor
} else {
    console.log('Permissions.permission_ambient-light-sensor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_ambient-light-sensor polyfill
if (!permissions.permission_ambient-light-sensor) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_ambient-light-sensor polyfill');
}
```

