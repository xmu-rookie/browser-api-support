# MouseScrollEvent API 兼容性数据

## 基本信息

- **API名称**: `MouseScrollEvent`
- **MDN文档**: [MouseScrollEvent](https://developer.mozilla.org/docs/Web/API/MouseScrollEvent)

## 使用示例

### 基本用法

```javascript
// MouseScrollEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseScrollEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 3.5 |  |
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

- **支持版本**: 3.5

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseScrollEvent是否支持
function isMouseScrollEventSupported() {
    return 'MouseScrollEvent' in window || typeof MouseScrollEvent !== 'undefined';
}

if (isMouseScrollEventSupported()) {
    console.log('MouseScrollEvent 支持');
    // 使用MouseScrollEvent
} else {
    console.log('MouseScrollEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseScrollEvent polyfill
if (!window.MouseScrollEvent) {
    // 在这里添加polyfill实现
    console.log('加载MouseScrollEvent polyfill');
}
```

