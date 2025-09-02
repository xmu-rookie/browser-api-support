# Permissions.permission_midi API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_midi`
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#permissions-integration)
- **标签**: `web-features:web-midi`
- **描述**: `midi` permission

## 使用示例

### 基本用法

```javascript
// Permissions.permission_midi 使用示例
// 请查阅MDN文档了解具体用法
console.log('Permissions.permission_midi API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 110 |  |
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

- **支持版本**: 43

### Firefox

- **支持版本**: 110

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Permissions.permission_midi是否支持
function isPermissionsPermission_midiSupported() {
    return 'permission_midi' in permissions && typeof permissions.permission_midi === 'function';
}

if (isPermissionsPermission_midiSupported()) {
    console.log('Permissions.permission_midi 支持');
    // 使用Permissions.permission_midi
} else {
    console.log('Permissions.permission_midi 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Permissions.permission_midi polyfill
if (!permissions.permission_midi) {
    // 在这里添加polyfill实现
    console.log('加载Permissions.permission_midi polyfill');
}
```

