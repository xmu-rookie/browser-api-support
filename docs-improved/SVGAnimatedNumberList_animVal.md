# SVGAnimatedNumberList.animVal API 兼容性数据

## 基本信息

- **API名称**: `SVGAnimatedNumberList.animVal`
- **MDN文档**: [SVGAnimatedNumberList.animVal](https://developer.mozilla.org/docs/Web/API/SVGAnimatedNumberList/animVal)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGAnimatedNumberList__animVal)
- **标签**: `web-features:smil-svg-animations`

## 使用示例

### 基本用法

```javascript
// SVGAnimatedNumberList.animVal 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAnimatedNumberList.animVal API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAnimatedNumberList.animVal是否支持
function isSVGAnimatedNumberListAnimValSupported() {
    return 'animVal' in svganimatednumberlist && typeof svganimatednumberlist.animVal === 'function';
}

if (isSVGAnimatedNumberListAnimValSupported()) {
    console.log('SVGAnimatedNumberList.animVal 支持');
    // 使用SVGAnimatedNumberList.animVal
} else {
    console.log('SVGAnimatedNumberList.animVal 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAnimatedNumberList.animVal polyfill
if (!svganimatednumberlist.animVal) {
    // 在这里添加polyfill实现
    console.log('加载SVGAnimatedNumberList.animVal polyfill');
}
```

