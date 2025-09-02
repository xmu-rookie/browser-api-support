# PannerNode.positionY API 兼容性数据

## 基本信息

- **API名称**: `PannerNode.positionY`
- **MDN文档**: [PannerNode.positionY](https://developer.mozilla.org/docs/Web/API/PannerNode/positionY)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-pannernode-positiony)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// PannerNode.positionY 使用示例
// 请查阅MDN文档了解具体用法
console.log('PannerNode.positionY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 50 |  |
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

- **支持版本**: 52

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查PannerNode.positionY是否支持
function isPannerNodePositionYSupported() {
    return 'positionY' in pannernode && typeof pannernode.positionY === 'function';
}

if (isPannerNodePositionYSupported()) {
    console.log('PannerNode.positionY 支持');
    // 使用PannerNode.positionY
} else {
    console.log('PannerNode.positionY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PannerNode.positionY polyfill
if (!pannernode.positionY) {
    // 在这里添加polyfill实现
    console.log('加载PannerNode.positionY polyfill');
}
```

