# atob API 兼容性数据

## 基本信息

- **API名称**: `atob`
- **MDN文档**: [atob](https://developer.mozilla.org/docs/Web/API/Window/atob)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob-dev)
- **标签**: `web-features:base64encodedecode`

## 使用示例

### 基本用法

```javascript
// atob 使用示例
// 请查阅MDN文档了解具体用法
console.log('atob API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 16.0.0 |  |
| oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 4

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 16.0.0

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
// 检查atob是否支持
function isatobSupported() {
    return 'atob' in window || typeof atob !== 'undefined';
}

if (isatobSupported()) {
    console.log('atob 支持');
    // 使用atob
} else {
    console.log('atob 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// atob polyfill
if (!window.atob) {
    // 在这里添加polyfill实现
    console.log('加载atob polyfill');
}
```

