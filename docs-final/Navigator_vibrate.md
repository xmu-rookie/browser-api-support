# Navigator.vibrate API 兼容性数据

## 基本信息

- **API名称**: `Navigator.vibrate`
- **MDN文档**: [Navigator.vibrate](https://developer.mozilla.org/docs/Web/API/Navigator/vibrate)
- **规范文档**: [查看规范](https://w3c.github.io/vibration/#dom-navigator-vibrate)
- **标签**: `web-features:vibration`

## 使用示例

### 基本用法

```javascript
// 使用振动API
// 振动200毫秒
navigator.vibrate(200);

// 振动模式：振动-停止-振动
navigator.vibrate([200, 100, 200]);
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 32 |  |
| Chrome Android | 32 | Beginning in Chrome 55, this is not supported in cross-origin iframes.; Beginning in Chrome 60, this... |
| Edge | 同主版本 |  |
| Firefox | 16 | Until Firefox 26 included, when the vibration pattern was too long or any of its elements too large,... |
| Firefox Android | 79 | Vibration is disabled. If the window is visible, then `navigator.vibrate()` returns `true`, but no v... |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 19 | Beginning in Opera 42, this is not supported in cross-origin iframes.; Beginning in Opera 47, this m... |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 | Beginning in version 55, this is not supported in cross-origin iframes.; Beginning in version 60, th... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 32

### Chrome Android

- **支持版本**: 32
- **注意事项**:
  - Beginning in Chrome 55, this is not supported in cross-origin iframes.
  - Beginning in Chrome 60, this method requires a user gesture. Otherwise it returns `false`.

### Firefox

- **支持版本**: 16
- **移除版本**: 129
- **注意事项**:
  - Until Firefox 26 included, when the vibration pattern was too long or any of its elements too large, Firefox threw an exception instead of returning `false` ([bug 884935](https://bugzil.la/884935)).
  - From Firefox 32 onwards, when the vibration pattern is too long or any of its elements too large, it returns `true` but truncates the pattern ([bug 1014581](https://bugzil.la/1014581)).
  - Beginning in Firefox 72, this is not supported in cross-origin iframes.
- **支持版本**: 11
- **移除版本**: 16
- **前缀**: moz

### Firefox Android

- **支持版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Vibration is disabled. If the window is visible, then `navigator.vibrate()` returns `true`, but no vibration takes place (regardless of hardware support). Originally, the intent was to disable it for cross-origin frames only ([bug 1591113](https://bugzil.la/1591113)), but the feature was not re-enabled due to abuse concerns ([bug 1653318](https://bugzil.la/1653318)).
- **支持版本**: 16
- **移除版本**: 79
- **注意事项**:
  - Until Firefox 26 included, when the vibration pattern was too long or any of its elements too large, Firefox threw an exception instead of returning `false` ([bug 884935](https://bugzil.la/884935)).
  - From Firefox 32 onwards, when the vibration pattern is too long or any of its elements too large, it returns `true` but truncates the pattern ([bug 1014581](https://bugzil.la/1014581)).
- **支持版本**: 14
- **移除版本**: 16
- **前缀**: moz

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 19
- **注意事项**:
  - Beginning in Opera 42, this is not supported in cross-origin iframes.
  - Beginning in Opera 47, this method requires a user gesture. Otherwise it returns `false`.

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 4.4.3
- **注意事项**:
  - Beginning in version 55, this is not supported in cross-origin iframes.
  - Beginning in version 60, this method requires a user gesture. Otherwise it returns `false`.

