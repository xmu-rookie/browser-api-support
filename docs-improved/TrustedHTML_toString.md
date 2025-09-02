# TrustedHTML.toString API 兼容性数据

## 基本信息

- **API名称**: `TrustedHTML.toString`
- **MDN文档**: [TrustedHTML.toString](https://developer.mozilla.org/docs/Web/API/TrustedHTML/toString)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#trustedhtml-stringification-behavior)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedHTML.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedHTML.toString API');
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
// 检查TrustedHTML.toString是否支持
function isTrustedHTMLToStringSupported() {
    return 'toString' in trustedhtml && typeof trustedhtml.toString === 'function';
}

if (isTrustedHTMLToStringSupported()) {
    console.log('TrustedHTML.toString 支持');
    // 使用TrustedHTML.toString
} else {
    console.log('TrustedHTML.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedHTML.toString polyfill
if (!trustedhtml.toString) {
    // 在这里添加polyfill实现
    console.log('加载TrustedHTML.toString polyfill');
}
```

