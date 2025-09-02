# ExtendableEvent.waitUntil API 兼容性数据

## 基本信息

- **API名称**: `ExtendableEvent.waitUntil`
- **MDN文档**: [ExtendableEvent.waitUntil](https://developer.mozilla.org/docs/Web/API/ExtendableEvent/waitUntil)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#dom-extendableevent-waituntil)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ExtendableEvent.waitUntil 使用示例
// 请查阅MDN文档了解具体用法
console.log('ExtendableEvent.waitUntil API');
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
// 检查ExtendableEvent.waitUntil是否支持
function isExtendableEventWaitUntilSupported() {
    return 'waitUntil' in extendableevent && typeof extendableevent.waitUntil === 'function';
}

if (isExtendableEventWaitUntilSupported()) {
    console.log('ExtendableEvent.waitUntil 支持');
    // 使用ExtendableEvent.waitUntil
} else {
    console.log('ExtendableEvent.waitUntil 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ExtendableEvent.waitUntil polyfill
if (!extendableevent.waitUntil) {
    // 在这里添加polyfill实现
    console.log('加载ExtendableEvent.waitUntil polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **async_waitUntil**: `waitUntil` may be called asynchronously

