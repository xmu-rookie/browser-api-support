# MutationObserver.observe API 兼容性数据

## 基本信息

- **API名称**: `MutationObserver.observe`
- **MDN文档**: [MutationObserver.observe](https://developer.mozilla.org/docs/Web/API/MutationObserver/observe)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-mutationobserver-observe②)
- **标签**: `web-features:mutationobserver`

## 使用示例

### 基本用法

```javascript
// MutationObserver.observe 使用示例
// 请查阅MDN文档了解具体用法
console.log('MutationObserver.observe API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 18 | Before Chrome 33, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`... |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Before Edge 79, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. ... |
| Firefox | 14 | Before Firefox 36, `attributes: true` is required when using `attributeFilter` or `attributeOldValue... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Internet Explorer requires `attributes: true` when using `attributeFilter` or `attributeOldValue`. I... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 | Before Safari 10.1, `attributes: true` is required when using `attributeFilter` or `attributeOldValu... |
| Safari iOS | 6 | Before Safari iOS 10.3, `attributes: true` is required when using `attributeFilter` or `attributeOld... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 | Before WebView 4.4.3, `attributes: true` is required when using `attributeFilter` or `attributeOldVa... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 18
- **注意事项**:
  - Before Chrome 33, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then Chrome throws a syntax error.

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before Edge 79, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then Edge throws a syntax error.

### Firefox

- **支持版本**: 14
- **注意事项**:
  - Before Firefox 36, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then Firefox throws a syntax error.

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Internet Explorer requires `attributes: true` when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then Internet Explorer throws a syntax error.

### Safari

- **支持版本**: 6
- **注意事项**:
  - Before Safari 10.1, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then Safari throws a syntax error.

### Safari iOS

- **支持版本**: 6
- **注意事项**:
  - Before Safari iOS 10.3, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then Safari throws a syntax error.

### WebView Android

- **支持版本**: 4.4
- **注意事项**:
  - Before WebView 4.4.3, `attributes: true` is required when using `attributeFilter` or `attributeOldValue`. If `attributes: true` is not present, then WebView throws a syntax error.

