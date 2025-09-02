# PushManager.register API 兼容性数据

## 基本信息

- **API名称**: `PushManager.register`
- **MDN文档**: [PushManager.register](https://developer.mozilla.org/docs/Web/API/PushManager/register)

## 使用示例

### 基本用法

```javascript
// PushManager.register 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushManager.register API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 48 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Firefox Android

- **支持版本**: 48

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PushManager.register是否支持
function isPushManagerRegisterSupported() {
    return 'register' in pushmanager && typeof pushmanager.register === 'function';
}

if (isPushManagerRegisterSupported()) {
    console.log('PushManager.register 支持');
    // 使用PushManager.register
} else {
    console.log('PushManager.register 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PushManager.register polyfill
if (!pushmanager.register) {
    // 在这里添加polyfill实现
    console.log('加载PushManager.register polyfill');
}
```

