# ViewTransition.finished API 兼容性数据

## 基本信息

- **API名称**: `ViewTransition.finished`
- **MDN文档**: [ViewTransition.finished](https://developer.mozilla.org/docs/Web/API/ViewTransition/finished)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-view-transitions/#dom-viewtransition-finished)
- **标签**: `web-features:view-transitions`

## 使用示例

### 基本用法

```javascript
// ViewTransition.finished 使用示例
// 请查阅MDN文档了解具体用法
console.log('ViewTransition.finished API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 111 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 111

### Firefox

- **支持版本**: preview
- **支持版本**: 140
- **需要标志**: 
  - dom.viewTransitions.enabled: true

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查ViewTransition.finished是否支持
function isViewTransitionFinishedSupported() {
    return 'finished' in viewtransition && typeof viewtransition.finished === 'function';
}

if (isViewTransitionFinishedSupported()) {
    console.log('ViewTransition.finished 支持');
    // 使用ViewTransition.finished
} else {
    console.log('ViewTransition.finished 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ViewTransition.finished polyfill
if (!viewtransition.finished) {
    // 在这里添加polyfill实现
    console.log('加载ViewTransition.finished polyfill');
}
```

