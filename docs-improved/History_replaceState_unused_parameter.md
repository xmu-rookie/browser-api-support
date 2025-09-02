# History.replaceState.unused_parameter API 兼容性数据

## 基本信息

- **API名称**: `History.replaceState.unused_parameter`
- **描述**: Whether the `unused` parameter is used

## 使用示例

### 基本用法

```javascript
// History.replaceState.unused_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('History.replaceState.unused_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 | This feature may be removed, see [bug 223190](https://webkit.org/b/223190). |
| Safari iOS | 4 | This feature may be removed, see [bug 223190](https://webkit.org/b/223190). |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 5
- **注意事项**:
  - This feature may be removed, see [bug 223190](https://webkit.org/b/223190).

### Safari iOS

- **支持版本**: 4
- **注意事项**:
  - This feature may be removed, see [bug 223190](https://webkit.org/b/223190).

## 兼容性检查代码

### 特性检测

```javascript
// 检查History.replaceState.unused_parameter是否支持
function isHistoryReplaceStateSupported() {
    return 'replaceState' in history && typeof history.replaceState === 'function';
}

if (isHistoryReplaceStateSupported()) {
    console.log('History.replaceState.unused_parameter 支持');
    // 使用History.replaceState.unused_parameter
} else {
    console.log('History.replaceState.unused_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// History.replaceState.unused_parameter polyfill
if (!history.replaceState) {
    // 在这里添加polyfill实现
    console.log('加载History.replaceState.unused_parameter polyfill');
}
```

