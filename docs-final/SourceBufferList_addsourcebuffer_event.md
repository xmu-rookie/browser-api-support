# SourceBufferList.addsourcebuffer_event API 兼容性数据

## 基本信息

- **API名称**: `SourceBufferList.addsourcebuffer_event`
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dfn-addsourcebuffer,https://w3c.github.io/media-source/#dom-sourcebufferlist-onaddsourcebuffer)
- **标签**: `web-features:media-source`
- **描述**: `addsourcebuffer` event

## 使用示例

### 基本用法

```javascript
// SourceBufferList.addsourcebuffer_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SourceBufferList.addsourcebuffer_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 42 |  |
| Firefox Android | 41 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53
- **支持版本**: 31
- **移除版本**: 53
- **部分实现**: 是
- **注意事项**:
  - The `onaddsourcebuffer` event handler property is not supported.

### Edge

- **支持版本**: 17
- **支持版本**: 12
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - The `onaddsourcebuffer` event handler property is not supported.

### Firefox

- **支持版本**: 42

### Firefox Android

- **支持版本**: 41

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
  - The `onaddsourcebuffer` event handler property is not supported.

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

## 相关子API

该API包含以下子功能：

- **worker_support**: Available in workers

