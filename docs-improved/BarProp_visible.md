# BarProp.visible API 兼容性数据

## 基本信息

- **API名称**: `BarProp.visible`
- **MDN文档**: [BarProp.visible](https://developer.mozilla.org/docs/Web/API/BarProp/visible)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-barprop-visible)
- **标签**: `web-features:barprop`

## 使用示例

### 基本用法

```javascript
// BarProp.visible 使用示例
// 请查阅MDN文档了解具体用法
console.log('BarProp.visible API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BarProp.visible是否支持
function isBarPropVisibleSupported() {
    return 'visible' in barprop && typeof barprop.visible === 'function';
}

if (isBarPropVisibleSupported()) {
    console.log('BarProp.visible 支持');
    // 使用BarProp.visible
} else {
    console.log('BarProp.visible 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BarProp.visible polyfill
if (!barprop.visible) {
    // 在这里添加polyfill实现
    console.log('加载BarProp.visible polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **returns_popup**: Returns `true` for non-popup windows

