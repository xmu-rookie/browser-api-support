# KeyboardEvent.isComposing API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.isComposing`
- **MDN文档**: [KeyboardEvent.isComposing](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/isComposing)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-keyboardevent-iscomposing)
- **标签**: `web-features:keyboard-events`

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.isComposing 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.isComposing API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.isComposing是否支持
function isKeyboardEventIsComposingSupported() {
    return 'isComposing' in keyboardevent && typeof keyboardevent.isComposing === 'function';
}

if (isKeyboardEventIsComposingSupported()) {
    console.log('KeyboardEvent.isComposing 支持');
    // 使用KeyboardEvent.isComposing
} else {
    console.log('KeyboardEvent.isComposing 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.isComposing polyfill
if (!keyboardevent.isComposing) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.isComposing polyfill');
}
```

