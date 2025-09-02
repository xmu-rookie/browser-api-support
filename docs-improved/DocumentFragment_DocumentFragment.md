# DocumentFragment.DocumentFragment API 兼容性数据

## 基本信息

- **API名称**: `DocumentFragment.DocumentFragment`
- **MDN文档**: [DocumentFragment.DocumentFragment](https://developer.mozilla.org/docs/Web/API/DocumentFragment/DocumentFragment)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-documentfragment-documentfragment①)
- **标签**: `web-features:dom`
- **描述**: `DocumentFragment()` constructor

## 使用示例

### 基本用法

```javascript
// DocumentFragment.DocumentFragment 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentFragment.DocumentFragment API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
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

- **支持版本**: 24

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentFragment.DocumentFragment是否支持
function isDocumentFragmentDocumentFragmentSupported() {
    return 'DocumentFragment' in documentfragment && typeof documentfragment.DocumentFragment === 'function';
}

if (isDocumentFragmentDocumentFragmentSupported()) {
    console.log('DocumentFragment.DocumentFragment 支持');
    // 使用DocumentFragment.DocumentFragment
} else {
    console.log('DocumentFragment.DocumentFragment 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentFragment.DocumentFragment polyfill
if (!documentfragment.DocumentFragment) {
    // 在这里添加polyfill实现
    console.log('加载DocumentFragment.DocumentFragment polyfill');
}
```

