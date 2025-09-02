# console.clear_static API 兼容性数据

## 基本信息

- **API名称**: `console.clear_static`
- **MDN文档**: [console.clear_static](https://developer.mozilla.org/docs/Web/API/console/clear_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#clear)
- **标签**: `web-features:console`
- **描述**: `clear()` static method

## 使用示例

### 基本用法

```javascript
// console.clear_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.clear_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 25 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 39 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Node.js | 8.3.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 25

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 39

### Internet Explorer

- **支持版本**: 8

### Node.js

- **支持版本**: 8.3.0

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.clear_static是否支持
function isconsoleClear_staticSupported() {
    return 'clear_static' in console && typeof console.clear_static === 'function';
}

if (isconsoleClear_staticSupported()) {
    console.log('console.clear_static 支持');
    // 使用console.clear_static
} else {
    console.log('console.clear_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.clear_static polyfill
if (!console.clear_static) {
    // 在这里添加polyfill实现
    console.log('加载console.clear_static polyfill');
}
```

