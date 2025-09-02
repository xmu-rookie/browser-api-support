# Document.getBoxQuads API 兼容性数据

## 基本信息

- **API名称**: `Document.getBoxQuads`
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-geometryutils-getboxquads)
- **标签**: `web-features:getboxquads`

## 使用示例

### 基本用法

```javascript
// Document.getBoxQuads 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.getBoxQuads API');
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
// 检查Document.getBoxQuads是否支持
function isDocumentGetBoxQuadsSupported() {
    return 'getBoxQuads' in document && typeof document.getBoxQuads === 'function';
}

if (isDocumentGetBoxQuadsSupported()) {
    console.log('Document.getBoxQuads 支持');
    // 使用Document.getBoxQuads
} else {
    console.log('Document.getBoxQuads 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.getBoxQuads polyfill
if (!document.getBoxQuads) {
    // 在这里添加polyfill实现
    console.log('加载Document.getBoxQuads polyfill');
}
```

