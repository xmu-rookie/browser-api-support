# BarProp.visible.returns_popup API 兼容性数据

## 基本信息

- **API名称**: `BarProp.visible.returns_popup`
- **标签**: `web-features:barprop`
- **描述**: Returns `true` for non-popup windows

## 使用示例

### 基本用法

```javascript
// BarProp.visible.returns_popup 使用示例
// 请查阅MDN文档了解具体用法
console.log('BarProp.visible.returns_popup API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 98 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 96 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 98

### Firefox

- **支持版本**: 96

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BarProp.visible.returns_popup是否支持
function isBarPropVisibleSupported() {
    return 'visible' in barprop && typeof barprop.visible === 'function';
}

if (isBarPropVisibleSupported()) {
    console.log('BarProp.visible.returns_popup 支持');
    // 使用BarProp.visible.returns_popup
} else {
    console.log('BarProp.visible.returns_popup 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BarProp.visible.returns_popup polyfill
if (!barprop.visible) {
    // 在这里添加polyfill实现
    console.log('加载BarProp.visible.returns_popup polyfill');
}
```

