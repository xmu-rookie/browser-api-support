# Window.screenTop.relative-multi-screen API 兼容性数据

## 基本信息

- **API名称**: `Window.screenTop.relative-multi-screen`
- **标签**: `web-features:window-management`
- **描述**: Relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

## 使用示例

### 基本用法

```javascript
// Window.screenTop.relative-multi-screen 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.screenTop.relative-multi-screen API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 64 |  |
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

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 64

### Safari

- **支持版本**: 1
- **部分实现**: 是
- **注意事项**:
  - Coordinate origin used is inconsistent/unreliable.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.screenTop.relative-multi-screen是否支持
function isWindowScreenTopSupported() {
    return 'screenTop' in window && typeof window.screenTop === 'function';
}

if (isWindowScreenTopSupported()) {
    console.log('Window.screenTop.relative-multi-screen 支持');
    // 使用Window.screenTop.relative-multi-screen
} else {
    console.log('Window.screenTop.relative-multi-screen 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.screenTop.relative-multi-screen polyfill
if (!window.screenTop) {
    // 在这里添加polyfill实现
    console.log('加载Window.screenTop.relative-multi-screen polyfill');
}
```

