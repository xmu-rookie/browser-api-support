# PointerEvent.tiltY API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.tiltY`
- **MDN文档**: [PointerEvent.tiltY](https://developer.mozilla.org/docs/Web/API/PointerEvent/tiltY)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-pointerevent-tilty)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// PointerEvent.tiltY 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.tiltY API');
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
// 检查PointerEvent.tiltY是否支持
function isPointerEventTiltYSupported() {
    return 'tiltY' in pointerevent && typeof pointerevent.tiltY === 'function';
}

if (isPointerEventTiltYSupported()) {
    console.log('PointerEvent.tiltY 支持');
    // 使用PointerEvent.tiltY
} else {
    console.log('PointerEvent.tiltY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.tiltY polyfill
if (!pointerevent.tiltY) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.tiltY polyfill');
}
```

