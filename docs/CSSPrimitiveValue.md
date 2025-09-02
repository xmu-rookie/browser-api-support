# CSSPrimitiveValue API 兼容性数据

## 基本信息

- **API名称**: `CSSPrimitiveValue`
- **MDN文档**: [CSSPrimitiveValue](https://developer.mozilla.org/docs/Web/API/CSSPrimitiveValue)
- **标签**: `web-features:css-object-model-discouraged`

## 使用示例

### 基本用法

```javascript
// CSSPrimitiveValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSPrimitiveValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 40

### Firefox

- **支持版本**: 1
- **移除版本**: 62

### Opera

- **支持版本**: ≤12.1
- **移除版本**: 27

### Opera Android

- **支持版本**: ≤12.1
- **移除版本**: 27

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSPrimitiveValue是否支持
function isCSSPrimitiveValueSupported() {
    return 'CSSPrimitiveValue' in window || typeof CSSPrimitiveValue !== 'undefined';
}

if (isCSSPrimitiveValueSupported()) {
    console.log('CSSPrimitiveValue 支持');
    // 使用CSSPrimitiveValue
} else {
    console.log('CSSPrimitiveValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSPrimitiveValue polyfill
if (!window.CSSPrimitiveValue) {
    // 在这里添加polyfill实现
    console.log('加载CSSPrimitiveValue polyfill');
}
```

