# Animation.overallProgress API 兼容性数据

## 基本信息

- **API名称**: `Animation.overallProgress`
- **MDN文档**: [Animation.overallProgress](https://developer.mozilla.org/docs/Web/API/Animation/overallProgress)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-2/#dom-animation-overallprogress)

## 使用示例

### 基本用法

```javascript
// Animation.overallProgress 使用示例
// 请查阅MDN文档了解具体用法
console.log('Animation.overallProgress API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 142 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 133

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Animation.overallProgress是否支持
function isAnimationOverallProgressSupported() {
    return 'overallProgress' in animation && typeof animation.overallProgress === 'function';
}

if (isAnimationOverallProgressSupported()) {
    console.log('Animation.overallProgress 支持');
    // 使用Animation.overallProgress
} else {
    console.log('Animation.overallProgress 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Animation.overallProgress polyfill
if (!animation.overallProgress) {
    // 在这里添加polyfill实现
    console.log('加载Animation.overallProgress polyfill');
}
```

