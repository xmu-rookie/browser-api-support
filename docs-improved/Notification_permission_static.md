# Notification.permission_static API 兼容性数据

## 基本信息

- **API名称**: `Notification.permission_static`
- **MDN文档**: [Notification.permission_static](https://developer.mozilla.org/docs/Web/API/Notification/permission_static)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-permission)
- **标签**: `web-features:notifications`
- **描述**: `permission` static property

## 使用示例

### 基本用法

```javascript
// Notification.permission_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.permission_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 32 |  |
| Chrome Android | 42 |  |
| Edge | 14 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 16.4 | The parent <code>Notification</code> interface is undefined unless the page is a web app saved to th... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 32

### Chrome Android

- **支持版本**: 42

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 22

### Opera

- **支持版本**: 23

### Safari

- **支持版本**: 7

### Safari iOS

- **支持版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - The parent <code>Notification</code> interface is undefined unless the page is a web app saved to the home screen. The app's manifest must have a non-default <code>display</code> value.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.permission_static是否支持
function isNotificationPermission_staticSupported() {
    return 'permission_static' in notification && typeof notification.permission_static === 'function';
}

if (isNotificationPermission_staticSupported()) {
    console.log('Notification.permission_static 支持');
    // 使用Notification.permission_static
} else {
    console.log('Notification.permission_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.permission_static polyfill
if (!notification.permission_static) {
    // 在这里添加polyfill实现
    console.log('加载Notification.permission_static polyfill');
}
```

