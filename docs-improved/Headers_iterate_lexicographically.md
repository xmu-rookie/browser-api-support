# Headers.iterate_lexicographically API 兼容性数据

## 基本信息

- **API名称**: `Headers.iterate_lexicographically`
- **标签**: `web-features:fetch`
- **描述**: Iteration is lexicographically sorted

## 使用示例

### 基本用法

```javascript
// Headers.iterate_lexicographically 使用示例
// 请查阅MDN文档了解具体用法
console.log('Headers.iterate_lexicographically API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 18 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
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

- **支持版本**: 57

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 57

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Headers.iterate_lexicographically是否支持
function isHeadersIterate_lexicographicallySupported() {
    return 'iterate_lexicographically' in headers && typeof headers.iterate_lexicographically === 'function';
}

if (isHeadersIterate_lexicographicallySupported()) {
    console.log('Headers.iterate_lexicographically 支持');
    // 使用Headers.iterate_lexicographically
} else {
    console.log('Headers.iterate_lexicographically 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Headers.iterate_lexicographically polyfill
if (!headers.iterate_lexicographically) {
    // 在这里添加polyfill实现
    console.log('加载Headers.iterate_lexicographically polyfill');
}
```

