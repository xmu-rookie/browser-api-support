# EventTarget.when API 兼容性数据

## 基本信息

- **API名称**: `EventTarget.when`
- **规范文档**: [查看规范](https://wicg.github.io/observable/#dom-eventtarget-when)
- **标签**: `web-features:observable`

## 使用示例

### 基本用法

```javascript
// EventTarget.when 使用示例
// 请查阅MDN文档了解具体用法
console.log('EventTarget.when API');
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
// 检查EventTarget.when是否支持
function isEventTargetWhenSupported() {
    return 'when' in eventtarget && typeof eventtarget.when === 'function';
}

if (isEventTargetWhenSupported()) {
    console.log('EventTarget.when 支持');
    // 使用EventTarget.when
} else {
    console.log('EventTarget.when 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EventTarget.when polyfill
if (!eventtarget.when) {
    // 在这里添加polyfill实现
    console.log('加载EventTarget.when polyfill');
}
```

