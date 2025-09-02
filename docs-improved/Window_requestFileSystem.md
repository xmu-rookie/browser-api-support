# Window.requestFileSystem API 兼容性数据

## 基本信息

- **API名称**: `Window.requestFileSystem`
- **MDN文档**: [Window.requestFileSystem](https://developer.mozilla.org/docs/Web/API/Window/requestFileSystem)

## 使用示例

### 基本用法

```javascript
// Window.requestFileSystem 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.requestFileSystem API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 不支持 |  |
| Opera Android | 不支持 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13
- **前缀**: webkit

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 6
- **移除版本**: 8
- **前缀**: webkit

### WebView Android

- **支持版本**: 37
- **前缀**: webkit

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.requestFileSystem是否支持
function isWindowRequestFileSystemSupported() {
    return 'requestFileSystem' in window && typeof window.requestFileSystem === 'function';
}

if (isWindowRequestFileSystemSupported()) {
    console.log('Window.requestFileSystem 支持');
    // 使用Window.requestFileSystem
} else {
    console.log('Window.requestFileSystem 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.requestFileSystem polyfill
if (!window.requestFileSystem) {
    // 在这里添加polyfill实现
    console.log('加载Window.requestFileSystem polyfill');
}
```

