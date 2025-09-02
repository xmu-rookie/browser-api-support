# HTMLMediaElement.canPlayType API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.canPlayType`
- **MDN文档**: [HTMLMediaElement.canPlayType](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/canPlayType)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-navigator-canplaytype-dev)
- **标签**: `web-features:video`
- **描述**: `canPlayType()`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.canPlayType 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.canPlayType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Chrome Android | 同主版本 |  |
| Edge | 12 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Firefox | 3.5 | Before Firefox 28, `canPlayType()` returned `probably` when asked about WebM audio or video files wi... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Opera Android | ≤12.1 | `codecs` string can contain any subset of optional parameters (should be all or none).; Errors if `c... |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Edge

- **支持版本**: 12
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Firefox

- **支持版本**: 3.5
- **注意事项**:
  - Before Firefox 28, `canPlayType()` returned `probably` when asked about WebM audio or video files without the `codecs` parameter. Since multiple codecs are supported, this is not enough information to determine if a file can be played, so `maybe` is now correctly returned.
  - Before Firefox 101, `canPlayType()` ignored `codecs` parameter options for `av01` codecs (treating them as `av1`).

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - `codecs` string can contain any subset of optional parameters (should be all or none).
  - Errors if `codecs` string contains unexpected characters (should evaluate string up to character).

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.canPlayType是否支持
function isHTMLMediaElementCanPlayTypeSupported() {
    return 'canPlayType' in htmlmediaelement && typeof htmlmediaelement.canPlayType === 'function';
}

if (isHTMLMediaElementCanPlayTypeSupported()) {
    console.log('HTMLMediaElement.canPlayType 支持');
    // 使用HTMLMediaElement.canPlayType
} else {
    console.log('HTMLMediaElement.canPlayType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.canPlayType polyfill
if (!htmlmediaelement.canPlayType) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.canPlayType polyfill');
}
```

