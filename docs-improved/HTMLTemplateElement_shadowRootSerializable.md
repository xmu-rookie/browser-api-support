# HTMLTemplateElement.shadowRootSerializable API 兼容性数据

## 基本信息

- **API名称**: `HTMLTemplateElement.shadowRootSerializable`
- **MDN文档**: [HTMLTemplateElement.shadowRootSerializable](https://developer.mozilla.org/docs/Web/API/HTMLTemplateElement/shadowRootSerializable)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-template-shadowrootserializable)
- **标签**: `web-features:declarative-shadow-dom`

## 使用示例

### 基本用法

```javascript
// HTMLTemplateElement.shadowRootSerializable 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTemplateElement.shadowRootSerializable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 128

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTemplateElement.shadowRootSerializable是否支持
function isHTMLTemplateElementShadowRootSerializableSupported() {
    return 'shadowRootSerializable' in htmltemplateelement && typeof htmltemplateelement.shadowRootSerializable === 'function';
}

if (isHTMLTemplateElementShadowRootSerializableSupported()) {
    console.log('HTMLTemplateElement.shadowRootSerializable 支持');
    // 使用HTMLTemplateElement.shadowRootSerializable
} else {
    console.log('HTMLTemplateElement.shadowRootSerializable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTemplateElement.shadowRootSerializable polyfill
if (!htmltemplateelement.shadowRootSerializable) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTemplateElement.shadowRootSerializable polyfill');
}
```

