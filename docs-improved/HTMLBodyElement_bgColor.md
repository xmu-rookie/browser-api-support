# HTMLBodyElement.bgColor API 兼容性数据

## 基本信息

- **API名称**: `HTMLBodyElement.bgColor`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-body-bgcolor)

## 使用示例

### 基本用法

```javascript
// HTMLBodyElement.bgColor 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLBodyElement.bgColor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
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

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

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
// 检查HTMLBodyElement.bgColor是否支持
function isHTMLBodyElementBgColorSupported() {
    return 'bgColor' in htmlbodyelement && typeof htmlbodyelement.bgColor === 'function';
}

if (isHTMLBodyElementBgColorSupported()) {
    console.log('HTMLBodyElement.bgColor 支持');
    // 使用HTMLBodyElement.bgColor
} else {
    console.log('HTMLBodyElement.bgColor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLBodyElement.bgColor polyfill
if (!htmlbodyelement.bgColor) {
    // 在这里添加polyfill实现
    console.log('加载HTMLBodyElement.bgColor polyfill');
}
```

