# Window.navigator API 兼容性数据

## 基本信息

- **API名称**: `Window.navigator`
- **MDN文档**: [Window.navigator](https://developer.mozilla.org/docs/Web/API/Window/navigator)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator)
- **标签**: `web-features:navigator`

## 使用示例

### 基本用法

```javascript
// Window.navigator 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.navigator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.8 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
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
- **支持版本**: 1

### Deno

- **支持版本**: 1.8

### Edge

- **支持版本**: 12
- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **支持版本**: 91

### Internet Explorer

- **支持版本**: 4
- **支持版本**: ≤6

### Opera

- **支持版本**: 3
- **支持版本**: 15

### Opera Android

- **支持版本**: 10.1
- **支持版本**: 14

### Safari

- **支持版本**: 1
- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.navigator是否支持
function isWindowNavigatorSupported() {
    return 'navigator' in window && typeof window.navigator === 'function';
}

if (isWindowNavigatorSupported()) {
    console.log('Window.navigator 支持');
    // 使用Window.navigator
} else {
    console.log('Window.navigator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.navigator polyfill
if (!window.navigator) {
    // 在这里添加polyfill实现
    console.log('加载Window.navigator polyfill');
}
```

