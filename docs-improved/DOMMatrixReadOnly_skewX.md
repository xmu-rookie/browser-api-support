# DOMMatrixReadOnly.skewX API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.skewX`
- **MDN文档**: [DOMMatrixReadOnly.skewX](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/skewX)
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-skewx)
- **标签**: `web-features:dom-geometry`
- **描述**: `skewX()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.skewX 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.skewX API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 | Before Firefox 69, the `sx` parameter was required; you may now call `skewX()` with no inputs. A val... |
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
  - Before Firefox 69, the `sx` parameter was required; you may now call `skewX()` with no inputs. A value of 0 is correctly assumed.

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.skewX是否支持
function isDOMMatrixReadOnlySkewXSupported() {
    return 'skewX' in dommatrixreadonly && typeof dommatrixreadonly.skewX === 'function';
}

if (isDOMMatrixReadOnlySkewXSupported()) {
    console.log('DOMMatrixReadOnly.skewX 支持');
    // 使用DOMMatrixReadOnly.skewX
} else {
    console.log('DOMMatrixReadOnly.skewX 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.skewX polyfill
if (!dommatrixreadonly.skewX) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.skewX polyfill');
}
```

