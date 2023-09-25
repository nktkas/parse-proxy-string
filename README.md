# parse-proxy-string

## Описание
parse-proxy-string — библиотека анализа прокси-строки в объект. 

## Особенности:
- Анализ происходит через RegExp, что позволяет настроить каждый элемент парса под себя
- Работает в NodeJS/браузерах
- Имеет простой и понятный классический JavaScript.

## Установка
```bash
npm install git+https://github.com/nktkas/parse-proxy-string.git
```

## Использование

### Стандартный вариант:
```javascript
const parseProxyString = require('parse-proxy-string');

let proxy = parseProxyString('http://username:password@127.0.0.1:8080');
console.log(proxy);
```

#### Result:
```javascript
{
    protocol: 'http',
    host: '127.0.0.1',
    port: '8080',
    auth: {
        username: 'username',
        password: 'password'
    }
}
```

### С модифицированным парсером:
Допустим у нас специфический прокси который разделяет сектора через "|"

```javascript
const parseProxyString = require('parse-proxy-string');

let proxy = parseProxyString('http|127.0.0.1:8080|username:password', {
    regexSeparatorAfterProtocol: /\|/,
    regexSeparatorIpPortUsernamePassword: /\|/,
});
console.log(proxy);
```

#### Result:
```javascript
{
    protocol: "http",
    host: "127.0.0.1",
    port: "8080",
    auth: {
      username: "username",
      password: "password",
    },
}
```

## Поддерживаемые форматы по умолчанию

```text
host:port

protocol://host:port
protocol:host:port

protocol://host:port@username:password
protocol://host:port:username:password
protocol:host:port@username:password
protocol:host:port:username:password

protocol://username:password@host:port
protocol://username:password:host:port
protocol:username:password@host:port
protocol:username:password:host:port

host:port@username:password
host:port:username:password

username:password@host:port
username:password:host:port
```
