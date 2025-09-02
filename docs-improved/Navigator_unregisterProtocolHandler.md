# Navigator.unregisterProtocolHandler API 兼容性数据

## 基本信息

- **API名称**: `Navigator.unregisterProtocolHandler`
- **MDN文档**: [Navigator.unregisterProtocolHandler](https://developer.mozilla.org/docs/Web/API/Navigator/unregisterProtocolHandler)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-unregisterprotocolhandler-dev)
- **标签**: `web-features:registerprotocolhandler`

## 使用示例

### 基本用法

```javascript
// Navigator.unregisterProtocolHandler 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.unregisterProtocolHandler API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 25 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 25
- **支持版本**: ≤12.1
- **移除版本**: 15

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.unregisterProtocolHandler是否支持
function isNavigatorUnregisterProtocolHandlerSupported() {
    return 'unregisterProtocolHandler' in navigator && typeof navigator.unregisterProtocolHandler === 'function';
}

if (isNavigatorUnregisterProtocolHandlerSupported()) {
    console.log('Navigator.unregisterProtocolHandler 支持');
    // 使用Navigator.unregisterProtocolHandler
} else {
    console.log('Navigator.unregisterProtocolHandler 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.unregisterProtocolHandler polyfill
if (!navigator.unregisterProtocolHandler) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.unregisterProtocolHandler polyfill');
}
```

