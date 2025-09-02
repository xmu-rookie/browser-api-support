# Window.scroll.options_behavior_parameter API 兼容性数据

## 基本信息

- **API名称**: `Window.scroll.options_behavior_parameter`
- **标签**: `web-features:scroll-elements`
- **描述**: `options.behavior` parameter

## 使用示例

### 基本用法

```javascript
// Window.scroll.options_behavior_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.scroll.options_behavior_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 36 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 | Safari does not have support for the `smooth` scroll behavior. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 36

### Safari

- **支持版本**: 14
- **注意事项**:
  - Safari does not have support for the `smooth` scroll behavior.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.scroll.options_behavior_parameter是否支持
function isWindowScrollSupported() {
    return 'scroll' in window && typeof window.scroll === 'function';
}

if (isWindowScrollSupported()) {
    console.log('Window.scroll.options_behavior_parameter 支持');
    // 使用Window.scroll.options_behavior_parameter
} else {
    console.log('Window.scroll.options_behavior_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.scroll.options_behavior_parameter polyfill
if (!window.scroll) {
    // 在这里添加polyfill实现
    console.log('加载Window.scroll.options_behavior_parameter polyfill');
}
```

