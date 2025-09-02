# Window.scrollsnapchange_event API 兼容性数据

## 基本信息

- **API名称**: `Window.scrollsnapchange_event`
- **MDN文档**: [Window.scrollsnapchange_event](https://developer.mozilla.org/docs/Web/API/Window/scrollsnapchange_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-scroll-snap-2/#scrollsnapchange)
- **标签**: `web-features:scroll-snap-events`
- **描述**: `scrollsnapchange` event

## 使用示例

### 基本用法

```javascript
// Window.scrollsnapchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.scrollsnapchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 129 |  |
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
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 129

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.scrollsnapchange_event是否支持
function isWindowScrollsnapchange_eventSupported() {
    return 'scrollsnapchange_event' in window && typeof window.scrollsnapchange_event === 'function';
}

if (isWindowScrollsnapchange_eventSupported()) {
    console.log('Window.scrollsnapchange_event 支持');
    // 使用Window.scrollsnapchange_event
} else {
    console.log('Window.scrollsnapchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.scrollsnapchange_event polyfill
if (!window.scrollsnapchange_event) {
    // 在这里添加polyfill实现
    console.log('加载Window.scrollsnapchange_event polyfill');
}
```

