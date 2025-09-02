# SourceBuffer.abort_event API 兼容性数据

## 基本信息

- **API名称**: `SourceBuffer.abort_event`
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dfn-abort,https://w3c.github.io/media-source/#dom-sourcebuffer-onabort)
- **标签**: `web-features:media-source`
- **描述**: `abort` event

## 使用示例

### 基本用法

```javascript
// SourceBuffer.abort_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBuffer.abort_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 42 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53
- **支持版本**: 31
- **移除版本**: 53
- **部分实现**: 是
- **注意事项**:
  - The `onabort` event handler property is not supported.

### Edge

- **支持版本**: 17
- **支持版本**: 12
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - The `onabort` event handler property is not supported.

### Firefox

- **支持版本**: 42

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Safari

- **支持版本**: 10.1
- **支持版本**: 8
- **移除版本**: 10.1
- **部分实现**: 是
- **注意事项**:
  - The `onabort` event handler property is not supported.

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
// 检查SourceBuffer.abort_event是否支持
function isSourceBufferAbort_eventSupported() {
    return 'abort_event' in sourcebuffer && typeof sourcebuffer.abort_event === 'function';
}

if (isSourceBufferAbort_eventSupported()) {
    console.log('SourceBuffer.abort_event 支持');
    // 使用SourceBuffer.abort_event
} else {
    console.log('SourceBuffer.abort_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SourceBuffer.abort_event polyfill
if (!sourcebuffer.abort_event) {
    // 在这里添加polyfill实现
    console.log('加载SourceBuffer.abort_event polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **worker_support**: Available in workers

