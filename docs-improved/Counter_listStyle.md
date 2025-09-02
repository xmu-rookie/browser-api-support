# Counter.listStyle API 兼容性数据

## 基本信息

- **API名称**: `Counter.listStyle`
- **标签**: `web-features:css-object-model-discouraged`

## 使用示例

### 基本用法

```javascript
// Counter.listStyle 使用示例
// 请查阅MDN文档了解具体用法
console.log('Counter.listStyle API');
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
// 检查Counter.listStyle是否支持
function isCounterListStyleSupported() {
    return 'listStyle' in counter && typeof counter.listStyle === 'function';
}

if (isCounterListStyleSupported()) {
    console.log('Counter.listStyle 支持');
    // 使用Counter.listStyle
} else {
    console.log('Counter.listStyle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Counter.listStyle polyfill
if (!counter.listStyle) {
    // 在这里添加polyfill实现
    console.log('加载Counter.listStyle polyfill');
}
```

