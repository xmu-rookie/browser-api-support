# ServiceWorkerRegistration.showNotification.options_vibrate_parameter API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.showNotification.options_vibrate_parameter`
- **标签**: `web-features:notifications`
- **描述**: `options.vibrate` parameter

## 使用示例

### 基本用法

```javascript
// 使用振动API
// 振动200毫秒
navigator.vibrate(200);

// 振动模式：振动-停止-振动
navigator.vibrate([200, 100, 200]);
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 不支持 | In Android Oreo and above, regardless of Chrome version, this parameter has no effect. See <a href='... |
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

- **支持版本**: 45

### Chrome Android

- **支持版本**: 不支持
- **注意事项**:
  - In Android Oreo and above, regardless of Chrome version, this parameter has no effect. See <a href='https://crbug.com/40630890'>bug 40630890</a>.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

