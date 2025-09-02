# FocusEvent.FocusEvent API 兼容性数据

## 基本信息

- **API名称**: `FocusEvent.FocusEvent`
- **MDN文档**: [FocusEvent.FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent/FocusEvent)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-focusevent-focusevent)
- **标签**: `web-features:focus-events`
- **描述**: `FocusEvent()` constructor

## 使用示例

### 基本用法

```javascript
// FocusEvent.FocusEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('FocusEvent.FocusEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 24

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查FocusEvent.FocusEvent是否支持
function isFocusEventFocusEventSupported() {
    return 'FocusEvent' in focusevent && typeof focusevent.FocusEvent === 'function';
}

if (isFocusEventFocusEventSupported()) {
    console.log('FocusEvent.FocusEvent 支持');
    // 使用FocusEvent.FocusEvent
} else {
    console.log('FocusEvent.FocusEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FocusEvent.FocusEvent polyfill
if (!focusevent.FocusEvent) {
    // 在这里添加polyfill实现
    console.log('加载FocusEvent.FocusEvent polyfill');
}
```

