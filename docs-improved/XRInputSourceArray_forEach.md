# XRInputSourceArray.forEach API 兼容性数据

## 基本信息

- **API名称**: `XRInputSourceArray.forEach`
- **MDN文档**: [XRInputSourceArray.forEach](https://developer.mozilla.org/docs/Web/API/XRInputSourceArray/forEach)
- **标签**: `web-features:webxr-device`
- **描述**: `forEach()`

## 使用示例

### 基本用法

```javascript
// XRInputSourceArray.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRInputSourceArray.forEach API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 11.2 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 11.2

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRInputSourceArray.forEach是否支持
function isXRInputSourceArrayForEachSupported() {
    return 'forEach' in xrinputsourcearray && typeof xrinputsourcearray.forEach === 'function';
}

if (isXRInputSourceArrayForEachSupported()) {
    console.log('XRInputSourceArray.forEach 支持');
    // 使用XRInputSourceArray.forEach
} else {
    console.log('XRInputSourceArray.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRInputSourceArray.forEach polyfill
if (!xrinputsourcearray.forEach) {
    // 在这里添加polyfill实现
    console.log('加载XRInputSourceArray.forEach polyfill');
}
```

