# KeyboardLayoutMap.values API 兼容性数据

## 基本信息

- **API名称**: `KeyboardLayoutMap.values`
- **MDN文档**: [KeyboardLayoutMap.values](https://developer.mozilla.org/docs/Web/API/KeyboardLayoutMap/values)
- **标签**: `web-features:keyboard-map`

## 使用示例

### 基本用法

```javascript
// KeyboardLayoutMap.values 使用示例
// 请查阅MDN文档了解具体用法
console.log('KeyboardLayoutMap.values API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
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

- **支持版本**: 69

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查KeyboardLayoutMap.values是否支持
function isKeyboardLayoutMapValuesSupported() {
    return 'values' in keyboardlayoutmap && typeof keyboardlayoutmap.values === 'function';
}

if (isKeyboardLayoutMapValuesSupported()) {
    console.log('KeyboardLayoutMap.values 支持');
    // 使用KeyboardLayoutMap.values
} else {
    console.log('KeyboardLayoutMap.values 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// KeyboardLayoutMap.values polyfill
if (!keyboardlayoutmap.values) {
    // 在这里添加polyfill实现
    console.log('加载KeyboardLayoutMap.values polyfill');
}
```

