# DOMError.name API 兼容性数据

## 基本信息

- **API名称**: `DOMError.name`

## 使用示例

### 基本用法

```javascript
// DOMError.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMError.name API');
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
// 检查DOMError.name是否支持
function isDOMErrorNameSupported() {
    return 'name' in domerror && typeof domerror.name === 'function';
}

if (isDOMErrorNameSupported()) {
    console.log('DOMError.name 支持');
    // 使用DOMError.name
} else {
    console.log('DOMError.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMError.name polyfill
if (!domerror.name) {
    // 在这里添加polyfill实现
    console.log('加载DOMError.name polyfill');
}
```

