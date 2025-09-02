# StaticRange.collapsed API 兼容性数据

## 基本信息

- **API名称**: `StaticRange.collapsed`
- **MDN文档**: [StaticRange.collapsed](https://developer.mozilla.org/docs/Web/API/StaticRange/collapsed)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-range-collapsed①)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// StaticRange.collapsed 使用示例
// 请查阅MDN文档了解具体用法
console.log('StaticRange.collapsed API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查StaticRange.collapsed是否支持
function isStaticRangeCollapsedSupported() {
    return 'collapsed' in staticrange && typeof staticrange.collapsed === 'function';
}

if (isStaticRangeCollapsedSupported()) {
    console.log('StaticRange.collapsed 支持');
    // 使用StaticRange.collapsed
} else {
    console.log('StaticRange.collapsed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StaticRange.collapsed polyfill
if (!staticrange.collapsed) {
    // 在这里添加polyfill实现
    console.log('加载StaticRange.collapsed polyfill');
}
```

