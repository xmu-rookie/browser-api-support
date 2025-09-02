# URL.toJSON API 兼容性数据

## 基本信息

- **API名称**: `URL.toJSON`
- **MDN文档**: [URL.toJSON](https://developer.mozilla.org/docs/Web/API/URL/toJSON)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-url-tojson)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URL.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 71 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 54 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 7.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 71

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 54

### Node.js

- **支持版本**: 7.7.0
- **支持版本**: 6.13.0
- **移除版本**: 7.0.0

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查URL.toJSON是否支持
function isURLToJSONSupported() {
    return 'toJSON' in url && typeof url.toJSON === 'function';
}

if (isURLToJSONSupported()) {
    console.log('URL.toJSON 支持');
    // 使用URL.toJSON
} else {
    console.log('URL.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URL.toJSON polyfill
if (!url.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载URL.toJSON polyfill');
}
```

