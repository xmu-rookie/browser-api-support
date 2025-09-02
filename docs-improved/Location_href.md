# Location.href API 兼容性数据

## 基本信息

- **API名称**: `Location.href`
- **MDN文档**: [Location.href](https://developer.mozilla.org/docs/Web/API/Location/href)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-href-dev)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location.href 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location.href API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 3 |  |
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

### Deno

- **支持版本**: 1.7
- **需要标志**: 
  - --location [url]: true

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 3

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Location.href是否支持
function isLocationHrefSupported() {
    return 'href' in location && typeof location.href === 'function';
}

if (isLocationHrefSupported()) {
    console.log('Location.href 支持');
    // 使用Location.href
} else {
    console.log('Location.href 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Location.href polyfill
if (!location.href) {
    // 在这里添加polyfill实现
    console.log('加载Location.href polyfill');
}
```

