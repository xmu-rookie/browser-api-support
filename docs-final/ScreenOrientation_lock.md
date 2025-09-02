# ScreenOrientation.lock API 兼容性数据

## 基本信息

- **API名称**: `ScreenOrientation.lock`
- **MDN文档**: [ScreenOrientation.lock](https://developer.mozilla.org/docs/Web/API/ScreenOrientation/lock)
- **规范文档**: [查看规范](https://w3c.github.io/screen-orientation/#dom-screenorientation-lock)
- **标签**: `web-features:screen-orientation-lock`

## 使用示例

### 基本用法

```javascript
// ScreenOrientation.lock 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScreenOrientation.lock API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 | Always throws `NotSupportedError`. |
| Chrome Android | 38 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
| Firefox Android | 79 | The API exists but returns `NS_ERROR_UNEXPECTED`. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38
- **部分实现**: 是
- **注意事项**:
  - Always throws `NotSupportedError`.

### Chrome Android

- **支持版本**: 38

### Firefox

- **支持版本**: preview
- **支持版本**: 43
- **部分实现**: 是
- **注意事项**:
  - Always throws `NotSupportedError`.
- **支持版本**: 97
- **需要标志**: 
  - dom.screenorientation.allow-lock: true

### Firefox Android

- **支持版本**: 79
- **移除版本**: 97
- **部分实现**: 是
- **注意事项**:
  - The API exists but returns `NS_ERROR_UNEXPECTED`.
- **支持版本**: 43
- **移除版本**: 79

### Safari

- **支持版本**: 不支持

