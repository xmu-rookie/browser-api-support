# PannerNode.PannerNode API 兼容性数据

## 基本信息

- **API名称**: `PannerNode.PannerNode`
- **MDN文档**: [PannerNode.PannerNode](https://developer.mozilla.org/docs/Web/API/PannerNode/PannerNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-pannernode-pannernode)
- **标签**: `web-features:web-audio`
- **描述**: `PannerNode()` constructor

## 使用示例

### 基本用法

```javascript
// PannerNode.PannerNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('PannerNode.PannerNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55

### Firefox

- **支持版本**: 53

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查PannerNode.PannerNode是否支持
function isPannerNodePannerNodeSupported() {
    return 'PannerNode' in pannernode && typeof pannernode.PannerNode === 'function';
}

if (isPannerNodePannerNodeSupported()) {
    console.log('PannerNode.PannerNode 支持');
    // 使用PannerNode.PannerNode
} else {
    console.log('PannerNode.PannerNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PannerNode.PannerNode polyfill
if (!pannernode.PannerNode) {
    // 在这里添加polyfill实现
    console.log('加载PannerNode.PannerNode polyfill');
}
```

