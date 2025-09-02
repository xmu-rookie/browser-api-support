# CookieStoreManager.unsubscribe API 兼容性数据

## 基本信息

- **API名称**: `CookieStoreManager.unsubscribe`
- **MDN文档**: [CookieStoreManager.unsubscribe](https://developer.mozilla.org/docs/Web/API/CookieStoreManager/unsubscribe)
- **规范文档**: [查看规范](https://cookiestore.spec.whatwg.org/#dom-cookiestoremanager-unsubscribe)
- **标签**: `web-features:cookie-store`

## 使用示例

### 基本用法

```javascript
// CookieStoreManager.unsubscribe 使用示例
// 请查阅MDN文档了解具体用法
console.log('CookieStoreManager.unsubscribe API');
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
// 检查CookieStoreManager.unsubscribe是否支持
function isCookieStoreManagerUnsubscribeSupported() {
    return 'unsubscribe' in cookiestoremanager && typeof cookiestoremanager.unsubscribe === 'function';
}

if (isCookieStoreManagerUnsubscribeSupported()) {
    console.log('CookieStoreManager.unsubscribe 支持');
    // 使用CookieStoreManager.unsubscribe
} else {
    console.log('CookieStoreManager.unsubscribe 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CookieStoreManager.unsubscribe polyfill
if (!cookiestoremanager.unsubscribe) {
    // 在这里添加polyfill实现
    console.log('加载CookieStoreManager.unsubscribe polyfill');
}
```

