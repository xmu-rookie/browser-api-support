# Window.matchMedia API 兼容性数据

## 基本信息

- **API名称**: `Window.matchMedia`
- **MDN文档**: [Window.matchMedia](https://developer.mozilla.org/docs/Web/API/Window/matchMedia)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-window-matchmedia)
- **标签**: `web-features:matchmedia`

## 使用示例

### 基本用法

```javascript
// Window.matchMedia 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.matchMedia API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 |  |
| Firefox | 6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 6

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.matchMedia是否支持
function isWindowMatchMediaSupported() {
    return 'matchMedia' in window && typeof window.matchMedia === 'function';
}

if (isWindowMatchMediaSupported()) {
    console.log('Window.matchMedia 支持');
    // 使用Window.matchMedia
} else {
    console.log('Window.matchMedia 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.matchMedia polyfill
if (!window.matchMedia) {
    // 在这里添加polyfill实现
    console.log('加载Window.matchMedia polyfill');
}
```

