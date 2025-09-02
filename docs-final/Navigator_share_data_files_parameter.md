# Navigator.share.data_files_parameter API 兼容性数据

## 基本信息

- **API名称**: `Navigator.share.data_files_parameter`
- **规范文档**: [查看规范](https://w3c.github.io/web-share/#dom-sharedata-files)
- **标签**: `web-features:share`
- **描述**: `data.files` parameter

## 使用示例

### 基本用法

```javascript
// 使用Web Share API
navigator.share({
    title: '分享标题',
    text: '分享内容',
    url: 'https://example.com'
}).then(() => {
    console.log('分享成功');
}).catch(err => {
    console.error('分享失败:', err);
});
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
| Chrome Android | 76 |  |
| Edge | 81 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 14

### Samsung Internet

- **支持版本**: 11.0

### WebView Android

- **支持版本**: 不支持

