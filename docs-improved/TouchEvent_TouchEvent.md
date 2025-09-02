# TouchEvent.TouchEvent API 兼容性数据

## 基本信息

- **API名称**: `TouchEvent.TouchEvent`
- **MDN文档**: [TouchEvent.TouchEvent](https://developer.mozilla.org/docs/Web/API/TouchEvent/TouchEvent)
- **规范文档**: [查看规范](https://w3c.github.io/touch-events/#dom-touchevent-constructor)
- **标签**: `web-features:touch-events`
- **描述**: `TouchEvent()` constructor

## 使用示例

### 基本用法

```javascript
// TouchEvent.TouchEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TouchEvent.TouchEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 | Chrome only supports the following `touchEventInit` properties: `touches`, `targetTouches`, `changed... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 46 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 3.2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 48
- **注意事项**:
  - Chrome only supports the following `touchEventInit` properties: `touches`, `targetTouches`, `changedTouches`.

### Firefox

- **支持版本**: 不支持

### Firefox Android

- **支持版本**: 46

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 3.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查TouchEvent.TouchEvent是否支持
function isTouchEventTouchEventSupported() {
    return 'TouchEvent' in touchevent && typeof touchevent.TouchEvent === 'function';
}

if (isTouchEventTouchEventSupported()) {
    console.log('TouchEvent.TouchEvent 支持');
    // 使用TouchEvent.TouchEvent
} else {
    console.log('TouchEvent.TouchEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TouchEvent.TouchEvent polyfill
if (!touchevent.TouchEvent) {
    // 在这里添加polyfill实现
    console.log('加载TouchEvent.TouchEvent polyfill');
}
```

