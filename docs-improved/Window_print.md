# Window.print API 兼容性数据

## 基本信息

- **API名称**: `Window.print`
- **MDN文档**: [Window.print](https://developer.mozilla.org/docs/Web/API/Window/print)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#printing)
- **标签**: `web-features:print`

## 使用示例

### 基本用法

```javascript
// Window.print 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.print API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute ha... |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 114 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 6 | Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has... |
| Opera Android | 10.1 | Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has... |
| Safari | 1.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Firefox Android

- **支持版本**: 114

### Internet Explorer

- **支持版本**: 5

### Opera

- **支持版本**: 6
- **注意事项**:
  - Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Safari

- **支持版本**: 1.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.print是否支持
function isWindowPrintSupported() {
    return 'print' in window && typeof window.print === 'function';
}

if (isWindowPrintSupported()) {
    console.log('Window.print 支持');
    // 使用Window.print
} else {
    console.log('Window.print 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.print polyfill
if (!window.print) {
    // 在这里添加polyfill实现
    console.log('加载Window.print polyfill');
}
```

