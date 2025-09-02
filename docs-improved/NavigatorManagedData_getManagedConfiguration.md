# NavigatorManagedData.getManagedConfiguration API 兼容性数据

## 基本信息

- **API名称**: `NavigatorManagedData.getManagedConfiguration`
- **规范文档**: [查看规范](https://wicg.github.io/WebApiDevice/managed_config/#dom-navigatormanageddata-getmanagedconfiguration)

## 使用示例

### 基本用法

```javascript
// NavigatorManagedData.getManagedConfiguration 使用示例
// 请查阅MDN文档了解具体用法
console.log('NavigatorManagedData.getManagedConfiguration API');
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
// 检查NavigatorManagedData.getManagedConfiguration是否支持
function isNavigatorManagedDataGetManagedConfigurationSupported() {
    return 'getManagedConfiguration' in navigatormanageddata && typeof navigatormanageddata.getManagedConfiguration === 'function';
}

if (isNavigatorManagedDataGetManagedConfigurationSupported()) {
    console.log('NavigatorManagedData.getManagedConfiguration 支持');
    // 使用NavigatorManagedData.getManagedConfiguration
} else {
    console.log('NavigatorManagedData.getManagedConfiguration 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NavigatorManagedData.getManagedConfiguration polyfill
if (!navigatormanageddata.getManagedConfiguration) {
    // 在这里添加polyfill实现
    console.log('加载NavigatorManagedData.getManagedConfiguration polyfill');
}
```

