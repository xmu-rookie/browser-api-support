# Navigator.getVRDisplays API 兼容性数据

## 基本信息

- **API名称**: `Navigator.getVRDisplays`
- **MDN文档**: [Navigator.getVRDisplays](https://developer.mozilla.org/docs/Web/API/Navigator/getVRDisplays)
- **标签**: `web-features:webvr`

## 使用示例

### 基本用法

```javascript
// Navigator.getVRDisplays 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.getVRDisplays API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 | Available on all platforms behind a flag, but currently only works on desktop in an [experimental ve... |
| Chrome Android | 79 | Currently supported only by Google Daydream. |
| Edge | 15 |  |
| Firefox | 98 |  |
| Firefox Android | 55 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持
- **注意事项**:
  - Available on all platforms behind a flag, but currently only works on desktop in an [experimental version of Chrome](https://webvr.info/get-chrome/) (other builds won't return any devices when `Navigator.getVRDisplays()` is invoked).

### Chrome Android

- **支持版本**: 79
- **移除版本**: 80
- **注意事项**:
  - Currently supported only by Google Daydream.

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

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

