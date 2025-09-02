# console.countReset_static API 兼容性数据

## 基本信息

- **API名称**: `console.countReset_static`
- **MDN文档**: [console.countReset_static](https://developer.mozilla.org/docs/Web/API/console/countReset_static)
- **规范文档**: [查看规范](https://console.spec.whatwg.org/#countreset)
- **标签**: `web-features:console`
- **描述**: `countReset()` static method

## 使用示例

### 基本用法

```javascript
// console.countReset_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.countReset_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 62 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 8.3.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 68

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 62

### Node.js

- **支持版本**: 8.3.0

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.countReset_static是否支持
function isconsoleCountReset_staticSupported() {
    return 'countReset_static' in console && typeof console.countReset_static === 'function';
}

if (isconsoleCountReset_staticSupported()) {
    console.log('console.countReset_static 支持');
    // 使用console.countReset_static
} else {
    console.log('console.countReset_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.countReset_static polyfill
if (!console.countReset_static) {
    // 在这里添加polyfill实现
    console.log('加载console.countReset_static polyfill');
}
```

