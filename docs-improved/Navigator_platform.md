# Navigator.platform API 兼容性数据

## 基本信息

- **API名称**: `Navigator.platform`
- **MDN文档**: [Navigator.platform](https://developer.mozilla.org/docs/Web/API/Navigator/platform)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-navigator-platform-dev)

## 使用示例

### 基本用法

```javascript
// Navigator.platform 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.platform API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.1 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 69, `platform` would report running on a 32-bit CPU if running the 32-bit version of ... |
| Firefox Android | 4 |  |
| Internet Explorer | 4 |  |
| Node.js | 21.2.0 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.1

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 69, `platform` would report running on a 32-bit CPU if running the 32-bit version of Firefox on a 64-bit system.
  - You can override the value returned by `platform` by setting the preference `general.platform.override` to the string you wish to be returned instead.

### Firefox Android

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 4

### Node.js

- **支持版本**: 21.2.0

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.platform是否支持
function isNavigatorPlatformSupported() {
    return 'platform' in navigator && typeof navigator.platform === 'function';
}

if (isNavigatorPlatformSupported()) {
    console.log('Navigator.platform 支持');
    // 使用Navigator.platform
} else {
    console.log('Navigator.platform 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.platform polyfill
if (!navigator.platform) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.platform polyfill');
}
```

