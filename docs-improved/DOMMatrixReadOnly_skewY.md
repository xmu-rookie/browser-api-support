# DOMMatrixReadOnly.skewY API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.skewY`
- **MDN文档**: [DOMMatrixReadOnly.skewY](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/skewY)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-skewy)
- **标签**: `web-features:dom-geometry`
- **描述**: `skewY()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.skewY 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.skewY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 | Before Firefox 69, the `sy` parameter was required; you may now call `skewY()` with no inputs. A val... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 33
- **注意事项**:
  - Before Firefox 69, the `sy` parameter was required; you may now call `skewY()` with no inputs. A value of 0 is correctly assumed.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.skewY是否支持
function isDOMMatrixReadOnlySkewYSupported() {
    return 'skewY' in dommatrixreadonly && typeof dommatrixreadonly.skewY === 'function';
}

if (isDOMMatrixReadOnlySkewYSupported()) {
    console.log('DOMMatrixReadOnly.skewY 支持');
    // 使用DOMMatrixReadOnly.skewY
} else {
    console.log('DOMMatrixReadOnly.skewY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.skewY polyfill
if (!dommatrixreadonly.skewY) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.skewY polyfill');
}
```

