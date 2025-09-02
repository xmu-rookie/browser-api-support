# EyeDropper API 兼容性数据

## 基本信息

- **API名称**: `EyeDropper`
- **MDN文档**: [EyeDropper](https://developer.mozilla.org/docs/Web/API/EyeDropper)
- **规范文档**: [查看规范](https://wicg.github.io/eyedropper-api/#eyedropper-interface)
- **标签**: `web-features:eyedropper`

## 使用示例

### 基本用法

```javascript
// EyeDropper 使用示例
// 请查阅MDN文档了解具体用法
console.log('EyeDropper API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 95 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 95

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EyeDropper是否支持
function isEyeDropperSupported() {
    return 'EyeDropper' in window || typeof EyeDropper !== 'undefined';
}

if (isEyeDropperSupported()) {
    console.log('EyeDropper 支持');
    // 使用EyeDropper
} else {
    console.log('EyeDropper 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EyeDropper polyfill
if (!window.EyeDropper) {
    // 在这里添加polyfill实现
    console.log('加载EyeDropper polyfill');
}
```

