# CSSPageDescriptors.margin-top API 兼容性数据

## 基本信息

- **API名称**: `CSSPageDescriptors.margin-top`
- **MDN文档**: [CSSPageDescriptors.margin-top](https://developer.mozilla.org/docs/Web/API/CSSPageDescriptors#margin-top)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-csspagedescriptors-margin-top)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSPageDescriptors.margin-top 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPageDescriptors.margin-top API');
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
// 检查CSSPageDescriptors.margin-top是否支持
function isCSSPageDescriptorsMargin-topSupported() {
    return 'margin-top' in csspagedescriptors && typeof csspagedescriptors.margin-top === 'function';
}

if (isCSSPageDescriptorsMargin-topSupported()) {
    console.log('CSSPageDescriptors.margin-top 支持');
    // 使用CSSPageDescriptors.margin-top
} else {
    console.log('CSSPageDescriptors.margin-top 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPageDescriptors.margin-top polyfill
if (!csspagedescriptors.margin-top) {
    // 在这里添加polyfill实现
    console.log('加载CSSPageDescriptors.margin-top polyfill');
}
```

