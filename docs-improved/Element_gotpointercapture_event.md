# Element.gotpointercapture_event API 兼容性数据

## 基本信息

- **API名称**: `Element.gotpointercapture_event`
- **MDN文档**: [Element.gotpointercapture_event](https://developer.mozilla.org/docs/Web/API/Element/gotpointercapture_event)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#the-gotpointercapture-event,https://w3c.github.io/pointerevents/#dom-globaleventhandlers-ongotpointercapture)
- **标签**: `web-features:pointer-events-api`
- **描述**: `gotpointercapture` event

## 使用示例

### 基本用法

```javascript
// Element.gotpointercapture_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.gotpointercapture_event API');
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
// 检查Element.gotpointercapture_event是否支持
function isElementGotpointercapture_eventSupported() {
    return 'gotpointercapture_event' in element && typeof element.gotpointercapture_event === 'function';
}

if (isElementGotpointercapture_eventSupported()) {
    console.log('Element.gotpointercapture_event 支持');
    // 使用Element.gotpointercapture_event
} else {
    console.log('Element.gotpointercapture_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.gotpointercapture_event polyfill
if (!element.gotpointercapture_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.gotpointercapture_event polyfill');
}
```

