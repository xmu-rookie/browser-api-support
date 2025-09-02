# console.dir_static.options_colors_parameter API 兼容性数据

## 基本信息

- **API名称**: `console.dir_static.options_colors_parameter`
- **描述**: `options.colors` parameter

## 使用示例

### 基本用法

```javascript
// console.dir_static.options_colors_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.dir_static.options_colors_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.4 |  |
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 0.12.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.4

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 0.12.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.dir_static.options_colors_parameter是否支持
function isconsoleDir_staticSupported() {
    return 'dir_static' in console && typeof console.dir_static === 'function';
}

if (isconsoleDir_staticSupported()) {
    console.log('console.dir_static.options_colors_parameter 支持');
    // 使用console.dir_static.options_colors_parameter
} else {
    console.log('console.dir_static.options_colors_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.dir_static.options_colors_parameter polyfill
if (!console.dir_static) {
    // 在这里添加polyfill实现
    console.log('加载console.dir_static.options_colors_parameter polyfill');
}
```

