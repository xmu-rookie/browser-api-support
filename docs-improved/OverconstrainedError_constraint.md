# OverconstrainedError.constraint API 兼容性数据

## 基本信息

- **API名称**: `OverconstrainedError.constraint`
- **MDN文档**: [OverconstrainedError.constraint](https://developer.mozilla.org/docs/Web/API/OverconstrainedError/constraint)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-overconstrainederror-constraint)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// OverconstrainedError.constraint 使用示例
// 请查阅MDN文档了解具体用法
console.log('OverconstrainedError.constraint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 63 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 63

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查OverconstrainedError.constraint是否支持
function isOverconstrainedErrorConstraintSupported() {
    return 'constraint' in overconstrainederror && typeof overconstrainederror.constraint === 'function';
}

if (isOverconstrainedErrorConstraintSupported()) {
    console.log('OverconstrainedError.constraint 支持');
    // 使用OverconstrainedError.constraint
} else {
    console.log('OverconstrainedError.constraint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OverconstrainedError.constraint polyfill
if (!overconstrainederror.constraint) {
    // 在这里添加polyfill实现
    console.log('加载OverconstrainedError.constraint polyfill');
}
```

