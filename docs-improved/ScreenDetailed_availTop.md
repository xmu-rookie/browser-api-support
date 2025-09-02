# ScreenDetailed.availTop API 兼容性数据

## 基本信息

- **API名称**: `ScreenDetailed.availTop`
- **MDN文档**: [ScreenDetailed.availTop](https://developer.mozilla.org/docs/Web/API/ScreenDetailed/availTop)
- **规范文档**: [查看规范](https://w3c.github.io/window-management/#ref-for-dom-screendetailed-availtop)
- **标签**: `web-features:window-management`

## 使用示例

### 基本用法

```javascript
// ScreenDetailed.availTop 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScreenDetailed.availTop API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 100 |  |
| Chrome Android | 不支持 |  |
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

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ScreenDetailed.availTop是否支持
function isScreenDetailedAvailTopSupported() {
    return 'availTop' in screendetailed && typeof screendetailed.availTop === 'function';
}

if (isScreenDetailedAvailTopSupported()) {
    console.log('ScreenDetailed.availTop 支持');
    // 使用ScreenDetailed.availTop
} else {
    console.log('ScreenDetailed.availTop 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScreenDetailed.availTop polyfill
if (!screendetailed.availTop) {
    // 在这里添加polyfill实现
    console.log('加载ScreenDetailed.availTop polyfill');
}
```

