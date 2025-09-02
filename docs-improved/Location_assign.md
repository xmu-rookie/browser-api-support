# Location.assign API 兼容性数据

## 基本信息

- **API名称**: `Location.assign`
- **MDN文档**: [Location.assign](https://developer.mozilla.org/docs/Web/API/Location/assign)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-location-assign-dev)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Location.assign 使用示例
// 请查阅MDN文档了解具体用法
console.log('Location.assign API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 | This method exists but has no effect in Deno. A location can be assigned using the `--location` runt... |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
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
- **部分实现**: 是
- **注意事项**:
  - This method exists but has no effect in Deno. A location can be assigned using the `--location` runtime flag.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Location.assign是否支持
function isLocationAssignSupported() {
    return 'assign' in location && typeof location.assign === 'function';
}

if (isLocationAssignSupported()) {
    console.log('Location.assign 支持');
    // 使用Location.assign
} else {
    console.log('Location.assign 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Location.assign polyfill
if (!location.assign) {
    // 在这里添加polyfill实现
    console.log('加载Location.assign polyfill');
}
```

