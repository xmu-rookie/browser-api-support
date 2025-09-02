# MediaQueryList.EventTarget_inheritance API 兼容性数据

## 基本信息

- **API名称**: `MediaQueryList.EventTarget_inheritance`
- **标签**: `web-features:matchmedia`
- **描述**: `MediaQueryList` inherits `EventTarget`

## 使用示例

### 基本用法

```javascript
// MediaQueryList.EventTarget_inheritance 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaQueryList.EventTarget_inheritance API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 39 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 39

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 55

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaQueryList.EventTarget_inheritance是否支持
function isMediaQueryListEventTarget_inheritanceSupported() {
    return 'EventTarget_inheritance' in mediaquerylist && typeof mediaquerylist.EventTarget_inheritance === 'function';
}

if (isMediaQueryListEventTarget_inheritanceSupported()) {
    console.log('MediaQueryList.EventTarget_inheritance 支持');
    // 使用MediaQueryList.EventTarget_inheritance
} else {
    console.log('MediaQueryList.EventTarget_inheritance 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaQueryList.EventTarget_inheritance polyfill
if (!mediaquerylist.EventTarget_inheritance) {
    // 在这里添加polyfill实现
    console.log('加载MediaQueryList.EventTarget_inheritance polyfill');
}
```

