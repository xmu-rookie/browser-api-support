# WheelEvent API 兼容性数据

## 基本信息

- **API名称**: `WheelEvent`
- **MDN文档**: [WheelEvent](https://developer.mozilla.org/docs/Web/API/WheelEvent)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#interface-wheelevent)
- **标签**: `web-features:wheel-events`

## 使用示例

### 基本用法

```javascript
// WheelEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('WheelEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 17 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 17

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查WheelEvent是否支持
function isWheelEventSupported() {
    return 'WheelEvent' in window || typeof WheelEvent !== 'undefined';
}

if (isWheelEventSupported()) {
    console.log('WheelEvent 支持');
    // 使用WheelEvent
} else {
    console.log('WheelEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WheelEvent polyfill
if (!window.WheelEvent) {
    // 在这里添加polyfill实现
    console.log('加载WheelEvent polyfill');
}
```

