---
title: "iframelyを利用して外部コンテンツを埋め込もう"
description: "本サイトでは外部コンテンツの読み込みにiframelyというサービスを利用しています。本記事ではiframelyの紹介していきます。"
date: "2019-05-08"
hero: ../../images/about-iframely-hero-image.png
---

## はじめまして

こんにちは、香港に住んでいるWEBデベロッパーのなかむ（[@nakanakamu0828](https://twitter.com/nakanakamu0828)）です。  
今回は外部コンテンツの埋め込みを可能にする**iframely**というサービスを紹介していきます。


## iframelyとは

**iframely**とは、外部サイトのURLをリッチコンテンツとして埋め込む為のクラウドサービスです。
フロントエンド / バックエンド どちらの環境からもアクセスできるようにAPI化、ライブラリ化されています。  
1000リクエスト/月までなら無料です。まずは無料で試してみましょう。  

>  If you're on "Developer" tier and are over 1000 hits/month, you'll get a notification and 24 hours grace period to upgrade before API is disabled.

無料枠 Over後、24時間でアクセス制限かかるみたいです。  
翌月になったら解放されれば個人的な利用はそれほど問題ないのですが・・・

本ブログは、GatsbyJSで構築されているのでReactでの組み込み方法を参考にしています。

<iframely href="https://iframely.com/"></iframely>
  
↑
これもiframelyで組み込んだコンテンツです。


https://iframely.com/embed にてリッチコンテンツが確認できます。  
色々なページを試して見ましょう。


## サンプル
### Github - プロフィール
<iframely href="https://github.com/nakanakamu0828"></iframely>


### Github - リポジトリ
<iframely href="https://github.com/nakanakamu0828/gatsby-starter-portfolio"></iframely>


### Twitter - プロフィール
<iframely href="https://twitter.com/nakanakamu0828"></iframely>


### Youtube - Gatsby JS - The Great Gatsby Bootcamp [Full Tutorial]
<iframely href="https://www.youtube.com/watch?v=8t0vNu2fCCM"></iframely>


### Qiita - Gatsbyプラグイン45選
<iframely href="https://qiita.com/Takumon/items/da8347f81a9f021b637f"></iframely>


## 最後に

皆さんも単純なリンクだけではなく、リッチコンテンツとして外部サイトを表示してみてください！  
その際は、是非**iframely**をご検討ください！！！