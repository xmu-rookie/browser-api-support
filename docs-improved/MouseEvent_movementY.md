# MouseEvent.movementY API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.movementY`
- **MDN文档**: [MouseEvent.movementY](https://developer.mozilla.org/docs/Web/API/MouseEvent/movementY)
- **规范文档**: [查看规范](https://w3c.github.io/pointerlock/#dom-mouseevent-movementy)
- **标签**: `web-features:pointer-lock`, `web-features:mouse-events`

## 使用示例

### 基本用法

```javascript
// MouseEvent.movementY 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.movementY API');
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
// 检查MouseEvent.movementY是否支持
function isMouseEventMovementYSupported() {
    return 'movementY' in mouseevent && typeof mouseevent.movementY === 'function';
}

if (isMouseEventMovementYSupported()) {
    console.log('MouseEvent.movementY 支持');
    // 使用MouseEvent.movementY
} else {
    console.log('MouseEvent.movementY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.movementY polyfill
if (!mouseevent.movementY) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.movementY polyfill');
}
```

