# fetch API 兼容性数据

## 基本信息

- **API名称**: `fetch`
- **MDN文档**: [fetch](https://developer.mozilla.org/docs/Web/API/Window/fetch)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#fetch-method)
- **标签**: `web-features:fetch`

## 使用示例

### GET请求

```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
```

### POST请求

```javascript
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' })
})
.then(response => response.json())
.then(data => console.log(data));
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 | Fetching with a `"manual"` redirect mode does not result in a `"opaqueredirect"` response, but a regular response. |
| Edge | 14 |  |
| Firefox | 39 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
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

- **支持版本**: 42

### deno

- **支持版本**: 1.0
- **注意事项**:
  - Fetching with a `"manual"` redirect mode does not result in a `"opaqueredirect"` response, but a regular response.

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 39

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查fetch是否支持
function isfetchSupported() {
    return 'fetch' in window || typeof fetch !== 'undefined';
}

if (isfetchSupported()) {
    console.log('fetch 支持');
    // 使用fetch
} else {
    console.log('fetch 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// fetch polyfill
if (!window.fetch) {
    // 在这里添加polyfill实现
    console.log('加载fetch polyfill');
}
```

