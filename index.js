/**
 * Parsing data from a proxy string
 * @param {String} proxy - Proxy string
 * @param {Object} [options] - Change string parsing parameters
 * @param {RegExp} [options.regexProtocol] - RegExp responsible for proxy "protocol" parsing
 * @param {RegExp} [options.regexIp] - RegExp responsible for proxy "ip" parsing
 * @param {RegExp} [options.regexDomain] - RegExp responsible for proxy "domain" parsing
 * @param {RegExp} [options.regexLocalhost] - RegExp responsible for proxy "localhost" parsing
 * @param {RegExp} [options.regexPort] - RegExp responsible for proxy "port" parsing
 * @param {RegExp} [options.regexUsername] - RegExp responsible for proxy "username" parsing
 * @param {RegExp} [options.regexPassword] - RegExp responsible for proxy "password" parsing
 * @param {RegExp} [options.regexSeparatorAfterProtocol] - RegExp responsible for proxy "protocol" section separator
 * @param {RegExp} [options.regexSeparatorIpPort] - RegExp responsible for proxy "ip and port" section separator
 * @param {RegExp} [options.regexSeparatorIpPortUsernamePassword] - RegExp responsible for proxy "ip/port and username/password" section separator
 * @param {RegExp} [options.regexSeparatorUsernamePassword] - RegExp responsible for proxy "username and password" section separator
 * @returns {Object} Parsed proxy string data in the object
 * @example
 * let parsed = parseProxyString('http://username:password@127.0.0.1:8080');
 * console.log(parsed);
 * //Logs: {
 * //  protocol: 'http',
 * //  host: '127.0.0.1',
 * //  port: '8080',
 * //  auth: {
 * //    username: 'username',
 * //    password: 'password'
 * //  }
 * //}
 */
