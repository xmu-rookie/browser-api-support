# TrustedScriptURL.toString API 兼容性数据

## 基本信息

- **API名称**: `TrustedScriptURL.toString`
- **MDN文档**: [TrustedScriptURL.toString](https://developer.mozilla.org/docs/Web/API/TrustedScriptURL/toString)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#trustedscripturl-stringification-behavior)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedScriptURL.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedScriptURL.toString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 83

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查TrustedScriptURL.toString是否支持
function isTrustedScriptURLToStringSupported() {
    return 'toString' in trustedscripturl && typeof trustedscripturl.toString === 'function';
}

if (isTrustedScriptURLToStringSupported()) {
    console.log('TrustedScriptURL.toString 支持');
    // 使用TrustedScriptURL.toString
} else {
    console.log('TrustedScriptURL.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedScriptURL.toString polyfill
if (!trustedscripturl.toString) {
    // 在这里添加polyfill实现
    console.log('加载TrustedScriptURL.toString polyfill');
}
```

