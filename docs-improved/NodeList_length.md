# NodeList.length API 兼容性数据

## 基本信息

- **API名称**: `NodeList.length`
- **MDN文档**: [NodeList.length](https://developer.mozilla.org/docs/Web/API/NodeList/length)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-nodelist-length①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// NodeList.length 使用示例
// 请查阅MDN文档了解具体用法
console.log('NodeList.length API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
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

- **支持版本**: 5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查NodeList.length是否支持
function isNodeListLengthSupported() {
    return 'length' in nodelist && typeof nodelist.length === 'function';
}

if (isNodeListLengthSupported()) {
    console.log('NodeList.length 支持');
    // 使用NodeList.length
} else {
    console.log('NodeList.length 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NodeList.length polyfill
if (!nodelist.length) {
    // 在这里添加polyfill实现
    console.log('加载NodeList.length polyfill');
}
```

