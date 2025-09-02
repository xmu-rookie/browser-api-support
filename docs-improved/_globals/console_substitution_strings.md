# console.substitution_strings API 兼容性数据

## 基本信息

- **API名称**: `console.substitution_strings`
- **标签**: `web-features:console`
- **描述**: Substitution strings

## 使用示例

### 基本用法

```javascript
// console.substitution_strings 使用示例
// 请查阅MDN文档了解具体用法
console.log('console.substitution_strings API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | In version 28, if a negative value is passed to %d, it will be rounded down to the closest negative ... |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 | Before Deno 1.4, `%c` is not supported.; `%c` only supports CSS properties `color`, `background-colo... |
| Edge | 12 | Before Edge 79, `%c` is not supported.; Before Edge 79, `%d` outputs a 0 if the specified value isn'... |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | `%c` is not supported.; `%d` outputs a 0 if the specified value isn't a number. |
| Node.js | 0.10.0 |  |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 1.0 | In Samsung Internet 1.5, if a negative value is passed to %d, it will be rounded down to the closest... |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - In version 28, if a negative value is passed to %d, it will be rounded down to the closest negative integer, so -0.1 becomes -1.

### Deno

- **支持版本**: 1.0
- **注意事项**:
  - Before Deno 1.4, `%c` is not supported.
  - `%c` only supports CSS properties `color`, `background-color`, `font-weight`, `font-style`, `text-decoration-color`, and `text-decoration-line`.

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before Edge 79, `%c` is not supported.
  - Before Edge 79, `%d` outputs a 0 if the specified value isn't a number.

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - `%c` is not supported.
  - `%d` outputs a 0 if the specified value isn't a number.

### Node.js

- **支持版本**: 0.10.0

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

### Samsung Internet

- **支持版本**: 1.0
- **注意事项**:
  - In Samsung Internet 1.5, if a negative value is passed to %d, it will be rounded down to the closest negative integer, so -0.1 becomes -1.

## 兼容性检查代码

### 特性检测

```javascript
// 检查console.substitution_strings是否支持
function isconsoleSubstitution_stringsSupported() {
    return 'substitution_strings' in console && typeof console.substitution_strings === 'function';
}

if (isconsoleSubstitution_stringsSupported()) {
    console.log('console.substitution_strings 支持');
    // 使用console.substitution_strings
} else {
    console.log('console.substitution_strings 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// console.substitution_strings polyfill
if (!console.substitution_strings) {
    // 在这里添加polyfill实现
    console.log('加载console.substitution_strings polyfill');
}
```

