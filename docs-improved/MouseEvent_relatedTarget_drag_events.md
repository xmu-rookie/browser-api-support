# MouseEvent.relatedTarget.drag_events API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.relatedTarget.drag_events`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#:~:text=relatedtarget)
- **描述**: Available on `DragEvent`

## 使用示例

### 基本用法

```javascript
// MouseEvent.relatedTarget.drag_events 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.relatedTarget.drag_events API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Firefox

- **支持版本**: 59

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseEvent.relatedTarget.drag_events是否支持
function isMouseEventRelatedTargetSupported() {
    return 'relatedTarget' in mouseevent && typeof mouseevent.relatedTarget === 'function';
}

if (isMouseEventRelatedTargetSupported()) {
    console.log('MouseEvent.relatedTarget.drag_events 支持');
    // 使用MouseEvent.relatedTarget.drag_events
} else {
    console.log('MouseEvent.relatedTarget.drag_events 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.relatedTarget.drag_events polyfill
if (!mouseevent.relatedTarget) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.relatedTarget.drag_events polyfill');
}
```

