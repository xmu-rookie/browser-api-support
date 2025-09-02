# PointerEvent.pressure API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.pressure`
- **MDN文档**: [PointerEvent.pressure](https://developer.mozilla.org/docs/Web/API/PointerEvent/pressure)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-pointerevent-pressure)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// PointerEvent.pressure 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.pressure API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 |  |
| Firefox Android | 79 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 59

### Firefox Android

- **支持版本**: 79

### Internet Explorer

- **支持版本**: 11
- **支持版本**: 10
- **移除版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Returns 0 instead of 0.5 on hardware that doesn't support pressure.

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查PointerEvent.pressure是否支持
function isPointerEventPressureSupported() {
    return 'pressure' in pointerevent && typeof pointerevent.pressure === 'function';
}

if (isPointerEventPressureSupported()) {
    console.log('PointerEvent.pressure 支持');
    // 使用PointerEvent.pressure
} else {
    console.log('PointerEvent.pressure 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.pressure polyfill
if (!pointerevent.pressure) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.pressure polyfill');
}
```

