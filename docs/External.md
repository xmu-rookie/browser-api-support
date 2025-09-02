# External API 兼容性数据

## 基本信息

- **API名称**: `External`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#external)
- **标签**: `web-features:external`

## 使用示例

### 基本用法

```javascript
// External 使用示例
// 请查阅MDN文档了解具体用法
console.log('External API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | ≤6 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 2

### Internet Explorer

- **支持版本**: ≤6

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查External是否支持
function isExternalSupported() {
    return 'External' in window || typeof External !== 'undefined';
}

if (isExternalSupported()) {
    console.log('External 支持');
    // 使用External
} else {
    console.log('External 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// External polyfill
if (!window.External) {
    // 在这里添加polyfill实现
    console.log('加载External polyfill');
}
```

