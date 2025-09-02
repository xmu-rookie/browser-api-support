# HTMLSlotElement.name API 兼容性数据

## 基本信息

- **API名称**: `HTMLSlotElement.name`
- **MDN文档**: [HTMLSlotElement.name](https://developer.mozilla.org/docs/Web/API/HTMLSlotElement/name)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-slot-name-dev)
- **标签**: `web-features:slot`

## 使用示例

### 基本用法

```javascript
// HTMLSlotElement.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSlotElement.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53

### Firefox

- **支持版本**: 63

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSlotElement.name是否支持
function isHTMLSlotElementNameSupported() {
    return 'name' in htmlslotelement && typeof htmlslotelement.name === 'function';
}

if (isHTMLSlotElementNameSupported()) {
    console.log('HTMLSlotElement.name 支持');
    // 使用HTMLSlotElement.name
} else {
    console.log('HTMLSlotElement.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSlotElement.name polyfill
if (!htmlslotelement.name) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSlotElement.name polyfill');
}
```

