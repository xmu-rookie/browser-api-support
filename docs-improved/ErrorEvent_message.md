# ErrorEvent.message API 兼容性数据

## 基本信息

- **API名称**: `ErrorEvent.message`
- **MDN文档**: [ErrorEvent.message](https://developer.mozilla.org/docs/Web/API/ErrorEvent/message)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-message)

## 使用示例

### 基本用法

```javascript
// ErrorEvent.message 使用示例
// 请查阅MDN文档了解具体用法
console.log('ErrorEvent.message API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 10 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 10

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 27

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查ErrorEvent.message是否支持
function isErrorEventMessageSupported() {
    return 'message' in errorevent && typeof errorevent.message === 'function';
}

if (isErrorEventMessageSupported()) {
    console.log('ErrorEvent.message 支持');
    // 使用ErrorEvent.message
} else {
    console.log('ErrorEvent.message 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ErrorEvent.message polyfill
if (!errorevent.message) {
    // 在这里添加polyfill实现
    console.log('加载ErrorEvent.message polyfill');
}
```

