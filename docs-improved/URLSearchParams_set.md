# URLSearchParams.set API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams.set`
- **MDN文档**: [URLSearchParams.set](https://developer.mozilla.org/docs/Web/API/URLSearchParams/set)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-urlsearchparams-set)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URLSearchParams.set 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams.set API');
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
// 检查URLSearchParams.set是否支持
function isURLSearchParamsSetSupported() {
    return 'set' in urlsearchparams && typeof urlsearchparams.set === 'function';
}

if (isURLSearchParamsSetSupported()) {
    console.log('URLSearchParams.set 支持');
    // 使用URLSearchParams.set
} else {
    console.log('URLSearchParams.set 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLSearchParams.set polyfill
if (!urlsearchparams.set) {
    // 在这里添加polyfill实现
    console.log('加载URLSearchParams.set polyfill');
}
```

