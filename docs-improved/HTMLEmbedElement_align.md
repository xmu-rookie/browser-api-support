# HTMLEmbedElement.align API 兼容性数据

## 基本信息

- **API名称**: `HTMLEmbedElement.align`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-embed-align)

## 使用示例

### 基本用法

```javascript
// HTMLEmbedElement.align 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLEmbedElement.align API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Firefox

- **支持版本**: 1

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLEmbedElement.align是否支持
function isHTMLEmbedElementAlignSupported() {
    return 'align' in htmlembedelement && typeof htmlembedelement.align === 'function';
}

if (isHTMLEmbedElementAlignSupported()) {
    console.log('HTMLEmbedElement.align 支持');
    // 使用HTMLEmbedElement.align
} else {
    console.log('HTMLEmbedElement.align 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLEmbedElement.align polyfill
if (!htmlembedelement.align) {
    // 在这里添加polyfill实现
    console.log('加载HTMLEmbedElement.align polyfill');
}
```

