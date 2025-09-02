# SVGGraphicsElement API 兼容性数据

## 基本信息

- **API名称**: `SVGGraphicsElement`
- **MDN文档**: [SVGGraphicsElement](https://developer.mozilla.org/docs/Web/API/SVGGraphicsElement)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#InterfaceSVGGraphicsElement)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGGraphicsElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGGraphicsElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 (部分支持) | The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`. |
| oculus | 同主版本 |  |
| Opera | 未知 |  |
| Opera Android | 未知 |  |
| Safari | 未知 |  |
| Safari iOS | 未知 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 未知 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox


### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Opera


### Opera Android


### Safari


### Safari iOS


### WebView Android


## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGGraphicsElement是否支持
function isSVGGraphicsElementSupported() {
    return typeof SVGGraphicsElement !== 'undefined';
}

if (isSVGGraphicsElementSupported()) {
    console.log('SVGGraphicsElement 支持');
    // 使用SVGGraphicsElement
} else {
    console.log('SVGGraphicsElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGGraphicsElement polyfill
if (!window.SVGGraphicsElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGGraphicsElement polyfill');
}
```

