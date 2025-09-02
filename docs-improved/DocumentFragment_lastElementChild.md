# DocumentFragment.lastElementChild API 兼容性数据

## 基本信息

- **API名称**: `DocumentFragment.lastElementChild`
- **MDN文档**: [DocumentFragment.lastElementChild](https://developer.mozilla.org/docs/Web/API/DocumentFragment/lastElementChild)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-parentnode-lastelementchild①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DocumentFragment.lastElementChild 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentFragment.lastElementChild API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentFragment.lastElementChild是否支持
function isDocumentFragmentLastElementChildSupported() {
    return 'lastElementChild' in documentfragment && typeof documentfragment.lastElementChild === 'function';
}

if (isDocumentFragmentLastElementChildSupported()) {
    console.log('DocumentFragment.lastElementChild 支持');
    // 使用DocumentFragment.lastElementChild
} else {
    console.log('DocumentFragment.lastElementChild 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentFragment.lastElementChild polyfill
if (!documentfragment.lastElementChild) {
    // 在这里添加polyfill实现
    console.log('加载DocumentFragment.lastElementChild polyfill');
}
```

