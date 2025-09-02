# CSS.lh_static API 兼容性数据

## 基本信息

- **API名称**: `CSS.lh_static`
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-css-lh)
- **标签**: `web-features:numeric-factory-functions`
- **描述**: `lh()` static method

## 使用示例

### 基本用法

```javascript
// CSS.lh_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSS.lh_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 118 |  |
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

- **支持版本**: 118

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSS.lh_static是否支持
function isCSSLh_staticSupported() {
    return 'lh_static' in css && typeof css.lh_static === 'function';
}

if (isCSSLh_staticSupported()) {
    console.log('CSS.lh_static 支持');
    // 使用CSS.lh_static
} else {
    console.log('CSS.lh_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSS.lh_static polyfill
if (!css.lh_static) {
    // 在这里添加polyfill实现
    console.log('加载CSS.lh_static polyfill');
}
```

