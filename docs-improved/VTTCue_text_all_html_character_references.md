# VTTCue.text.all_html_character_references API 兼容性数据

## 基本信息

- **API名称**: `VTTCue.text.all_html_character_references`
- **标签**: `web-features:webvtt`
- **描述**: Allows all HTML character references

## 使用示例

### 基本用法

```javascript
// VTTCue.text.all_html_character_references 使用示例
// 请查阅MDN文档了解具体用法
console.log('VTTCue.text.all_html_character_references API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 63 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 127 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.5 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 63

### Firefox

- **支持版本**: 127

### Safari

- **支持版本**: 17.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查VTTCue.text.all_html_character_references是否支持
function isVTTCueTextSupported() {
    return 'text' in vttcue && typeof vttcue.text === 'function';
}

if (isVTTCueTextSupported()) {
    console.log('VTTCue.text.all_html_character_references 支持');
    // 使用VTTCue.text.all_html_character_references
} else {
    console.log('VTTCue.text.all_html_character_references 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VTTCue.text.all_html_character_references polyfill
if (!vttcue.text) {
    // 在这里添加polyfill实现
    console.log('加载VTTCue.text.all_html_character_references polyfill');
}
```

