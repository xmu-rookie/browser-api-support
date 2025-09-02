# CSSPositionTryDescriptors.maxHeight API 兼容性数据

## 基本信息

- **API名称**: `CSSPositionTryDescriptors.maxHeight`
- **MDN文档**: [CSSPositionTryDescriptors.maxHeight](https://developer.mozilla.org/docs/Web/API/CSSPositionTryDescriptors#instance_properties)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-anchor-position-1/#dom-csspositiontrydescriptors-maxheight)
- **标签**: `web-features:anchor-positioning`

## 使用示例

### 基本用法

```javascript
// CSSPositionTryDescriptors.maxHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPositionTryDescriptors.maxHeight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 131 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 131
- **需要标志**: 
  - layout.css.anchor-positioning.enabled: true

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPositionTryDescriptors.maxHeight是否支持
function isCSSPositionTryDescriptorsMaxHeightSupported() {
    return 'maxHeight' in csspositiontrydescriptors && typeof csspositiontrydescriptors.maxHeight === 'function';
}

if (isCSSPositionTryDescriptorsMaxHeightSupported()) {
    console.log('CSSPositionTryDescriptors.maxHeight 支持');
    // 使用CSSPositionTryDescriptors.maxHeight
} else {
    console.log('CSSPositionTryDescriptors.maxHeight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPositionTryDescriptors.maxHeight polyfill
if (!csspositiontrydescriptors.maxHeight) {
    // 在这里添加polyfill实现
    console.log('加载CSSPositionTryDescriptors.maxHeight polyfill');
}
```

