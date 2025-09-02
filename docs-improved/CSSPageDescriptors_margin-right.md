# CSSPageDescriptors.margin-right API 兼容性数据

## 基本信息

- **API名称**: `CSSPageDescriptors.margin-right`
- **MDN文档**: [CSSPageDescriptors.margin-right](https://developer.mozilla.org/docs/Web/API/CSSPageDescriptors#margin-right)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-csspagedescriptors-margin-right)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSPageDescriptors.margin-right 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPageDescriptors.margin-right API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 129

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPageDescriptors.margin-right是否支持
function isCSSPageDescriptorsMargin-rightSupported() {
    return 'margin-right' in csspagedescriptors && typeof csspagedescriptors.margin-right === 'function';
}

if (isCSSPageDescriptorsMargin-rightSupported()) {
    console.log('CSSPageDescriptors.margin-right 支持');
    // 使用CSSPageDescriptors.margin-right
} else {
    console.log('CSSPageDescriptors.margin-right 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPageDescriptors.margin-right polyfill
if (!csspagedescriptors.margin-right) {
    // 在这里添加polyfill实现
    console.log('加载CSSPageDescriptors.margin-right polyfill');
}
```

