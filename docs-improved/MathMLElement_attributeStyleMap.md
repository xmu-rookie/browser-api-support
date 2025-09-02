# MathMLElement.attributeStyleMap API 兼容性数据

## 基本信息

- **API名称**: `MathMLElement.attributeStyleMap`
- **MDN文档**: [MathMLElement.attributeStyleMap](https://developer.mozilla.org/docs/Web/API/MathMLElement/attributeStyleMap)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-elementcssinlinestyle-attributestylemap)
- **标签**: `web-features:mathml`

## 使用示例

### 基本用法

```javascript
// MathMLElement.attributeStyleMap 使用示例
// 请查阅MDN文档了解具体用法
console.log('MathMLElement.attributeStyleMap API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 109 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 109

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查MathMLElement.attributeStyleMap是否支持
function isMathMLElementAttributeStyleMapSupported() {
    return 'attributeStyleMap' in mathmlelement && typeof mathmlelement.attributeStyleMap === 'function';
}

if (isMathMLElementAttributeStyleMapSupported()) {
    console.log('MathMLElement.attributeStyleMap 支持');
    // 使用MathMLElement.attributeStyleMap
} else {
    console.log('MathMLElement.attributeStyleMap 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MathMLElement.attributeStyleMap polyfill
if (!mathmlelement.attributeStyleMap) {
    // 在这里添加polyfill实现
    console.log('加载MathMLElement.attributeStyleMap polyfill');
}
```

