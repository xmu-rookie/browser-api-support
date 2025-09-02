# Window.name API 兼容性数据

## 基本信息

- **API名称**: `Window.name`
- **MDN文档**: [Window.name](https://developer.mozilla.org/docs/Web/API/Window/name)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-name-dev)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.name 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.name API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.38 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 86, if a new page from another domain is loaded into a tab, then `window.name` is not... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
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

- **支持版本**: 1.38

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 86, if a new page from another domain is loaded into a tab, then `window.name` is not set to an empty string, which can allow some cross-site attacks. See [bug 1685089](https://bugzil.la/1685089) and [bug 444222](https://bugzil.la/444222).

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.name是否支持
function isWindowNameSupported() {
    return 'name' in window && typeof window.name === 'function';
}

if (isWindowNameSupported()) {
    console.log('Window.name 支持');
    // 使用Window.name
} else {
    console.log('Window.name 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.name polyfill
if (!window.name) {
    // 在这里添加polyfill实现
    console.log('加载Window.name polyfill');
}
```

