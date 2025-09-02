# Subscriber.active API 兼容性数据

## 基本信息

- **API名称**: `Subscriber.active`
- **规范文档**: [查看规范](https://wicg.github.io/observable/#dom-subscriber-active)
- **标签**: `web-features:observable`

## 使用示例

### 基本用法

```javascript
// Subscriber.active 使用示例
// 请查阅MDN文档了解具体用法
console.log('Subscriber.active API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 135 |  |
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

- **支持版本**: 135

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Subscriber.active是否支持
function isSubscriberActiveSupported() {
    return 'active' in subscriber && typeof subscriber.active === 'function';
}

if (isSubscriberActiveSupported()) {
    console.log('Subscriber.active 支持');
    // 使用Subscriber.active
} else {
    console.log('Subscriber.active 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Subscriber.active polyfill
if (!subscriber.active) {
    // 在这里添加polyfill实现
    console.log('加载Subscriber.active polyfill');
}
```

