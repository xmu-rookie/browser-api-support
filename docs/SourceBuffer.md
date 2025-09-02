# SourceBuffer API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer`
- **MDN文档**: [SourceBuffer](https://developer.mozilla.org/docs/Web/API/SourceBuffer)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#sourcebuffer)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// SourceBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 13 (部分支持) | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 未知 |  |
| WebView Android | 同主版本 |  |
| webview_ios | ❌ 不支持 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 42

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

### Samsung Internet


### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SourceBuffer是否支持
function isSourceBufferSupported() {
    return 'SourceBuffer' in window || typeof SourceBuffer !== 'undefined';
}

if (isSourceBufferSupported()) {
    console.log('SourceBuffer 支持');
    // 使用SourceBuffer
} else {
    console.log('SourceBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBuffer polyfill
if (!window.SourceBuffer) {
    // 在这里添加polyfill实现
    console.log('加载SourceBuffer polyfill');
}
```

