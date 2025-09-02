# Window.languagechange_event API 兼容性数据

## 基本信息

- **API名称**: `Window.languagechange_event`
- **MDN文档**: [Window.languagechange_event](https://developer.mozilla.org/docs/Web/API/Window/languagechange_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-languagechange,https://html.spec.whatwg.org/multipage/webappapis.html#handler-window-onlanguagechange)
- **标签**: `web-features:language`
- **描述**: `languagechange` event

## 使用示例

### 基本用法

```javascript
// Window.languagechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.languagechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 32 |  |
| Firefox Android | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 32

### Firefox Android

- **支持版本**: 4

### Safari

- **支持版本**: 10.1

### Samsung Internet

- **支持版本**: 4.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.languagechange_event是否支持
function isWindowLanguagechange_eventSupported() {
    return 'languagechange_event' in window && typeof window.languagechange_event === 'function';
}

if (isWindowLanguagechange_eventSupported()) {
    console.log('Window.languagechange_event 支持');
    // 使用Window.languagechange_event
} else {
    console.log('Window.languagechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.languagechange_event polyfill
if (!window.languagechange_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.languagechange_event polyfill');
}
```

