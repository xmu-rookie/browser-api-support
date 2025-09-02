# Navigator.userAgent API 兼容性数据

## 基本信息

- **API名称**: `Navigator.userAgent`
- **MDN文档**: [Navigator.userAgent](https://developer.mozilla.org/docs/Web/API/Navigator/userAgent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-useragent-dev)
- **标签**: `web-features:user-agent-sniffing`

## 使用示例

### 基本用法

```javascript
// Navigator.userAgent 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.userAgent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.22 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Node.js | 21.1.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.22

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Node.js

- **支持版本**: 21.1.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.userAgent是否支持
function isNavigatorUserAgentSupported() {
    return 'userAgent' in navigator && typeof navigator.userAgent === 'function';
}

if (isNavigatorUserAgentSupported()) {
    console.log('Navigator.userAgent 支持');
    // 使用Navigator.userAgent
} else {
    console.log('Navigator.userAgent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.userAgent polyfill
if (!navigator.userAgent) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.userAgent polyfill');
}
```

