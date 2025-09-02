# MediaSource.isTypeSupported_static API 兼容性数据

## 基本信息

- **API名称**: `MediaSource.isTypeSupported_static`
- **MDN文档**: [MediaSource.isTypeSupported_static](https://developer.mozilla.org/docs/Web/API/MediaSource/isTypeSupported_static)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-mediasource-istypesupported)
- **标签**: `web-features:media-source`
- **描述**: `isTypeSupported()` static method

## 使用示例

### 基本用法

```javascript
// MediaSource.isTypeSupported_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSource.isTypeSupported_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Chrome Android | 同主版本 |  |
| Edge | 12 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Firefox | 42 | Before Firefox 101, `isTypeSupported()` ignored `codecs` parameter options for `av01` codecs (treati... |
| Firefox Android | 41 | Before Firefox 101, `isTypeSupported()` ignored `codecs` parameter options for `av01` codecs (treati... |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Edge

- **支持版本**: 12
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Firefox

- **支持版本**: 42
- **注意事项**:
  - Before Firefox 101, `isTypeSupported()` ignored `codecs` parameter options for `av01` codecs (treating them as `av1`).

### Firefox Android

- **支持版本**: 41
- **注意事项**:
  - Before Firefox 101, `isTypeSupported()` ignored `codecs` parameter options for `av01` codecs (treating them as `av1`).

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### WebView Android

- **支持版本**: 4.4.3
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSource.isTypeSupported_static是否支持
function isMediaSourceIsTypeSupported_staticSupported() {
    return 'isTypeSupported_static' in mediasource && typeof mediasource.isTypeSupported_static === 'function';
}

if (isMediaSourceIsTypeSupported_staticSupported()) {
    console.log('MediaSource.isTypeSupported_static 支持');
    // 使用MediaSource.isTypeSupported_static
} else {
    console.log('MediaSource.isTypeSupported_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSource.isTypeSupported_static polyfill
if (!mediasource.isTypeSupported_static) {
    // 在这里添加polyfill实现
    console.log('加载MediaSource.isTypeSupported_static polyfill');
}
```

