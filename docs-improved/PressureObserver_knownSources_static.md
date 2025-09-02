# PressureObserver.knownSources_static API 兼容性数据

## 基本信息

- **API名称**: `PressureObserver.knownSources_static`
- **MDN文档**: [PressureObserver.knownSources_static](https://developer.mozilla.org/docs/Web/API/PressureObserver/knownSources_static)
- **规范文档**: [查看规范](https://w3c.github.io/compute-pressure/#dom-pressureobserver-knownsources)
- **标签**: `web-features:compute-pressure`

## 使用示例

### 基本用法

```javascript
// PressureObserver.knownSources_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('PressureObserver.knownSources_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 125

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PressureObserver.knownSources_static是否支持
function isPressureObserverKnownSources_staticSupported() {
    return 'knownSources_static' in pressureobserver && typeof pressureobserver.knownSources_static === 'function';
}

if (isPressureObserverKnownSources_staticSupported()) {
    console.log('PressureObserver.knownSources_static 支持');
    // 使用PressureObserver.knownSources_static
} else {
    console.log('PressureObserver.knownSources_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PressureObserver.knownSources_static polyfill
if (!pressureobserver.knownSources_static) {
    // 在这里添加polyfill实现
    console.log('加载PressureObserver.knownSources_static polyfill');
}
```

