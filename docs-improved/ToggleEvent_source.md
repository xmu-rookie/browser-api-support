# ToggleEvent.source API 兼容性数据

## 基本信息

- **API名称**: `ToggleEvent.source`
- **MDN文档**: [ToggleEvent.source](https://developer.mozilla.org/docs/Web/API/ToggleEvent/source)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-toggleevent-source)
- **标签**: `web-features:popover`

## 使用示例

### 基本用法

```javascript
// ToggleEvent.source 使用示例
// 请查阅MDN文档了解具体用法
console.log('ToggleEvent.source API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 140 |  |
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

- **支持版本**: 140

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ToggleEvent.source是否支持
function isToggleEventSourceSupported() {
    return 'source' in toggleevent && typeof toggleevent.source === 'function';
}

if (isToggleEventSourceSupported()) {
    console.log('ToggleEvent.source 支持');
    // 使用ToggleEvent.source
} else {
    console.log('ToggleEvent.source 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ToggleEvent.source polyfill
if (!toggleevent.source) {
    // 在这里添加polyfill实现
    console.log('加载ToggleEvent.source polyfill');
}
```

