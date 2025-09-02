# Location API 兼容性数据

## 基本信息

- **API名称**: `Location`
- **MDN文档**: [Location](https://developer.mozilla.org/docs/Web/API/Location)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-location-interface)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| deno | 1.7 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 3 |  |
| oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### deno

- **支持版本**: 1.7

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 3

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Location是否支持
function isLocationSupported() {
    return 'Location' in window || typeof Location !== 'undefined';
}

if (isLocationSupported()) {
    console.log('Location 支持');
    // 使用Location
} else {
    console.log('Location 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Location polyfill
if (!window.Location) {
    // 在这里添加polyfill实现
    console.log('加载Location polyfill');
}
```

