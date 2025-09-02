# ScrollTimeline API 兼容性数据

## 基本信息

- **API名称**: `ScrollTimeline`
- **MDN文档**: [ScrollTimeline](https://developer.mozilla.org/docs/Web/API/ScrollTimeline)
- **规范文档**: [查看规范](https://drafts.csswg.org/scroll-animations/#scrolltimeline-interface)
- **标签**: `web-features:scroll-driven-animations`

## 使用示例

### 基本用法

```javascript
// ScrollTimeline 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScrollTimeline API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 115 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 115

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查ScrollTimeline是否支持
function isScrollTimelineSupported() {
    return 'ScrollTimeline' in window || typeof ScrollTimeline !== 'undefined';
}

if (isScrollTimelineSupported()) {
    console.log('ScrollTimeline 支持');
    // 使用ScrollTimeline
} else {
    console.log('ScrollTimeline 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScrollTimeline polyfill
if (!window.ScrollTimeline) {
    // 在这里添加polyfill实现
    console.log('加载ScrollTimeline polyfill');
}
```

