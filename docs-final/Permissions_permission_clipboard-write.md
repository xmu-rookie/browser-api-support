# Permissions.permission_clipboard-write API 兼容性数据

## 基本信息

- **API名称**: `Permissions.permission_clipboard-write`
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dom-permissionname-clipboard-write)
- **标签**: `web-features:async-clipboard`
- **描述**: `clipboard-write` permission

## 使用示例

### 基本用法

```javascript
// 使用剪贴板API
// 写入剪贴板
navigator.clipboard.writeText('复制的文本').then(() => {
    console.log('文本已复制到剪贴板');
});

// 读取剪贴板
navigator.clipboard.readText().then(text => {
    console.log('剪贴板内容:', text);
});
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
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
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 64

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

