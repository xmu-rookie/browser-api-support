# NavigatorManagedData.managedconfigurationchange_event API 兼容性数据

## 基本信息

- **API名称**: `NavigatorManagedData.managedconfigurationchange_event`
- **规范文档**: [查看规范](https://wicg.github.io/WebApiDevice/managed_config/#onmanagedconfigurationchange-attribute)
- **描述**: `managedconfigurationchange` event

## 使用示例

### 基本用法

```javascript
// NavigatorManagedData.managedconfigurationchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigatorManagedData.managedconfigurationchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 91 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 91

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查NavigatorManagedData.managedconfigurationchange_event是否支持
function isNavigatorManagedDataManagedconfigurationchange_eventSupported() {
    return 'managedconfigurationchange_event' in navigatormanageddata && typeof navigatormanageddata.managedconfigurationchange_event === 'function';
}

if (isNavigatorManagedDataManagedconfigurationchange_eventSupported()) {
    console.log('NavigatorManagedData.managedconfigurationchange_event 支持');
    // 使用NavigatorManagedData.managedconfigurationchange_event
} else {
    console.log('NavigatorManagedData.managedconfigurationchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigatorManagedData.managedconfigurationchange_event polyfill
if (!navigatormanageddata.managedconfigurationchange_event) {
    // 在这里添加polyfill实现
    console.log('加载NavigatorManagedData.managedconfigurationchange_event polyfill');
}
```

