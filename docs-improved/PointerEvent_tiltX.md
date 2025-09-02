# PointerEvent.tiltX API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.tiltX`
- **MDN文档**: [PointerEvent.tiltX](https://developer.mozilla.org/docs/Web/API/PointerEvent/tiltX)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-pointerevent-tiltx)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// PointerEvent.tiltX 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.tiltX API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 |  |
| Firefox Android | 79 |  |
| Internet Explorer | 10 |  |
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

- **支持版本**: 10

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查PointerEvent.tiltX是否支持
function isPointerEventTiltXSupported() {
    return 'tiltX' in pointerevent && typeof pointerevent.tiltX === 'function';
}

if (isPointerEventTiltXSupported()) {
    console.log('PointerEvent.tiltX 支持');
    // 使用PointerEvent.tiltX
} else {
    console.log('PointerEvent.tiltX 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.tiltX polyfill
if (!pointerevent.tiltX) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.tiltX polyfill');
}
```

