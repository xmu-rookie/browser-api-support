# KeyboardEvent.location API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.location`
- **MDN文档**: [KeyboardEvent.location](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/location)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-keyboardevent-location)
- **标签**: `web-features:keyboard-events`

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.location 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.location API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 15

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.location是否支持
function isKeyboardEventLocationSupported() {
    return 'location' in keyboardevent && typeof keyboardevent.location === 'function';
}

if (isKeyboardEventLocationSupported()) {
    console.log('KeyboardEvent.location 支持');
    // 使用KeyboardEvent.location
} else {
    console.log('KeyboardEvent.location 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.location polyfill
if (!keyboardevent.location) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.location polyfill');
}
```

