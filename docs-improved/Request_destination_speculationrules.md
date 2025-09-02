# Request.destination.speculationrules API 兼容性数据

## 基本信息

- **API名称**: `Request.destination.speculationrules`
- **规范文档**: [查看规范](https://wicg.github.io/nav-speculation/speculation-rules.html#fetch)
- **标签**: `web-features:fetch`
- **描述**: `speculationrules` value

## 使用示例

### 基本用法

```javascript
// Request.destination.speculationrules 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.destination.speculationrules API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 121

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.destination.speculationrules是否支持
function isRequestDestinationSupported() {
    return 'destination' in request && typeof request.destination === 'function';
}

if (isRequestDestinationSupported()) {
    console.log('Request.destination.speculationrules 支持');
    // 使用Request.destination.speculationrules
} else {
    console.log('Request.destination.speculationrules 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.destination.speculationrules polyfill
if (!request.destination) {
    // 在这里添加polyfill实现
    console.log('加载Request.destination.speculationrules polyfill');
}
```

