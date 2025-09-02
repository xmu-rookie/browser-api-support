# URLSearchParams.URLSearchParams API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams.URLSearchParams`
- **MDN文档**: [URLSearchParams.URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams/URLSearchParams)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-urlsearchparams-urlsearchparams)
- **标签**: `web-features:url`
- **描述**: `URLSearchParams()` constructor

## 使用示例

### 基本用法

```javascript
// URLSearchParams.URLSearchParams 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams.URLSearchParams API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 29 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 6.13.0 |  |
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

- **支持版本**: 49

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 29

### Node.js

- **支持版本**: 6.13.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查URLSearchParams.URLSearchParams是否支持
function isURLSearchParamsURLSearchParamsSupported() {
    return 'URLSearchParams' in urlsearchparams && typeof urlsearchparams.URLSearchParams === 'function';
}

if (isURLSearchParamsURLSearchParamsSupported()) {
    console.log('URLSearchParams.URLSearchParams 支持');
    // 使用URLSearchParams.URLSearchParams
} else {
    console.log('URLSearchParams.URLSearchParams 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLSearchParams.URLSearchParams polyfill
if (!urlsearchparams.URLSearchParams) {
    // 在这里添加polyfill实现
    console.log('加载URLSearchParams.URLSearchParams polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **USVString**: `USVString` for `init` object
- **record**: record for `init` object
- **sequence**: sequence for `init` object

