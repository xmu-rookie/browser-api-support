# XMLDocument API 兼容性数据

## 基本信息

- **API名称**: `XMLDocument`
- **MDN文档**: [XMLDocument](https://developer.mozilla.org/docs/Web/API/XMLDocument)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#xmldocument)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// XMLDocument 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLDocument API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| oculus | 同主版本 |  |
| Opera | 未知 |  |
| Opera Android | 未知 |  |
| Safari | 未知 |  |
| Safari iOS | 未知 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 未知 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 11

### Opera


### Opera Android


### Safari


### Safari iOS


### WebView Android


## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLDocument是否支持
function isXMLDocumentSupported() {
    return 'XMLDocument' in window || typeof XMLDocument !== 'undefined';
}

if (isXMLDocumentSupported()) {
    console.log('XMLDocument 支持');
    // 使用XMLDocument
} else {
    console.log('XMLDocument 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLDocument polyfill
if (!window.XMLDocument) {
    // 在这里添加polyfill实现
    console.log('加载XMLDocument polyfill');
}
```

