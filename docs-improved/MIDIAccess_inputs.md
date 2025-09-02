# MIDIAccess.inputs API 兼容性数据

## 基本信息

- **API名称**: `MIDIAccess.inputs`
- **MDN文档**: [MIDIAccess.inputs](https://developer.mozilla.org/docs/Web/API/MIDIAccess/inputs)
- **规范文档**: [查看规范](https://webaudio.github.io/web-midi-api/#dom-midiaccess-inputs)
- **标签**: `web-features:web-midi`

## 使用示例

### 基本用法

```javascript
// MIDIAccess.inputs 使用示例
// 请查阅MDN文档了解具体用法
console.log('MIDIAccess.inputs API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 108 |  |
| Firefox Android | 不支持 |  |
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

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MIDIAccess.inputs是否支持
function isMIDIAccessInputsSupported() {
    return 'inputs' in midiaccess && typeof midiaccess.inputs === 'function';
}

if (isMIDIAccessInputsSupported()) {
    console.log('MIDIAccess.inputs 支持');
    // 使用MIDIAccess.inputs
} else {
    console.log('MIDIAccess.inputs 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MIDIAccess.inputs polyfill
if (!midiaccess.inputs) {
    // 在这里添加polyfill实现
    console.log('加载MIDIAccess.inputs polyfill');
}
```

