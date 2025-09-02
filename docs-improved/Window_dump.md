# Window.dump API 兼容性数据

## 基本信息

- **API名称**: `Window.dump`
- **MDN文档**: [Window.dump](https://developer.mozilla.org/docs/Web/API/Window/dump)

## 使用示例

### 基本用法

```javascript
// Window.dump 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.dump API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 1.5 | By default, this method exists and can be called, but does nothing unless enabled in the browser's p... |
| Firefox Android | 4 | This method exists but has no effect. |
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

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 1.5
- **部分实现**: 是
- **注意事项**:
  - By default, this method exists and can be called, but does nothing unless enabled in the browser's preferences.
- **支持版本**: 1.5
- **需要标志**: 
  - browser.dom.window.dump.enabled: true

### Firefox Android

- **支持版本**: 4
- **部分实现**: 是
- **注意事项**:
  - This method exists but has no effect.

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.dump是否支持
function isWindowDumpSupported() {
    return 'dump' in window && typeof window.dump === 'function';
}

if (isWindowDumpSupported()) {
    console.log('Window.dump 支持');
    // 使用Window.dump
} else {
    console.log('Window.dump 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.dump polyfill
if (!window.dump) {
    // 在这里添加polyfill实现
    console.log('加载Window.dump polyfill');
}
```

