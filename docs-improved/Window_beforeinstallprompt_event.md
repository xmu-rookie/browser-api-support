# Window.beforeinstallprompt_event API 兼容性数据

## 基本信息

- **API名称**: `Window.beforeinstallprompt_event`
- **MDN文档**: [Window.beforeinstallprompt_event](https://developer.mozilla.org/docs/Web/API/Window/beforeinstallprompt_event)
- **规范文档**: [查看规范](https://wicg.github.io/manifest-incubations/#onbeforeinstallprompt-attribute)
- **标签**: `web-features:beforeinstallprompt`
- **描述**: `beforeinstallprompt` event

## 使用示例

### 基本用法

```javascript
// Window.beforeinstallprompt_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.beforeinstallprompt_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 8.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61
- **支持版本**: 44
- **移除版本**: 61
- **部分实现**: 是
- **注意事项**:
  - The `onbeforeinstallprompt` event handler property is not supported.

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 8.0
- **支持版本**: 5.0
- **移除版本**: 8.0
- **部分实现**: 是
- **注意事项**:
  - The `onbeforeinstallprompt` event handler property is not supported.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.beforeinstallprompt_event是否支持
function isWindowBeforeinstallprompt_eventSupported() {
    return 'beforeinstallprompt_event' in window && typeof window.beforeinstallprompt_event === 'function';
}

if (isWindowBeforeinstallprompt_eventSupported()) {
    console.log('Window.beforeinstallprompt_event 支持');
    // 使用Window.beforeinstallprompt_event
} else {
    console.log('Window.beforeinstallprompt_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.beforeinstallprompt_event polyfill
if (!window.beforeinstallprompt_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.beforeinstallprompt_event polyfill');
}
```

