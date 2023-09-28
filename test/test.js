const parseProxyString = require('../index');

describe('null', () => {
    describe('host|port', () => {
        describe('ip', () => {
            test('127.0.0.1:8080', () => {
                expect(parseProxyString('127.0.0.1:8080')).toEqual({
                    protocol: null,
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('localhost', () => {
            test('localhost:8080', () => {
                expect(parseProxyString('localhost:8080')).toEqual({
                    protocol: null,
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('domain', () => {
            test('example.com:8080', () => {
                expect(parseProxyString('example.com:8080')).toEqual({
                    protocol: null,
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('proxy.example.com:8080', () => {
                expect(parseProxyString('proxy.example.com:8080')).toEqual({
                    protocol: null,
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
    });

    describe('host|port|username|password', () => {
        describe('ip', () => {
            test('127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('127.0.0.1:8080@username:password')).toEqual({
                    protocol: null,
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('127.0.0.1:8080:username:password')).toEqual({
                    protocol: null,
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('username:password@127.0.0.1:8080')).toEqual({
                    protocol: null,
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('username:password:127.0.0.1:8080')).toEqual({
                    protocol: null,
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('localhost', () => {
            test('localhost:8080@username:password', () => {
                expect(parseProxyString('localhost:8080@username:password')).toEqual({
                    protocol: null,
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('localhost:8080:username:password', () => {
                expect(parseProxyString('localhost:8080:username:password')).toEqual({
                    protocol: null,
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password@localhost:8080', () => {
                expect(parseProxyString('username:password@localhost:8080')).toEqual({
                    protocol: null,
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password:localhost:8080', () => {
                expect(parseProxyString('username:password:localhost:8080')).toEqual({
                    protocol: null,
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('domain', () => {
            test('example.com:8080@username:password', () => {
                expect(parseProxyString('example.com:8080@username:password')).toEqual({
                    protocol: null,
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('example.com:8080:username:password', () => {
                expect(parseProxyString('example.com:8080:username:password')).toEqual({
                    protocol: null,
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password@example.com:8080', () => {
                expect(parseProxyString('username:password@example.com:8080')).toEqual({
                    protocol: null,
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password:example.com:8080', () => {
                expect(parseProxyString('username:password:example.com:8080')).toEqual({
                    protocol: null,
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('proxy.example.com:8080@username:password')).toEqual({
                    protocol: null,
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('proxy.example.com:8080:username:password')).toEqual({
                    protocol: null,
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('username:password@proxy.example.com:8080')).toEqual({
                    protocol: null,
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('username:password:proxy.example.com:8080')).toEqual({
                    protocol: null,
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
    });
});

describe('http', () => {
    describe('protocol|host|port', () => {
        describe('ip', () => {
            test('http://127.0.0.1:8080', () => {
                expect(parseProxyString('http://127.0.0.1:8080')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('http:127.0.0.1:8080', () => {
                expect(parseProxyString('http:127.0.0.1:8080')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('localhost', () => {
            test('http://localhost:8080', () => {
                expect(parseProxyString('http://localhost:8080')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('http:localhost:8080', () => {
                expect(parseProxyString('http:localhost:8080')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('domain', () => {
            test('http://example.com:8080', () => {
                expect(parseProxyString('http://example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('http:example.com:8080', () => {
                expect(parseProxyString('http:example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('http://proxy.example.com:8080', () => {
                expect(parseProxyString('http://proxy.example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('http:proxy.example.com:8080', () => {
                expect(parseProxyString('http:proxy.example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
    });

    describe('protocol|host|port|username|password', () => {
        describe('ip', () => {
            test('http://127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('http://127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('http://127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('http:127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('http:127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('http://username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('http://username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('http:username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('http:username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'http',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('localhost', () => {
            test('http://localhost:8080@username:password', () => {
                expect(parseProxyString('http://localhost:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://localhost:8080:username:password', () => {
                expect(parseProxyString('http://localhost:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:localhost:8080@username:password', () => {
                expect(parseProxyString('http:localhost:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:localhost:8080:username:password', () => {
                expect(parseProxyString('http:localhost:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password@localhost:8080', () => {
                expect(parseProxyString('http://username:password@localhost:8080')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password:localhost:8080', () => {
                expect(parseProxyString('http://username:password:localhost:8080')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password@localhost:8080', () => {
                expect(parseProxyString('http:username:password@localhost:8080')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password:localhost:8080', () => {
                expect(parseProxyString('http:username:password:localhost:8080')).toEqual({
                    protocol: 'http',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('domain', () => {
            test('http://example.com:8080@username:password', () => {
                expect(parseProxyString('http://example.com:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://example.com:8080:username:password', () => {
                expect(parseProxyString('http://example.com:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:example.com:8080@username:password', () => {
                expect(parseProxyString('http:example.com:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:example.com:8080:username:password', () => {
                expect(parseProxyString('http:example.com:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password@example.com:8080', () => {
                expect(parseProxyString('http://username:password@example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password:example.com:8080', () => {
                expect(parseProxyString('http://username:password:example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password@example.com:8080', () => {
                expect(parseProxyString('http:username:password@example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password:example.com:8080', () => {
                expect(parseProxyString('http:username:password:example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('http://proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('http://proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('http://proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('http:proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('http:proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('http://username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http://username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('http://username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('http:username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('http:username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('http:username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'http',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
    });
});

describe('https', () => {
    describe('protocol|host|port', () => {
        describe('ip', () => {
            test('https://127.0.0.1:8080', () => {
                expect(parseProxyString('https://127.0.0.1:8080')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('https:127.0.0.1:8080', () => {
                expect(parseProxyString('https:127.0.0.1:8080')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('localhost', () => {
            test('https://localhost:8080', () => {
                expect(parseProxyString('https://localhost:8080')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('https:localhost:8080', () => {
                expect(parseProxyString('https:localhost:8080')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('domain', () => {
            test('https://example.com:8080', () => {
                expect(parseProxyString('https://example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('https:example.com:8080', () => {
                expect(parseProxyString('https:example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('https://proxy.example.com:8080', () => {
                expect(parseProxyString('https://proxy.example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('https:proxy.example.com:8080', () => {
                expect(parseProxyString('https:proxy.example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
    });

    describe('protocol|host|port|username|password', () => {
        describe('ip', () => {
            test('https://127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('https://127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('https://127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('https:127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('https:127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('https://username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('https://username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('https:username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('https:username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'https',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('localhost', () => {
            test('https://localhost:8080@username:password', () => {
                expect(parseProxyString('https://localhost:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://localhost:8080:username:password', () => {
                expect(parseProxyString('https://localhost:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:localhost:8080@username:password', () => {
                expect(parseProxyString('https:localhost:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:localhost:8080:username:password', () => {
                expect(parseProxyString('https:localhost:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password@localhost:8080', () => {
                expect(parseProxyString('https://username:password@localhost:8080')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password:localhost:8080', () => {
                expect(parseProxyString('https://username:password:localhost:8080')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password@localhost:8080', () => {
                expect(parseProxyString('https:username:password@localhost:8080')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password:localhost:8080', () => {
                expect(parseProxyString('https:username:password:localhost:8080')).toEqual({
                    protocol: 'https',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('domain', () => {
            test('https://example.com:8080@username:password', () => {
                expect(parseProxyString('https://example.com:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://example.com:8080:username:password', () => {
                expect(parseProxyString('https://example.com:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:example.com:8080@username:password', () => {
                expect(parseProxyString('https:example.com:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:example.com:8080:username:password', () => {
                expect(parseProxyString('https:example.com:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password@example.com:8080', () => {
                expect(parseProxyString('https://username:password@example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password:example.com:8080', () => {
                expect(parseProxyString('https://username:password:example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password@example.com:8080', () => {
                expect(parseProxyString('https:username:password@example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password:example.com:8080', () => {
                expect(parseProxyString('https:username:password:example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('https://proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('https://proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('https://proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('https:proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('https:proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('https://username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https://username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('https://username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('https:username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('https:username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('https:username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'https',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
    });
});

describe('socks', () => {
    describe('protocol|host|port', () => {
        describe('ip', () => {
            test('socks://127.0.0.1:8080', () => {
                expect(parseProxyString('socks://127.0.0.1:8080')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks:127.0.0.1:8080', () => {
                expect(parseProxyString('socks:127.0.0.1:8080')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('localhost', () => {
            test('socks://localhost:8080', () => {
                expect(parseProxyString('socks://localhost:8080')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks:localhost:8080', () => {
                expect(parseProxyString('socks:localhost:8080')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('domain', () => {
            test('socks://example.com:8080', () => {
                expect(parseProxyString('socks://example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks:example.com:8080', () => {
                expect(parseProxyString('socks:example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('socks://proxy.example.com:8080', () => {
                expect(parseProxyString('socks://proxy.example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks:proxy.example.com:8080', () => {
                expect(parseProxyString('socks:proxy.example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
    });

    describe('protocol|host|port|username|password', () => {
        describe('ip', () => {
            test('socks://127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('socks://127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('socks://127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('socks:127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('socks:127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('socks://username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('socks://username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('socks:username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('socks:username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'socks',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('localhost', () => {
            test('socks://localhost:8080@username:password', () => {
                expect(parseProxyString('socks://localhost:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://localhost:8080:username:password', () => {
                expect(parseProxyString('socks://localhost:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:localhost:8080@username:password', () => {
                expect(parseProxyString('socks:localhost:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:localhost:8080:username:password', () => {
                expect(parseProxyString('socks:localhost:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password@localhost:8080', () => {
                expect(parseProxyString('socks://username:password@localhost:8080')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password:localhost:8080', () => {
                expect(parseProxyString('socks://username:password:localhost:8080')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password@localhost:8080', () => {
                expect(parseProxyString('socks:username:password@localhost:8080')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password:localhost:8080', () => {
                expect(parseProxyString('socks:username:password:localhost:8080')).toEqual({
                    protocol: 'socks',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('domain', () => {
            test('socks://example.com:8080@username:password', () => {
                expect(parseProxyString('socks://example.com:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://example.com:8080:username:password', () => {
                expect(parseProxyString('socks://example.com:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:example.com:8080@username:password', () => {
                expect(parseProxyString('socks:example.com:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:example.com:8080:username:password', () => {
                expect(parseProxyString('socks:example.com:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password@example.com:8080', () => {
                expect(parseProxyString('socks://username:password@example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password:example.com:8080', () => {
                expect(parseProxyString('socks://username:password:example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password@example.com:8080', () => {
                expect(parseProxyString('socks:username:password@example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password:example.com:8080', () => {
                expect(parseProxyString('socks:username:password:example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('socks://proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('socks://proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('socks://proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('socks:proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('socks:proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('socks://username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks://username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('socks://username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('socks:username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks:username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('socks:username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'socks',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
    });
});

describe('socks4', () => {
    describe('protocol|host|port', () => {
        describe('ip', () => {
            test('socks4://127.0.0.1:8080', () => {
                expect(parseProxyString('socks4://127.0.0.1:8080')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks4:127.0.0.1:8080', () => {
                expect(parseProxyString('socks4:127.0.0.1:8080')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('localhost', () => {
            test('socks4://localhost:8080', () => {
                expect(parseProxyString('socks4://localhost:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks4:localhost:8080', () => {
                expect(parseProxyString('socks4:localhost:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('domain', () => {
            test('socks4://example.com:8080', () => {
                expect(parseProxyString('socks4://example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks4:example.com:8080', () => {
                expect(parseProxyString('socks4:example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('socks4://proxy.example.com:8080', () => {
                expect(parseProxyString('socks4://proxy.example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks4:proxy.example.com:8080', () => {
                expect(parseProxyString('socks4:proxy.example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
    });

    describe('protocol|host|port|username|password', () => {
        describe('ip', () => {
            test('socks4://127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('socks4://127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('socks4://127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('socks4:127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('socks4:127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('socks4://username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('socks4://username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('socks4:username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('socks4:username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'socks4',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('localhost', () => {
            test('socks4://localhost:8080@username:password', () => {
                expect(parseProxyString('socks4://localhost:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://localhost:8080:username:password', () => {
                expect(parseProxyString('socks4://localhost:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:localhost:8080@username:password', () => {
                expect(parseProxyString('socks4:localhost:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:localhost:8080:username:password', () => {
                expect(parseProxyString('socks4:localhost:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password@localhost:8080', () => {
                expect(parseProxyString('socks4://username:password@localhost:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password:localhost:8080', () => {
                expect(parseProxyString('socks4://username:password:localhost:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password@localhost:8080', () => {
                expect(parseProxyString('socks4:username:password@localhost:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password:localhost:8080', () => {
                expect(parseProxyString('socks4:username:password:localhost:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('domain', () => {
            test('socks4://example.com:8080@username:password', () => {
                expect(parseProxyString('socks4://example.com:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://example.com:8080:username:password', () => {
                expect(parseProxyString('socks4://example.com:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:example.com:8080@username:password', () => {
                expect(parseProxyString('socks4:example.com:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:example.com:8080:username:password', () => {
                expect(parseProxyString('socks4:example.com:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password@example.com:8080', () => {
                expect(parseProxyString('socks4://username:password@example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password:example.com:8080', () => {
                expect(parseProxyString('socks4://username:password:example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password@example.com:8080', () => {
                expect(parseProxyString('socks4:username:password@example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password:example.com:8080', () => {
                expect(parseProxyString('socks4:username:password:example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('socks4://proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('socks4://proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('socks4://proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('socks4:proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('socks4:proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('socks4://username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4://username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('socks4://username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('socks4:username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks4:username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('socks4:username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'socks4',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
    });
});

describe('socks5', () => {
    describe('protocol|host|port', () => {
        describe('ip', () => {
            test('socks5://127.0.0.1:8080', () => {
                expect(parseProxyString('socks5://127.0.0.1:8080')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks5:127.0.0.1:8080', () => {
                expect(parseProxyString('socks5:127.0.0.1:8080')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('localhost', () => {
            test('socks5://localhost:8080', () => {
                expect(parseProxyString('socks5://localhost:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks5:localhost:8080', () => {
                expect(parseProxyString('socks5:localhost:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('domain', () => {
            test('socks5://example.com:8080', () => {
                expect(parseProxyString('socks5://example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks5:example.com:8080', () => {
                expect(parseProxyString('socks5:example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('socks5://proxy.example.com:8080', () => {
                expect(parseProxyString('socks5://proxy.example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
            test('socks5:proxy.example.com:8080', () => {
                expect(parseProxyString('socks5:proxy.example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: null,
                        password: null
                    }
                });
            });
        });
    });

    describe('protocol|host|port|username|password', () => {
        describe('ip', () => {
            test('socks5://127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('socks5://127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('socks5://127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:127.0.0.1:8080@username:password', () => {
                expect(parseProxyString('socks5:127.0.0.1:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:127.0.0.1:8080:username:password', () => {
                expect(parseProxyString('socks5:127.0.0.1:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });

            test('socks5://username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('socks5://username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('socks5://username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password@127.0.0.1:8080', () => {
                expect(parseProxyString('socks5:username:password@127.0.0.1:8080')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password:127.0.0.1:8080', () => {
                expect(parseProxyString('socks5:username:password:127.0.0.1:8080')).toEqual({
                    protocol: 'socks5',
                    host: '127.0.0.1',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('localhost', () => {
            test('socks5://localhost:8080@username:password', () => {
                expect(parseProxyString('socks5://localhost:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://localhost:8080:username:password', () => {
                expect(parseProxyString('socks5://localhost:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:localhost:8080@username:password', () => {
                expect(parseProxyString('socks5:localhost:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:localhost:8080:username:password', () => {
                expect(parseProxyString('socks5:localhost:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password@localhost:8080', () => {
                expect(parseProxyString('socks5://username:password@localhost:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password:localhost:8080', () => {
                expect(parseProxyString('socks5://username:password:localhost:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password@localhost:8080', () => {
                expect(parseProxyString('socks5:username:password@localhost:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password:localhost:8080', () => {
                expect(parseProxyString('socks5:username:password:localhost:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'localhost',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('domain', () => {
            test('socks5://example.com:8080@username:password', () => {
                expect(parseProxyString('socks5://example.com:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://example.com:8080:username:password', () => {
                expect(parseProxyString('socks5://example.com:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:example.com:8080@username:password', () => {
                expect(parseProxyString('socks5:example.com:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:example.com:8080:username:password', () => {
                expect(parseProxyString('socks5:example.com:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password@example.com:8080', () => {
                expect(parseProxyString('socks5://username:password@example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password:example.com:8080', () => {
                expect(parseProxyString('socks5://username:password:example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password@example.com:8080', () => {
                expect(parseProxyString('socks5:username:password@example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password:example.com:8080', () => {
                expect(parseProxyString('socks5:username:password:example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
        describe('subdomain', () => {
            test('socks5://proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('socks5://proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('socks5://proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:proxy.example.com:8080@username:password', () => {
                expect(parseProxyString('socks5:proxy.example.com:8080@username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:proxy.example.com:8080:username:password', () => {
                expect(parseProxyString('socks5:proxy.example.com:8080:username:password')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('socks5://username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5://username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('socks5://username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password@proxy.example.com:8080', () => {
                expect(parseProxyString('socks5:username:password@proxy.example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
            test('socks5:username:password:proxy.example.com:8080', () => {
                expect(parseProxyString('socks5:username:password:proxy.example.com:8080')).toEqual({
                    protocol: 'socks5',
                    host: 'proxy.example.com',
                    port: 8080,
                    auth: {
                        username: 'username',
                        password: 'password'
                    }
                });
            });
        });
    });
});