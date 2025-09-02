# Window.showDirectoryPicker API 兼容性数据

## 基本信息

- **API名称**: `Window.showDirectoryPicker`
- **MDN文档**: [Window.showDirectoryPicker](https://developer.mozilla.org/docs/Web/API/Window/showDirectoryPicker)
- **规范文档**: [查看规范](https://wicg.github.io/file-system-access/#api-showdirectorypicker)
- **标签**: `web-features:file-system-access`

## 使用示例

### 基本用法

```javascript
// Window.showDirectoryPicker 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.showDirectoryPicker API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 132 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Chrome Android

- **支持版本**: 132

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.showDirectoryPicker是否支持
function isWindowShowDirectoryPickerSupported() {
    return 'showDirectoryPicker' in window && typeof window.showDirectoryPicker === 'function';
}

if (isWindowShowDirectoryPickerSupported()) {
    console.log('Window.showDirectoryPicker 支持');
    // 使用Window.showDirectoryPicker
} else {
    console.log('Window.showDirectoryPicker 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.showDirectoryPicker polyfill
if (!window.showDirectoryPicker) {
    // 在这里添加polyfill实现
    console.log('加载Window.showDirectoryPicker polyfill');
}
```

