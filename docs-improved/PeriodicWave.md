# PeriodicWave API 兼容性数据

## 基本信息

- **API名称**: `PeriodicWave`
- **MDN文档**: [PeriodicWave](https://developer.mozilla.org/docs/Web/API/PeriodicWave)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#PeriodicWave)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// PeriodicWave 使用示例
// 请查阅MDN文档了解具体用法
console.log('PeriodicWave API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 26 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Firefox Android

- **支持版本**: 26

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查PeriodicWave是否支持
function isPeriodicWaveSupported() {
    return 'PeriodicWave' in window || typeof PeriodicWave !== 'undefined';
}

if (isPeriodicWaveSupported()) {
    console.log('PeriodicWave 支持');
    // 使用PeriodicWave
} else {
    console.log('PeriodicWave 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PeriodicWave polyfill
if (!window.PeriodicWave) {
    // 在这里添加polyfill实现
    console.log('加载PeriodicWave polyfill');
}
```

