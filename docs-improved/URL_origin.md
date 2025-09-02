# URL.origin API 兼容性数据

## 基本信息

- **API名称**: `URL.origin`
- **MDN文档**: [URL.origin](https://developer.mozilla.org/docs/Web/API/URL/origin)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-url-origin)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URL.origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL.origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 32 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 26 | Before Firefox 49, Results for `URL` using the `blob` scheme incorrectly returned `null`. |
| Firefox Android | 同主版本 |  |
| Node.js | 6.13.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 32

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 26
- **注意事项**:
  - Before Firefox 49, Results for `URL` using the `blob` scheme incorrectly returned `null`.

### Node.js

- **支持版本**: 6.13.0

### Safari

- **支持版本**: 10

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查URL.origin是否支持
function isURLOriginSupported() {
    return 'origin' in url && typeof url.origin === 'function';
}

if (isURLOriginSupported()) {
    console.log('URL.origin 支持');
    // 使用URL.origin
} else {
    console.log('URL.origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URL.origin polyfill
if (!url.origin) {
    // 在这里添加polyfill实现
    console.log('加载URL.origin polyfill');
}
```

