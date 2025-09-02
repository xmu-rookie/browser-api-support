# CookieStoreManager API 兼容性数据

## 基本信息

- **API名称**: `CookieStoreManager`
- **MDN文档**: [CookieStoreManager](https://developer.mozilla.org/docs/Web/API/CookieStoreManager)
- **规范文档**: [查看规范](https://cookiestore.spec.whatwg.org/#cookiestoremanager)
- **标签**: `web-features:cookie-store`

## 使用示例

### 基本用法

```javascript
// CookieStoreManager 使用示例
// 请查阅MDN文档了解具体用法
console.log('CookieStoreManager API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 140 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
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
// 检查CookieStoreManager是否支持
function isCookieStoreManagerSupported() {
    return 'CookieStoreManager' in window || typeof CookieStoreManager !== 'undefined';
}

if (isCookieStoreManagerSupported()) {
    console.log('CookieStoreManager 支持');
    // 使用CookieStoreManager
} else {
    console.log('CookieStoreManager 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CookieStoreManager polyfill
if (!window.CookieStoreManager) {
    // 在这里添加polyfill实现
    console.log('加载CookieStoreManager polyfill');
}
```

