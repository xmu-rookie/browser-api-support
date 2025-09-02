# MediaSource.MediaSource API 兼容性数据

## 基本信息

- **API名称**: `MediaSource.MediaSource`
- **MDN文档**: [MediaSource.MediaSource](https://developer.mozilla.org/docs/Web/API/MediaSource/MediaSource)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-mediasource-constructor)
- **标签**: `web-features:media-source`
- **描述**: `MediaSource()` constructor

## 使用示例

### 基本用法

```javascript
// MediaSource.MediaSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSource.MediaSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 33 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 41 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31
- **支持版本**: 23
- **移除版本**: 31
- **前缀**: WebKit

### Chrome Android

- **支持版本**: 33

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 42

### Firefox Android

- **支持版本**: 41

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSource.MediaSource是否支持
function isMediaSourceMediaSourceSupported() {
    return 'MediaSource' in mediasource && typeof mediasource.MediaSource === 'function';
}

if (isMediaSourceMediaSourceSupported()) {
    console.log('MediaSource.MediaSource 支持');
    // 使用MediaSource.MediaSource
} else {
    console.log('MediaSource.MediaSource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSource.MediaSource polyfill
if (!mediasource.MediaSource) {
    // 在这里添加polyfill实现
    console.log('加载MediaSource.MediaSource polyfill');
}
```

