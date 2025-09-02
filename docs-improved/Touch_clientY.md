# Touch.clientY API 兼容性数据

## 基本信息

- **API名称**: `Touch.clientY`
- **MDN文档**: [Touch.clientY](https://developer.mozilla.org/docs/Web/API/Touch/clientY)
- **规范文档**: [查看规范](https://w3c.github.io/touch-events/#dom-touch-clienty)
- **标签**: `web-features:touch-events`

## 使用示例

### 基本用法

```javascript
// Touch.clientY 使用示例
// 请查阅MDN文档了解具体用法
console.log('Touch.clientY API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
| Firefox | 52 | This interface is only exposed if a touch input device is detected. |
| Firefox Android | 6 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 10 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 22

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 52
- **部分实现**: 是
- **注意事项**:
  - This interface is only exposed if a touch input device is detected.
- **支持版本**: 18
- **移除版本**: 24
- **注意事项**:
  - Removed in [bug 888304](https://bugzil.la/888304) due to web compatibility issues.

### Firefox Android

- **支持版本**: 6

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查Touch.clientY是否支持
function isTouchClientYSupported() {
    return 'clientY' in touch && typeof touch.clientY === 'function';
}

if (isTouchClientYSupported()) {
    console.log('Touch.clientY 支持');
    // 使用Touch.clientY
} else {
    console.log('Touch.clientY 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Touch.clientY polyfill
if (!touch.clientY) {
    // 在这里添加polyfill实现
    console.log('加载Touch.clientY polyfill');
}
```

