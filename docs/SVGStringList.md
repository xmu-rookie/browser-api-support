# SVGStringList API 兼容性数据

## 基本信息

- **API名称**: `SVGStringList`
- **MDN文档**: [SVGStringList](https://developer.mozilla.org/docs/Web/API/SVGStringList)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#InterfaceSVGStringList)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGStringList 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGStringList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 12 | Since version 13, `SVGStringList` is indexable like Array which is a non-standard behavior. |
| Firefox Android | 14 | `SVGStringList` is indexable like Array which is a non-standard behavior. |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 12
- **注意事项**:
  - Since version 13, `SVGStringList` is indexable like Array which is a non-standard behavior.

### Firefox Android

- **支持版本**: 14
- **注意事项**:
  - `SVGStringList` is indexable like Array which is a non-standard behavior.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGStringList是否支持
function isSVGStringListSupported() {
    return typeof SVGStringList !== 'undefined';
}

if (isSVGStringListSupported()) {
    console.log('SVGStringList 支持');
    // 使用SVGStringList
} else {
    console.log('SVGStringList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGStringList polyfill
if (!window.SVGStringList) {
    // 在这里添加polyfill实现
    console.log('加载SVGStringList polyfill');
}
```

