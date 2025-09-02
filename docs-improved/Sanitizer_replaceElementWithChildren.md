# Sanitizer.replaceElementWithChildren API 兼容性数据

## 基本信息

- **API名称**: `Sanitizer.replaceElementWithChildren`
- **MDN文档**: [Sanitizer.replaceElementWithChildren](https://developer.mozilla.org/docs/Web/API/Sanitizer/replaceElementWithChildren)
- **规范文档**: [查看规范](https://wicg.github.io/sanitizer-api/#dom-sanitizer-replaceelementwithchildren)
- **标签**: `web-features:sanitizer`

## 使用示例

### 基本用法

```javascript
// Sanitizer.replaceElementWithChildren 使用示例
// 请查阅MDN文档了解具体用法
console.log('Sanitizer.replaceElementWithChildren API');
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
// 检查Sanitizer.replaceElementWithChildren是否支持
function isSanitizerReplaceElementWithChildrenSupported() {
    return 'replaceElementWithChildren' in sanitizer && typeof sanitizer.replaceElementWithChildren === 'function';
}

if (isSanitizerReplaceElementWithChildrenSupported()) {
    console.log('Sanitizer.replaceElementWithChildren 支持');
    // 使用Sanitizer.replaceElementWithChildren
} else {
    console.log('Sanitizer.replaceElementWithChildren 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Sanitizer.replaceElementWithChildren polyfill
if (!sanitizer.replaceElementWithChildren) {
    // 在这里添加polyfill实现
    console.log('加载Sanitizer.replaceElementWithChildren polyfill');
}
```

