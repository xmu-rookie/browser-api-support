# CountQueuingStrategy.highWaterMark API 兼容性数据

## 基本信息

- **API名称**: `CountQueuingStrategy.highWaterMark`
- **MDN文档**: [CountQueuingStrategy.highWaterMark](https://developer.mozilla.org/docs/Web/API/CountQueuingStrategy/highWaterMark)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-cqs-high-water-mark①)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// CountQueuingStrategy.highWaterMark 使用示例
// 请查阅MDN文档了解具体用法
console.log('CountQueuingStrategy.highWaterMark API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 65

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CountQueuingStrategy.highWaterMark是否支持
function isCountQueuingStrategyHighWaterMarkSupported() {
    return 'highWaterMark' in countqueuingstrategy && typeof countqueuingstrategy.highWaterMark === 'function';
}

if (isCountQueuingStrategyHighWaterMarkSupported()) {
    console.log('CountQueuingStrategy.highWaterMark 支持');
    // 使用CountQueuingStrategy.highWaterMark
} else {
    console.log('CountQueuingStrategy.highWaterMark 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CountQueuingStrategy.highWaterMark polyfill
if (!countqueuingstrategy.highWaterMark) {
    // 在这里添加polyfill实现
    console.log('加载CountQueuingStrategy.highWaterMark polyfill');
}
```

