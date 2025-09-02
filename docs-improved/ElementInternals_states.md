# ElementInternals.states API 兼容性数据

## 基本信息

- **API名称**: `ElementInternals.states`
- **MDN文档**: [ElementInternals.states](https://developer.mozilla.org/docs/Web/API/ElementInternals/states)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-state-pseudo-class)
- **标签**: `web-features:state`

## 使用示例

### 基本用法

```javascript
// ElementInternals.states 使用示例
// 请查阅MDN文档了解具体用法
console.log('ElementInternals.states API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 90

### Firefox

- **支持版本**: 126

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ElementInternals.states是否支持
function isElementInternalsStatesSupported() {
    return 'states' in elementinternals && typeof elementinternals.states === 'function';
}

if (isElementInternalsStatesSupported()) {
    console.log('ElementInternals.states 支持');
    // 使用ElementInternals.states
} else {
    console.log('ElementInternals.states 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ElementInternals.states polyfill
if (!elementinternals.states) {
    // 在这里添加polyfill实现
    console.log('加载ElementInternals.states polyfill');
}
```

