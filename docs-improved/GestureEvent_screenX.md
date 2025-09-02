# GestureEvent.screenX API 兼容性数据

## 基本信息

- **API名称**: `GestureEvent.screenX`

## 使用示例

### 基本用法

```javascript
// GestureEvent.screenX 使用示例
// 请查阅MDN文档了解具体用法
console.log('GestureEvent.screenX API');
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
// 检查GestureEvent.screenX是否支持
function isGestureEventScreenXSupported() {
    return 'screenX' in gestureevent && typeof gestureevent.screenX === 'function';
}

if (isGestureEventScreenXSupported()) {
    console.log('GestureEvent.screenX 支持');
    // 使用GestureEvent.screenX
} else {
    console.log('GestureEvent.screenX 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GestureEvent.screenX polyfill
if (!gestureevent.screenX) {
    // 在这里添加polyfill实现
    console.log('加载GestureEvent.screenX polyfill');
}
```

