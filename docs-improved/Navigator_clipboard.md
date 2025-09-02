# Navigator.clipboard API 兼容性数据

## 基本信息

- **API名称**: `Navigator.clipboard`
- **MDN文档**: [Navigator.clipboard](https://developer.mozilla.org/docs/Web/API/Navigator/clipboard)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#navigator-clipboard)
- **标签**: `web-features:async-clipboard`

## 使用示例

### 基本用法

```javascript
// 使用剪贴板API
if (navigator.clipboard) {
    // 写入剪贴板
    navigator.clipboard.writeText('复制的文本').then(() => {
        console.log('文本已复制到剪贴板');
    });
    
    // 读取剪贴板
    navigator.clipboard.readText().then(text => {
        console.log('剪贴板内容:', text);
    });
} else {
    console.log('浏览器不支持剪贴板API');
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 63 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Firefox

- **支持版本**: 63

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.clipboard是否支持
function isNavigatorClipboardSupported() {
    return 'clipboard' in navigator && typeof navigator.clipboard === 'function';
}

if (isNavigatorClipboardSupported()) {
    console.log('Navigator.clipboard 支持');
    // 使用Navigator.clipboard
} else {
    console.log('Navigator.clipboard 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.clipboard polyfill
if (!navigator.clipboard) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.clipboard polyfill');
}
```

