# Animation.cancel API 兼容性数据

## 基本信息

- **API名称**: `Animation.cancel`
- **MDN文档**: [Animation.cancel](https://developer.mozilla.org/docs/Web/API/Animation/cancel)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animation-cancel)
- **标签**: `web-features:web-animations`

## 使用示例

### 基本用法

```javascript
// Animation.cancel 使用示例
// 请查阅MDN文档了解具体用法
console.log('Animation.cancel API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 75 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 48 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 75

### Firefox

- **支持版本**: 48

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Animation.cancel是否支持
function isAnimationCancelSupported() {
    return 'cancel' in animation && typeof animation.cancel === 'function';
}

if (isAnimationCancelSupported()) {
    console.log('Animation.cancel 支持');
    // 使用Animation.cancel
} else {
    console.log('Animation.cancel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Animation.cancel polyfill
if (!animation.cancel) {
    // 在这里添加polyfill实现
    console.log('加载Animation.cancel polyfill');
}
```

