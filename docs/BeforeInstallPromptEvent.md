# BeforeInstallPromptEvent API 兼容性数据

## 基本信息

- **API名称**: `BeforeInstallPromptEvent`
- **MDN文档**: [BeforeInstallPromptEvent](https://developer.mozilla.org/docs/Web/API/BeforeInstallPromptEvent)
- **标签**: `web-features:beforeinstallprompt`

## 使用示例

### 基本用法

```javascript
// BeforeInstallPromptEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('BeforeInstallPromptEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 44 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
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
// 检查BeforeInstallPromptEvent是否支持
function isBeforeInstallPromptEventSupported() {
    return 'BeforeInstallPromptEvent' in window || typeof BeforeInstallPromptEvent !== 'undefined';
}

if (isBeforeInstallPromptEventSupported()) {
    console.log('BeforeInstallPromptEvent 支持');
    // 使用BeforeInstallPromptEvent
} else {
    console.log('BeforeInstallPromptEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BeforeInstallPromptEvent polyfill
if (!window.BeforeInstallPromptEvent) {
    // 在这里添加polyfill实现
    console.log('加载BeforeInstallPromptEvent polyfill');
}
```

