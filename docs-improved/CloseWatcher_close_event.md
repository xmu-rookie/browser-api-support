# CloseWatcher.close_event API 兼容性数据

## 基本信息

- **API名称**: `CloseWatcher.close_event`
- **MDN文档**: [CloseWatcher.close_event](https://developer.mozilla.org/docs/Web/API/CloseWatcher/close_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#handler-closewatcher-onclose)
- **标签**: `web-features:closewatcher`
- **描述**: `close` event

## 使用示例

### 基本用法

```javascript
// CloseWatcher.close_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('CloseWatcher.close_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
| Firefox Android | 不支持 |  |
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

- **支持版本**: 126

### Firefox

- **支持版本**: preview

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CloseWatcher.close_event是否支持
function isCloseWatcherClose_eventSupported() {
    return 'close_event' in closewatcher && typeof closewatcher.close_event === 'function';
}

if (isCloseWatcherClose_eventSupported()) {
    console.log('CloseWatcher.close_event 支持');
    // 使用CloseWatcher.close_event
} else {
    console.log('CloseWatcher.close_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CloseWatcher.close_event polyfill
if (!closewatcher.close_event) {
    // 在这里添加polyfill实现
    console.log('加载CloseWatcher.close_event polyfill');
}
```

