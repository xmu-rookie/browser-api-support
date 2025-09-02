# Animation.commitStyles.endpoint_inclusive_commitStyles API 兼容性数据

## 基本信息

- **API名称**: `Animation.commitStyles.endpoint_inclusive_commitStyles`
- **MDN文档**: [Animation.commitStyles.endpoint_inclusive_commitStyles](https://developer.mozilla.org/docs/Web/API/Animation/commitStyles)
- **规范文档**: [查看规范](https://drafts.csswg.org/web-animations-1/#dom-animation-commitstyles)
- **标签**: `web-features:web-animations`
- **描述**: `commitStyles()` automatically fills values

## 使用示例

### 基本用法

```javascript
// Animation.commitStyles.endpoint_inclusive_commitStyles 使用示例
// 请查阅MDN文档了解具体用法
console.log('Animation.commitStyles.endpoint_inclusive_commitStyles API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 142

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Animation.commitStyles.endpoint_inclusive_commitStyles是否支持
function isAnimationCommitStylesSupported() {
    return 'commitStyles' in animation && typeof animation.commitStyles === 'function';
}

if (isAnimationCommitStylesSupported()) {
    console.log('Animation.commitStyles.endpoint_inclusive_commitStyles 支持');
    // 使用Animation.commitStyles.endpoint_inclusive_commitStyles
} else {
    console.log('Animation.commitStyles.endpoint_inclusive_commitStyles 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Animation.commitStyles.endpoint_inclusive_commitStyles polyfill
if (!animation.commitStyles) {
    // 在这里添加polyfill实现
    console.log('加载Animation.commitStyles.endpoint_inclusive_commitStyles polyfill');
}
```

