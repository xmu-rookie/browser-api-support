# PannerNode.coneOuterAngle API 兼容性数据

## 基本信息

- **API名称**: `PannerNode.coneOuterAngle`
- **MDN文档**: [PannerNode.coneOuterAngle](https://developer.mozilla.org/docs/Web/API/PannerNode/coneOuterAngle)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-pannernode-coneouterangle)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// PannerNode.coneOuterAngle 使用示例
// 请查阅MDN文档了解具体用法
console.log('PannerNode.coneOuterAngle API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 14 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 14

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查PannerNode.coneOuterAngle是否支持
function isPannerNodeConeOuterAngleSupported() {
    return 'coneOuterAngle' in pannernode && typeof pannernode.coneOuterAngle === 'function';
}

if (isPannerNodeConeOuterAngleSupported()) {
    console.log('PannerNode.coneOuterAngle 支持');
    // 使用PannerNode.coneOuterAngle
} else {
    console.log('PannerNode.coneOuterAngle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PannerNode.coneOuterAngle polyfill
if (!pannernode.coneOuterAngle) {
    // 在这里添加polyfill实现
    console.log('加载PannerNode.coneOuterAngle polyfill');
}
```

