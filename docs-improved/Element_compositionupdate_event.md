# Element.compositionupdate_event API 兼容性数据

## 基本信息

- **API名称**: `Element.compositionupdate_event`
- **MDN文档**: [Element.compositionupdate_event](https://developer.mozilla.org/docs/Web/API/Element/compositionupdate_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-compositionupdate)
- **标签**: `web-features:composition-events`
- **描述**: `compositionupdate` event

## 使用示例

### 基本用法

```javascript
// Element.compositionupdate_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.compositionupdate_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 18 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 18

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.compositionupdate_event是否支持
function isElementCompositionupdate_eventSupported() {
    return 'compositionupdate_event' in element && typeof element.compositionupdate_event === 'function';
}

if (isElementCompositionupdate_eventSupported()) {
    console.log('Element.compositionupdate_event 支持');
    // 使用Element.compositionupdate_event
} else {
    console.log('Element.compositionupdate_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.compositionupdate_event polyfill
if (!element.compositionupdate_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.compositionupdate_event polyfill');
}
```

