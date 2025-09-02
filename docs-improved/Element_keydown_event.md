# Element.keydown_event API 兼容性数据

## 基本信息

- **API名称**: `Element.keydown_event`
- **MDN文档**: [Element.keydown_event](https://developer.mozilla.org/docs/Web/API/Element/keydown_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-keydown,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onkeydown)
- **标签**: `web-features:keyboard-events`
- **描述**: `keydown` event

## 使用示例

### 基本用法

```javascript
// Element.keydown_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.keydown_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.keydown_event是否支持
function isElementKeydown_eventSupported() {
    return 'keydown_event' in element && typeof element.keydown_event === 'function';
}

if (isElementKeydown_eventSupported()) {
    console.log('Element.keydown_event 支持');
    // 使用Element.keydown_event
} else {
    console.log('Element.keydown_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.keydown_event polyfill
if (!element.keydown_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.keydown_event polyfill');
}
```

