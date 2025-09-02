# Window.fence API 兼容性数据

## 基本信息

- **API名称**: `Window.fence`
- **MDN文档**: [Window.fence](https://developer.mozilla.org/docs/Web/API/Window/fence)
- **规范文档**: [查看规范](https://wicg.github.io/fenced-frame/#dom-window-fence)
- **标签**: `web-features:fencedframe`

## 使用示例

### 基本用法

```javascript
// Window.fence 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.fence API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 126

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.fence是否支持
function isWindowFenceSupported() {
    return 'fence' in window && typeof window.fence === 'function';
}

if (isWindowFenceSupported()) {
    console.log('Window.fence 支持');
    // 使用Window.fence
} else {
    console.log('Window.fence 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.fence polyfill
if (!window.fence) {
    // 在这里添加polyfill实现
    console.log('加载Window.fence polyfill');
}
```

