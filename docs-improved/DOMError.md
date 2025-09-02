# DOMError API 兼容性数据

## 基本信息

- **API名称**: `DOMError`
- **MDN文档**: [DOMError](https://developer.mozilla.org/docs/Web/API/DOMError)

## 使用示例

### 基本用法

```javascript
// DOMError 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMError API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 36 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 12 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 24 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 36

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 12
- **移除版本**: 69

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 23
- **支持版本**: ≤12.1
- **移除版本**: 15

### Opera Android

- **支持版本**: 24
- **支持版本**: ≤12.1
- **移除版本**: 14

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMError是否支持
function isDOMErrorSupported() {
    return 'DOMError' in window || typeof DOMError !== 'undefined';
}

if (isDOMErrorSupported()) {
    console.log('DOMError 支持');
    // 使用DOMError
} else {
    console.log('DOMError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMError polyfill
if (!window.DOMError) {
    // 在这里添加polyfill实现
    console.log('加载DOMError polyfill');
}
```

