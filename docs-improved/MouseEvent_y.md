# MouseEvent.y API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.y`
- **MDN文档**: [MouseEvent.y](https://developer.mozilla.org/docs/Web/API/MouseEvent/y)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-mouseevent-y)
- **标签**: `web-features:mouse-events`

## 使用示例

### 基本用法

```javascript
// MouseEvent.y 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.y API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 53

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseEvent.y是否支持
function isMouseEventYSupported() {
    return 'y' in mouseevent && typeof mouseevent.y === 'function';
}

if (isMouseEventYSupported()) {
    console.log('MouseEvent.y 支持');
    // 使用MouseEvent.y
} else {
    console.log('MouseEvent.y 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.y polyfill
if (!mouseevent.y) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.y polyfill');
}
```

