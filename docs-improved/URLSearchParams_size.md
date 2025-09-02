# URLSearchParams.size API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams.size`
- **MDN文档**: [URLSearchParams.size](https://developer.mozilla.org/docs/Web/API/URLSearchParams/size)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-urlsearchparams-size)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URLSearchParams.size 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams.size API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.2 |  |
| Chrome | 113 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.32 |  |
| Edge | 同主版本 |  |
| Firefox | 112 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 19.8.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.2

### Chrome

- **支持版本**: 113

### Deno

- **支持版本**: 1.32

### Firefox

- **支持版本**: 112

### Node.js

- **支持版本**: 19.8.0
- **支持版本**: 18.16.0
- **移除版本**: 19.0.0

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查URLSearchParams.size是否支持
function isURLSearchParamsSizeSupported() {
    return 'size' in urlsearchparams && typeof urlsearchparams.size === 'function';
}

if (isURLSearchParamsSizeSupported()) {
    console.log('URLSearchParams.size 支持');
    // 使用URLSearchParams.size
} else {
    console.log('URLSearchParams.size 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLSearchParams.size polyfill
if (!urlsearchparams.size) {
    // 在这里添加polyfill实现
    console.log('加载URLSearchParams.size polyfill');
}
```

