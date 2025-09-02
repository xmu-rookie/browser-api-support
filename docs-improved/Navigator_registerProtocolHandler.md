# Navigator.registerProtocolHandler API 兼容性数据

## 基本信息

- **API名称**: `Navigator.registerProtocolHandler`
- **MDN文档**: [Navigator.registerProtocolHandler](https://developer.mozilla.org/docs/Web/API/Navigator/registerProtocolHandler)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/system-state.html#custom-handlers)
- **标签**: `web-features:registerprotocolhandler`

## 使用示例

### 基本用法

```javascript
// Navigator.registerProtocolHandler 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.registerProtocolHandler API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 13 | From Chrome 77, the URL parameter only accepts `http` or `https` URLs. |
| Chrome Android | 不支持 |  |
| Edge | 79 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 11.6 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 13
- **注意事项**:
  - From Chrome 77, the URL parameter only accepts `http` or `https` URLs.

### Chrome Android

- **支持版本**: 不支持

### Edge

- **支持版本**: 79

### Firefox

- **支持版本**: 2

### Node.js

- **支持版本**: 不支持

### Opera

- **支持版本**: 11.6

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.registerProtocolHandler是否支持
function isNavigatorRegisterProtocolHandlerSupported() {
    return 'registerProtocolHandler' in navigator && typeof navigator.registerProtocolHandler === 'function';
}

if (isNavigatorRegisterProtocolHandlerSupported()) {
    console.log('Navigator.registerProtocolHandler 支持');
    // 使用Navigator.registerProtocolHandler
} else {
    console.log('Navigator.registerProtocolHandler 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.registerProtocolHandler polyfill
if (!navigator.registerProtocolHandler) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.registerProtocolHandler polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_context_required**: Secure context required
- **scheme_parameter_bitcoin**: `scheme` parameter supports `bitcoin`
- **scheme_parameter_cabal**: `scheme` parameter supports `cabal`
- **scheme_parameter_dat**: `scheme` parameter supports `dat`
- **scheme_parameter_did**: `scheme` parameter supports `did`
- **scheme_parameter_dweb**: `scheme` parameter supports `dweb`
- **scheme_parameter_ethereum**: `scheme` parameter supports `ethereum`
- **scheme_parameter_ftp**: `scheme` parameter supports `ftp`
- **scheme_parameter_ftps**: `scheme` parameter supports `ftps`
- **scheme_parameter_geo**: `scheme` parameter supports `geo`
- **scheme_parameter_hyper**: `scheme` parameter supports `hyper`
- **scheme_parameter_im**: `scheme` parameter supports `im`
- **scheme_parameter_ipfs**: `scheme` parameter supports `ipfs`
- **scheme_parameter_ipns**: `scheme` parameter supports `ipns`
- **scheme_parameter_irc**: `scheme` parameter supports `irc`
- **scheme_parameter_ircs**: `scheme` parameter supports `ircs`
- **scheme_parameter_magnet**: `scheme` parameter supports `magnet`
- **scheme_parameter_mailto**: `scheme` parameter supports `mailto`
- **scheme_parameter_matrix**: `scheme` parameter supports `matrix`
- **scheme_parameter_mms**: `scheme` parameter supports `mms`
- **scheme_parameter_news**: `scheme` parameter supports `news`
- **scheme_parameter_nntp**: `scheme` parameter supports `nntp`
- **scheme_parameter_openpgp4fpr**: `scheme` parameter supports `openpgp4fpr`
- **scheme_parameter_sftp**: `scheme` parameter supports `sftp`
- **scheme_parameter_sip**: `scheme` parameter supports `sip`
- **scheme_parameter_sms**: `scheme` parameter supports `sms`
- **scheme_parameter_smsto**: `scheme` parameter supports `smsto`
- **scheme_parameter_ssb**: `scheme` parameter supports `ssb`
- **scheme_parameter_ssh**: `scheme` parameter supports `ssh`
- **scheme_parameter_tel**: `scheme` parameter supports `tel`
- **scheme_parameter_urn**: `scheme` parameter supports `urn`
- **scheme_parameter_webcal**: `scheme` parameter supports `webcal`
- **scheme_parameter_wtai**: `scheme` parameter supports `wtai`
- **scheme_parameter_xmpp**: `scheme` parameter supports `xmpp`

