# ErrorEvent.ErrorEvent API 兼容性数据

## 基本信息

- **API名称**: `ErrorEvent.ErrorEvent`
- **MDN文档**: [ErrorEvent.ErrorEvent](https://developer.mozilla.org/docs/Web/API/ErrorEvent/ErrorEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#errorevent)
- **描述**: `ErrorEvent()` constructor

## 使用示例

### 基本用法

```javascript
// ErrorEvent.ErrorEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('ErrorEvent.ErrorEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 16 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 14 |  |
| Firefox | 27 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 16

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 27

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查ErrorEvent.ErrorEvent是否支持
function isErrorEventErrorEventSupported() {
    return 'ErrorEvent' in errorevent && typeof errorevent.ErrorEvent === 'function';
}

if (isErrorEventErrorEventSupported()) {
    console.log('ErrorEvent.ErrorEvent 支持');
    // 使用ErrorEvent.ErrorEvent
} else {
    console.log('ErrorEvent.ErrorEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ErrorEvent.ErrorEvent polyfill
if (!errorevent.ErrorEvent) {
    // 在这里添加polyfill实现
    console.log('加载ErrorEvent.ErrorEvent polyfill');
}
```

