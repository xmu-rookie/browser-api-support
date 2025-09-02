# StaticRange API 兼容性数据

## 基本信息

- **API名称**: `StaticRange`
- **MDN文档**: [StaticRange](https://developer.mozilla.org/docs/Web/API/StaticRange)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-staticrange)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// StaticRange 使用示例
// 请查阅MDN文档了解具体用法
console.log('StaticRange API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 69 | In Firefox, `StaticRange` can currently only be used by browser-internal code or code with enhanced ... |
| Firefox Android | 79 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 69
- **注意事项**:
  - In Firefox, `StaticRange` can currently only be used by browser-internal code or code with enhanced permissions; it is not yet exposed to the web.

### Firefox Android

- **支持版本**: 79

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查StaticRange是否支持
function isStaticRangeSupported() {
    return 'StaticRange' in window || typeof StaticRange !== 'undefined';
}

if (isStaticRangeSupported()) {
    console.log('StaticRange 支持');
    // 使用StaticRange
} else {
    console.log('StaticRange 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// StaticRange polyfill
if (!window.StaticRange) {
    // 在这里添加polyfill实现
    console.log('加载StaticRange polyfill');
}
```

