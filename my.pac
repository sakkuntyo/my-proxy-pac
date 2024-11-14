function FindProxyForURL(url, host) {
    var proxy = "PROXY vm-nordvpn-freecm-mesh:3128";
    if (shExpMatch(url, "www.cman.jp/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://www.youtube.com/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://m.youtube.com/")) {
        return proxy;
    }
    return 
}
