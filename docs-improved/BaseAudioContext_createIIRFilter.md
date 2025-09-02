# BaseAudioContext.createIIRFilter API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.createIIRFilter`
- **MDN文档**: [BaseAudioContext.createIIRFilter](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createIIRFilter)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createiirfilter)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.createIIRFilter 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.createIIRFilter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 50 |  |
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

- **支持版本**: 14

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.createIIRFilter是否支持
function isBaseAudioContextCreateIIRFilterSupported() {
    return 'createIIRFilter' in baseaudiocontext && typeof baseaudiocontext.createIIRFilter === 'function';
}

if (isBaseAudioContextCreateIIRFilterSupported()) {
    console.log('BaseAudioContext.createIIRFilter 支持');
    // 使用BaseAudioContext.createIIRFilter
} else {
    console.log('BaseAudioContext.createIIRFilter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.createIIRFilter polyfill
if (!baseaudiocontext.createIIRFilter) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.createIIRFilter polyfill');
}
```

