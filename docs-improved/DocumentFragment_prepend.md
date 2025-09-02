# DocumentFragment.prepend API 兼容性数据

## 基本信息

- **API名称**: `DocumentFragment.prepend`
- **MDN文档**: [DocumentFragment.prepend](https://developer.mozilla.org/docs/Web/API/DocumentFragment/prepend)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-parentnode-prepend①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DocumentFragment.prepend 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentFragment.prepend API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 49 |  |
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

- **支持版本**: 54

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查DocumentFragment.prepend是否支持
function isDocumentFragmentPrependSupported() {
    return 'prepend' in documentfragment && typeof documentfragment.prepend === 'function';
}

if (isDocumentFragmentPrependSupported()) {
    console.log('DocumentFragment.prepend 支持');
    // 使用DocumentFragment.prepend
} else {
    console.log('DocumentFragment.prepend 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentFragment.prepend polyfill
if (!documentfragment.prepend) {
    // 在这里添加polyfill实现
    console.log('加载DocumentFragment.prepend polyfill');
}
```

