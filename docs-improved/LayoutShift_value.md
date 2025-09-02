# LayoutShift.value API 兼容性数据

## 基本信息

- **API名称**: `LayoutShift.value`
- **MDN文档**: [LayoutShift.value](https://developer.mozilla.org/docs/Web/API/LayoutShift/value)
- **规范文档**: [查看规范](https://wicg.github.io/layout-instability/#dom-layoutshift-value)
- **标签**: `web-features:layout-instability`

## 使用示例

### 基本用法

```javascript
// LayoutShift.value 使用示例
// 请查阅MDN文档了解具体用法
console.log('LayoutShift.value API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 77

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查LayoutShift.value是否支持
function isLayoutShiftValueSupported() {
    return 'value' in layoutshift && typeof layoutshift.value === 'function';
}

if (isLayoutShiftValueSupported()) {
    console.log('LayoutShift.value 支持');
    // 使用LayoutShift.value
} else {
    console.log('LayoutShift.value 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// LayoutShift.value polyfill
if (!layoutshift.value) {
    // 在这里添加polyfill实现
    console.log('加载LayoutShift.value polyfill');
}
```

