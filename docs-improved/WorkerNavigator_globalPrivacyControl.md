# WorkerNavigator.globalPrivacyControl API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.globalPrivacyControl`
- **MDN文档**: [WorkerNavigator.globalPrivacyControl](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/globalPrivacyControl)
- **规范文档**: [查看规范](https://w3c.github.io/gpc/#dom-globalprivacycontrol-globalprivacycontrol)
- **标签**: `web-features:gpc`

## 使用示例

### 基本用法

```javascript
// WorkerNavigator.globalPrivacyControl 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerNavigator.globalPrivacyControl API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 120 | Opt-in to GPC by setting the preference `privacy.globalprivacycontrol.enabled` to `true`. |
| Firefox Android | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 120
- **注意事项**:
  - Opt-in to GPC by setting the preference `privacy.globalprivacycontrol.enabled` to `true`.

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.globalPrivacyControl是否支持
function isWorkerNavigatorGlobalPrivacyControlSupported() {
    return 'globalPrivacyControl' in workernavigator && typeof workernavigator.globalPrivacyControl === 'function';
}

if (isWorkerNavigatorGlobalPrivacyControlSupported()) {
    console.log('WorkerNavigator.globalPrivacyControl 支持');
    // 使用WorkerNavigator.globalPrivacyControl
} else {
    console.log('WorkerNavigator.globalPrivacyControl 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.globalPrivacyControl polyfill
if (!workernavigator.globalPrivacyControl) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.globalPrivacyControl polyfill');
}
```

