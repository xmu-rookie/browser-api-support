# MediaCapabilities.decodingInfo API 兼容性数据

## 基本信息

- **API名称**: `MediaCapabilities.decodingInfo`
- **MDN文档**: [MediaCapabilities.decodingInfo](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/decodingInfo)
- **规范文档**: [查看规范](https://w3c.github.io/media-capabilities/#dom-mediacapabilities-decodinginfo)
- **标签**: `web-features:media-capabilities`

## 使用示例

### 基本用法

```javascript
// MediaCapabilities.decodingInfo 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaCapabilities.decodingInfo API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 | The `webrtc` value of the `type` option is named `transmission`.; Before Firefox 101, `decodingInfo(... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 48 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Firefox

- **支持版本**: 63
- **注意事项**:
  - The `webrtc` value of the `type` option is named `transmission`.
  - Before Firefox 101, `decodingInfo()` ignored `codecs` parameter options for `av01` codecs (treating them as `av1`).

### Opera Android

- **支持版本**: 48
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Safari

- **支持版本**: 13

## 相关子API

该API包含以下子功能：

- **configuration_keySystemConfiguration_parameter**: `configuration.keySystemConfiguration` parameter

