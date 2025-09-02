# Element.lostpointercapture_event API 兼容性数据

## 基本信息

- **API名称**: `Element.lostpointercapture_event`
- **MDN文档**: [Element.lostpointercapture_event](https://developer.mozilla.org/docs/Web/API/Element/lostpointercapture_event)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#the-lostpointercapture-event,https://w3c.github.io/pointerevents/#dom-globaleventhandlers-onlostpointercapture)
- **标签**: `web-features:pointer-events-api`
- **描述**: `lostpointercapture` event

## 使用示例

### 基本用法

```javascript
// Element.lostpointercapture_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.lostpointercapture_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 59 |  |
| Firefox Android | 79 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 57

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 59

### Firefox Android

- **支持版本**: 79

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.lostpointercapture_event是否支持
function isElementLostpointercapture_eventSupported() {
    return 'lostpointercapture_event' in element && typeof element.lostpointercapture_event === 'function';
}

if (isElementLostpointercapture_eventSupported()) {
    console.log('Element.lostpointercapture_event 支持');
    // 使用Element.lostpointercapture_event
} else {
    console.log('Element.lostpointercapture_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.lostpointercapture_event polyfill
if (!element.lostpointercapture_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.lostpointercapture_event polyfill');
}
```

