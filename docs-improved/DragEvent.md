# DragEvent API 兼容性数据

## 基本信息

- **API名称**: `DragEvent`
- **MDN文档**: [DragEvent](https://developer.mozilla.org/docs/Web/API/DragEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dnd.html#the-dragevent-interface)
- **标签**: `web-features:draganddrop`

## 使用示例

### 基本用法

```javascript
// DragEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('DragEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 46 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Before Internet Explorer 10, `DragEvent` is exposed in standards mode but not quirks mode. |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 46

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - Before Internet Explorer 10, `DragEvent` is exposed in standards mode but not quirks mode.

### Opera

- **支持版本**: 12

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查DragEvent是否支持
function isDragEventSupported() {
    return 'DragEvent' in window || typeof DragEvent !== 'undefined';
}

if (isDragEventSupported()) {
    console.log('DragEvent 支持');
    // 使用DragEvent
} else {
    console.log('DragEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DragEvent polyfill
if (!window.DragEvent) {
    // 在这里添加polyfill实现
    console.log('加载DragEvent polyfill');
}
```

