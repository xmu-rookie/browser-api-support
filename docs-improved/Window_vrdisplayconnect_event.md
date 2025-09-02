# Window.vrdisplayconnect_event API 兼容性数据

## 基本信息

- **API名称**: `Window.vrdisplayconnect_event`
- **MDN文档**: [Window.vrdisplayconnect_event](https://developer.mozilla.org/docs/Web/API/Window/vrdisplayconnect_event)
- **标签**: `web-features:webvr`
- **描述**: `vrdisplayconnect` event

## 使用示例

### 基本用法

```javascript
// Window.vrdisplayconnect_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.vrdisplayconnect_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 15 |  |
| Firefox | 98 |  |
| Firefox Android | 55 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 | Supported on Samsung Internet for GearVR. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 15
- **移除版本**: 79

### Firefox

- **支持版本**: 98
- **需要标志**: 
  - dom.vr.enabled: true
- **支持版本**: 64
- **移除版本**: 98
- **注意事项**:
  - Only on macOS and Windows.
- **支持版本**: 55
- **移除版本**: 64
- **注意事项**:
  - Only on Windows.

### Firefox Android

- **支持版本**: 55
- **移除版本**: 98

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 6.0
- **移除版本**: 13.0
- **注意事项**:
  - Supported on Samsung Internet for GearVR.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.vrdisplayconnect_event是否支持
function isWindowVrdisplayconnect_eventSupported() {
    return 'vrdisplayconnect_event' in window && typeof window.vrdisplayconnect_event === 'function';
}

if (isWindowVrdisplayconnect_eventSupported()) {
    console.log('Window.vrdisplayconnect_event 支持');
    // 使用Window.vrdisplayconnect_event
} else {
    console.log('Window.vrdisplayconnect_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.vrdisplayconnect_event polyfill
if (!window.vrdisplayconnect_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.vrdisplayconnect_event polyfill');
}
```

