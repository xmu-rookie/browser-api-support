# Screen.isExtended API 兼容性数据

## 基本信息

- **API名称**: `Screen.isExtended`
- **MDN文档**: [Screen.isExtended](https://developer.mozilla.org/docs/Web/API/Screen/isExtended)
- **规范文档**: [查看规范](https://w3c.github.io/window-management/#api-screen-isExtended-attribute)
- **标签**: `web-features:window-management`

## 使用示例

### 基本用法

```javascript
// Screen.isExtended 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.isExtended API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 100

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.isExtended是否支持
function isScreenIsExtendedSupported() {
    return 'isExtended' in screen && typeof screen.isExtended === 'function';
}

if (isScreenIsExtendedSupported()) {
    console.log('Screen.isExtended 支持');
    // 使用Screen.isExtended
} else {
    console.log('Screen.isExtended 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.isExtended polyfill
if (!screen.isExtended) {
    // 在这里添加polyfill实现
    console.log('加载Screen.isExtended polyfill');
}
```

