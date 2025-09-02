# BarProp API 兼容性数据

## 基本信息

- **API名称**: `BarProp`
- **MDN文档**: [BarProp](https://developer.mozilla.org/docs/Web/API/BarProp)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#barprop)
- **标签**: `web-features:barprop`

## 使用示例

### 基本用法

```javascript
// BarProp 使用示例
// 请查阅MDN文档了解具体用法
console.log('BarProp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BarProp是否支持
function isBarPropSupported() {
    return 'BarProp' in window || typeof BarProp !== 'undefined';
}

if (isBarPropSupported()) {
    console.log('BarProp 支持');
    // 使用BarProp
} else {
    console.log('BarProp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BarProp polyfill
if (!window.BarProp) {
    // 在这里添加polyfill实现
    console.log('加载BarProp polyfill');
}
```

