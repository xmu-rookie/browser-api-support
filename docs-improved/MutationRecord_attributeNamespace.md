# MutationRecord.attributeNamespace API 兼容性数据

## 基本信息

- **API名称**: `MutationRecord.attributeNamespace`
- **MDN文档**: [MutationRecord.attributeNamespace](https://developer.mozilla.org/docs/Web/API/MutationRecord/attributeNamespace)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-mutationrecord-attributenamespace②)
- **标签**: `web-features:mutationobserver`

## 使用示例

### 基本用法

```javascript
// MutationRecord.attributeNamespace 使用示例
// 请查阅MDN文档了解具体用法
console.log('MutationRecord.attributeNamespace API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 16 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 14 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
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

- **支持版本**: 16

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 14

### Internet Explorer

- **支持版本**: 11

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查MutationRecord.attributeNamespace是否支持
function isMutationRecordAttributeNamespaceSupported() {
    return 'attributeNamespace' in mutationrecord && typeof mutationrecord.attributeNamespace === 'function';
}

if (isMutationRecordAttributeNamespaceSupported()) {
    console.log('MutationRecord.attributeNamespace 支持');
    // 使用MutationRecord.attributeNamespace
} else {
    console.log('MutationRecord.attributeNamespace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MutationRecord.attributeNamespace polyfill
if (!mutationrecord.attributeNamespace) {
    // 在这里添加polyfill实现
    console.log('加载MutationRecord.attributeNamespace polyfill');
}
```

