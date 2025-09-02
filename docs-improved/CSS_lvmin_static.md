# CSS.lvmin_static API 兼容性数据

## 基本信息

- **API名称**: `CSS.lvmin_static`
- **MDN文档**: [CSS.lvmin_static](https://developer.mozilla.org/docs/Web/API/CSS/factory_functions_static)
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-css-lvmin)
- **标签**: `web-features:numeric-factory-functions`
- **描述**: `lvmin()` static method

## 使用示例

### 基本用法

```javascript
// CSS.lvmin_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSS.lvmin_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 108

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSS.lvmin_static是否支持
function isCSSLvmin_staticSupported() {
    return 'lvmin_static' in css && typeof css.lvmin_static === 'function';
}

if (isCSSLvmin_staticSupported()) {
    console.log('CSS.lvmin_static 支持');
    // 使用CSS.lvmin_static
} else {
    console.log('CSS.lvmin_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSS.lvmin_static polyfill
if (!css.lvmin_static) {
    // 在这里添加polyfill实现
    console.log('加载CSS.lvmin_static polyfill');
}
```

