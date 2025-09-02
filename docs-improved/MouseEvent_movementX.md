# MouseEvent.movementX API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.movementX`
- **MDN文档**: [MouseEvent.movementX](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementX)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#dom-mouseevent-movementx)
- **标签**: `web-features:pointer-lock`, `web-features:mouse-events`

## 使用示例

### 基本用法

```javascript
// MouseEvent.movementX 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.movementX API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 不支持 |  |
| Edge | 13 |  |
| Firefox | 41 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 17 |  |
| Samsung Internet | 3.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37
- **支持版本**: 22
- **移除版本**: 37
- **前缀**: webkit

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 41
- **支持版本**: 1
- **移除版本**: 41
- **前缀**: moz

### Safari

- **支持版本**: 9
- **支持版本**: 6
- **移除版本**: 8
- **前缀**: webkit

### Safari iOS

- **支持版本**: 17

### Samsung Internet

- **支持版本**: 3.0
- **支持版本**: 1.0
- **移除版本**: 3.0
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseEvent.movementX是否支持
function isMouseEventMovementXSupported() {
    return 'movementX' in mouseevent && typeof mouseevent.movementX === 'function';
}

if (isMouseEventMovementXSupported()) {
    console.log('MouseEvent.movementX 支持');
    // 使用MouseEvent.movementX
} else {
    console.log('MouseEvent.movementX 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.movementX polyfill
if (!mouseevent.movementX) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.movementX polyfill');
}
```

