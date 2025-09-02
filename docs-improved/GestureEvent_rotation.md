# GestureEvent.rotation API 兼容性数据

## 基本信息

- **API名称**: `GestureEvent.rotation`

## 使用示例

### 基本用法

```javascript
// GestureEvent.rotation 使用示例
// 请查阅MDN文档了解具体用法
console.log('GestureEvent.rotation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 9

### Safari iOS

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查GestureEvent.rotation是否支持
function isGestureEventRotationSupported() {
    return 'rotation' in gestureevent && typeof gestureevent.rotation === 'function';
}

if (isGestureEventRotationSupported()) {
    console.log('GestureEvent.rotation 支持');
    // 使用GestureEvent.rotation
} else {
    console.log('GestureEvent.rotation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GestureEvent.rotation polyfill
if (!gestureevent.rotation) {
    // 在这里添加polyfill实现
    console.log('加载GestureEvent.rotation polyfill');
}
```

