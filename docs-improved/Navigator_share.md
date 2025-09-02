# Navigator.share API 兼容性数据

## 基本信息

- **API名称**: `Navigator.share`
- **MDN文档**: [Navigator.share](https://developer.mozilla.org/docs/Web/API/Navigator/share)
- **规范文档**: [查看规范](https://w3c.github.io/web-share/#share-method)
- **标签**: `web-features:share`

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
| Chrome | 128 |  |
| Chrome Android | 61 |  |
| Edge | 93 |  |
| Firefox | 71 |  |
| Firefox Android | 79 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 48 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 128
- **支持版本**: 89
- **移除版本**: 128
- **部分实现**: 是
- **注意事项**:
  - Only supported on ChromeOS and Windows, see [bug 40542648](https://crbug.com/40542648) and [bug 40729163](https://crbug.com/40729163).

### Chrome Android

- **支持版本**: 61

### Edge

- **支持版本**: 93
- **支持版本**: 81
- **移除版本**: 93
- **部分实现**: 是
- **注意事项**:
  - Only supported on Windows.

### Firefox

- **支持版本**: 71
- **需要标志**: 
  - dom.webshare.enabled: true

### Firefox Android

- **支持版本**: 79

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 48

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.share是否支持
function isNavigatorShareSupported() {
    return 'share' in navigator && typeof navigator.share === 'function';
}

if (isNavigatorShareSupported()) {
    console.log('Navigator.share 支持');
    // 使用Navigator.share
} else {
    console.log('Navigator.share 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.share polyfill
if (!navigator.share) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.share polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **data_files_parameter**: `data.files` parameter
- **data_text_parameter**: `data.text` parameter

