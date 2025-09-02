# Window.open.relative-multi-screen API 兼容性数据

## 基本信息

- **API名称**: `Window.open.relative-multi-screen`
- **标签**: `web-features:window-management`
- **描述**: Opened relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

## 使用示例

### 基本用法

```javascript
// Window.open.relative-multi-screen 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.open.relative-multi-screen API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 | Without the `window-management` permission, multi-screen coordinates are used, but windows are clamp... |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 | Coordinate origin used is inconsistent/unreliable. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 100
- **注意事项**:
  - Without the `window-management` permission, multi-screen coordinates are used, but windows are clamped to their existing displays.

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 1
- **部分实现**: 是
- **注意事项**:
  - Coordinate origin used is inconsistent/unreliable.

