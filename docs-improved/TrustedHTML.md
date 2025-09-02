# TrustedHTML API 兼容性数据

## 基本信息

- **API名称**: `TrustedHTML`
- **MDN文档**: [TrustedHTML](https://developer.mozilla.org/docs/Web/API/TrustedHTML)
- **规范文档**: [查看规范](https://w3c.github.io/trusted-types/dist/spec/#trusted-html)
- **标签**: `web-features:trusted-types`

## 使用示例

### 基本用法

```javascript
// TrustedHTML 使用示例
// 请查阅MDN文档了解具体用法
console.log('TrustedHTML API');
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
// 检查TrustedHTML是否支持
function isTrustedHTMLSupported() {
    return 'TrustedHTML' in window || typeof TrustedHTML !== 'undefined';
}

if (isTrustedHTMLSupported()) {
    console.log('TrustedHTML 支持');
    // 使用TrustedHTML
} else {
    console.log('TrustedHTML 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TrustedHTML polyfill
if (!window.TrustedHTML) {
    // 在这里添加polyfill实现
    console.log('加载TrustedHTML polyfill');
}
```

