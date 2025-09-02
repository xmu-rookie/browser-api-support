# Headers.forEach API 兼容性数据

## 基本信息

- **API名称**: `Headers.forEach`
- **MDN文档**: [Headers.forEach](https://developer.mozilla.org/docs/Web/API/Headers/forEach)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Headers.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('Headers.forEach API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 14 |  |
| Firefox | 47 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 42

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 47

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Headers.forEach是否支持
function isHeadersForEachSupported() {
    return 'forEach' in headers && typeof headers.forEach === 'function';
}

if (isHeadersForEachSupported()) {
    console.log('Headers.forEach 支持');
    // 使用Headers.forEach
} else {
    console.log('Headers.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Headers.forEach polyfill
if (!headers.forEach) {
    // 在这里添加polyfill实现
    console.log('加载Headers.forEach polyfill');
}
```

