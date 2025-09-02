# Counter.identifier API 兼容性数据

## 基本信息

- **API名称**: `Counter.identifier`
- **标签**: `web-features:css-object-model-discouraged`

## 使用示例

### 基本用法

```javascript
// Counter.identifier 使用示例
// 请查阅MDN文档了解具体用法
console.log('Counter.identifier API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 40

### Firefox

- **支持版本**: 20
- **移除版本**: 62

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Counter.identifier是否支持
function isCounterIdentifierSupported() {
    return 'identifier' in counter && typeof counter.identifier === 'function';
}

if (isCounterIdentifierSupported()) {
    console.log('Counter.identifier 支持');
    // 使用Counter.identifier
} else {
    console.log('Counter.identifier 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Counter.identifier polyfill
if (!counter.identifier) {
    // 在这里添加polyfill实现
    console.log('加载Counter.identifier polyfill');
}
```

