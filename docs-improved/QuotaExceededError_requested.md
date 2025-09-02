# QuotaExceededError.requested API 兼容性数据

## 基本信息

- **API名称**: `QuotaExceededError.requested`
- **MDN文档**: [QuotaExceededError.requested](https://developer.mozilla.org/docs/Web/API/QuotaExceededError/requested)
- **规范文档**: [查看规范](https://webidl.spec.whatwg.org/#dom-quotaexceedederror-requested)

## 使用示例

### 基本用法

```javascript
// QuotaExceededError.requested 使用示例
// 请查阅MDN文档了解具体用法
console.log('QuotaExceededError.requested API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 138

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查QuotaExceededError.requested是否支持
function isQuotaExceededErrorRequestedSupported() {
    return 'requested' in quotaexceedederror && typeof quotaexceedederror.requested === 'function';
}

if (isQuotaExceededErrorRequestedSupported()) {
    console.log('QuotaExceededError.requested 支持');
    // 使用QuotaExceededError.requested
} else {
    console.log('QuotaExceededError.requested 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// QuotaExceededError.requested polyfill
if (!quotaexceedederror.requested) {
    // 在这里添加polyfill实现
    console.log('加载QuotaExceededError.requested polyfill');
}
```

