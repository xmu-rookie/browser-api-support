# CustomStateSet.entries API 兼容性数据

## 基本信息

- **API名称**: `CustomStateSet.entries`
- **MDN文档**: [CustomStateSet.entries](https://developer.mozilla.org/docs/Web/API/CustomStateSet/entries)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#custom-state-pseudo-class)
- **标签**: `web-features:state`

## 使用示例

### 基本用法

```javascript
// CustomStateSet.entries 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomStateSet.entries API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 126 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 90

### Firefox

- **支持版本**: 126

### Safari

- **支持版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomStateSet.entries是否支持
function isCustomStateSetEntriesSupported() {
    return 'entries' in customstateset && typeof customstateset.entries === 'function';
}

if (isCustomStateSetEntriesSupported()) {
    console.log('CustomStateSet.entries 支持');
    // 使用CustomStateSet.entries
} else {
    console.log('CustomStateSet.entries 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomStateSet.entries polyfill
if (!customstateset.entries) {
    // 在这里添加polyfill实现
    console.log('加载CustomStateSet.entries polyfill');
}
```

