# EXT_disjoint_timer_query API 兼容性数据

## 基本信息

- **API名称**: `EXT_disjoint_timer_query`
- **MDN文档**: [EXT_disjoint_timer_query](https://developer.mozilla.org/docs/Web/API/EXT_disjoint_timer_query)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/EXT_disjoint_timer_query/)
- **标签**: `web-features:ext-disjoint-timer-query`

## 使用示例

### 基本用法

```javascript
// EXT_disjoint_timer_query 使用示例
// 请查阅MDN文档了解具体用法
console.log('EXT_disjoint_timer_query API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 未知 |  |
| Chrome Android | 47 | Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/). |
| Edge | 同主版本 |  |
| Firefox | 51 | Removed due to the [GLitch exploit](https://www.vusec.net/projects/glitch/). |
| Firefox Android | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome


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
// 检查EXT_disjoint_timer_query是否支持
function isEXT_disjoint_timer_querySupported() {
    return 'EXT_disjoint_timer_query' in window || typeof EXT_disjoint_timer_query !== 'undefined';
}

if (isEXT_disjoint_timer_querySupported()) {
    console.log('EXT_disjoint_timer_query 支持');
    // 使用EXT_disjoint_timer_query
} else {
    console.log('EXT_disjoint_timer_query 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// EXT_disjoint_timer_query polyfill
if (!window.EXT_disjoint_timer_query) {
    // 在这里添加polyfill实现
    console.log('加载EXT_disjoint_timer_query polyfill');
}
```

