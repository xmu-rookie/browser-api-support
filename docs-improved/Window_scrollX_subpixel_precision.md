# Window.scrollX.subpixel_precision API 兼容性数据

## 基本信息

- **API名称**: `Window.scrollX.subpixel_precision`
- **标签**: `web-features:scroll-elements`
- **描述**: Subpixel precision

## 使用示例

### 基本用法

```javascript
// Window.scrollX.subpixel_precision 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.scrollX.subpixel_precision API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | ≤18 |  |
| Firefox | 55 |  |
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

- **支持版本**: 40

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.scrollX.subpixel_precision是否支持
function isWindowScrollXSupported() {
    return 'scrollX' in window && typeof window.scrollX === 'function';
}

if (isWindowScrollXSupported()) {
    console.log('Window.scrollX.subpixel_precision 支持');
    // 使用Window.scrollX.subpixel_precision
} else {
    console.log('Window.scrollX.subpixel_precision 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.scrollX.subpixel_precision polyfill
if (!window.scrollX) {
    // 在这里添加polyfill实现
    console.log('加载Window.scrollX.subpixel_precision polyfill');
}
```

