# SensorErrorEvent.SensorErrorEvent API 兼容性数据

## 基本信息

- **API名称**: `SensorErrorEvent.SensorErrorEvent`
- **MDN文档**: [SensorErrorEvent.SensorErrorEvent](https://developer.mozilla.org/docs/Web/API/SensorErrorEvent/SensorErrorEvent)
- **规范文档**: [查看规范](https://w3c.github.io/sensors/#dom-sensorerrorevent-sensorerrorevent)
- **标签**: `web-features:orientation-sensor`
- **描述**: `SensorErrorEvent()` constructor

## 使用示例

### 基本用法

```javascript
// SensorErrorEvent.SensorErrorEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SensorErrorEvent.SensorErrorEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 67

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SensorErrorEvent.SensorErrorEvent是否支持
function isSensorErrorEventSensorErrorEventSupported() {
    return 'SensorErrorEvent' in sensorerrorevent && typeof sensorerrorevent.SensorErrorEvent === 'function';
}

if (isSensorErrorEventSensorErrorEventSupported()) {
    console.log('SensorErrorEvent.SensorErrorEvent 支持');
    // 使用SensorErrorEvent.SensorErrorEvent
} else {
    console.log('SensorErrorEvent.SensorErrorEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SensorErrorEvent.SensorErrorEvent polyfill
if (!sensorerrorevent.SensorErrorEvent) {
    // 在这里添加polyfill实现
    console.log('加载SensorErrorEvent.SensorErrorEvent polyfill');
}
```

