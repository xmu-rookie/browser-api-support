# WebKitPoint.y API 兼容性数据

## 基本信息

- **API名称**: `WebKitPoint.y`

## 使用示例

### 基本用法

```javascript
// WebKitPoint.y 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebKitPoint.y API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
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
// 检查WebKitPoint.y是否支持
function isWebKitPointYSupported() {
    return 'y' in webkitpoint && typeof webkitpoint.y === 'function';
}

if (isWebKitPointYSupported()) {
    console.log('WebKitPoint.y 支持');
    // 使用WebKitPoint.y
} else {
    console.log('WebKitPoint.y 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebKitPoint.y polyfill
if (!webkitpoint.y) {
    // 在这里添加polyfill实现
    console.log('加载WebKitPoint.y polyfill');
}
```

