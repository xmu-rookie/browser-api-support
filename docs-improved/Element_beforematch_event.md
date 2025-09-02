# Element.beforematch_event API 兼容性数据

## 基本信息

- **API名称**: `Element.beforematch_event`
- **MDN文档**: [Element.beforematch_event](https://developer.mozilla.org/docs/Web/API/Element/beforematch_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-beforematch)
- **标签**: `web-features:hidden-until-found`
- **描述**: `beforematch` event

## 使用示例

### 基本用法

```javascript
// Element.beforematch_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.beforematch_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 139 |  |
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

- **支持版本**: 139

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.beforematch_event是否支持
function isElementBeforematch_eventSupported() {
    return 'beforematch_event' in element && typeof element.beforematch_event === 'function';
}

if (isElementBeforematch_eventSupported()) {
    console.log('Element.beforematch_event 支持');
    // 使用Element.beforematch_event
} else {
    console.log('Element.beforematch_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.beforematch_event polyfill
if (!element.beforematch_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.beforematch_event polyfill');
}
```

