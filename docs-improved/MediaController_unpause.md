# MediaController.unpause API 兼容性数据

## 基本信息

- **API名称**: `MediaController.unpause`
- **标签**: `web-features:mediacontroller`

## 使用示例

### 基本用法

```javascript
// MediaController.unpause 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaController.unpause API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaController.unpause是否支持
function isMediaControllerUnpauseSupported() {
    return 'unpause' in mediacontroller && typeof mediacontroller.unpause === 'function';
}

if (isMediaControllerUnpauseSupported()) {
    console.log('MediaController.unpause 支持');
    // 使用MediaController.unpause
} else {
    console.log('MediaController.unpause 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaController.unpause polyfill
if (!mediacontroller.unpause) {
    // 在这里添加polyfill实现
    console.log('加载MediaController.unpause polyfill');
}
```

