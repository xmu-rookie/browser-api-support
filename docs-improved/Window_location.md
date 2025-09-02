# Window.location API 兼容性数据

## 基本信息

- **API名称**: `Window.location`
- **MDN文档**: [Window.location](https://developer.mozilla.org/docs/Web/API/Window/location)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#the-location-interface)
- **标签**: `web-features:location`

## 使用示例

### 基本用法

```javascript
// Window.location 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.location API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 | Reflects the value passed via the `--location` runtime flag. |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 57, single quotes contained in URLs were escaped when accessed via URL APIs. See [bug... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
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
- **注意事项**:
  - Reflects the value passed via the `--location` runtime flag.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 57, single quotes contained in URLs were escaped when accessed via URL APIs. See [bug 1386683](https://bugzil.la/1386683).

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.location是否支持
function isWindowLocationSupported() {
    return 'location' in window && typeof window.location === 'function';
}

if (isWindowLocationSupported()) {
    console.log('Window.location 支持');
    // 使用Window.location
} else {
    console.log('Window.location 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.location polyfill
if (!window.location) {
    // 在这里添加polyfill实现
    console.log('加载Window.location polyfill');
}
```

