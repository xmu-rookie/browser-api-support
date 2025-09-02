# VTTCue.text API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.text`
- **MDN文档**: [VTTCue.text](https://developer.mozilla.org/docs/Web/API/VTTCue/text)
- **规范文档**: [查看规范](https://w3c.github.io/webvtt/#dom-vttcue-text)
- **标签**: `web-features:webvtt`

## 使用示例

### 基本用法

```javascript
// VTTCue.text 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.text API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 8 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 31

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.text是否支持
function isVTTCueTextSupported() {
    return 'text' in vttcue && typeof vttcue.text === 'function';
}

if (isVTTCueTextSupported()) {
    console.log('VTTCue.text 支持');
    // 使用VTTCue.text
} else {
    console.log('VTTCue.text 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.text polyfill
if (!vttcue.text) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.text polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **all_html_character_references**: Allows all HTML character references

