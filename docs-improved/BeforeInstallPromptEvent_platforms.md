# BeforeInstallPromptEvent.platforms API 兼容性数据

## 基本信息

- **API名称**: `BeforeInstallPromptEvent.platforms`
- **MDN文档**: [BeforeInstallPromptEvent.platforms](https://developer.mozilla.org/docs/Web/API/BeforeInstallPromptEvent/platforms)
- **标签**: `web-features:beforeinstallprompt`

## 使用示例

### 基本用法

```javascript
// BeforeInstallPromptEvent.platforms 使用示例
// 请查阅MDN文档了解具体用法
console.log('BeforeInstallPromptEvent.platforms API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 44 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 5.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 44

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 5.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查BeforeInstallPromptEvent.platforms是否支持
function isBeforeInstallPromptEventPlatformsSupported() {
    return 'platforms' in beforeinstallpromptevent && typeof beforeinstallpromptevent.platforms === 'function';
}

if (isBeforeInstallPromptEventPlatformsSupported()) {
    console.log('BeforeInstallPromptEvent.platforms 支持');
    // 使用BeforeInstallPromptEvent.platforms
} else {
    console.log('BeforeInstallPromptEvent.platforms 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BeforeInstallPromptEvent.platforms polyfill
if (!beforeinstallpromptevent.platforms) {
    // 在这里添加polyfill实现
    console.log('加载BeforeInstallPromptEvent.platforms polyfill');
}
```

