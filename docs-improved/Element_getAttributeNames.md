# Element.getAttributeNames API 兼容性数据

## 基本信息

- **API名称**: `Element.getAttributeNames`
- **MDN文档**: [Element.getAttributeNames](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNames)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-element-getattributenames①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getAttributeNames 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getAttributeNames API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 45 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 45

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getAttributeNames是否支持
function isElementGetAttributeNamesSupported() {
    return 'getAttributeNames' in element && typeof element.getAttributeNames === 'function';
}

if (isElementGetAttributeNamesSupported()) {
    console.log('Element.getAttributeNames 支持');
    // 使用Element.getAttributeNames
} else {
    console.log('Element.getAttributeNames 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getAttributeNames polyfill
if (!element.getAttributeNames) {
    // 在这里添加polyfill实现
    console.log('加载Element.getAttributeNames polyfill');
}
```

