# Navigator.requestMIDIAccess API 兼容性数据

## 基本信息

- **API名称**: `Navigator.requestMIDIAccess`
- **MDN文档**: [Navigator.requestMIDIAccess](https://developer.mozilla.org/docs/Web/API/Navigator/requestMIDIAccess)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-navigator-requestmidiaccess)
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// Navigator.requestMIDIAccess 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.requestMIDIAccess API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 108 | API access is gated by installation of a [site permission add-on](https://support.mozilla.org/en-US/... |
| Firefox Android | 不支持 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 43

### Firefox

- **支持版本**: 108
- **注意事项**:
  - API access is gated by installation of a [site permission add-on](https://support.mozilla.org/en-US/kb/site-permission-add-ons) (user prompt), secure context, and [`Permission Policy: midi`](https://developer.mozilla.org/docs/Web/HTTP/Headers/Feature-Policy/midi).

### Firefox Android

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.requestMIDIAccess是否支持
function isNavigatorRequestMIDIAccessSupported() {
    return 'requestMIDIAccess' in navigator && typeof navigator.requestMIDIAccess === 'function';
}

if (isNavigatorRequestMIDIAccessSupported()) {
    console.log('Navigator.requestMIDIAccess 支持');
    // 使用Navigator.requestMIDIAccess
} else {
    console.log('Navigator.requestMIDIAccess 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.requestMIDIAccess polyfill
if (!navigator.requestMIDIAccess) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.requestMIDIAccess polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required

