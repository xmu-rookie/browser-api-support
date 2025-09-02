# URLSearchParams.entries API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams.entries`
- **MDN文档**: [URLSearchParams.entries](https://developer.mozilla.org/docs/Web/API/URLSearchParams/entries)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#dom-urlsearchparams-urlsearchparams)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URLSearchParams.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams.entries API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 7.3.0 |  |
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

- **支持版本**: 44

### Node.js

- **支持版本**: 7.3.0
- **支持版本**: 6.13.0
- **移除版本**: 7.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查URLSearchParams.entries是否支持
function isURLSearchParamsEntriesSupported() {
    return 'entries' in urlsearchparams && typeof urlsearchparams.entries === 'function';
}

if (isURLSearchParamsEntriesSupported()) {
    console.log('URLSearchParams.entries 支持');
    // 使用URLSearchParams.entries
} else {
    console.log('URLSearchParams.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLSearchParams.entries polyfill
if (!urlsearchparams.entries) {
    // 在这里添加polyfill实现
    console.log('加载URLSearchParams.entries polyfill');
}
```

