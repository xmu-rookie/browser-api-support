# SVGElement.blur API 兼容性数据

## 基本信息

- **API名称**: `SVGElement.blur`
- **MDN文档**: [SVGElement.blur](https://developer.mozilla.org/docs/Web/API/SVGElement/blur)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-blur-dev)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGElement.blur 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGElement.blur API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 51

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGElement.blur是否支持
function isSVGElementBlurSupported() {
    return 'blur' in svgelement && typeof svgelement.blur === 'function';
}

if (isSVGElementBlurSupported()) {
    console.log('SVGElement.blur 支持');
    // 使用SVGElement.blur
} else {
    console.log('SVGElement.blur 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGElement.blur polyfill
if (!svgelement.blur) {
    // 在这里添加polyfill实现
    console.log('加载SVGElement.blur polyfill');
}
```

