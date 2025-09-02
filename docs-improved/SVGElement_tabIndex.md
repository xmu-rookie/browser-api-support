# SVGElement.tabIndex API 兼容性数据

## 基本信息

- **API名称**: `SVGElement.tabIndex`
- **MDN文档**: [SVGElement.tabIndex](https://developer.mozilla.org/docs/Web/API/SVGElement/tabIndex)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-tabindex)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGElement.tabIndex 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGElement.tabIndex API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 51

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGElement.tabIndex是否支持
function isSVGElementTabIndexSupported() {
    return 'tabIndex' in svgelement && typeof svgelement.tabIndex === 'function';
}

if (isSVGElementTabIndexSupported()) {
    console.log('SVGElement.tabIndex 支持');
    // 使用SVGElement.tabIndex
} else {
    console.log('SVGElement.tabIndex 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGElement.tabIndex polyfill
if (!svgelement.tabIndex) {
    // 在这里添加polyfill实现
    console.log('加载SVGElement.tabIndex polyfill');
}
```

