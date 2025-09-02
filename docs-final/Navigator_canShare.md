# Navigator.canShare API 兼容性数据

## 基本信息

- **API名称**: `Navigator.canShare`
- **MDN文档**: [Navigator.canShare](https://developer.mozilla.org/docs/Web/API/Navigator/canShare)
- **规范文档**: [查看规范](https://w3c.github.io/web-share/#canshare-data-method)
- **标签**: `web-features:share`

## 使用示例

### 基本用法

```javascript
// Navigator.canShare 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.canShare API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 128 |  |
| Chrome Android | 75 |  |
| Edge | 93 |  |
| Firefox | 96 |  |
| Firefox Android | 96 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
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

- **支持版本**: 75

### Edge

- **支持版本**: 93
- **支持版本**: 81
- **移除版本**: 93
- **部分实现**: 是
- **注意事项**:
  - Only supported on Windows.

### Firefox

- **支持版本**: 96
- **需要标志**: 
  - dom.webshare.enabled: true

### Firefox Android

- **支持版本**: 96

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 14

### WebView Android

- **支持版本**: 不支持

## 相关子API

该API包含以下子功能：

- **data_files_parameter**: `data.files` parameter
- **data_text_parameter**: `data.text` parameter

