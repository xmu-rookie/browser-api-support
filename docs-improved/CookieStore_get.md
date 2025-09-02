# CookieStore.get API 兼容性数据

## 基本信息

- **API名称**: `CookieStore.get`
- **MDN文档**: [CookieStore.get](https://developer.mozilla.org/docs/Web/API/CookieStore/get)
- **规范文档**: [查看规范](https://cookiestore.spec.whatwg.org/#dom-cookiestore-get)
- **标签**: `web-features:cookie-store`

## 使用示例

### 基本用法

```javascript
// CookieStore.get 使用示例
// 请查阅MDN文档了解具体用法
console.log('CookieStore.get API');
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
| Safari | 18.4 |  |
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

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CookieStore.get是否支持
function isCookieStoreGetSupported() {
    return 'get' in cookiestore && typeof cookiestore.get === 'function';
}

if (isCookieStoreGetSupported()) {
    console.log('CookieStore.get 支持');
    // 使用CookieStore.get
} else {
    console.log('CookieStore.get 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CookieStore.get polyfill
if (!cookiestore.get) {
    // 在这里添加polyfill实现
    console.log('加载CookieStore.get polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **domain_return_property**: `domain` in return value
- **expires_return_property**: `expires` in return value
- **name_return_property**: `name` in return value
- **partitioned_return_property**: `partitioned` in return value
- **path_return_property**: `path` in return value
- **sameSite_return_property**: `sameSite` in return value
- **secure_return_property**: `secure` in return value
- **value_return_property**: `value` in return value

