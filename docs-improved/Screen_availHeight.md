# Screen.availHeight API 兼容性数据

## 基本信息

- **API名称**: `Screen.availHeight`
- **MDN文档**: [Screen.availHeight](https://developer.mozilla.org/docs/Web/API/Screen/availHeight)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-screen-availheight)
- **标签**: `web-features:screen`

## 使用示例

### 基本用法

```javascript
// Screen.availHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.availHeight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Always reflects the main screen. |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12
- **注意事项**:
  - Always reflects the main screen.

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

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.availHeight是否支持
function isScreenAvailHeightSupported() {
    return 'availHeight' in screen && typeof screen.availHeight === 'function';
}

if (isScreenAvailHeightSupported()) {
    console.log('Screen.availHeight 支持');
    // 使用Screen.availHeight
} else {
    console.log('Screen.availHeight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.availHeight polyfill
if (!screen.availHeight) {
    // 在这里添加polyfill实现
    console.log('加载Screen.availHeight polyfill');
}
```

