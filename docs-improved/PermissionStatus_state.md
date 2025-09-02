# PermissionStatus.state API 兼容性数据

## 基本信息

- **API名称**: `PermissionStatus.state`
- **MDN文档**: [PermissionStatus.state](https://developer.mozilla.org/docs/Web/API/PermissionStatus/state)
- **规范文档**: [查看规范](https://w3c.github.io/permissions/#dom-permissionstatus-state)
- **标签**: `web-features:permissions`

## 使用示例

### 基本用法

```javascript
// PermissionStatus.state 使用示例
// 请查阅MDN文档了解具体用法
console.log('PermissionStatus.state API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 44 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 44
- **支持版本**: 43
- **移除版本**: 44

### Firefox

- **支持版本**: 46

### Safari

- **支持版本**: 16

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PermissionStatus.state是否支持
function isPermissionStatusStateSupported() {
    return 'state' in permissionstatus && typeof permissionstatus.state === 'function';
}

if (isPermissionStatusStateSupported()) {
    console.log('PermissionStatus.state 支持');
    // 使用PermissionStatus.state
} else {
    console.log('PermissionStatus.state 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PermissionStatus.state polyfill
if (!permissionstatus.state) {
    // 在这里添加polyfill实现
    console.log('加载PermissionStatus.state polyfill');
}
```

