function FindProxyForURL(url, host) {
    // プロキシの定義
    // 使用するプロキシとポートを記載
    var proxy = "PROXY vm-nordvpn-freecm-mesh:3128";

    // プロキシの適用条件
    // 「www.amazon.com」にアクセスしたときだけプロキシを経由するという条件
    if (shExpMatch(url, "https://www.cman.jp/")) {
        return proxy;
    }
    // それ以外はプロキシを使用しないで直接接続する
    return 
}
