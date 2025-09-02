# Window.vrdisplayactivate_event API 兼容性数据

## 基本信息

- **API名称**: `Window.vrdisplayactivate_event`
- **MDN文档**: [Window.vrdisplayactivate_event](https://developer.mozilla.org/docs/Web/API/Window/vrdisplayactivate_event)
- **标签**: `web-features:webvr`
- **描述**: `vrdisplayactivate` event

## 使用示例

### 基本用法

```javascript
// Window.vrdisplayactivate_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.vrdisplayactivate_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 15 |  |
| Firefox | 98 |  |
| Firefox Android | 55 |  |
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

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 15
- **移除版本**: 79

### Firefox

- **支持版本**: 98
- **需要标志**: 
  - dom.vr.enabled: true
- **支持版本**: 64
- **移除版本**: 98
- **注意事项**:
  - Only on macOS and Windows.
- **支持版本**: 55
- **移除版本**: 64
- **注意事项**:
  - Only on Windows.

### Firefox Android

- **支持版本**: 55
- **移除版本**: 98

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.vrdisplayactivate_event是否支持
function isWindowVrdisplayactivate_eventSupported() {
    return 'vrdisplayactivate_event' in window && typeof window.vrdisplayactivate_event === 'function';
}

if (isWindowVrdisplayactivate_eventSupported()) {
    console.log('Window.vrdisplayactivate_event 支持');
    // 使用Window.vrdisplayactivate_event
} else {
    console.log('Window.vrdisplayactivate_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.vrdisplayactivate_event polyfill
if (!window.vrdisplayactivate_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.vrdisplayactivate_event polyfill');
}
```

