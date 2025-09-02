# ScreenDetails API 兼容性数据

## 基本信息

- **API名称**: `ScreenDetails`
- **MDN文档**: [ScreenDetails](https://developer.mozilla.org/docs/Web/API/ScreenDetails)
- **规范文档**: [查看规范](https://w3c.github.io/window-management/#api-screendetails-interface)
- **标签**: `web-features:window-management`

## 使用示例

### 基本用法

```javascript
// ScreenDetails 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScreenDetails API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 |  |
| Chrome Android | ❌ 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 100

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ScreenDetails是否支持
function isScreenDetailsSupported() {
    return 'ScreenDetails' in window || typeof ScreenDetails !== 'undefined';
}

if (isScreenDetailsSupported()) {
    console.log('ScreenDetails 支持');
    // 使用ScreenDetails
} else {
    console.log('ScreenDetails 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScreenDetails polyfill
if (!window.ScreenDetails) {
    // 在这里添加polyfill实现
    console.log('加载ScreenDetails polyfill');
}
```

