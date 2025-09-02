# CharacterBoundsUpdateEvent.rangeEnd API 兼容性数据

## 基本信息

- **API名称**: `CharacterBoundsUpdateEvent.rangeEnd`
- **MDN文档**: [CharacterBoundsUpdateEvent.rangeEnd](https://developer.mozilla.org/docs/Web/API/CharacterBoundsUpdateEvent/rangeEnd)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-characterboundsupdateevent-rangestart)
- **标签**: `web-features:edit-context`

## 使用示例

### 基本用法

```javascript
// CharacterBoundsUpdateEvent.rangeEnd 使用示例
// 请查阅MDN文档了解具体用法
console.log('CharacterBoundsUpdateEvent.rangeEnd API');
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
// 检查CharacterBoundsUpdateEvent.rangeEnd是否支持
function isCharacterBoundsUpdateEventRangeEndSupported() {
    return 'rangeEnd' in characterboundsupdateevent && typeof characterboundsupdateevent.rangeEnd === 'function';
}

if (isCharacterBoundsUpdateEventRangeEndSupported()) {
    console.log('CharacterBoundsUpdateEvent.rangeEnd 支持');
    // 使用CharacterBoundsUpdateEvent.rangeEnd
} else {
    console.log('CharacterBoundsUpdateEvent.rangeEnd 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CharacterBoundsUpdateEvent.rangeEnd polyfill
if (!characterboundsupdateevent.rangeEnd) {
    // 在这里添加polyfill实现
    console.log('加载CharacterBoundsUpdateEvent.rangeEnd polyfill');
}
```

