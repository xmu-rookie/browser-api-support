# URL.toString API 兼容性数据

## 基本信息

- **API名称**: `URL.toString`
- **MDN文档**: [URL.toString](https://developer.mozilla.org/docs/Web/API/URL/toString)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#URL-stringification-behavior)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URL.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL.toString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 54 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 6.13.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 19

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 54

### Node.js

- **支持版本**: 6.13.0

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查URL.toString是否支持
function isURLToStringSupported() {
    return 'toString' in url && typeof url.toString === 'function';
}

if (isURLToStringSupported()) {
    console.log('URL.toString 支持');
    // 使用URL.toString
} else {
    console.log('URL.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URL.toString polyfill
if (!url.toString) {
    // 在这里添加polyfill实现
    console.log('加载URL.toString polyfill');
}
```

