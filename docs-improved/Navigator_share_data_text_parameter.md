# Navigator.share.data_text_parameter API 兼容性数据

## 基本信息

- **API名称**: `Navigator.share.data_text_parameter`
- **规范文档**: [查看规范](https://w3c.github.io/web-share/#dom-sharedata-text)
- **标签**: `web-features:share`
- **描述**: `data.text` parameter

## 使用示例

### 基本用法

```javascript
// 使用Web Share API
if (navigator.share) {
    navigator.share({
        title: '分享标题',
        text: '分享内容',
        url: 'https://example.com'
    }).then(() => {
        console.log('分享成功');
    }).catch(err => {
        console.error('分享失败:', err);
    });
} else {
    console.log('浏览器不支持Web Share API');
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
| Chrome Android | 76 |  |
| Edge | 81 |  |
| Firefox | 71 |  |
| Firefox Android | 不支持 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 11.0 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 89

### Chrome Android

- **支持版本**: 76

### Edge

- **支持版本**: 81

### Firefox

- **支持版本**: 71

### Firefox Android

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 14

### Samsung Internet

- **支持版本**: 11.0

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.share.data_text_parameter是否支持
function isNavigatorShareSupported() {
    return 'share' in navigator && typeof navigator.share === 'function';
}

if (isNavigatorShareSupported()) {
    console.log('Navigator.share.data_text_parameter 支持');
    // 使用Navigator.share.data_text_parameter
} else {
    console.log('Navigator.share.data_text_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.share.data_text_parameter polyfill
if (!navigator.share) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.share.data_text_parameter polyfill');
}
```

