# MediaDevices.enumerateDevices API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.enumerateDevices`
- **MDN文档**: [MediaDevices.enumerateDevices](https://developer.mozilla.org/docs/Web/API/MediaDevices/enumerateDevices)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediadevices-enumeratedevices)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaDevices.enumerateDevices 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.enumerateDevices API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 116 | `enumerateDevices()` enumerates both input and output devices. Previously only input devices were re... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 116
- **注意事项**:
  - `enumerateDevices()` enumerates both input and output devices. Previously only input devices were returned.
- **支持版本**: 39
- **移除版本**: 116
- **部分实现**: 是
- **注意事项**:
  - `enumerateDevices()` only returns input devices.

### Safari

- **支持版本**: 11

