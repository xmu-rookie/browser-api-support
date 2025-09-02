# Document.getAnimations API 兼容性数据

## 基本信息

- **API名称**: `Document.getAnimations`
- **MDN文档**: [Document.getAnimations](https://developer.mozilla.org/docs/Web/API/Document/getAnimations)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-documentorshadowroot-getanimations)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// Document.getAnimations 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.getAnimations API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 75

### Safari

- **支持版本**: 14
- **支持版本**: 13.1
- **移除版本**: 14
- **部分实现**: 是
- **注意事项**:
  - Implements an older version of the specification, see [bug 179536](https://webkit.org/b/179536).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.getAnimations是否支持
function isDocumentGetAnimationsSupported() {
    return 'getAnimations' in document && typeof document.getAnimations === 'function';
}

if (isDocumentGetAnimationsSupported()) {
    console.log('Document.getAnimations 支持');
    // 使用Document.getAnimations
} else {
    console.log('Document.getAnimations 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.getAnimations polyfill
if (!document.getAnimations) {
    // 在这里添加polyfill实现
    console.log('加载Document.getAnimations polyfill');
}
```

