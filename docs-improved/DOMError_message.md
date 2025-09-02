# DOMError.message API 兼容性数据

## 基本信息

- **API名称**: `DOMError.message`

## 使用示例

### 基本用法

```javascript
// DOMError.message 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMError.message API');
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
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
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

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMError.message是否支持
function isDOMErrorMessageSupported() {
    return 'message' in domerror && typeof domerror.message === 'function';
}

if (isDOMErrorMessageSupported()) {
    console.log('DOMError.message 支持');
    // 使用DOMError.message
} else {
    console.log('DOMError.message 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMError.message polyfill
if (!domerror.message) {
    // 在这里添加polyfill实现
    console.log('加载DOMError.message polyfill');
}
```

