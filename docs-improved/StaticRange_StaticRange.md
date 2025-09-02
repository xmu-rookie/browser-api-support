# StaticRange.StaticRange API 兼容性数据

## 基本信息

- **API名称**: `StaticRange.StaticRange`
- **MDN文档**: [StaticRange.StaticRange](https://developer.mozilla.org/docs/Web/API/StaticRange/StaticRange)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-staticrange-staticrange①)
- **标签**: `web-features:selection-api`
- **描述**: `StaticRange()` constructor

## 使用示例

### 基本用法

```javascript
// StaticRange.StaticRange 使用示例
// 请查阅MDN文档了解具体用法
console.log('StaticRange.StaticRange API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 71 |  |
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

- **支持版本**: 90

### Firefox

- **支持版本**: 71

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查StaticRange.StaticRange是否支持
function isStaticRangeStaticRangeSupported() {
    return 'StaticRange' in staticrange && typeof staticrange.StaticRange === 'function';
}

if (isStaticRangeStaticRangeSupported()) {
    console.log('StaticRange.StaticRange 支持');
    // 使用StaticRange.StaticRange
} else {
    console.log('StaticRange.StaticRange 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StaticRange.StaticRange polyfill
if (!staticrange.StaticRange) {
    // 在这里添加polyfill实现
    console.log('加载StaticRange.StaticRange polyfill');
}
```

