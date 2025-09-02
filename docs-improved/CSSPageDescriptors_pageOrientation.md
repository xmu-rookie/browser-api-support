# CSSPageDescriptors.pageOrientation API 兼容性数据

## 基本信息

- **API名称**: `CSSPageDescriptors.pageOrientation`
- **MDN文档**: [CSSPageDescriptors.pageOrientation](https://developer.mozilla.org/docs/Web/API/CSSPageDescriptors#pageorientation)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-csspagedescriptors-pageorientation)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// CSSPageDescriptors.pageOrientation 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPageDescriptors.pageOrientation API');
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
| Safari | 不支持 |  |
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

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPageDescriptors.pageOrientation是否支持
function isCSSPageDescriptorsPageOrientationSupported() {
    return 'pageOrientation' in csspagedescriptors && typeof csspagedescriptors.pageOrientation === 'function';
}

if (isCSSPageDescriptorsPageOrientationSupported()) {
    console.log('CSSPageDescriptors.pageOrientation 支持');
    // 使用CSSPageDescriptors.pageOrientation
} else {
    console.log('CSSPageDescriptors.pageOrientation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPageDescriptors.pageOrientation polyfill
if (!csspagedescriptors.pageOrientation) {
    // 在这里添加polyfill实现
    console.log('加载CSSPageDescriptors.pageOrientation polyfill');
}
```

