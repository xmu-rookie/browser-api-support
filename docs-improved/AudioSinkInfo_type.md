# AudioSinkInfo.type API 兼容性数据

## 基本信息

- **API名称**: `AudioSinkInfo.type`
- **MDN文档**: [AudioSinkInfo.type](https://developer.mozilla.org/docs/Web/API/AudioSinkInfo/type)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiosinkinfo-type)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioSinkInfo.type 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioSinkInfo.type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 110 |  |
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

- **支持版本**: 110

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioSinkInfo.type是否支持
function isAudioSinkInfoTypeSupported() {
    return 'type' in audiosinkinfo && typeof audiosinkinfo.type === 'function';
}

if (isAudioSinkInfoTypeSupported()) {
    console.log('AudioSinkInfo.type 支持');
    // 使用AudioSinkInfo.type
} else {
    console.log('AudioSinkInfo.type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioSinkInfo.type polyfill
if (!audiosinkinfo.type) {
    // 在这里添加polyfill实现
    console.log('加载AudioSinkInfo.type polyfill');
}
```

