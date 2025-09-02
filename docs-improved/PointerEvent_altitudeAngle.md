# PointerEvent.altitudeAngle API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.altitudeAngle`
- **MDN文档**: [PointerEvent.altitudeAngle](https://developer.mozilla.org/docs/Web/API/PointerEvent/altitudeAngle)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-pointerevent-altitudeangle)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// PointerEvent.altitudeAngle 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.altitudeAngle API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 131 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Firefox

- **支持版本**: 131

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查PointerEvent.altitudeAngle是否支持
function isPointerEventAltitudeAngleSupported() {
    return 'altitudeAngle' in pointerevent && typeof pointerevent.altitudeAngle === 'function';
}

if (isPointerEventAltitudeAngleSupported()) {
    console.log('PointerEvent.altitudeAngle 支持');
    // 使用PointerEvent.altitudeAngle
} else {
    console.log('PointerEvent.altitudeAngle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.altitudeAngle polyfill
if (!pointerevent.altitudeAngle) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.altitudeAngle polyfill');
}
```

