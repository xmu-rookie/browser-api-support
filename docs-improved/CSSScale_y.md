# CSSScale.y API 兼容性数据

## 基本信息

- **API名称**: `CSSScale.y`
- **MDN文档**: [CSSScale.y](https://developer.mozilla.org/docs/Web/API/CSSScale/y)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-cssscale-y)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSScale.y 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSScale.y API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSScale.y是否支持
function isCSSScaleYSupported() {
    return 'y' in cssscale && typeof cssscale.y === 'function';
}

if (isCSSScaleYSupported()) {
    console.log('CSSScale.y 支持');
    // 使用CSSScale.y
} else {
    console.log('CSSScale.y 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSScale.y polyfill
if (!cssscale.y) {
    // 在这里添加polyfill实现
    console.log('加载CSSScale.y polyfill');
}
```

