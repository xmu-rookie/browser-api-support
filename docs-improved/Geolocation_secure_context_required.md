# Geolocation.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `Geolocation.secure_context_required`
- **标签**: `web-features:geolocation`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// Geolocation.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('Geolocation.secure_context_required API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 51 | Secure context is only required for applications targeting Android Nougat (7) and higher. See [bug 4... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 50

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 10

### WebView Android

- **支持版本**: 51
- **注意事项**:
  - Secure context is only required for applications targeting Android Nougat (7) and higher. See [bug 40465140](https://crbug.com/40465140).

## 兼容性检查代码

### 特性检测

```javascript
// 检查Geolocation.secure_context_required是否支持
function isGeolocationSecure_context_requiredSupported() {
    return 'secure_context_required' in geolocation && typeof geolocation.secure_context_required === 'function';
}

if (isGeolocationSecure_context_requiredSupported()) {
    console.log('Geolocation.secure_context_required 支持');
    // 使用Geolocation.secure_context_required
} else {
    console.log('Geolocation.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Geolocation.secure_context_required polyfill
if (!geolocation.secure_context_required) {
    // 在这里添加polyfill实现
    console.log('加载Geolocation.secure_context_required polyfill');
}
```

