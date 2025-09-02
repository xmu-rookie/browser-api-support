# Screen.orientation API 兼容性数据

## 基本信息

- **API名称**: `Screen.orientation`
- **MDN文档**: [Screen.orientation](https://developer.mozilla.org/docs/Web/API/Screen/orientation)
- **规范文档**: [查看规范](https://w3c.github.io/screen-orientation/#dom-screen-orientation)
- **标签**: `web-features:screen-orientation`

## 使用示例

### 基本用法

```javascript
// Screen.orientation 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.orientation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 39 |  |
| Edge | 79 |  |
| Firefox | 43 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 | Not supported on Windows 7. |
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

- **支持版本**: 38

### Chrome Android

- **支持版本**: 39

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **前缀**: ms
- **注意事项**:
  - Edge does not return an `Orientation` object; instead, it returns the orientation type as a string.

### Firefox

- **支持版本**: 43
- **支持版本**: 14
- **前缀**: moz

### Internet Explorer

- **支持版本**: 11
- **前缀**: ms
- **注意事项**:
  - Not supported on Windows 7.

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.orientation是否支持
function isScreenOrientationSupported() {
    return 'orientation' in screen && typeof screen.orientation === 'function';
}

if (isScreenOrientationSupported()) {
    console.log('Screen.orientation 支持');
    // 使用Screen.orientation
} else {
    console.log('Screen.orientation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.orientation polyfill
if (!screen.orientation) {
    // 在这里添加polyfill实现
    console.log('加载Screen.orientation polyfill');
}
```

