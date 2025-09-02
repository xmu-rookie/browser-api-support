# FocusEvent.relatedTarget API 兼容性数据

## 基本信息

- **API名称**: `FocusEvent.relatedTarget`
- **MDN文档**: [FocusEvent.relatedTarget](https://developer.mozilla.org/docs/Web/API/FocusEvent/relatedTarget)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-focusevent-relatedtarget)
- **标签**: `web-features:focus-events`

## 使用示例

### 基本用法

```javascript
// FocusEvent.relatedTarget 使用示例
// 请查阅MDN文档了解具体用法
console.log('FocusEvent.relatedTarget API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 24

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查FocusEvent.relatedTarget是否支持
function isFocusEventRelatedTargetSupported() {
    return 'relatedTarget' in focusevent && typeof focusevent.relatedTarget === 'function';
}

if (isFocusEventRelatedTargetSupported()) {
    console.log('FocusEvent.relatedTarget 支持');
    // 使用FocusEvent.relatedTarget
} else {
    console.log('FocusEvent.relatedTarget 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FocusEvent.relatedTarget polyfill
if (!focusevent.relatedTarget) {
    // 在这里添加polyfill实现
    console.log('加载FocusEvent.relatedTarget polyfill');
}
```

