# MediaQueryListEvent.MediaQueryListEvent API 兼容性数据

## 基本信息

- **API名称**: `MediaQueryListEvent.MediaQueryListEvent`
- **MDN文档**: [MediaQueryListEvent.MediaQueryListEvent](https://developer.mozilla.org/docs/Web/API/MediaQueryListEvent/MediaQueryListEvent)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-mediaquerylistevent-mediaquerylistevent)
- **标签**: `web-features:matchmedia`
- **描述**: `MediaQueryListEvent()` constructor

## 使用示例

### 基本用法

```javascript
// MediaQueryListEvent.MediaQueryListEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaQueryListEvent.MediaQueryListEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 39 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 39

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaQueryListEvent.MediaQueryListEvent是否支持
function isMediaQueryListEventMediaQueryListEventSupported() {
    return 'MediaQueryListEvent' in mediaquerylistevent && typeof mediaquerylistevent.MediaQueryListEvent === 'function';
}

if (isMediaQueryListEventMediaQueryListEventSupported()) {
    console.log('MediaQueryListEvent.MediaQueryListEvent 支持');
    // 使用MediaQueryListEvent.MediaQueryListEvent
} else {
    console.log('MediaQueryListEvent.MediaQueryListEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaQueryListEvent.MediaQueryListEvent polyfill
if (!mediaquerylistevent.MediaQueryListEvent) {
    // 在这里添加polyfill实现
    console.log('加载MediaQueryListEvent.MediaQueryListEvent polyfill');
}
```

