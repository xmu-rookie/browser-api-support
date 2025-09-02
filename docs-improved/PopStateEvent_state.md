# PopStateEvent.state API 兼容性数据

## 基本信息

- **API名称**: `PopStateEvent.state`
- **MDN文档**: [PopStateEvent.state](https://developer.mozilla.org/docs/Web/API/PopStateEvent/state)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-popstateevent-state-dev)
- **标签**: `web-features:history`

## 使用示例

### 基本用法

```javascript
// PopStateEvent.state 使用示例
// 请查阅MDN文档了解具体用法
console.log('PopStateEvent.state API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查PopStateEvent.state是否支持
function isPopStateEventStateSupported() {
    return 'state' in popstateevent && typeof popstateevent.state === 'function';
}

if (isPopStateEventStateSupported()) {
    console.log('PopStateEvent.state 支持');
    // 使用PopStateEvent.state
} else {
    console.log('PopStateEvent.state 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PopStateEvent.state polyfill
if (!popstateevent.state) {
    // 在这里添加polyfill实现
    console.log('加载PopStateEvent.state polyfill');
}
```

