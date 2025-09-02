# Element.animate.implicit_tofrom API 兼容性数据

## 基本信息

- **API名称**: `Element.animate.implicit_tofrom`
- **MDN文档**: [Element.animate.implicit_tofrom](https://developer.mozilla.org/docs/Web/API/Element/animate#implicit_tofrom_keyframes)
- **标签**: `web-features:web-animations`
- **描述**: Implicit to/from keyframes are supported

## 使用示例

### 基本用法

```javascript
// Element.animate.implicit_tofrom 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.animate.implicit_tofrom API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 | Implementation seems somewhat buggy. More information will follow when available. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 75

### Safari

- **支持版本**: 13.1
- **部分实现**: 是
- **注意事项**:
  - Implementation seems somewhat buggy. More information will follow when available.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.animate.implicit_tofrom是否支持
function isElementAnimateSupported() {
    return 'animate' in element && typeof element.animate === 'function';
}

if (isElementAnimateSupported()) {
    console.log('Element.animate.implicit_tofrom 支持');
    // 使用Element.animate.implicit_tofrom
} else {
    console.log('Element.animate.implicit_tofrom 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.animate.implicit_tofrom polyfill
if (!element.animate) {
    // 在这里添加polyfill实现
    console.log('加载Element.animate.implicit_tofrom polyfill');
}
```

