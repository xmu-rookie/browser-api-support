# ScreenDetailed.label API 兼容性数据

## 基本信息

- **API名称**: `ScreenDetailed.label`
- **MDN文档**: [ScreenDetailed.label](https://developer.mozilla.org/docs/Web/API/ScreenDetailed/label)
- **规范文档**: [查看规范](https://w3c.github.io/window-management/#ref-for-dom-screendetailed-label)
- **标签**: `web-features:window-management`

## 使用示例

### 基本用法

```javascript
// ScreenDetailed.label 使用示例
// 请查阅MDN文档了解具体用法
console.log('ScreenDetailed.label API');
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
// 检查ScreenDetailed.label是否支持
function isScreenDetailedLabelSupported() {
    return 'label' in screendetailed && typeof screendetailed.label === 'function';
}

if (isScreenDetailedLabelSupported()) {
    console.log('ScreenDetailed.label 支持');
    // 使用ScreenDetailed.label
} else {
    console.log('ScreenDetailed.label 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ScreenDetailed.label polyfill
if (!screendetailed.label) {
    // 在这里添加polyfill实现
    console.log('加载ScreenDetailed.label polyfill');
}
```

