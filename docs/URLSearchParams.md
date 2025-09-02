# URLSearchParams API 兼容性数据

## 基本信息

- **API名称**: `URLSearchParams`
- **MDN文档**: [URLSearchParams](https://developer.mozilla.org/docs/Web/API/URLSearchParams)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#urlsearchparams)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URLSearchParams 使用示例
// 请查阅MDN文档了解具体用法
console.log('URLSearchParams API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 17 |  |
| Firefox | 29 | Before version 57 single quotes in URLs were escaped (see [bug 1386683](https://bugzil.la/1386683)). |
| Firefox Android | 同主版本 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 49

### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 29
- **注意事项**:
  - Before version 57 single quotes in URLs were escaped (see [bug 1386683](https://bugzil.la/1386683)).

### Node.js


### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查URLSearchParams是否支持
function isURLSearchParamsSupported() {
    return 'URLSearchParams' in window || typeof URLSearchParams !== 'undefined';
}

if (isURLSearchParamsSupported()) {
    console.log('URLSearchParams 支持');
    // 使用URLSearchParams
} else {
    console.log('URLSearchParams 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URLSearchParams polyfill
if (!window.URLSearchParams) {
    // 在这里添加polyfill实现
    console.log('加载URLSearchParams polyfill');
}
```

