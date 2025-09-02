# NavigationHistoryEntry.dispose_event API 兼容性数据

## 基本信息

- **API名称**: `NavigationHistoryEntry.dispose_event`
- **MDN文档**: [NavigationHistoryEntry.dispose_event](https://developer.mozilla.org/docs/Web/API/NavigationHistoryEntry/dispose_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#handler-navigationhistoryentry-ondispose)
- **标签**: `web-features:navigation`
- **描述**: `dispose` event

## 使用示例

### 基本用法

```javascript
// NavigationHistoryEntry.dispose_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigationHistoryEntry.dispose_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 102

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigationHistoryEntry.dispose_event是否支持
function isNavigationHistoryEntryDispose_eventSupported() {
    return 'dispose_event' in navigationhistoryentry && typeof navigationhistoryentry.dispose_event === 'function';
}

if (isNavigationHistoryEntryDispose_eventSupported()) {
    console.log('NavigationHistoryEntry.dispose_event 支持');
    // 使用NavigationHistoryEntry.dispose_event
} else {
    console.log('NavigationHistoryEntry.dispose_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigationHistoryEntry.dispose_event polyfill
if (!navigationhistoryentry.dispose_event) {
    // 在这里添加polyfill实现
    console.log('加载NavigationHistoryEntry.dispose_event polyfill');
}
```

