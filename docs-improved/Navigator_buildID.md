# Navigator.buildID API 兼容性数据

## 基本信息

- **API名称**: `Navigator.buildID`
- **MDN文档**: [Navigator.buildID](https://developer.mozilla.org/docs/Web/API/Navigator/buildID)

## 使用示例

### 基本用法

```javascript
// Navigator.buildID 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.buildID API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 2 | Since Firefox 64, this property returns a fixed timestamp as a privacy measure - `20181001000000`. |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 2
- **注意事项**:
  - Since Firefox 64, this property returns a fixed timestamp as a privacy measure - `20181001000000`.

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.buildID是否支持
function isNavigatorBuildIDSupported() {
    return 'buildID' in navigator && typeof navigator.buildID === 'function';
}

if (isNavigatorBuildIDSupported()) {
    console.log('Navigator.buildID 支持');
    // 使用Navigator.buildID
} else {
    console.log('Navigator.buildID 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.buildID polyfill
if (!navigator.buildID) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.buildID polyfill');
}
```

