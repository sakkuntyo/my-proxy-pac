function FindProxyForURL(url, host) {
    var proxy = "PROXY vm-nordvpn-freecm-mesh:3128";
    if (shExpMatch(url, "https://www.cman.jp/")) {
        return proxy;
    }
    if (shExpMatch(url, "https://www.youtube.com/")) {
        return proxy;
    }
    return 
}
