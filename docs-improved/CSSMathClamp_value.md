# CSSMathClamp.value API 兼容性数据

## 基本信息

- **API名称**: `CSSMathClamp.value`
- **规范文档**: [查看规范](https://drafts.css-houdini.org/css-typed-om/#dom-cssmathclamp-value)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSMathClamp.value 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSMathClamp.value API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 |  |
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

- **支持版本**: 100

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSMathClamp.value是否支持
function isCSSMathClampValueSupported() {
    return 'value' in cssmathclamp && typeof cssmathclamp.value === 'function';
}

if (isCSSMathClampValueSupported()) {
    console.log('CSSMathClamp.value 支持');
    // 使用CSSMathClamp.value
} else {
    console.log('CSSMathClamp.value 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSMathClamp.value polyfill
if (!cssmathclamp.value) {
    // 在这里添加polyfill实现
    console.log('加载CSSMathClamp.value polyfill');
}
```

