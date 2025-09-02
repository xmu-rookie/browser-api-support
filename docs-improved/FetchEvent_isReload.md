# FetchEvent.isReload API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.isReload`
- **MDN文档**: [FetchEvent.isReload](https://developer.mozilla.org/docs/Web/API/FetchEvent/isReload)

## 使用示例

### 基本用法

```javascript
// FetchEvent.isReload 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchEvent.isReload API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 | May be removed in a future release, see [bug 40487736](https://crbug.com/40487736). |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 27 |  |
| Opera Android | 27 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 40 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40
- **注意事项**:
  - May be removed in a future release, see [bug 40487736](https://crbug.com/40487736).

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44
- **移除版本**: 74

### Opera

- **支持版本**: 27

### Opera Android

- **支持版本**: 27

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 4.0

### WebView Android

- **支持版本**: 40

## 兼容性检查代码

### 特性检测

```javascript
// 检查FetchEvent.isReload是否支持
function isFetchEventIsReloadSupported() {
    return 'isReload' in fetchevent && typeof fetchevent.isReload === 'function';
}

if (isFetchEventIsReloadSupported()) {
    console.log('FetchEvent.isReload 支持');
    // 使用FetchEvent.isReload
} else {
    console.log('FetchEvent.isReload 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchEvent.isReload polyfill
if (!fetchevent.isReload) {
    // 在这里添加polyfill实现
    console.log('加载FetchEvent.isReload polyfill');
}
```

