# IdleDetector.requestPermission_static API 兼容性数据

## 基本信息

- **API名称**: `IdleDetector.requestPermission_static`
- **MDN文档**: [IdleDetector.requestPermission_static](https://developer.mozilla.org/docs/Web/API/IdleDetector/requestPermission_static)
- **规范文档**: [查看规范](https://wicg.github.io/idle-detection/#api-idledetector-requestpermission)
- **标签**: `web-features:idle-detection`
- **描述**: `requestPermission()` static method

## 使用示例

### 基本用法

```javascript
// IdleDetector.requestPermission_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('IdleDetector.requestPermission_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 114 |  |
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

- **支持版本**: 94

### Edge

- **支持版本**: 114
- **支持版本**: 94
- **移除版本**: 96

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查IdleDetector.requestPermission_static是否支持
function isIdleDetectorRequestPermission_staticSupported() {
    return 'requestPermission_static' in idledetector && typeof idledetector.requestPermission_static === 'function';
}

if (isIdleDetectorRequestPermission_staticSupported()) {
    console.log('IdleDetector.requestPermission_static 支持');
    // 使用IdleDetector.requestPermission_static
} else {
    console.log('IdleDetector.requestPermission_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// IdleDetector.requestPermission_static polyfill
if (!idledetector.requestPermission_static) {
    // 在这里添加polyfill实现
    console.log('加载IdleDetector.requestPermission_static polyfill');
}
```

