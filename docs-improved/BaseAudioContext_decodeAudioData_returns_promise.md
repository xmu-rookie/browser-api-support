# BaseAudioContext.decodeAudioData.returns_promise API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.decodeAudioData.returns_promise`
- **标签**: `web-features:web-audio`
- **描述**: Returns a `Promise`

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.decodeAudioData.returns_promise 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.decodeAudioData.returns_promise API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.decodeAudioData.returns_promise是否支持
function isBaseAudioContextDecodeAudioDataSupported() {
    return 'decodeAudioData' in baseaudiocontext && typeof baseaudiocontext.decodeAudioData === 'function';
}

if (isBaseAudioContextDecodeAudioDataSupported()) {
    console.log('BaseAudioContext.decodeAudioData.returns_promise 支持');
    // 使用BaseAudioContext.decodeAudioData.returns_promise
} else {
    console.log('BaseAudioContext.decodeAudioData.returns_promise 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.decodeAudioData.returns_promise polyfill
if (!baseaudiocontext.decodeAudioData) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.decodeAudioData.returns_promise polyfill');
}
```