function parseProxyString(proxy, options) {
    if (typeof proxy !== 'string') throw new Error('proxy is not string');
    if (typeof options !== 'object' && typeof options !== 'undefined') throw new Error('options is not object');
    if (options) {
        if (options.regexProtocol && options.regexProtocol.constructor !== RegExp)
            throw new Error('options.regexProtocol is not RegExp');
        if (options.regexIp && options.regexIp.constructor !== RegExp)
            throw new Error('options.regexIp is not RegExp');
        if (options.regexDomain && options.regexDomain.constructor !== RegExp)
            throw new Error('options.regexDomain is not RegExp');
        if (options.regexLocalhost && options.regexLocalhost.constructor !== RegExp)
            throw new Error('options.regexLocalhost is not RegExp');
        if (options.regexPort && options.regexPort.constructor !== RegExp)
            throw new Error('options.regexPort is not RegExp');
        if (options.regexUsername && options.regexUsername.constructor !== RegExp)
            throw new Error('options.regexUsername is not RegExp');
        if (options.regexPassword && options.regexPassword.constructor !== RegExp)
            throw new Error('options.regexPassword is not RegExp');
        if (options.regexSeparatorAfterProtocol && options.regexSeparatorAfterProtocol.constructor !== RegExp)
            throw new Error('options.regexSeparatorAfterProtocol is not RegExp');
        if (options.regexSeparatorIpPort && options.regexSeparatorIpPort.constructor !== RegExp)
            throw new Error('options.regexSeparatorIpPort is not RegExp');
        if (options.regexSeparatorIpPortUsernamePassword && options.regexSeparatorIpPortUsernamePassword.constructor !== RegExp)
            throw new Error('options.regexSeparatorIpPortUsernamePassword is not RegExp');
        if (options.regexSeparatorUsernamePassword && options.regexSeparatorUsernamePassword.constructor !== RegExp)
            throw new Error('options.regexSeparatorUsernamePassword is not RegExp');
    }

    var regexProtocol = options?.regexProtocol?.source
        ?? /(?:http|https|socks|socks4|socks5)/.source;
    var regexIp = options?.regexIp?.source //https://stackoverflow.com/a/36760050
        ?? /(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])/.source;
    var regexDomain = options?.regexDomain?.source //https://stackoverflow.com/a/16491074
        ?? /(?!\-)(?:(?:[a-zA-Z\d][a-zA-Z\d\-]{0,61})?[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}/.source;
    var regexLocalhost = options?.regexLocalhost?.source
        ?? /localhost/.source;
    var regexPort = options?.regexPort //https://stackoverflow.com/a/12968117
        ?? /[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]/.source;
    var regexUsername = options?.regexUsername?.source
        ?? /[^\s]+?/.source;
    var regexPassword = options?.regexPassword?.source
        ?? /[^\s]+?/.source;
    var regexSeparatorAfterProtocol = options?.regexSeparatorAfterProtocol?.source
        ?? /(?::\/\/|:)/.source;
    var regexSeparatorIpPort = options?.regexSeparatorIpPort?.source
        ?? /:/.source;
    var regexSeparatorIpPortUsernamePassword = options?.regexSeparatorIpPortUsernamePassword?.source
        ?? /(?::|@)/.source;
    var regexSeparatorUsernamePassword = options?.regexSeparatorUsernamePassword?.source
        ?? /:/.source;

    /**
     * 127.0.0.1:8080
     * localhost:8080
     * example.com:8080
     * proxy.example.com:8080
     */
    var regex = new RegExp(
        `^` +
        `(${regexIp}|${regexLocalhost}|${regexDomain})` +
        `${regexSeparatorIpPort}` +
        `(${regexPort})` +
        `$`
    );
    var parsedProxy = proxy.match(regex);
    if (parsedProxy) return {
        protocol: null,
        host: parsedProxy[1],
        port: parsedProxy[2],
        auth: {
            username: null,
            password: null
        }
    };

    /**
     * http://127.0.0.1:8080
     * http:127.0.0.1:8080
     * 
     * http://localhost:8080
     * http:localhost:8080
     * 
     * http://example.com:8080
     * http:example.com:8080
     * 
     * http://proxy.example.com:8080
     * http:proxy.example.com:8080
     */
    var regex = new RegExp(
        `^` +
        `(${regexProtocol})` +
        `${regexSeparatorAfterProtocol}` +
        `(${regexIp}|${regexLocalhost}|${regexDomain})` +
        `${regexSeparatorIpPort}` +
        `(${regexPort})` +
        `$`
    );
    var parsedProxy = proxy.match(regex);
    if (parsedProxy) return {
        protocol: parsedProxy[1],
        host: parsedProxy[2],
        port: parsedProxy[3],
        auth: {
            username: null,
            password: null
        }
    };

    /**
     * http://127.0.0.1:8080@username:password
     * http://127.0.0.1:8080:username:password
     * http:127.0.0.1:8080@username:password
     * http:127.0.0.1:8080:username:password
     * 
     * http://localhost:8080@username:password
     * http://localhost:8080:username:password
     * http:localhost:8080@username:password
     * http:localhost:8080:username:password
     * 
     * http://example.com:8080@username:password
     * http://example.com:8080:username:password
     * http:example.com:8080@username:password
     * http:example.com:8080:username:password
     * 
     * http://proxy.example.com:8080@username:password
     * http://proxy.example.com:8080:username:password
     * http:proxy.example.com:8080@username:password
     * http:proxy.example.com:8080:username:password
     */
    var regex = new RegExp(
        `^` +
        `(${regexProtocol})` +
        `${regexSeparatorAfterProtocol}` +
        `(${regexIp}|${regexLocalhost}|${regexDomain})` +
        `${regexSeparatorIpPort}` +
        `(${regexPort})` +
        `${regexSeparatorIpPortUsernamePassword}` +
        `(${regexUsername})` +
        `${regexSeparatorUsernamePassword}` +
        `(${regexPassword})` +
        `$`
    );
    var parsedProxy = proxy.match(regex);
    if (parsedProxy) return {
        protocol: parsedProxy[1],
        host: parsedProxy[2],
        port: parsedProxy[3],
        auth: {
            username: parsedProxy[4],
            password: parsedProxy[5]
        }
    };

    /**
     * http://username:password@127.0.0.1:8080
     * http://username:password:127.0.0.1:8080
     * http:username:password@127.0.0.1:8080
     * http:username:password:127.0.0.1:8080
     * 
     * http://username:password@localhost:8080
     * http://username:password:localhost:8080
     * http:username:password@localhost:8080
     * http:username:password:localhost:8080
     * 
     * http://username:password@example.com:8080
     * http://username:password:example.com:8080
     * http:username:password@example.com:8080
     * http:username:password:example.com:8080
     * 
     * http://username:password@proxy.example.com:8080
     * http://username:password:proxy.example.com:8080
     * http:username:password@proxy.example.com:8080
     * http:username:password:proxy.example.com:8080
     */
    var regex = new RegExp(
        `^` +
        `(${regexProtocol})` +
        `${regexSeparatorAfterProtocol}` +
        `(${regexUsername})` +
        `${regexSeparatorUsernamePassword}` +
        `(${regexPassword})` +
        `${regexSeparatorIpPortUsernamePassword}` +
        `(${regexIp}|${regexLocalhost}|${regexDomain})` +
        `${regexSeparatorIpPort}` +
        `(${regexPort})` +
        `$`
    );
    var parsedProxy = proxy.match(regex);
    if (parsedProxy) return {
        protocol: parsedProxy[1],
        host: parsedProxy[4],
        port: parsedProxy[5],
        auth: {
            username: parsedProxy[2],
            password: parsedProxy[3]
        }
    };

    /**
     * 127.0.0.1:8080@username:password
     * 127.0.0.1:8080:username:password
     * 
     * localhost:8080@username:password
     * localhost:8080:username:password
     * 
     * example.com:8080@username:password
     * example.com:8080:username:password
     * 
     * proxy.example.com:8080@username:password
     * proxy.example.com:8080:username:password
     */
    var regex = new RegExp(
        `^` +
        `(${regexIp}|${regexLocalhost}|${regexDomain})` +
        `${regexSeparatorIpPort}` +
        `(${regexPort})` +
        `${regexSeparatorIpPortUsernamePassword}` +
        `(${regexUsername})` +
        `${regexSeparatorUsernamePassword}` +
        `(${regexPassword})` +
        `$`
    );
    var parsedProxy = proxy.match(regex);
    if (parsedProxy) return {
        protocol: null,
        host: parsedProxy[1],
        port: parsedProxy[2],
        auth: {
            username: parsedProxy[3],
            password: parsedProxy[4]
        }
    };

    /**
     * username:password@127.0.0.1:8080
     * username:password:127.0.0.1:8080
     * 
     * username:password@localhost:8080
     * username:password:localhost:8080
     * 
     * username:password@example.com:8080
     * username:password:example.com:8080
     * 
     * username:password@proxy.example.com:8080
     * username:password:proxy.example.com:8080
     */
    var regex = new RegExp(
        `^` +
        `(${regexUsername})` +
        `${regexSeparatorUsernamePassword}` +
        `(${regexPassword})` +
        `${regexSeparatorIpPortUsernamePassword}` +
        `(${regexIp}|${regexLocalhost}|${regexDomain})` +
        `${regexSeparatorIpPort}` +
        `(${regexPort})` +
        `$`
    );
    var parsedProxy = proxy.match(regex);
    if (parsedProxy) return {
        protocol: null,
        host: parsedProxy[3],
        port: parsedProxy[4],
        auth: {
            username: parsedProxy[1],
            password: parsedProxy[2]
        }
    };

    throw new Error('Unknown proxy string format');
}

module.exports = parseProxyString;