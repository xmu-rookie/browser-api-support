# DocumentFragment.querySelector API 兼容性数据

## 基本信息

- **API名称**: `DocumentFragment.querySelector`
- **MDN文档**: [DocumentFragment.querySelector](https://developer.mozilla.org/docs/Web/API/DocumentFragment/querySelector)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-parentnode-queryselector①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DocumentFragment.querySelector 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentFragment.querySelector API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 10 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9
- **支持版本**: 8
- **移除版本**: 9
- **部分实现**: 是
- **注意事项**:
  - `querySelectorAll()` is supported, but only for CSS 2.1 selectors.

### Opera

- **支持版本**: 10

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentFragment.querySelector是否支持
function isDocumentFragmentQuerySelectorSupported() {
    return 'querySelector' in documentfragment && typeof documentfragment.querySelector === 'function';
}

if (isDocumentFragmentQuerySelectorSupported()) {
    console.log('DocumentFragment.querySelector 支持');
    // 使用DocumentFragment.querySelector
} else {
    console.log('DocumentFragment.querySelector 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentFragment.querySelector polyfill
if (!documentfragment.querySelector) {
    // 在这里添加polyfill实现
    console.log('加载DocumentFragment.querySelector polyfill');
}
```

