# Sanitizer.allowAttribute API 兼容性数据

## 基本信息

- **API名称**: `Sanitizer.allowAttribute`
- **MDN文档**: [Sanitizer.allowAttribute](https://developer.mozilla.org/docs/Web/API/Sanitizer/allowAttribute)
- **规范文档**: [查看规范](https://wicg.github.io/sanitizer-api/#dom-sanitizer-allowattribute)
- **标签**: `web-features:sanitizer`

## 使用示例

### 基本用法

```javascript
// Sanitizer.allowAttribute 使用示例
// 请查阅MDN文档了解具体用法
console.log('Sanitizer.allowAttribute API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 138 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 138
- **需要标志**: 
  - dom.security.sanitizer.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Sanitizer.allowAttribute是否支持
function isSanitizerAllowAttributeSupported() {
    return 'allowAttribute' in sanitizer && typeof sanitizer.allowAttribute === 'function';
}

if (isSanitizerAllowAttributeSupported()) {
    console.log('Sanitizer.allowAttribute 支持');
    // 使用Sanitizer.allowAttribute
} else {
    console.log('Sanitizer.allowAttribute 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Sanitizer.allowAttribute polyfill
if (!sanitizer.allowAttribute) {
    // 在这里添加polyfill实现
    console.log('加载Sanitizer.allowAttribute polyfill');
}
```

