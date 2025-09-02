# Translator.destroy API 兼容性数据

## 基本信息

- **API名称**: `Translator.destroy`
- **MDN文档**: [Translator.destroy](https://developer.mozilla.org/docs/Web/API/Translator/destroy)
- **规范文档**: [查看规范](https://webmachinelearning.github.io/writing-assistance-apis/#dom-destroyablemodel-destroy)
- **描述**: `destroy()` instance method

## 使用示例

### 基本用法

```javascript
// Translator.destroy 使用示例
// 请查阅MDN文档了解具体用法
console.log('Translator.destroy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 | Availability may be subject to geographical restrictions. |
| Chrome Android | 不支持 |  |
| Deno | 不支持 |  |
| Edge | 不支持 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 138
- **注意事项**:
  - Availability may be subject to geographical restrictions.

### Chrome Android

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Translator.destroy是否支持
function isTranslatorDestroySupported() {
    return 'destroy' in translator && typeof translator.destroy === 'function';
}

if (isTranslatorDestroySupported()) {
    console.log('Translator.destroy 支持');
    // 使用Translator.destroy
} else {
    console.log('Translator.destroy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Translator.destroy polyfill
if (!translator.destroy) {
    // 在这里添加polyfill实现
    console.log('加载Translator.destroy polyfill');
}
```

