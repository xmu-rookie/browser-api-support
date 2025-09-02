# ShadowRoot.slotAssignment API 兼容性数据

## 基本信息

- **API名称**: `ShadowRoot.slotAssignment`
- **MDN文档**: [ShadowRoot.slotAssignment](https://developer.mozilla.org/docs/Web/API/ShadowRoot/slotAssignment)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-shadowroot-slotassignment)
- **标签**: `web-features:slot-assign`

## 使用示例

### 基本用法

```javascript
// ShadowRoot.slotAssignment 使用示例
// 请查阅MDN文档了解具体用法
console.log('ShadowRoot.slotAssignment API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 92 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Firefox

- **支持版本**: 92

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ShadowRoot.slotAssignment是否支持
function isShadowRootSlotAssignmentSupported() {
    return 'slotAssignment' in shadowroot && typeof shadowroot.slotAssignment === 'function';
}

if (isShadowRootSlotAssignmentSupported()) {
    console.log('ShadowRoot.slotAssignment 支持');
    // 使用ShadowRoot.slotAssignment
} else {
    console.log('ShadowRoot.slotAssignment 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ShadowRoot.slotAssignment polyfill
if (!shadowroot.slotAssignment) {
    // 在这里添加polyfill实现
    console.log('加载ShadowRoot.slotAssignment polyfill');
}
```

