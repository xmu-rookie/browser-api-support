# URL API 兼容性数据

## 基本信息

- **API名称**: `URL`
- **MDN文档**: [URL](https://developer.mozilla.org/docs/Web/API/URL)
- **规范文档**: [查看规范](https://url.spec.whatwg.org/#url)
- **标签**: `web-features:url`

## 使用示例

### 基本用法

```javascript
// URL 使用示例
// 请查阅MDN文档了解具体用法
console.log('URL API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| bun | 1.0.0 |  |
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 19 | Before version 57, Firefox had a bug whereby single quotes contained in URLs are escaped when accessed via URL APIs (see [bug 1386683](https://bugzil.la/1386683)). |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 未知 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 未知 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 未知 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### bun

- **支持版本**: 1.0.0

### Chrome


### deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 19
- **注意事项**:
  - Before version 57, Firefox had a bug whereby single quotes contained in URLs are escaped when accessed via URL APIs (see [bug 1386683](https://bugzil.la/1386683)).

### Internet Explorer

- **支持版本**: 10

### Node.js


### Safari


### WebView Android


## 兼容性检查代码

### 特性检测

```javascript
// 检查URL是否支持
function isURLSupported() {
    return 'URL' in window || typeof URL !== 'undefined';
}

if (isURLSupported()) {
    console.log('URL 支持');
    // 使用URL
} else {
    console.log('URL 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// URL polyfill
if (!window.URL) {
    // 在这里添加polyfill实现
    console.log('加载URL polyfill');
}
```

