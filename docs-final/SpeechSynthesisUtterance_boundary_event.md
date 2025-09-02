# SpeechSynthesisUtterance.boundary_event API 兼容性数据

## 基本信息

- **API名称**: `SpeechSynthesisUtterance.boundary_event`
- **MDN文档**: [SpeechSynthesisUtterance.boundary_event](https://developer.mozilla.org/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
- **规范文档**: [查看规范](https://webaudio.github.io/web-speech-api/#eventdef-speechsynthesisutterance-boundary,https://webaudio.github.io/web-speech-api/#dom-speechsynthesisutterance-onboundary)
- **标签**: `web-features:speech-synthesis`
- **描述**: `boundary` event

## 使用示例

### 基本用法

```javascript
// SpeechSynthesisUtterance.boundary_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SpeechSynthesisUtterance.boundary_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 | The `boundary` event does not fire as expected. See [bug 40715888](https://crbug.com/40715888). |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 49 |  |
| Firefox Android | 62 |  |
| Oculus | 同主版本 |  |
| Opera | 21 |  |
| Opera Android | 不支持 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33
- **部分实现**: 是
- **注意事项**:
  - The `boundary` event does not fire as expected. See [bug 40715888](https://crbug.com/40715888).

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 49

### Firefox Android

- **支持版本**: 62

### Opera

- **支持版本**: 21

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 3.0

### WebView Android

- **支持版本**: 不支持

