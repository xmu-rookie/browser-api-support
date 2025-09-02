# KeyboardEvent.repeat API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.repeat`
- **MDN文档**: [KeyboardEvent.repeat](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/repeat)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-keyboardevent-repeat)
- **标签**: `web-features:keyboard-events`

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.repeat 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.repeat API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 137 | Before Chrome 139, on Linux under X11, if multiple keys are held down, a `keydown` event for the mos... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 28 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 137
- **注意事项**:
  - Before Chrome 139, on Linux under X11, if multiple keys are held down, a `keydown` event for the most recently pressed key will trigger with `repeat` incorrectly set to `false`. See [bug 40940886](https://crbug.com/40940886).
- **支持版本**: 32
- **移除版本**: 137
- **部分实现**: 是
- **注意事项**:
  - On Windows and Linux, if multiple keys are held down, a `keydown` event for the most recently pressed key will trigger with `repeat` incorrectly set to `false`. See [bug 40940886](https://crbug.com/40940886).

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 28

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 10.1

