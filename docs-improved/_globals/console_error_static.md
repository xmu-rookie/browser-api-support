# console.error_static API 兼容性数据

## 基本信息

- **API名称**: `console.error_static`
- **MDN文档**: [console.error_static](https://developer.mozilla.org/docs/Web/API/console/error_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#error)
- **标签**: `web-features:console`
- **描述**: `error()` static method

## 使用示例

### 基本用法

```javascript
// console.error_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.error_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Node.js | 0.10.0 |  |
| Oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 8

### Node.js

- **支持版本**: 0.10.0

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.error_static是否支持
function isconsoleError_staticSupported() {
    return 'error_static' in console && typeof console.error_static === 'function';
}

if (isconsoleError_staticSupported()) {
    console.log('console.error_static 支持');
    // 使用console.error_static
} else {
    console.log('console.error_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.error_static polyfill
if (!console.error_static) {
    // 在这里添加polyfill实现
    console.log('加载console.error_static polyfill');
}
```

