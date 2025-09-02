# TouchList.item API 兼容性数据

## 基本信息

- **API名称**: `TouchList.item`
- **MDN文档**: [TouchList.item](https://developer.mozilla.org/docs/Web/API/TouchList/item)
- **规范文档**: [查看规范](https://w3c.github.io/touch-events/#dom-touchlist-item)
- **标签**: `web-features:touch-events`

## 使用示例

### 基本用法

```javascript
// TouchList.item 使用示例
// 请查阅MDN文档了解具体用法
console.log('TouchList.item API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 18 |  |
| Chrome Android | 同主版本 |  |
| Edge | ≤18 |  |
| Firefox | 52 | This interface is only exposed if a touch input device is detected. |
| Firefox Android | 6 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 2 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 18

### Edge

- **支持版本**: ≤18

### Firefox

- **支持版本**: 52
- **部分实现**: 是
- **注意事项**:
  - This interface is only exposed if a touch input device is detected.
- **支持版本**: 18
- **移除版本**: 24
- **注意事项**:
  - Removed in [bug 888304](https://bugzil.la/888304) due to web compatibility issues.

### Firefox Android

- **支持版本**: 6

### Safari

- **支持版本**: 不支持

### Safari iOS

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查TouchList.item是否支持
function isTouchListItemSupported() {
    return 'item' in touchlist && typeof touchlist.item === 'function';
}

if (isTouchListItemSupported()) {
    console.log('TouchList.item 支持');
    // 使用TouchList.item
} else {
    console.log('TouchList.item 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TouchList.item polyfill
if (!touchlist.item) {
    // 在这里添加polyfill实现
    console.log('加载TouchList.item polyfill');
}
```

