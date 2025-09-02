# SVGNumberList.clear API 兼容性数据

## 基本信息

- **API名称**: `SVGNumberList.clear`
- **MDN文档**: [SVGNumberList.clear](https://developer.mozilla.org/docs/Web/API/SVGNumberList/clear)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGNameList__clear)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGNumberList.clear 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGNumberList.clear API');
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
// 检查SVGNumberList.clear是否支持
function isSVGNumberListClearSupported() {
    return 'clear' in svgnumberlist && typeof svgnumberlist.clear === 'function';
}

if (isSVGNumberListClearSupported()) {
    console.log('SVGNumberList.clear 支持');
    // 使用SVGNumberList.clear
} else {
    console.log('SVGNumberList.clear 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGNumberList.clear polyfill
if (!svgnumberlist.clear) {
    // 在这里添加polyfill实现
    console.log('加载SVGNumberList.clear polyfill');
}
```

