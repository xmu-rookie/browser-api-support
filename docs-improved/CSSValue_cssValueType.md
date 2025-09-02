# CSSValue.cssValueType API 兼容性数据

## 基本信息

- **API名称**: `CSSValue.cssValueType`
- **MDN文档**: [CSSValue.cssValueType](https://developer.mozilla.org/docs/Web/API/CSSValue/cssValueType)
- **标签**: `web-features:css-object-model-discouraged`

## 使用示例

### 基本用法

```javascript
// CSSValue.cssValueType 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSValue.cssValueType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1
- **移除版本**: 62

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSValue.cssValueType是否支持
function isCSSValueCssValueTypeSupported() {
    return 'cssValueType' in cssvalue && typeof cssvalue.cssValueType === 'function';
}

if (isCSSValueCssValueTypeSupported()) {
    console.log('CSSValue.cssValueType 支持');
    // 使用CSSValue.cssValueType
} else {
    console.log('CSSValue.cssValueType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSValue.cssValueType polyfill
if (!cssvalue.cssValueType) {
    // 在这里添加polyfill实现
    console.log('加载CSSValue.cssValueType polyfill');
}
```

