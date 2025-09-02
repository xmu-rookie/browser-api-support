# Navigator.doNotTrack API 兼容性数据

## 基本信息

- **API名称**: `Navigator.doNotTrack`
- **MDN文档**: [Navigator.doNotTrack](https://developer.mozilla.org/docs/Web/API/Navigator/doNotTrack)

## 使用示例

### 基本用法

```javascript
// Navigator.doNotTrack 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.doNotTrack API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 | Before version 17, Edge implemented `window.doNotTrack`. |
| Firefox | 9 | In Firefox, `navigator.doNotTrack` returns `"unspecified"` instead of `null`.; Before Firefox 32, `n... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | For IE11 and subsequent versions, use `window.doNotTrack` |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 17
- **注意事项**:
  - Before version 17, Edge implemented `window.doNotTrack`.

### Firefox

- **支持版本**: 9
- **注意事项**:
  - In Firefox, `navigator.doNotTrack` returns `"unspecified"` instead of `null`.
  - Before Firefox 32, `navigator.doNotTrack` would report values of `"yes"` and `"no"` rather than `"1"` and `"0"`.

### Internet Explorer

- **支持版本**: 9
- **移除版本**: 11
- **前缀**: ms
- **注意事项**:
  - For IE11 and subsequent versions, use `window.doNotTrack`

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5.1
- **移除版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.doNotTrack是否支持
function isNavigatorDoNotTrackSupported() {
    return 'doNotTrack' in navigator && typeof navigator.doNotTrack === 'function';
}

if (isNavigatorDoNotTrackSupported()) {
    console.log('Navigator.doNotTrack 支持');
    // 使用Navigator.doNotTrack
} else {
    console.log('Navigator.doNotTrack 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.doNotTrack polyfill
if (!navigator.doNotTrack) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.doNotTrack polyfill');
}
```

