# CaretPosition.offset API 兼容性数据

## 基本信息

- **API名称**: `CaretPosition.offset`
- **MDN文档**: [CaretPosition.offset](https://developer.mozilla.org/docs/Web/API/CaretPosition/offset)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-caretposition-offset)
- **标签**: `web-features:document-caretpositionfrompoint`

## 使用示例

### 基本用法

```javascript
// CaretPosition.offset 使用示例
// 请查阅MDN文档了解具体用法
console.log('CaretPosition.offset API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 128 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 128

### Firefox

- **支持版本**: 20

### Safari

- **支持版本**: 18.4
- **需要标志**: 
  - document.caretPositionFromPoint() API: true

## 兼容性检查代码

### 特性检测

```javascript
// 检查CaretPosition.offset是否支持
function isCaretPositionOffsetSupported() {
    return 'offset' in caretposition && typeof caretposition.offset === 'function';
}

if (isCaretPositionOffsetSupported()) {
    console.log('CaretPosition.offset 支持');
    // 使用CaretPosition.offset
} else {
    console.log('CaretPosition.offset 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CaretPosition.offset polyfill
if (!caretposition.offset) {
    // 在这里添加polyfill实现
    console.log('加载CaretPosition.offset polyfill');
}
```

