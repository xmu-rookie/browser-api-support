# SVGPointList.numberOfItems API 兼容性数据

## 基本信息

- **API名称**: `SVGPointList.numberOfItems`
- **MDN文档**: [SVGPointList.numberOfItems](https://developer.mozilla.org/docs/Web/API/SVGPointList/numberOfItems)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGNameList__numberOfItems)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGPointList.numberOfItems 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPointList.numberOfItems API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
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

- **支持版本**: 1.5

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
// 检查SVGPointList.numberOfItems是否支持
function isSVGPointListNumberOfItemsSupported() {
    return 'numberOfItems' in svgpointlist && typeof svgpointlist.numberOfItems === 'function';
}

if (isSVGPointListNumberOfItemsSupported()) {
    console.log('SVGPointList.numberOfItems 支持');
    // 使用SVGPointList.numberOfItems
} else {
    console.log('SVGPointList.numberOfItems 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPointList.numberOfItems polyfill
if (!svgpointlist.numberOfItems) {
    // 在这里添加polyfill实现
    console.log('加载SVGPointList.numberOfItems polyfill');
}
```

