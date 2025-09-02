# CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent API 兼容性数据

## 基本信息

- **API名称**: `CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent`
- **MDN文档**: [CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent](https://developer.mozilla.org/docs/Web/API/CharacterBoundsUpdateEvent/CharacterBoundsUpdateEvent)
- **规范文档**: [查看规范](https://w3c.github.io/edit-context/#dom-characterboundsupdateevent-constructor)
- **标签**: `web-features:edit-context`
- **描述**: `CharacterBoundsUpdateEvent()` constructor

## 使用示例

### 基本用法

```javascript
// CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent API');
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
// 检查CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent是否支持
function isCharacterBoundsUpdateEventCharacterBoundsUpdateEventSupported() {
    return 'CharacterBoundsUpdateEvent' in characterboundsupdateevent && typeof characterboundsupdateevent.CharacterBoundsUpdateEvent === 'function';
}

if (isCharacterBoundsUpdateEventCharacterBoundsUpdateEventSupported()) {
    console.log('CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent 支持');
    // 使用CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent
} else {
    console.log('CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent polyfill
if (!characterboundsupdateevent.CharacterBoundsUpdateEvent) {
    // 在这里添加polyfill实现
    console.log('加载CharacterBoundsUpdateEvent.CharacterBoundsUpdateEvent polyfill');
}
```

