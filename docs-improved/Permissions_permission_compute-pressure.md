# Permissions.permission_compute-pressure API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_compute-pressure`
- **规范文档**: [查看规范](https://w3c.github.io/compute-pressure/#policy-control)
- **标签**: `web-features:compute-pressure`
- **描述**: `compute-pressure` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_compute-pressure 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_compute-pressure API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
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

- **支持版本**: 125

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_compute-pressure是否支持
function isPermissionsPermission_compute-pressureSupported() {
    return 'permission_compute-pressure' in permissions && typeof permissions.permission_compute-pressure === 'function';
}

if (isPermissionsPermission_compute-pressureSupported()) {
    console.log('Permissions.permission_compute-pressure 支持');
    // 使用Permissions.permission_compute-pressure
} else {
    console.log('Permissions.permission_compute-pressure 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_compute-pressure polyfill
if (!permissions.permission_compute-pressure) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_compute-pressure polyfill');
}
```

