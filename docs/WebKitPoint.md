# WebKitPoint API 兼容性数据

## 基本信息

- **API名称**: `WebKitPoint`
- **MDN文档**: [WebKitPoint](https://developer.mozilla.org/docs/Web/API/WebKitPoint)

## 使用示例

### 基本用法

```javascript
// WebKitPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebKitPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 2 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2
- **移除版本**: 39

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 4

### WebView Android

- **支持版本**: 2
- **移除版本**: 39

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebKitPoint是否支持
function isWebKitPointSupported() {
    return 'WebKitPoint' in window || typeof WebKitPoint !== 'undefined';
}

if (isWebKitPointSupported()) {
    console.log('WebKitPoint 支持');
    // 使用WebKitPoint
} else {
    console.log('WebKitPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebKitPoint polyfill
if (!window.WebKitPoint) {
    // 在这里添加polyfill实现
    console.log('加载WebKitPoint polyfill');
}
```

