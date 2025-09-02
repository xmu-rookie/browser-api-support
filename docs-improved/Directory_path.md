# Directory.path API 兼容性数据

## 基本信息

- **API名称**: `Directory.path`

## 使用示例

### 基本用法

```javascript
// Directory.path 使用示例
// 请查阅MDN文档了解具体用法
console.log('Directory.path API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 42 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 42

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Directory.path是否支持
function isDirectoryPathSupported() {
    return 'path' in directory && typeof directory.path === 'function';
}

if (isDirectoryPathSupported()) {
    console.log('Directory.path 支持');
    // 使用Directory.path
} else {
    console.log('Directory.path 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Directory.path polyfill
if (!directory.path) {
    // 在这里添加polyfill实现
    console.log('加载Directory.path polyfill');
}
```

