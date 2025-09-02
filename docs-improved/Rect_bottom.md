# Rect.bottom API 兼容性数据

## 基本信息

- **API名称**: `Rect.bottom`
- **标签**: `web-features:css-object-model-discouraged`

## 使用示例

### 基本用法

```javascript
// Rect.bottom 使用示例
// 请查阅MDN文档了解具体用法
console.log('Rect.bottom API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 20 |  |
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
- **移除版本**: 40

### Firefox

- **支持版本**: 20
- **移除版本**: 62

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Rect.bottom是否支持
function isRectBottomSupported() {
    return 'bottom' in rect && typeof rect.bottom === 'function';
}

if (isRectBottomSupported()) {
    console.log('Rect.bottom 支持');
    // 使用Rect.bottom
} else {
    console.log('Rect.bottom 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Rect.bottom polyfill
if (!rect.bottom) {
    // 在这里添加polyfill实现
    console.log('加载Rect.bottom polyfill');
}
```

