# caches.secure_context_required API 兼容性数据

## 基本信息

- **API名称**: `caches.secure_context_required`
- **标签**: `web-features:service-workers`
- **描述**: Secure context required

## 使用示例

### 基本用法

```javascript
// caches.secure_context_required 使用示例
// 请查阅MDN文档了解具体用法
console.log('caches.secure_context_required API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 65 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 103 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 65

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 103

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查caches.secure_context_required是否支持
function iscachesSecure_context_requiredSupported() {
    return 'secure_context_required' in caches && typeof caches.secure_context_required === 'function';
}

if (iscachesSecure_context_requiredSupported()) {
    console.log('caches.secure_context_required 支持');
    // 使用caches.secure_context_required
} else {
    console.log('caches.secure_context_required 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// caches.secure_context_required polyfill
if (!caches.secure_context_required) {
    // 在这里添加polyfill实现
    console.log('加载caches.secure_context_required polyfill');
}
```

