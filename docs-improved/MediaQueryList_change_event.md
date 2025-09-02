# MediaQueryList.change_event API 兼容性数据

## 基本信息

- **API名称**: `MediaQueryList.change_event`
- **MDN文档**: [MediaQueryList.change_event](https://developer.mozilla.org/docs/Web/API/MediaQueryList/change_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-mediaquerylist-onchange)
- **标签**: `web-features:matchmedia`
- **描述**: `change` event

## 使用示例

### 基本用法

```javascript
// MediaQueryList.change_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaQueryList.change_event API');
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
// 检查MediaQueryList.change_event是否支持
function isMediaQueryListChange_eventSupported() {
    return 'change_event' in mediaquerylist && typeof mediaquerylist.change_event === 'function';
}

if (isMediaQueryListChange_eventSupported()) {
    console.log('MediaQueryList.change_event 支持');
    // 使用MediaQueryList.change_event
} else {
    console.log('MediaQueryList.change_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaQueryList.change_event polyfill
if (!mediaquerylist.change_event) {
    // 在这里添加polyfill实现
    console.log('加载MediaQueryList.change_event polyfill');
}
```

