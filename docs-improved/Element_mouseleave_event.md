# Element.mouseleave_event API 兼容性数据

## 基本信息

- **API名称**: `Element.mouseleave_event`
- **MDN文档**: [Element.mouseleave_event](https://developer.mozilla.org/docs/Web/API/Element/mouseleave_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-mouseleave,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onmouseleave)
- **标签**: `web-features:mouse-events`
- **描述**: `mouseleave` event

## 使用示例

### 基本用法

```javascript
// Element.mouseleave_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.mouseleave_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 10 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 10

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.mouseleave_event是否支持
function isElementMouseleave_eventSupported() {
    return 'mouseleave_event' in element && typeof element.mouseleave_event === 'function';
}

if (isElementMouseleave_eventSupported()) {
    console.log('Element.mouseleave_event 支持');
    // 使用Element.mouseleave_event
} else {
    console.log('Element.mouseleave_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.mouseleave_event polyfill
if (!element.mouseleave_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.mouseleave_event polyfill');
}
```

