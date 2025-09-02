# FetchLaterResult API 兼容性数据

## 基本信息

- **API名称**: `FetchLaterResult`
- **MDN文档**: [FetchLaterResult](https://developer.mozilla.org/docs/Web/API/FetchLaterResult)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#fetchlaterresult)
- **标签**: `web-features:fetchlater`

## 使用示例

### 基本用法

```javascript
// FetchLaterResult 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchLaterResult API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 135 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
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

- **支持版本**: 135

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FetchLaterResult是否支持
function isFetchLaterResultSupported() {
    return 'FetchLaterResult' in window || typeof FetchLaterResult !== 'undefined';
}

if (isFetchLaterResultSupported()) {
    console.log('FetchLaterResult 支持');
    // 使用FetchLaterResult
} else {
    console.log('FetchLaterResult 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchLaterResult polyfill
if (!window.FetchLaterResult) {
    // 在这里添加polyfill实现
    console.log('加载FetchLaterResult polyfill');
}
```

