# Document.featurePolicy API 兼容性数据

## 基本信息

- **API名称**: `Document.featurePolicy`
- **MDN文档**: [Document.featurePolicy](https://developer.mozilla.org/docs/Web/API/Document/featurePolicy)

## 使用示例

### 基本用法

```javascript
// Document.featurePolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.featurePolicy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 69
- **需要标志**: 
  - dom.security.featurePolicy.webidl.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.featurePolicy是否支持
function isDocumentFeaturePolicySupported() {
    return 'featurePolicy' in document && typeof document.featurePolicy === 'function';
}

if (isDocumentFeaturePolicySupported()) {
    console.log('Document.featurePolicy 支持');
    // 使用Document.featurePolicy
} else {
    console.log('Document.featurePolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.featurePolicy polyfill
if (!document.featurePolicy) {
    // 在这里添加polyfill实现
    console.log('加载Document.featurePolicy polyfill');
}
```

