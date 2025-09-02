# CookieStoreManager.subscribe API 兼容性数据

## 基本信息

- **API名称**: `CookieStoreManager.subscribe`
- **MDN文档**: [CookieStoreManager.subscribe](https://developer.mozilla.org/docs/Web/API/CookieStoreManager/subscribe)
- **规范文档**: [查看规范](https://cookiestore.spec.whatwg.org/#dom-cookiestoremanager-subscribe)
- **标签**: `web-features:cookie-store`

## 使用示例

### 基本用法

```javascript
// CookieStoreManager.subscribe 使用示例
// 请查阅MDN文档了解具体用法
console.log('CookieStoreManager.subscribe API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 140 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 87

### Firefox

- **支持版本**: 140

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CookieStoreManager.subscribe是否支持
function isCookieStoreManagerSubscribeSupported() {
    return 'subscribe' in cookiestoremanager && typeof cookiestoremanager.subscribe === 'function';
}

if (isCookieStoreManagerSubscribeSupported()) {
    console.log('CookieStoreManager.subscribe 支持');
    // 使用CookieStoreManager.subscribe
} else {
    console.log('CookieStoreManager.subscribe 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CookieStoreManager.subscribe polyfill
if (!cookiestoremanager.subscribe) {
    // 在这里添加polyfill实现
    console.log('加载CookieStoreManager.subscribe polyfill');
}
```

