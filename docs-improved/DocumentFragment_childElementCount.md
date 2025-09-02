# DocumentFragment.childElementCount API 兼容性数据

## 基本信息

- **API名称**: `DocumentFragment.childElementCount`
- **MDN文档**: [DocumentFragment.childElementCount](https://developer.mozilla.org/docs/Web/API/DocumentFragment/childElementCount)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-parentnode-childelementcount)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// DocumentFragment.childElementCount 使用示例
// 请查阅MDN文档了解具体用法
console.log('DocumentFragment.childElementCount API');
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
// 检查DocumentFragment.childElementCount是否支持
function isDocumentFragmentChildElementCountSupported() {
    return 'childElementCount' in documentfragment && typeof documentfragment.childElementCount === 'function';
}

if (isDocumentFragmentChildElementCountSupported()) {
    console.log('DocumentFragment.childElementCount 支持');
    // 使用DocumentFragment.childElementCount
} else {
    console.log('DocumentFragment.childElementCount 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DocumentFragment.childElementCount polyfill
if (!documentfragment.childElementCount) {
    // 在这里添加polyfill实现
    console.log('加载DocumentFragment.childElementCount polyfill');
}
```

