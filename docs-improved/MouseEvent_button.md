# MouseEvent.button API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.button`
- **MDN文档**: [MouseEvent.button](https://developer.mozilla.org/docs/Web/API/MouseEvent/button)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-mouseevent-button)
- **标签**: `web-features:mouse-events`

## 使用示例

### 基本用法

```javascript
// MouseEvent.button 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.button API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 1 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseEvent.button是否支持
function isMouseEventButtonSupported() {
    return 'button' in mouseevent && typeof mouseevent.button === 'function';
}

if (isMouseEventButtonSupported()) {
    console.log('MouseEvent.button 支持');
    // 使用MouseEvent.button
} else {
    console.log('MouseEvent.button 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.button polyfill
if (!mouseevent.button) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.button polyfill');
}
```

