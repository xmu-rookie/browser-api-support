# ValidityState API 兼容性数据

## 基本信息

- **API名称**: `ValidityState`
- **MDN文档**: [ValidityState](https://developer.mozilla.org/docs/Web/API/ValidityState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#validitystate)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// ValidityState 使用示例
// 请查阅MDN文档了解具体用法
console.log('ValidityState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ValidityState是否支持
function isValidityStateSupported() {
    return 'ValidityState' in window || typeof ValidityState !== 'undefined';
}

if (isValidityStateSupported()) {
    console.log('ValidityState 支持');
    // 使用ValidityState
} else {
    console.log('ValidityState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ValidityState polyfill
if (!window.ValidityState) {
    // 在这里添加polyfill实现
    console.log('加载ValidityState polyfill');
}
```

