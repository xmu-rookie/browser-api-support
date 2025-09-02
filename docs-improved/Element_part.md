# Element.part API 兼容性数据

## 基本信息

- **API名称**: `Element.part`
- **MDN文档**: [Element.part](https://developer.mozilla.org/docs/Web/API/Element/part)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-shadow-parts/#idl)
- **标签**: `web-features:shadow-parts`

## 使用示例

### 基本用法

```javascript
// Element.part 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.part API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 73 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 72 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 73

### Firefox

- **支持版本**: 72

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.part是否支持
function isElementPartSupported() {
    return 'part' in element && typeof element.part === 'function';
}

if (isElementPartSupported()) {
    console.log('Element.part 支持');
    // 使用Element.part
} else {
    console.log('Element.part 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.part polyfill
if (!element.part) {
    // 在这里添加polyfill实现
    console.log('加载Element.part polyfill');
}
```

