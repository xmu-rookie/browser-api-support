# ExtendableCookieChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `ExtendableCookieChangeEvent`
- **MDN文档**: [ExtendableCookieChangeEvent](https://developer.mozilla.org/docs/Web/API/ExtendableCookieChangeEvent)
- **规范文档**: [查看规范](https://cookiestore.spec.whatwg.org/#ExtendableCookieChangeEvent)
- **标签**: `web-features:cookie-store`

## 使用示例

### 基本用法

```javascript
// ExtendableCookieChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('ExtendableCookieChangeEvent API');
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
// 检查ExtendableCookieChangeEvent是否支持
function isExtendableCookieChangeEventSupported() {
    return 'ExtendableCookieChangeEvent' in window || typeof ExtendableCookieChangeEvent !== 'undefined';
}

if (isExtendableCookieChangeEventSupported()) {
    console.log('ExtendableCookieChangeEvent 支持');
    // 使用ExtendableCookieChangeEvent
} else {
    console.log('ExtendableCookieChangeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ExtendableCookieChangeEvent polyfill
if (!window.ExtendableCookieChangeEvent) {
    // 在这里添加polyfill实现
    console.log('加载ExtendableCookieChangeEvent polyfill');
}
```

