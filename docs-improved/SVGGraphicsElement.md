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
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | The `SVGGraphicsElement` interface itself is not present, but some of its members are available on i... |
| Oculus | 同主版本 |  |
| Opera | 17 |  |
| Opera Android | 18 |  |
| Safari | 7 |  |
| Safari iOS | 7 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30
- **支持版本**: 1
- **移除版本**: 30
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 20
- **支持版本**: 1.5
- **移除版本**: 20
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Opera

- **支持版本**: 17
- **支持版本**: ≤12.1
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Opera Android

- **支持版本**: 18
- **支持版本**: ≤12.1
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Safari

- **支持版本**: 7
- **支持版本**: 3
- **移除版本**: 7
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### Safari iOS

- **支持版本**: 7
- **支持版本**: 1
- **移除版本**: 7
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

### WebView Android

- **支持版本**: 4.4
- **支持版本**: 3
- **移除版本**: 4.4
- **部分实现**: 是
- **注意事项**:
  - The `SVGGraphicsElement` interface itself is not present, but some of its members are available on interfaces that inherit from `SVGGraphicsElement`.

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGGraphicsElement是否支持
function isSVGGraphicsElementSupported() {
    return 'SVGGraphicsElement' in window || typeof SVGGraphicsElement !== 'undefined';
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

