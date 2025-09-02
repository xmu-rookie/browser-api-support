# EXT_disjoint_timer_query.getQueryObjectEXT API 兼容性数据

## 基本信息

- **API名称**: `EXT_disjoint_timer_query.getQueryObjectEXT`
- **MDN文档**: [EXT_disjoint_timer_query.getQueryObjectEXT](https://developer.mozilla.org/docs/Web/API/EXT_disjoint_timer_query/getQueryObjectEXT)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_disjoint_timer_query/)
- **标签**: `web-features:ext-disjoint-timer-query`

## 使用示例

### 基本用法

```javascript
// EXT_disjoint_timer_query.getQueryObjectEXT 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_disjoint_timer_query.getQueryObjectEXT API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 70 | Only supported on macOS. |
| Chrome Android | 47 | Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/). |
| Edge | 同主版本 |  |
| Firefox | 51 | Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/). |
| Firefox Android | 不支持 |  |
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

- **支持版本**: 70
- **部分实现**: 是
- **注意事项**:
  - Only supported on macOS.
- **支持版本**: 47
- **移除版本**: 65
- **注意事项**:
  - Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/).

### Chrome Android

- **支持版本**: 47
- **移除版本**: 65
- **注意事项**:
  - Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/).

### Firefox

- **支持版本**: 51
- **移除版本**: 59
- **注意事项**:
  - Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/).

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查EXT_disjoint_timer_query.getQueryObjectEXT是否支持
function isEXT_disjoint_timer_queryGetQueryObjectEXTSupported() {
    return 'getQueryObjectEXT' in ext_disjoint_timer_query && typeof ext_disjoint_timer_query.getQueryObjectEXT === 'function';
}

if (isEXT_disjoint_timer_queryGetQueryObjectEXTSupported()) {
    console.log('EXT_disjoint_timer_query.getQueryObjectEXT 支持');
    // 使用EXT_disjoint_timer_query.getQueryObjectEXT
} else {
    console.log('EXT_disjoint_timer_query.getQueryObjectEXT 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_disjoint_timer_query.getQueryObjectEXT polyfill
if (!ext_disjoint_timer_query.getQueryObjectEXT) {
    // 在这里添加polyfill实现
    console.log('加载EXT_disjoint_timer_query.getQueryObjectEXT polyfill');
}
```

