# PluginArray.item API 兼容性数据

## 基本信息

- **API名称**: `PluginArray.item`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#dom-pluginarray-item)

## 使用示例

### 基本用法

```javascript
// PluginArray.item 使用示例
// 请查阅MDN文档了解具体用法
console.log('PluginArray.item API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Since Chrome 59, method parameters are required instead of optional. |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Since Edge 79, method parameters are required instead of optional. |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Since Opera 46, method parameters are required instead of optional. |
| Opera Android | ≤12.1 | Since Opera Android 43, method parameters are required instead of optional. |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Since Chrome 59, method parameters are required instead of optional.

### Edge

- **支持版本**: 12
- **注意事项**:
  - Since Edge 79, method parameters are required instead of optional.

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - Since Opera 46, method parameters are required instead of optional.

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - Since Opera Android 43, method parameters are required instead of optional.

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查PluginArray.item是否支持
function isPluginArrayItemSupported() {
    return 'item' in pluginarray && typeof pluginarray.item === 'function';
}

if (isPluginArrayItemSupported()) {
    console.log('PluginArray.item 支持');
    // 使用PluginArray.item
} else {
    console.log('PluginArray.item 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PluginArray.item polyfill
if (!pluginarray.item) {
    // 在这里添加polyfill实现
    console.log('加载PluginArray.item polyfill');
}
```

