# WheelEvent.pinch_to_zoom_support API 兼容性数据

## 基本信息

- **API名称**: `WheelEvent.pinch_to_zoom_support`
- **标签**: `web-features:wheel-events`
- **描述**: Pinch-to-zoom maps to `WheelEvent` + `ctrl` key.

## 使用示例

### 基本用法

```javascript
// WheelEvent.pinch_to_zoom_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('WheelEvent.pinch_to_zoom_support API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 15

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WheelEvent.pinch_to_zoom_support是否支持
function isWheelEventPinch_to_zoom_supportSupported() {
    return 'pinch_to_zoom_support' in wheelevent && typeof wheelevent.pinch_to_zoom_support === 'function';
}

if (isWheelEventPinch_to_zoom_supportSupported()) {
    console.log('WheelEvent.pinch_to_zoom_support 支持');
    // 使用WheelEvent.pinch_to_zoom_support
} else {
    console.log('WheelEvent.pinch_to_zoom_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WheelEvent.pinch_to_zoom_support polyfill
if (!wheelevent.pinch_to_zoom_support) {
    // 在这里添加polyfill实现
    console.log('加载WheelEvent.pinch_to_zoom_support polyfill');
}
```

