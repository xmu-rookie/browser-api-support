# Permissions.permission_microphone API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_microphone`
- **标签**: `web-features:media-capture`
- **描述**: `microphone` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_microphone 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_microphone API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 132 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Firefox

- **支持版本**: 132

### Safari

- **支持版本**: 16

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_microphone是否支持
function isPermissionsPermission_microphoneSupported() {
    return 'permission_microphone' in permissions && typeof permissions.permission_microphone === 'function';
}

if (isPermissionsPermission_microphoneSupported()) {
    console.log('Permissions.permission_microphone 支持');
    // 使用Permissions.permission_microphone
} else {
    console.log('Permissions.permission_microphone 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_microphone polyfill
if (!permissions.permission_microphone) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_microphone polyfill');
}
```

