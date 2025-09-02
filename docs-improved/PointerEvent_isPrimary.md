# PointerEvent.isPrimary API 兼容性数据

## 基本信息

- **API名称**: `PointerEvent.isPrimary`
- **MDN文档**: [PointerEvent.isPrimary](https://developer.mozilla.org/docs/Web/API/PointerEvent/isPrimary)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-pointerevent-isprimary)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// PointerEvent.isPrimary 使用示例
// 请查阅MDN文档了解具体用法
console.log('PointerEvent.isPrimary API');
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
// 检查PointerEvent.isPrimary是否支持
function isPointerEventIsPrimarySupported() {
    return 'isPrimary' in pointerevent && typeof pointerevent.isPrimary === 'function';
}

if (isPointerEventIsPrimarySupported()) {
    console.log('PointerEvent.isPrimary 支持');
    // 使用PointerEvent.isPrimary
} else {
    console.log('PointerEvent.isPrimary 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PointerEvent.isPrimary polyfill
if (!pointerevent.isPrimary) {
    // 在这里添加polyfill实现
    console.log('加载PointerEvent.isPrimary polyfill');
}
```

