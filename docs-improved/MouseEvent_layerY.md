# MouseEvent.layerY API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.layerY`
- **MDN文档**: [MouseEvent.layerY](https://developer.mozilla.org/docs/Web/API/MouseEvent/layerY)

## 使用示例

### 基本用法

```javascript
// MouseEvent.layerY 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.layerY API');
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
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
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

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseEvent.layerY是否支持
function isMouseEventLayerYSupported() {
    return 'layerY' in mouseevent && typeof mouseevent.layerY === 'function';
}

if (isMouseEventLayerYSupported()) {
    console.log('MouseEvent.layerY 支持');
    // 使用MouseEvent.layerY
} else {
    console.log('MouseEvent.layerY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.layerY polyfill
if (!mouseevent.layerY) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.layerY polyfill');
}
```

