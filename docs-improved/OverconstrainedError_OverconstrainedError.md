# OverconstrainedError.OverconstrainedError API 兼容性数据

## 基本信息

- **API名称**: `OverconstrainedError.OverconstrainedError`
- **MDN文档**: [OverconstrainedError.OverconstrainedError](https://developer.mozilla.org/docs/Web/API/OverconstrainedError/OverconstrainedError)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-overconstrainederror)
- **标签**: `web-features:media-capture`
- **描述**: `OverconstrainedError()` constructor

## 使用示例

### 基本用法

```javascript
// OverconstrainedError.OverconstrainedError 使用示例
// 请查阅MDN文档了解具体用法
console.log('OverconstrainedError.OverconstrainedError API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 63 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 63

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查OverconstrainedError.OverconstrainedError是否支持
function isOverconstrainedErrorOverconstrainedErrorSupported() {
    return 'OverconstrainedError' in overconstrainederror && typeof overconstrainederror.OverconstrainedError === 'function';
}

if (isOverconstrainedErrorOverconstrainedErrorSupported()) {
    console.log('OverconstrainedError.OverconstrainedError 支持');
    // 使用OverconstrainedError.OverconstrainedError
} else {
    console.log('OverconstrainedError.OverconstrainedError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OverconstrainedError.OverconstrainedError polyfill
if (!overconstrainederror.OverconstrainedError) {
    // 在这里添加polyfill实现
    console.log('加载OverconstrainedError.OverconstrainedError polyfill');
}
```

