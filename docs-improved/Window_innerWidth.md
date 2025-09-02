# Window.innerWidth API 兼容性数据

## 基本信息

- **API名称**: `Window.innerWidth`
- **MDN文档**: [Window.innerWidth](https://developer.mozilla.org/docs/Web/API/Window/innerWidth)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-window-innerwidth)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.innerWidth 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.innerWidth API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 | From version 4 to 24, this property could give a wrong value before page load in certain circumstanc... |
| Firefox Android | 4 | Before version 24, this property could give a wrong value before page load in certain circumstances ... |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 | This property returns the width of the [visual viewport](https://developer.mozilla.org/docs/Glossary... |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - From version 4 to 24, this property could give a wrong value before page load in certain circumstances (see [bug 641188](https://bugzil.la/641188)).

### Firefox Android

- **支持版本**: 4
- **注意事项**:
  - Before version 24, this property could give a wrong value before page load in certain circumstances (see [bug 641188](https://bugzil.la/641188)).

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1
- **注意事项**:
  - This property returns the width of the [visual viewport](https://developer.mozilla.org/docs/Glossary/visual_viewport) instead of the layout viewport. See [bug 174362](https://webkit.org/b/174362) for details.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.innerWidth是否支持
function isWindowInnerWidthSupported() {
    return 'innerWidth' in window && typeof window.innerWidth === 'function';
}

if (isWindowInnerWidthSupported()) {
    console.log('Window.innerWidth 支持');
    // 使用Window.innerWidth
} else {
    console.log('Window.innerWidth 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.innerWidth polyfill
if (!window.innerWidth) {
    // 在这里添加polyfill实现
    console.log('加载Window.innerWidth polyfill');
}
```

