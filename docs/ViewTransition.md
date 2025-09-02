# ViewTransition API 兼容性数据

## 基本信息

- **API名称**: `ViewTransition`
- **MDN文档**: [ViewTransition](https://developer.mozilla.org/docs/Web/API/ViewTransition)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-view-transitions/#viewtransition)
- **标签**: `web-features:view-transitions`

## 使用示例

### 基本用法

```javascript
// ViewTransition 使用示例
// 请查阅MDN文档了解具体用法
console.log('ViewTransition API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 111 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 未知 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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


### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查ViewTransition是否支持
function isViewTransitionSupported() {
    return 'ViewTransition' in window || typeof ViewTransition !== 'undefined';
}

if (isViewTransitionSupported()) {
    console.log('ViewTransition 支持');
    // 使用ViewTransition
} else {
    console.log('ViewTransition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ViewTransition polyfill
if (!window.ViewTransition) {
    // 在这里添加polyfill实现
    console.log('加载ViewTransition polyfill');
}
```

