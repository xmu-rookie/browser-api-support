# HTMLFieldSetElement.name API 兼容性数据

## 基本信息

- **API名称**: `HTMLFieldSetElement.name`
- **MDN文档**: [HTMLFieldSetElement.name](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/name)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fe-name)
- **标签**: `web-features:fieldset`

## 使用示例

### 基本用法

```javascript
// HTMLFieldSetElement.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFieldSetElement.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 19

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 4

### Safari

- **支持版本**: 6

### Samsung Internet

- **支持版本**: 1.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLFieldSetElement.name是否支持
function isHTMLFieldSetElementNameSupported() {
    return 'name' in htmlfieldsetelement && typeof htmlfieldsetelement.name === 'function';
}

if (isHTMLFieldSetElementNameSupported()) {
    console.log('HTMLFieldSetElement.name 支持');
    // 使用HTMLFieldSetElement.name
} else {
    console.log('HTMLFieldSetElement.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFieldSetElement.name polyfill
if (!htmlfieldsetelement.name) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFieldSetElement.name polyfill');
}
```

