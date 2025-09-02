# CSSTransformValue.forEach API 兼容性数据

## 基本信息

- **API名称**: `CSSTransformValue.forEach`
- **MDN文档**: [CSSTransformValue.forEach](https://developer.mozilla.org/docs/Web/API/CSSTransformValue/forEach)
- **标签**: `web-features:css-typed-om`

## 使用示例

### 基本用法

```javascript
// CSSTransformValue.forEach 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSTransformValue.forEach API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
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

- **支持版本**: 66

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSTransformValue.forEach是否支持
function isCSSTransformValueForEachSupported() {
    return 'forEach' in csstransformvalue && typeof csstransformvalue.forEach === 'function';
}

if (isCSSTransformValueForEachSupported()) {
    console.log('CSSTransformValue.forEach 支持');
    // 使用CSSTransformValue.forEach
} else {
    console.log('CSSTransformValue.forEach 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSTransformValue.forEach polyfill
if (!csstransformvalue.forEach) {
    // 在这里添加polyfill实现
    console.log('加载CSSTransformValue.forEach polyfill');
}
```

