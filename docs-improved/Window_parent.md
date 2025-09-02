# Window.parent API 兼容性数据

## 基本信息

- **API名称**: `Window.parent`
- **MDN文档**: [Window.parent](https://developer.mozilla.org/docs/Web/API/Window/parent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/nav-history-apis.html#dom-parent-dev)
- **标签**: `web-features:window`

## 使用示例

### 基本用法

```javascript
// Window.parent 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.parent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 1.3 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.parent是否支持
function isWindowParentSupported() {
    return 'parent' in window && typeof window.parent === 'function';
}

if (isWindowParentSupported()) {
    console.log('Window.parent 支持');
    // 使用Window.parent
} else {
    console.log('Window.parent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.parent polyfill
if (!window.parent) {
    // 在这里添加polyfill实现
    console.log('加载Window.parent polyfill');
}
```

