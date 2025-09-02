# AudioParam.exponentialRampToValueAtTime API 兼容性数据

## 基本信息

- **API名称**: `AudioParam.exponentialRampToValueAtTime`
- **MDN文档**: [AudioParam.exponentialRampToValueAtTime](https://developer.mozilla.org/docs/Web/API/AudioParam/exponentialRampToValueAtTime)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioparam-exponentialramptovalueattime)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioParam.exponentialRampToValueAtTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioParam.exponentialRampToValueAtTime API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 14 |  |
| Chrome Android | 18 | This sets the target volume at the specified time, but it doesn’t ramp to it, causing this function ... |
| Edge | 12 |  |
| Firefox | 134 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 14 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 14

### Chrome Android

- **支持版本**: 18
- **部分实现**: 是
- **注意事项**:
  - This sets the target volume at the specified time, but it doesn’t ramp to it, causing this function to behave like `setValueAtTime()`.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 134
- **支持版本**: 25
- **移除版本**: 134
- **部分实现**: 是
- **注意事项**:
  - Before Firefox 134, this set the target volume at the specified time, but it didn't ramp to it, causing this function to behave like `setValueAtTime()` (see [bug 1171438](https://bugzil.la/1171438) and [bug 1567777](https://bugzil.la/1567777)).

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 6

### Samsung Internet

- **支持版本**: 1.0

