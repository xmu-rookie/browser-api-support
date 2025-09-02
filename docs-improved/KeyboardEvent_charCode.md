# KeyboardEvent.charCode API 兼容性数据

## 基本信息

- **API名称**: `KeyboardEvent.charCode`
- **MDN文档**: [KeyboardEvent.charCode](https://developer.mozilla.org/docs/Web/API/KeyboardEvent/charCode)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-keyboardevent-charcode)

## 使用示例

### 基本用法

```javascript
// KeyboardEvent.charCode 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardEvent.charCode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 1.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardEvent.charCode是否支持
function isKeyboardEventCharCodeSupported() {
    return 'charCode' in keyboardevent && typeof keyboardevent.charCode === 'function';
}

if (isKeyboardEventCharCodeSupported()) {
    console.log('KeyboardEvent.charCode 支持');
    // 使用KeyboardEvent.charCode
} else {
    console.log('KeyboardEvent.charCode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardEvent.charCode polyfill
if (!keyboardevent.charCode) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardEvent.charCode polyfill');
}
```

