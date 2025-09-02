# Window.getDigitalGoodsService API 兼容性数据

## 基本信息

- **API名称**: `Window.getDigitalGoodsService`
- **规范文档**: [查看规范](https://wicg.github.io/digital-goods/#getdigitalgoodsservice-method)
- **标签**: `web-features:digital-goods`

## 使用示例

### 基本用法

```javascript
// Window.getDigitalGoodsService 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.getDigitalGoodsService API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 101 |  |
| Deno | 不支持 |  |
| Edge | 134 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Chrome Android

- **支持版本**: 101

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 134

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.getDigitalGoodsService是否支持
function isWindowGetDigitalGoodsServiceSupported() {
    return 'getDigitalGoodsService' in window && typeof window.getDigitalGoodsService === 'function';
}

if (isWindowGetDigitalGoodsServiceSupported()) {
    console.log('Window.getDigitalGoodsService 支持');
    // 使用Window.getDigitalGoodsService
} else {
    console.log('Window.getDigitalGoodsService 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.getDigitalGoodsService polyfill
if (!window.getDigitalGoodsService) {
    // 在这里添加polyfill实现
    console.log('加载Window.getDigitalGoodsService polyfill');
}
```

