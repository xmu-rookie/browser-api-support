# Permissions.permission_payment-handler API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_payment-handler`
- **标签**: `web-features:payment-handler`
- **描述**: `payment-handler` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_payment-handler 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_payment-handler API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
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

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_payment-handler是否支持
function isPermissionsPermission_payment-handlerSupported() {
    return 'permission_payment-handler' in permissions && typeof permissions.permission_payment-handler === 'function';
}

if (isPermissionsPermission_payment-handlerSupported()) {
    console.log('Permissions.permission_payment-handler 支持');
    // 使用Permissions.permission_payment-handler
} else {
    console.log('Permissions.permission_payment-handler 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_payment-handler polyfill
if (!permissions.permission_payment-handler) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_payment-handler polyfill');
}
```

