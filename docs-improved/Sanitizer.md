# Sanitizer API 兼容性数据

## 基本信息

- **API名称**: `Sanitizer`
- **规范文档**: [查看规范](https://wicg.github.io/sanitizer-api/#sanitizer)
- **标签**: `web-features:sanitizer`

## 使用示例

### 基本用法

```javascript
// Sanitizer 使用示例
// 请查阅MDN文档了解具体用法
console.log('Sanitizer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 | Chrome 105 to Chrome 118 (inclusive) supported this interface name with a significantly different sp... |
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
- **注意事项**:
  - Chrome 105 to Chrome 118 (inclusive) supported this interface name with a significantly different specification.

### Firefox

- **支持版本**: 138
- **需要标志**: 
  - dom.security.sanitizer.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Sanitizer是否支持
function isSanitizerSupported() {
    return 'Sanitizer' in window || typeof Sanitizer !== 'undefined';
}

if (isSanitizerSupported()) {
    console.log('Sanitizer 支持');
    // 使用Sanitizer
} else {
    console.log('Sanitizer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Sanitizer polyfill
if (!window.Sanitizer) {
    // 在这里添加polyfill实现
    console.log('加载Sanitizer polyfill');
}
```

