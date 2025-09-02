# ViewTransitionTypeSet.clear API 兼容性数据

## 基本信息

- **API名称**: `ViewTransitionTypeSet.clear`
- **标签**: `web-features:active-view-transition`

## 使用示例

### 基本用法

```javascript
// ViewTransitionTypeSet.clear 使用示例
// 请查阅MDN文档了解具体用法
console.log('ViewTransitionTypeSet.clear API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查ViewTransitionTypeSet.clear是否支持
function isViewTransitionTypeSetClearSupported() {
    return 'clear' in viewtransitiontypeset && typeof viewtransitiontypeset.clear === 'function';
}

if (isViewTransitionTypeSetClearSupported()) {
    console.log('ViewTransitionTypeSet.clear 支持');
    // 使用ViewTransitionTypeSet.clear
} else {
    console.log('ViewTransitionTypeSet.clear 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ViewTransitionTypeSet.clear polyfill
if (!viewtransitiontypeset.clear) {
    // 在这里添加polyfill实现
    console.log('加载ViewTransitionTypeSet.clear polyfill');
}
```

