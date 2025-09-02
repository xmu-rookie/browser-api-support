# Notification.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `Notification.secure_context_required`
- **标签**: `web-features:notifications`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// Notification.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.secure_context_required API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 67 |  |
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

- **支持版本**: 62

### Firefox

- **支持版本**: 67

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.secure_context_required是否支持
function isNotificationSecure_context_requiredSupported() {
    return 'secure_context_required' in notification && typeof notification.secure_context_required === 'function';
}

if (isNotificationSecure_context_requiredSupported()) {
    console.log('Notification.secure_context_required 支持');
    // 使用Notification.secure_context_required
} else {
    console.log('Notification.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.secure_context_required polyfill
if (!notification.secure_context_required) {
    // 在这里添加polyfill实现
    console.log('加载Notification.secure_context_required polyfill');
}
```

