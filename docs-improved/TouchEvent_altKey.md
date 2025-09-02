# TouchEvent.altKey API 兼容性数据

## 基本信息

- **API名称**: `TouchEvent.altKey`
- **MDN文档**: [TouchEvent.altKey](https://developer.mozilla.org/docs/Web/API/TouchEvent/altKey)
- **规范文档**: [查看规范](https://w3c.github.io/touch-events/#dom-touchevent-altkey)
- **标签**: `web-features:touch-events`

## 使用示例

### 基本用法

```javascript
// TouchEvent.altKey 使用示例
// 请查阅MDN文档了解具体用法
console.log('TouchEvent.altKey API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 52 |  |
| Firefox Android | 6 |  |
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

- **支持版本**: 22

### Firefox

- **支持版本**: 52
- **支持版本**: 18
- **移除版本**: 24
- **注意事项**:
  - Removed in [bug 888304](https://bugzil.la/888304) due to web compatibility issues.

### Firefox Android

- **支持版本**: 6

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 3.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查TouchEvent.altKey是否支持
function isTouchEventAltKeySupported() {
    return 'altKey' in touchevent && typeof touchevent.altKey === 'function';
}

if (isTouchEventAltKeySupported()) {
    console.log('TouchEvent.altKey 支持');
    // 使用TouchEvent.altKey
} else {
    console.log('TouchEvent.altKey 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TouchEvent.altKey polyfill
if (!touchevent.altKey) {
    // 在这里添加polyfill实现
    console.log('加载TouchEvent.altKey polyfill');
}
```

