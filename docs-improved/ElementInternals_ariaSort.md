# ElementInternals.ariaSort API 兼容性数据

## 基本信息

- **API名称**: `ElementInternals.ariaSort`
- **MDN文档**: [ElementInternals.ariaSort](https://developer.mozilla.org/docs/Web/API/ElementInternals/ariaSort)
- **规范文档**: [查看规范](https://w3c.github.io/aria/#dom-ariamixin-ariasort)
- **标签**: `web-features:aria-attribute-reflection`

## 使用示例

### 基本用法

```javascript
// ElementInternals.ariaSort 使用示例
// 请查阅MDN文档了解具体用法
console.log('ElementInternals.ariaSort API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 119 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 119

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ElementInternals.ariaSort是否支持
function isElementInternalsAriaSortSupported() {
    return 'ariaSort' in elementinternals && typeof elementinternals.ariaSort === 'function';
}

if (isElementInternalsAriaSortSupported()) {
    console.log('ElementInternals.ariaSort 支持');
    // 使用ElementInternals.ariaSort
} else {
    console.log('ElementInternals.ariaSort 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ElementInternals.ariaSort polyfill
if (!elementinternals.ariaSort) {
    // 在这里添加polyfill实现
    console.log('加载ElementInternals.ariaSort polyfill');
}
```

