# XMLHttpRequest.authorization_removed_cross_origin API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.authorization_removed_cross_origin`
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#http-redirect-fetch)
- **标签**: `web-features:xhr`
- **描述**: `Authorization` header removed from cross-origin redirects

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.authorization_removed_cross_origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.authorization_removed_cross_origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 16.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.authorization_removed_cross_origin是否支持
function isXMLHttpRequestAuthorization_removed_cross_originSupported() {
    return 'authorization_removed_cross_origin' in xmlhttprequest && typeof xmlhttprequest.authorization_removed_cross_origin === 'function';
}

if (isXMLHttpRequestAuthorization_removed_cross_originSupported()) {
    console.log('XMLHttpRequest.authorization_removed_cross_origin 支持');
    // 使用XMLHttpRequest.authorization_removed_cross_origin
} else {
    console.log('XMLHttpRequest.authorization_removed_cross_origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.authorization_removed_cross_origin polyfill
if (!xmlhttprequest.authorization_removed_cross_origin) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.authorization_removed_cross_origin polyfill');
}
```

