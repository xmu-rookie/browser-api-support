# Navigator.canLoadAdAuctionFencedFrame API 兼容性数据

## 基本信息

- **API名称**: `Navigator.canLoadAdAuctionFencedFrame`
- **规范文档**: [查看规范](https://wicg.github.io/turtledove/#dom-navigator-canloadadauctionfencedframe)

## 使用示例

### 基本用法

```javascript
// Navigator.canLoadAdAuctionFencedFrame 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.canLoadAdAuctionFencedFrame API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 128 |  |
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

- **支持版本**: 128

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.canLoadAdAuctionFencedFrame是否支持
function isNavigatorCanLoadAdAuctionFencedFrameSupported() {
    return 'canLoadAdAuctionFencedFrame' in navigator && typeof navigator.canLoadAdAuctionFencedFrame === 'function';
}

if (isNavigatorCanLoadAdAuctionFencedFrameSupported()) {
    console.log('Navigator.canLoadAdAuctionFencedFrame 支持');
    // 使用Navigator.canLoadAdAuctionFencedFrame
} else {
    console.log('Navigator.canLoadAdAuctionFencedFrame 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.canLoadAdAuctionFencedFrame polyfill
if (!navigator.canLoadAdAuctionFencedFrame) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.canLoadAdAuctionFencedFrame polyfill');
}
```

