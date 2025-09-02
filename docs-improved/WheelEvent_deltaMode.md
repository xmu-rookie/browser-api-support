# WheelEvent.deltaMode API 兼容性数据

## 基本信息

- **API名称**: `WheelEvent.deltaMode`
- **MDN文档**: [WheelEvent.deltaMode](https://developer.mozilla.org/docs/Web/API/WheelEvent/deltaMode)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-wheelevent-deltamode)
- **标签**: `web-features:wheel-events`

## 使用示例

### 基本用法

```javascript
// WheelEvent.deltaMode 使用示例
// 请查阅MDN文档了解具体用法
console.log('WheelEvent.deltaMode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 17 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 1.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查WheelEvent.deltaMode是否支持
function isWheelEventDeltaModeSupported() {
    return 'deltaMode' in wheelevent && typeof wheelevent.deltaMode === 'function';
}

if (isWheelEventDeltaModeSupported()) {
    console.log('WheelEvent.deltaMode 支持');
    // 使用WheelEvent.deltaMode
} else {
    console.log('WheelEvent.deltaMode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WheelEvent.deltaMode polyfill
if (!wheelevent.deltaMode) {
    // 在这里添加polyfill实现
    console.log('加载WheelEvent.deltaMode polyfill');
}
```

