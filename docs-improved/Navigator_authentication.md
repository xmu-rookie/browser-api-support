# Navigator.authentication API 兼容性数据

## 基本信息

- **API名称**: `Navigator.authentication`

## 使用示例

### 基本用法

```javascript
// Navigator.authentication 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.authentication API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 67
- **需要标志**: 
  - WebAuth: true

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.authentication是否支持
function isNavigatorAuthenticationSupported() {
    return 'authentication' in navigator && typeof navigator.authentication === 'function';
}

if (isNavigatorAuthenticationSupported()) {
    console.log('Navigator.authentication 支持');
    // 使用Navigator.authentication
} else {
    console.log('Navigator.authentication 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.authentication polyfill
if (!navigator.authentication) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.authentication polyfill');
}
```

