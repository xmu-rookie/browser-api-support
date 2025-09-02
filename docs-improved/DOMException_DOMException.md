# DOMException.DOMException API 兼容性数据

## 基本信息

- **API名称**: `DOMException.DOMException`
- **MDN文档**: [DOMException.DOMException](https://developer.mozilla.org/docs/Web/API/DOMException/DOMException)
- **规范文档**: [查看规范](https://webidl.spec.whatwg.org/#dom-domexception-domexception)
- **标签**: `web-features:dom`
- **描述**: `DOMException()` constructor

## 使用示例

### 基本用法

```javascript
// DOMException.DOMException 使用示例
// 请查阅MDN文档了解具体用法
console.log('DOMException.DOMException API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 46 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 37 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 17.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 46

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 37

### Node.js

- **支持版本**: 17.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查DOMException.DOMException是否支持
function isDOMExceptionDOMExceptionSupported() {
    return 'DOMException' in domexception && typeof domexception.DOMException === 'function';
}

if (isDOMExceptionDOMExceptionSupported()) {
    console.log('DOMException.DOMException 支持');
    // 使用DOMException.DOMException
} else {
    console.log('DOMException.DOMException 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DOMException.DOMException polyfill
if (!domexception.DOMException) {
    // 在这里添加polyfill实现
    console.log('加载DOMException.DOMException polyfill');
}
```

