# StaticRange.startContainer API 兼容性数据

## 基本信息

- **API名称**: `StaticRange.startContainer`
- **MDN文档**: [StaticRange.startContainer](https://developer.mozilla.org/docs/Web/API/StaticRange/startContainer)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-range-startcontainer①)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// StaticRange.startContainer 使用示例
// 请查阅MDN文档了解具体用法
console.log('StaticRange.startContainer API');
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
// 检查StaticRange.startContainer是否支持
function isStaticRangeStartContainerSupported() {
    return 'startContainer' in staticrange && typeof staticrange.startContainer === 'function';
}

if (isStaticRangeStartContainerSupported()) {
    console.log('StaticRange.startContainer 支持');
    // 使用StaticRange.startContainer
} else {
    console.log('StaticRange.startContainer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StaticRange.startContainer polyfill
if (!staticrange.startContainer) {
    // 在这里添加polyfill实现
    console.log('加载StaticRange.startContainer polyfill');
}
```

