# DOMMatrixReadOnly.scaleNonUniform API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.scaleNonUniform`
- **规范文档**: [查看规范](https://drafts.fxtf.org/geometry/#dom-dommatrixreadonly-scalenonuniform)
- **描述**: `scaleNonUniform()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.scaleNonUniform 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.scaleNonUniform API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 73

### Firefox

- **支持版本**: 33

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.scaleNonUniform是否支持
function isDOMMatrixReadOnlyScaleNonUniformSupported() {
    return 'scaleNonUniform' in dommatrixreadonly && typeof dommatrixreadonly.scaleNonUniform === 'function';
}

if (isDOMMatrixReadOnlyScaleNonUniformSupported()) {
    console.log('DOMMatrixReadOnly.scaleNonUniform 支持');
    // 使用DOMMatrixReadOnly.scaleNonUniform
} else {
    console.log('DOMMatrixReadOnly.scaleNonUniform 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.scaleNonUniform polyfill
if (!dommatrixreadonly.scaleNonUniform) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.scaleNonUniform polyfill');
}
```

