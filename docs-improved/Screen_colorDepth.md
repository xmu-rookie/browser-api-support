# Screen.colorDepth API 兼容性数据

## 基本信息

- **API名称**: `Screen.colorDepth`
- **MDN文档**: [Screen.colorDepth](https://developer.mozilla.org/docs/Web/API/Screen/colorDepth)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-screen-colordepth)
- **标签**: `web-features:screen`

## 使用示例

### 基本用法

```javascript
// Screen.colorDepth 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.colorDepth API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Starting with version 59 this property is no longer required to always return 24. |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.0 | Starting with Samsung Internet 7.0 this property is no longer required to always return 24. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Starting with version 59 this property is no longer required to always return 24.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

### Samsung Internet

- **支持版本**: 1.0
- **注意事项**:
  - Starting with Samsung Internet 7.0 this property is no longer required to always return 24.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.colorDepth是否支持
function isScreenColorDepthSupported() {
    return 'colorDepth' in screen && typeof screen.colorDepth === 'function';
}

if (isScreenColorDepthSupported()) {
    console.log('Screen.colorDepth 支持');
    // 使用Screen.colorDepth
} else {
    console.log('Screen.colorDepth 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.colorDepth polyfill
if (!screen.colorDepth) {
    // 在这里添加polyfill实现
    console.log('加载Screen.colorDepth polyfill');
}
```

