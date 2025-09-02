# Window.gamepadconnected_event API 兼容性数据

## 基本信息

- **API名称**: `Window.gamepadconnected_event`
- **MDN文档**: [Window.gamepadconnected_event](https://developer.mozilla.org/docs/Web/API/Window/gamepadconnected_event)
- **规范文档**: [查看规范](https://w3c.github.io/gamepad/#event-gamepadconnected)
- **标签**: `web-features:gamepad`
- **描述**: `gamepadconnected` event

## 使用示例

### 基本用法

```javascript
// Window.gamepadconnected_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.gamepadconnected_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 35 | The `ongamepadconnected` event handler property is not supported. See [bug 40175074](https://crbug.c... |
| Chrome Android | 37 | The `ongamepadconnected` event handler property is not supported. See [bug 40175074](https://crbug.c... |
| Deno | 不支持 |  |
| Edge | ≤18 | The `ongamepadconnected` event handler property is not supported. See [bug 40175074](https://crbug.c... |
| Firefox | 89 |  |
| Firefox Android | 89 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 35
- **部分实现**: 是
- **注意事项**:
  - The `ongamepadconnected` event handler property is not supported. See [bug 40175074](https://crbug.com/40175074).

### Chrome Android

- **支持版本**: 37
- **部分实现**: 是
- **注意事项**:
  - The `ongamepadconnected` event handler property is not supported. See [bug 40175074](https://crbug.com/40175074).

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: ≤18
- **部分实现**: 是
- **注意事项**:
  - The `ongamepadconnected` event handler property is not supported. See [bug 40175074](https://crbug.com/40175074).

### Firefox

- **支持版本**: 89
- **支持版本**: 29
- **移除版本**: 89
- **部分实现**: 是
- **注意事项**:
  - The `ongamepadconnected` event handler property is not supported. See [bug 1697093](https://bugzil.la/1697093).

### Firefox Android

- **支持版本**: 89
- **支持版本**: 32
- **移除版本**: 89
- **部分实现**: 是
- **注意事项**:
  - The `ongamepadconnected` event handler property is not supported. See [bug 1697093](https://bugzil.la/1697093).

### Safari

- **支持版本**: 16
- **支持版本**: 10.1
- **移除版本**: 16
- **部分实现**: 是
- **注意事项**:
  - The `ongamepadconnected` event handler property is not supported. See [bug 223860](https://webkit.org/b/223860).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.gamepadconnected_event是否支持
function isWindowGamepadconnected_eventSupported() {
    return 'gamepadconnected_event' in window && typeof window.gamepadconnected_event === 'function';
}

if (isWindowGamepadconnected_eventSupported()) {
    console.log('Window.gamepadconnected_event 支持');
    // 使用Window.gamepadconnected_event
} else {
    console.log('Window.gamepadconnected_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.gamepadconnected_event polyfill
if (!window.gamepadconnected_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.gamepadconnected_event polyfill');
}
```

