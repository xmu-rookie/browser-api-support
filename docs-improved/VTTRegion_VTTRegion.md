# VTTRegion.VTTRegion API 兼容性数据

## 基本信息

- **API名称**: `VTTRegion.VTTRegion`
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttregion-vttregion)
- **标签**: `web-features:webvtt-regions`
- **描述**: `VTTRegion()` constructor

## 使用示例

### 基本用法

```javascript
// VTTRegion.VTTRegion 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTRegion.VTTRegion API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTRegion.VTTRegion是否支持
function isVTTRegionVTTRegionSupported() {
    return 'VTTRegion' in vttregion && typeof vttregion.VTTRegion === 'function';
}

if (isVTTRegionVTTRegionSupported()) {
    console.log('VTTRegion.VTTRegion 支持');
    // 使用VTTRegion.VTTRegion
} else {
    console.log('VTTRegion.VTTRegion 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTRegion.VTTRegion polyfill
if (!vttregion.VTTRegion) {
    // 在这里添加polyfill实现
    console.log('加载VTTRegion.VTTRegion polyfill');
}
```

