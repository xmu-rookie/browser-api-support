# NavigatorUAData.platform API 兼容性数据

## 基本信息

- **API名称**: `NavigatorUAData.platform`
- **MDN文档**: [NavigatorUAData.platform](https://developer.mozilla.org/docs/Web/API/NavigatorUAData/platform)
- **规范文档**: [查看规范](https://wicg.github.io/ua-client-hints/#dom-navigatoruadata-platform)
- **标签**: `web-features:ua-client-hints`

## 使用示例

### 基本用法

```javascript
// NavigatorUAData.platform 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigatorUAData.platform API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 不支持 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 93

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigatorUAData.platform是否支持
function isNavigatorUADataPlatformSupported() {
    return 'platform' in navigatoruadata && typeof navigatoruadata.platform === 'function';
}

if (isNavigatorUADataPlatformSupported()) {
    console.log('NavigatorUAData.platform 支持');
    // 使用NavigatorUAData.platform
} else {
    console.log('NavigatorUAData.platform 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigatorUAData.platform polyfill
if (!navigatoruadata.platform) {
    // 在这里添加polyfill实现
    console.log('加载NavigatorUAData.platform polyfill');
}
```

