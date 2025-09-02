# PointerEvent.azimuthAngle API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.azimuthAngle`
- **MDN文档**: [PointerEvent.azimuthAngle](https://developer.mozilla.org/docs/Web/API/PointerEvent/azimuthAngle)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-pointerevent-azimuthangle)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// PointerEvent.azimuthAngle 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.azimuthAngle API');
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
// 检查PointerEvent.azimuthAngle是否支持
function isPointerEventAzimuthAngleSupported() {
    return 'azimuthAngle' in pointerevent && typeof pointerevent.azimuthAngle === 'function';
}

if (isPointerEventAzimuthAngleSupported()) {
    console.log('PointerEvent.azimuthAngle 支持');
    // 使用PointerEvent.azimuthAngle
} else {
    console.log('PointerEvent.azimuthAngle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.azimuthAngle polyfill
if (!pointerevent.azimuthAngle) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.azimuthAngle polyfill');
}
```

