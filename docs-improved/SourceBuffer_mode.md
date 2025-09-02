# SourceBuffer.mode API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer.mode`
- **MDN文档**: [SourceBuffer.mode](https://developer.mozilla.org/docs/Web/API/SourceBuffer/mode)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-sourcebuffer-mode)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// SourceBuffer.mode 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer.mode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 33 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 14 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 3.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Chrome Android

- **支持版本**: 33

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 42

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### Samsung Internet

- **支持版本**: 3.0

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SourceBuffer.mode是否支持
function isSourceBufferModeSupported() {
    return 'mode' in sourcebuffer && typeof sourcebuffer.mode === 'function';
}

if (isSourceBufferModeSupported()) {
    console.log('SourceBuffer.mode 支持');
    // 使用SourceBuffer.mode
} else {
    console.log('SourceBuffer.mode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBuffer.mode polyfill
if (!sourcebuffer.mode) {
    // 在这里添加polyfill实现
    console.log('加载SourceBuffer.mode polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **worker_support**: Available in workers

