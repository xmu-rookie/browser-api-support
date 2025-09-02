# PushManager.supportedContentEncodings_static API 兼容性数据

## 基本信息

- **API名称**: `PushManager.supportedContentEncodings_static`
- **MDN文档**: [PushManager.supportedContentEncodings_static](https://developer.mozilla.org/docs/Web/API/PushManager/supportedContentEncodings_static)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-pushmanager-supportedcontentencodings)
- **标签**: `web-features:push`
- **描述**: `supportedContentEncodings` static property

## 使用示例

### 基本用法

```javascript
// PushManager.supportedContentEncodings_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushManager.supportedContentEncodings_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 134 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 4.0 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 | Notifications are supported in web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 134

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

### Samsung Internet

- **支持版本**: 4.0

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

## 兼容性检查代码

### 特性检测

```javascript
// 检查PushManager.supportedContentEncodings_static是否支持
function isPushManagerSupportedContentEncodings_staticSupported() {
    return 'supportedContentEncodings_static' in pushmanager && typeof pushmanager.supportedContentEncodings_static === 'function';
}

if (isPushManagerSupportedContentEncodings_staticSupported()) {
    console.log('PushManager.supportedContentEncodings_static 支持');
    // 使用PushManager.supportedContentEncodings_static
} else {
    console.log('PushManager.supportedContentEncodings_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PushManager.supportedContentEncodings_static polyfill
if (!pushmanager.supportedContentEncodings_static) {
    // 在这里添加polyfill实现
    console.log('加载PushManager.supportedContentEncodings_static polyfill');
}
```

