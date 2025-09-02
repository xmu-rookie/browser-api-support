# MutationEvent.attrName API 兼容性数据

## 基本信息

- **API名称**: `MutationEvent.attrName`
- **MDN文档**: [MutationEvent.attrName](https://developer.mozilla.org/docs/Web/API/MutationEvent/attrName)
- **标签**: `web-features:mutation-events`

## 使用示例

### 基本用法

```javascript
// MutationEvent.attrName 使用示例
// 请查阅MDN文档了解具体用法
console.log('MutationEvent.attrName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 127

### Edge

- **支持版本**: 12
- **移除版本**: 127

### Firefox

- **支持版本**: 1
- **移除版本**: 140

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1
- **移除版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查MutationEvent.attrName是否支持
function isMutationEventAttrNameSupported() {
    return 'attrName' in mutationevent && typeof mutationevent.attrName === 'function';
}

if (isMutationEventAttrNameSupported()) {
    console.log('MutationEvent.attrName 支持');
    // 使用MutationEvent.attrName
} else {
    console.log('MutationEvent.attrName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MutationEvent.attrName polyfill
if (!mutationevent.attrName) {
    // 在这里添加polyfill实现
    console.log('加载MutationEvent.attrName polyfill');
}
```

