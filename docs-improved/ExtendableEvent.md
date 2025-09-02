# ExtendableEvent API 兼容性数据

## 基本信息

- **API名称**: `ExtendableEvent`
- **MDN文档**: [ExtendableEvent](https://developer.mozilla.org/docs/Web/API/ExtendableEvent)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#extendableevent-interface)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ExtendableEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('ExtendableEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 24 |  |
| Opera Android | 24 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Opera

- **支持版本**: 24

### Opera Android

- **支持版本**: 24

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ExtendableEvent是否支持
function isExtendableEventSupported() {
    return 'ExtendableEvent' in window || typeof ExtendableEvent !== 'undefined';
}

if (isExtendableEventSupported()) {
    console.log('ExtendableEvent 支持');
    // 使用ExtendableEvent
} else {
    console.log('ExtendableEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ExtendableEvent polyfill
if (!window.ExtendableEvent) {
    // 在这里添加polyfill实现
    console.log('加载ExtendableEvent polyfill');
}
```

