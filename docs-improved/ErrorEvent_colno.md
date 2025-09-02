# ErrorEvent.colno API 兼容性数据

## 基本信息

- **API名称**: `ErrorEvent.colno`
- **MDN文档**: [ErrorEvent.colno](https://developer.mozilla.org/docs/Web/API/ErrorEvent/colno)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#dom-errorevent-colno)

## 使用示例

### 基本用法

```javascript
// ErrorEvent.colno 使用示例
// 请查阅MDN文档了解具体用法
console.log('ErrorEvent.colno API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 30

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 31

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查ErrorEvent.colno是否支持
function isErrorEventColnoSupported() {
    return 'colno' in errorevent && typeof errorevent.colno === 'function';
}

if (isErrorEventColnoSupported()) {
    console.log('ErrorEvent.colno 支持');
    // 使用ErrorEvent.colno
} else {
    console.log('ErrorEvent.colno 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ErrorEvent.colno polyfill
if (!errorevent.colno) {
    // 在这里添加polyfill实现
    console.log('加载ErrorEvent.colno polyfill');
}
```

