# TextUpdateEvent.updateRangeEnd API 兼容性数据

## 基本信息

- **API名称**: `TextUpdateEvent.updateRangeEnd`
- **MDN文档**: [TextUpdateEvent.updateRangeEnd](https://developer.mozilla.org/docs/Web/API/TextUpdateEvent/updateRangeEnd)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-textupdateevent-updaterangeend)
- **标签**: `web-features:edit-context`

## 使用示例

### 基本用法

```javascript
// TextUpdateEvent.updateRangeEnd 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextUpdateEvent.updateRangeEnd API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 |  |
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

- **支持版本**: 121

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextUpdateEvent.updateRangeEnd是否支持
function isTextUpdateEventUpdateRangeEndSupported() {
    return 'updateRangeEnd' in textupdateevent && typeof textupdateevent.updateRangeEnd === 'function';
}

if (isTextUpdateEventUpdateRangeEndSupported()) {
    console.log('TextUpdateEvent.updateRangeEnd 支持');
    // 使用TextUpdateEvent.updateRangeEnd
} else {
    console.log('TextUpdateEvent.updateRangeEnd 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextUpdateEvent.updateRangeEnd polyfill
if (!textupdateevent.updateRangeEnd) {
    // 在这里添加polyfill实现
    console.log('加载TextUpdateEvent.updateRangeEnd polyfill');
}
```

