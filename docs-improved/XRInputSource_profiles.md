# XRInputSource.profiles API 兼容性数据

## 基本信息

- **API名称**: `XRInputSource.profiles`
- **MDN文档**: [XRInputSource.profiles](https://developer.mozilla.org/docs/Web/API/XRInputSource/profiles)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrinputsource-profiles)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRInputSource.profiles 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRInputSource.profiles API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 11.2 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 11.2

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRInputSource.profiles是否支持
function isXRInputSourceProfilesSupported() {
    return 'profiles' in xrinputsource && typeof xrinputsource.profiles === 'function';
}

if (isXRInputSourceProfilesSupported()) {
    console.log('XRInputSource.profiles 支持');
    // 使用XRInputSource.profiles
} else {
    console.log('XRInputSource.profiles 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRInputSource.profiles polyfill
if (!xrinputsource.profiles) {
    // 在这里添加polyfill实现
    console.log('加载XRInputSource.profiles polyfill');
}
```

