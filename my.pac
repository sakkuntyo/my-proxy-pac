function FindProxyForURL(url, host) {
    var proxy = "PROXY vm-nordvpn-freecm-mesh:3128";
    if (shExpMatch(url, "https://www.cman.jp/")) {
        return proxy;
    }
if (shExpMatch(url, "https://www.youtube.com/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://youtube.com/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://m.youtube.com/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://googleads.g.doubleclick.net/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://www.google.am/pagead/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://www.google.com/pagead/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://static.doubleclick.net/")) {
        return proxy;
    }
    return 
}
