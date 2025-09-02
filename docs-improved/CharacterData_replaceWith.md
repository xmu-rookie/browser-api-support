# CharacterData.replaceWith API 兼容性数据

## 基本信息

- **API名称**: `CharacterData.replaceWith`
- **MDN文档**: [CharacterData.replaceWith](https://developer.mozilla.org/docs/Web/API/CharacterData/replaceWith)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-childnode-replacewith①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// CharacterData.replaceWith 使用示例
// 请查阅MDN文档了解具体用法
console.log('CharacterData.replaceWith API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 39 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 54

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 49

### Opera

- **支持版本**: 39

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查CharacterData.replaceWith是否支持
function isCharacterDataReplaceWithSupported() {
    return 'replaceWith' in characterdata && typeof characterdata.replaceWith === 'function';
}

if (isCharacterDataReplaceWithSupported()) {
    console.log('CharacterData.replaceWith 支持');
    // 使用CharacterData.replaceWith
} else {
    console.log('CharacterData.replaceWith 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CharacterData.replaceWith polyfill
if (!characterdata.replaceWith) {
    // 在这里添加polyfill实现
    console.log('加载CharacterData.replaceWith polyfill');
}
```

