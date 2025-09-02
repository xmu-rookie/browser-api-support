# PannerNode.orientationY API 兼容性数据

## 基本信息

- **API名称**: `PannerNode.orientationY`
- **MDN文档**: [PannerNode.orientationY](https://developer.mozilla.org/docs/Web/API/PannerNode/orientationY)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-pannernode-orientationy)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// PannerNode.orientationY 使用示例
// 请查阅MDN文档了解具体用法
console.log('PannerNode.orientationY API');
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
// 检查PannerNode.orientationY是否支持
function isPannerNodeOrientationYSupported() {
    return 'orientationY' in pannernode && typeof pannernode.orientationY === 'function';
}

if (isPannerNodeOrientationYSupported()) {
    console.log('PannerNode.orientationY 支持');
    // 使用PannerNode.orientationY
} else {
    console.log('PannerNode.orientationY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PannerNode.orientationY polyfill
if (!pannernode.orientationY) {
    // 在这里添加polyfill实现
    console.log('加载PannerNode.orientationY polyfill');
}
```

