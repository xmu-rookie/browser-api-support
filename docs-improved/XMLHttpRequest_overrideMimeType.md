# XMLHttpRequest.overrideMimeType API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.overrideMimeType`
- **MDN文档**: [XMLHttpRequest.overrideMimeType](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/overrideMimeType)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-overridemimetype()-method)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.overrideMimeType 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.overrideMimeType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1.2 |  |
| Safari iOS | 同主版本 |  |
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

### Internet Explorer

- **支持版本**: 11
- **支持版本**: 5
- **移除版本**: 11
- **部分实现**: 是
- **注意事项**:
  - Implemented via `ActiveXObject`

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.overrideMimeType是否支持
function isXMLHttpRequestOverrideMimeTypeSupported() {
    return 'overrideMimeType' in xmlhttprequest && typeof xmlhttprequest.overrideMimeType === 'function';
}

if (isXMLHttpRequestOverrideMimeTypeSupported()) {
    console.log('XMLHttpRequest.overrideMimeType 支持');
    // 使用XMLHttpRequest.overrideMimeType
} else {
    console.log('XMLHttpRequest.overrideMimeType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.overrideMimeType polyfill
if (!xmlhttprequest.overrideMimeType) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.overrideMimeType polyfill');
}
```

