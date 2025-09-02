# Element.beforeinput_event API 兼容性数据

## 基本信息

- **API名称**: `Element.beforeinput_event`
- **MDN文档**: [Element.beforeinput_event](https://developer.mozilla.org/docs/Web/API/Element/beforeinput_event)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#event-type-beforeinput)
- **标签**: `web-features:input-event`
- **描述**: `beforeinput` event

## 使用示例

### 基本用法

```javascript
// Element.beforeinput_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.beforeinput_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 87 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Firefox

- **支持版本**: 87

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.beforeinput_event是否支持
function isElementBeforeinput_eventSupported() {
    return 'beforeinput_event' in element && typeof element.beforeinput_event === 'function';
}

if (isElementBeforeinput_eventSupported()) {
    console.log('Element.beforeinput_event 支持');
    // 使用Element.beforeinput_event
} else {
    console.log('Element.beforeinput_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.beforeinput_event polyfill
if (!element.beforeinput_event) {
    // 在这里添加polyfill实现
    console.log('加载Element.beforeinput_event polyfill');
}
```

