# CSS.supports_static.optional_parens API 兼容性数据

## 基本信息

- **API名称**: `CSS.supports_static.optional_parens`
- **标签**: `web-features:css-supports`
- **描述**: Parentheses for single-argument version are optional.

## 使用示例

### 基本用法

```javascript
// CSS.supports_static.optional_parens 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSS.supports_static.optional_parens API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSS.supports_static.optional_parens是否支持
function isCSSSupports_staticSupported() {
    return 'supports_static' in css && typeof css.supports_static === 'function';
}

if (isCSSSupports_staticSupported()) {
    console.log('CSS.supports_static.optional_parens 支持');
    // 使用CSS.supports_static.optional_parens
} else {
    console.log('CSS.supports_static.optional_parens 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSS.supports_static.optional_parens polyfill
if (!css.supports_static) {
    // 在这里添加polyfill实现
    console.log('加载CSS.supports_static.optional_parens polyfill');
}
```

