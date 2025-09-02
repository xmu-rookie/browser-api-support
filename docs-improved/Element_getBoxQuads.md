# Element.getBoxQuads API 兼容性数据

## 基本信息

- **API名称**: `Element.getBoxQuads`
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-geometryutils-getboxquads)
- **标签**: `web-features:getboxquads`

## 使用示例

### 基本用法

```javascript
// Element.getBoxQuads 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getBoxQuads API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 31
- **需要标志**: 
  - layout.css.getBoxQuads.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getBoxQuads是否支持
function isElementGetBoxQuadsSupported() {
    return 'getBoxQuads' in element && typeof element.getBoxQuads === 'function';
}

if (isElementGetBoxQuadsSupported()) {
    console.log('Element.getBoxQuads 支持');
    // 使用Element.getBoxQuads
} else {
    console.log('Element.getBoxQuads 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getBoxQuads polyfill
if (!element.getBoxQuads) {
    // 在这里添加polyfill实现
    console.log('加载Element.getBoxQuads polyfill');
}
```

