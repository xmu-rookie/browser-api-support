# CSSAnimation API 兼容性数据

## 基本信息

- **API名称**: `CSSAnimation`
- **MDN文档**: [CSSAnimation](https://developer.mozilla.org/docs/Web/API/CSSAnimation)
- **规范文档**: [查看规范](https://drafts.csswg.org/css-animations-2/#the-CSSAnimation-interface)
- **标签**: `web-features:animations-css`

## 使用示例

### 基本用法

```javascript
// CSSAnimation 使用示例
// 请查阅MDN文档了解具体用法
console.log('CSSAnimation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 75

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CSSAnimation是否支持
function isCSSAnimationSupported() {
    return 'CSSAnimation' in window || typeof CSSAnimation !== 'undefined';
}

if (isCSSAnimationSupported()) {
    console.log('CSSAnimation 支持');
    // 使用CSSAnimation
} else {
    console.log('CSSAnimation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CSSAnimation polyfill
if (!window.CSSAnimation) {
    // 在这里添加polyfill实现
    console.log('加载CSSAnimation polyfill');
}
```

