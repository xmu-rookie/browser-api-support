# Navigator.getInstalledRelatedApps API 兼容性数据

## 基本信息

- **API名称**: `Navigator.getInstalledRelatedApps`
- **MDN文档**: [Navigator.getInstalledRelatedApps](https://developer.mozilla.org/docs/Web/API/Navigator/getInstalledRelatedApps)
- **规范文档**: [查看规范](https://wicg.github.io/get-installed-related-apps/spec/#dom-navigator-getinstalledrelatedapps)

## 使用示例

### 基本用法

```javascript
// Navigator.getInstalledRelatedApps 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.getInstalledRelatedApps API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 | Supported on Windows for checking of Universal Windows Platform (UWP) app installation. Resolves wit... |
| Chrome Android | 84 | Supports checking of Progressive Web App (PWA) installation. |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 不支持 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 85
- **注意事项**:
  - Supported on Windows for checking of Universal Windows Platform (UWP) app installation. Resolves with an empty array on other platforms.
- **支持版本**: 80
- **移除版本**: 85
- **部分实现**: 是
- **注意事项**:
  - Always resolves with an empty array.

### Chrome Android

- **支持版本**: 84
- **注意事项**:
  - Supports checking of Progressive Web App (PWA) installation.
- **支持版本**: 80
- **移除版本**: 84
- **部分实现**: 是
- **注意事项**:
  - Supports checking of Android app installation.

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

