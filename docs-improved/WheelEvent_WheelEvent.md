# WheelEvent.WheelEvent API 兼容性数据

## 基本信息

- **API名称**: `WheelEvent.WheelEvent`
- **MDN文档**: [WheelEvent.WheelEvent](https://developer.mozilla.org/docs/Web/API/WheelEvent/WheelEvent)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-wheelevent-wheelevent)
- **标签**: `web-features:wheel-events`
- **描述**: `WheelEvent()` constructor

## 使用示例

### 基本用法

```javascript
// WheelEvent.WheelEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('WheelEvent.WheelEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 17 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 17

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 1.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查WheelEvent.WheelEvent是否支持
function isWheelEventWheelEventSupported() {
    return 'WheelEvent' in wheelevent && typeof wheelevent.WheelEvent === 'function';
}

if (isWheelEventWheelEventSupported()) {
    console.log('WheelEvent.WheelEvent 支持');
    // 使用WheelEvent.WheelEvent
} else {
    console.log('WheelEvent.WheelEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WheelEvent.WheelEvent polyfill
if (!wheelevent.WheelEvent) {
    // 在这里添加polyfill实现
    console.log('加载WheelEvent.WheelEvent polyfill');
}
```

