# AbstractRange API 兼容性数据

## 基本信息

- **API名称**: `AbstractRange`
- **MDN文档**: [AbstractRange](https://developer.mozilla.org/docs/Web/API/AbstractRange)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-abstractrange)
- **标签**: `web-features:selection-api`

## 使用示例

### 基本用法

```javascript
// AbstractRange 使用示例
// 请查阅MDN文档了解具体用法
console.log('AbstractRange API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 90 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 90

### Edge

- **支持版本**: 90
- **支持版本**: 18
- **移除版本**: 79

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AbstractRange是否支持
function isAbstractRangeSupported() {
    return 'AbstractRange' in window || typeof AbstractRange !== 'undefined';
}

if (isAbstractRangeSupported()) {
    console.log('AbstractRange 支持');
    // 使用AbstractRange
} else {
    console.log('AbstractRange 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AbstractRange polyfill
if (!window.AbstractRange) {
    // 在这里添加polyfill实现
    console.log('加载AbstractRange polyfill');
}
```

