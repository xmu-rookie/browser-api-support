# Screen.availLeft API 兼容性数据

## 基本信息

- **API名称**: `Screen.availLeft`
- **MDN文档**: [Screen.availLeft](https://developer.mozilla.org/docs/Web/API/ScreenDetailed/availLeft)

## 使用示例

### 基本用法

```javascript
// Screen.availLeft 使用示例
// 请查阅MDN文档了解具体用法
console.log('Screen.availLeft API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Firefox

- **支持版本**: 1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Screen.availLeft是否支持
function isScreenAvailLeftSupported() {
    return 'availLeft' in screen && typeof screen.availLeft === 'function';
}

if (isScreenAvailLeftSupported()) {
    console.log('Screen.availLeft 支持');
    // 使用Screen.availLeft
} else {
    console.log('Screen.availLeft 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Screen.availLeft polyfill
if (!screen.availLeft) {
    // 在这里添加polyfill实现
    console.log('加载Screen.availLeft polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **relative-multi-screen**: Relative to the [Multi-screen origin](https://developer.mozilla.org/docs/Web/API/Window_Management_API/Multi-screen_origin)

