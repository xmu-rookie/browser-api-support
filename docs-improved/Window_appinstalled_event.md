# Window.appinstalled_event API 兼容性数据

## 基本信息

- **API名称**: `Window.appinstalled_event`
- **MDN文档**: [Window.appinstalled_event](https://developer.mozilla.org/docs/Web/API/Window/appinstalled_event)
- **规范文档**: [查看规范](https://wicg.github.io/manifest-incubations/#dom-window-onappinstalled)
- **标签**: `web-features:beforeinstallprompt`
- **描述**: `appinstalled` event

## 使用示例

### 基本用法

```javascript
// Window.appinstalled_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.appinstalled_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 57 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 | Opera exposes the `onappinstalled` event handler, but the event is never fired. |
| Opera Android | 不支持 | Opera exposes the `onappinstalled` event handler, but the event is never fired. |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Chrome Android

- **支持版本**: 57

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持
- **注意事项**:
  - Opera exposes the `onappinstalled` event handler, but the event is never fired.

### Opera Android

- **支持版本**: 不支持
- **注意事项**:
  - Opera exposes the `onappinstalled` event handler, but the event is never fired.

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.appinstalled_event是否支持
function isWindowAppinstalled_eventSupported() {
    return 'appinstalled_event' in window && typeof window.appinstalled_event === 'function';
}

if (isWindowAppinstalled_eventSupported()) {
    console.log('Window.appinstalled_event 支持');
    // 使用Window.appinstalled_event
} else {
    console.log('Window.appinstalled_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.appinstalled_event polyfill
if (!window.appinstalled_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.appinstalled_event polyfill');
}
```

