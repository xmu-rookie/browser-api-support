# Window.prompt API 兼容性数据

## 基本信息

- **API名称**: `Window.prompt`
- **MDN文档**: [Window.prompt](https://developer.mozilla.org/docs/Web/API/Window/prompt)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-prompt-dev)
- **标签**: `web-features:alerts`

## 使用示例

### 基本用法

```javascript
// Window.prompt 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.prompt API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute ha... |
| Chrome Android | 同主版本 |  |
| Deno | 1.5 |  |
| Edge | 12 |  |
| Firefox | 1 | Firefox strips newline characters from the prompt response; see [bug 1716229](https://bugzil.la/1716... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 | This function has no effect in the Modern UI/Metro version of Internet Explorer for Windows 8. It do... |
| Oculus | 同主版本 |  |
| Opera | 3 | Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has... |
| Opera Android | 10.1 | Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has... |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Starting with Chrome 46, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Deno

- **支持版本**: 1.5

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Firefox strips newline characters from the prompt response; see [bug 1716229](https://bugzil.la/1716229).

### Internet Explorer

- **支持版本**: 4
- **注意事项**:
  - This function has no effect in the Modern UI/Metro version of Internet Explorer for Windows 8. It does not display a prompt to the user, and always returns `undefined`. It is not clear whether this is a bug or intended behavior. Desktop versions of IE do implement this function.

### Opera

- **支持版本**: 3
- **注意事项**:
  - Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - Starting with Opera 33, this method is blocked inside an `<iframe>` unless its sandbox attribute has the value `allow-modals`.

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Window.prompt是否支持
function isWindowPromptSupported() {
    return 'prompt' in window && typeof window.prompt === 'function';
}

if (isWindowPromptSupported()) {
    console.log('Window.prompt 支持');
    // 使用Window.prompt
} else {
    console.log('Window.prompt 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Window.prompt polyfill
if (!window.prompt) {
    // 在这里添加polyfill实现
    console.log('加载Window.prompt polyfill');
}
```

