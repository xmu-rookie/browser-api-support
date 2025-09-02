# MouseEvent.getModifierState API 兼容性数据

## 基本信息

- **API名称**: `MouseEvent.getModifierState`
- **MDN文档**: [MouseEvent.getModifierState](https://developer.mozilla.org/docs/Web/API/MouseEvent/getModifierState)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-mouseevent-getmodifierstate)
- **标签**: `web-features:mouse-events`

## 使用示例

### 基本用法

```javascript
// MouseEvent.getModifierState 使用示例
// 请查阅MDN文档了解具体用法
console.log('MouseEvent.getModifierState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 15

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 12.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MouseEvent.getModifierState是否支持
function isMouseEventGetModifierStateSupported() {
    return 'getModifierState' in mouseevent && typeof mouseevent.getModifierState === 'function';
}

if (isMouseEventGetModifierStateSupported()) {
    console.log('MouseEvent.getModifierState 支持');
    // 使用MouseEvent.getModifierState
} else {
    console.log('MouseEvent.getModifierState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MouseEvent.getModifierState polyfill
if (!mouseevent.getModifierState) {
    // 在这里添加polyfill实现
    console.log('加载MouseEvent.getModifierState polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **accel_support**: `"Accel"` parameter

