# CSS API 兼容性数据

## 基本信息

- **API名称**: `CSS`
- **MDN文档**: [CSS](https://developer.mozilla.org/docs/Web/API/CSS)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#namespacedef-css)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSS 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSS API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 28 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 28

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 22

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSS是否支持
function isCSSSupported() {
    return 'CSS' in window || typeof CSS !== 'undefined';
}

if (isCSSSupported()) {
    console.log('CSS 支持');
    // 使用CSS
} else {
    console.log('CSS 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSS polyfill
if (!window.CSS) {
    // 在这里添加polyfill实现
    console.log('加载CSS polyfill');
}
```

