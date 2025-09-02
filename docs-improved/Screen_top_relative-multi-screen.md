# Screen.top.relative-multi-screen API 兼容性数据

## 基本信息

- **API名称**: `Screen.top.relative-multi-screen`
- **描述**: Relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

## 使用示例

### 基本用法

```javascript
// Screen.top.relative-multi-screen 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.top.relative-multi-screen API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.top.relative-multi-screen是否支持
function isScreenTopSupported() {
    return 'top' in screen && typeof screen.top === 'function';
}

if (isScreenTopSupported()) {
    console.log('Screen.top.relative-multi-screen 支持');
    // 使用Screen.top.relative-multi-screen
} else {
    console.log('Screen.top.relative-multi-screen 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.top.relative-multi-screen polyfill
if (!screen.top) {
    // 在这里添加polyfill实现
    console.log('加载Screen.top.relative-multi-screen polyfill');
}
```

