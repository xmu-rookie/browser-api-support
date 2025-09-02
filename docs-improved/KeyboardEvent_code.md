# KeyboardEvent.code API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.code`
- **MDN文档**: [KeyboardEvent.code](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/code)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-keyboardevent-code)
- **标签**: `web-features:keyboard-events`

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.code 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.code API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 48 | The value is always empty. |
| Edge | 同主版本 |  |
| Firefox | 38 |  |
| Firefox Android | 38 | The value is always empty. |
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

- **支持版本**: 48

### Chrome Android

- **支持版本**: 48
- **部分实现**: 是
- **注意事项**:
  - The value is always empty.

### Firefox

- **支持版本**: 38

### Firefox Android

- **支持版本**: 38
- **部分实现**: 是
- **注意事项**:
  - The value is always empty.

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.code是否支持
function isKeyboardEventCodeSupported() {
    return 'code' in keyboardevent && typeof keyboardevent.code === 'function';
}

if (isKeyboardEventCodeSupported()) {
    console.log('KeyboardEvent.code 支持');
    // 使用KeyboardEvent.code
} else {
    console.log('KeyboardEvent.code 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.code polyfill
if (!keyboardevent.code) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.code polyfill');
}
```

