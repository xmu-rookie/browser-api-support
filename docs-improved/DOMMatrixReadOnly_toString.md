# DOMMatrixReadOnly.toString API 兼容性数据

## 基本信息

- **API名称**: `DOMMatrixReadOnly.toString`
- **MDN文档**: [DOMMatrixReadOnly.toString](https://developer.mozilla.org/docs/Web/API/DOMMatrixReadOnly/toString)
- **标签**: `web-features:dom-geometry`
- **描述**: `toString()`

## 使用示例

### 基本用法

```javascript
// DOMMatrixReadOnly.toString 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMMatrixReadOnly.toString API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 33 |  |
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

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMMatrixReadOnly.toString是否支持
function isDOMMatrixReadOnlyToStringSupported() {
    return 'toString' in dommatrixreadonly && typeof dommatrixreadonly.toString === 'function';
}

if (isDOMMatrixReadOnlyToStringSupported()) {
    console.log('DOMMatrixReadOnly.toString 支持');
    // 使用DOMMatrixReadOnly.toString
} else {
    console.log('DOMMatrixReadOnly.toString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMMatrixReadOnly.toString polyfill
if (!dommatrixreadonly.toString) {
    // 在这里添加polyfill实现
    console.log('加载DOMMatrixReadOnly.toString polyfill');
}
```

