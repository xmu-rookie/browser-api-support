# Navigator.setAppBadge API 兼容性数据

## 基本信息

- **API名称**: `Navigator.setAppBadge`
- **MDN文档**: [Navigator.setAppBadge](https://developer.mozilla.org/docs/Web/API/Navigator/setAppBadge)
- **规范文档**: [查看规范](https://w3c.github.io/badging/#setappbadge-method)
- **标签**: `web-features:badging`

## 使用示例

### 基本用法

```javascript
// Navigator.setAppBadge 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.setAppBadge API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 | Windows and macOS since Chrome 81.; ChromeOS since Chrome 91.; Linux offers no universal badging API... |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 | Badging is supported for installed web apps on macOS Sonoma and higher.; Passing `0` as an argument ... |
| Safari iOS | 16.4 | Badging is supported for web apps saved to the home screen.; Passing `0` as an argument will clear t... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 | Badging is supported for web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 81
- **注意事项**:
  - Windows and macOS since Chrome 81.
  - ChromeOS since Chrome 91.
  - Linux offers no universal badging API on the operating system level.

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Safari

- **支持版本**: 17
- **注意事项**:
  - Badging is supported for installed web apps on macOS Sonoma and higher.
  - Passing `0` as an argument will clear the badge instead of displaying an unnumbered dot.

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Badging is supported for web apps saved to the home screen.
  - Passing `0` as an argument will clear the badge instead of displaying an unnumbered dot.

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Badging is supported for web apps saved to the home screen.

