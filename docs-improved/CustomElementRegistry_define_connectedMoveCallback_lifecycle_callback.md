# CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback API 兼容性数据

## 基本信息

- **API名称**: `CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#preserving-custom-element-state-when-moved)
- **描述**: `connectedMoveCallback()` lifecycle callback

## 使用示例

### 基本用法

```javascript
// CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback 使用示例
// 请查阅MDN文档了解具体用法
console.log('CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 133

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback是否支持
function isCustomElementRegistryDefineSupported() {
    return 'define' in customelementregistry && typeof customelementregistry.define === 'function';
}

if (isCustomElementRegistryDefineSupported()) {
    console.log('CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback 支持');
    // 使用CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback
} else {
    console.log('CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback polyfill
if (!customelementregistry.define) {
    // 在这里添加polyfill实现
    console.log('加载CustomElementRegistry.define.connectedMoveCallback_lifecycle_callback polyfill');
}
```

