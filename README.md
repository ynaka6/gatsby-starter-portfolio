<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsbyを利用したポートフォリオ
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/1d7bf9b9-71a7-44d9-b3eb-d958741f6455/deploy-status)](https://app.netlify.com/sites/gatsby-starter-portfolio-nnn/deploys)

GatsbyJS + TailwindCSSを利用したポートフォリオサイト。GatsbyJSの学習サンプルとして用意したもの入門サイトになります。


[![ポートフォリオ - スクショ](https://github.com/nakanakamu0828/gatsby-starter-portfolio/blob/master/screenshot.png)](https://gatsby-starter-portfolio.nakamu.life/)


## 🚀 Quick start

1.  **gatsby-starter-portfolioプロジェクトの作成.**

    Gatsby CLIを利用して、githubリポジトリからGatsbyJSのプロジェクトを作成します。

    ```sh
    $ gatsby new gatsby-starter-portfolio https://github.com/nakanakamu0828/gatsby-starter-portfolio
    ```

1.  **developmentモードでの起動**

    ```sh
    $ cd gatsby-starter-portfolio
    $ gatsby develop
    ```

1.  **ブラウザにて起動確認!**

    `http://localhost:8000`でブラウザの表示を確認してください。


## 環境変数（.env）
``` bash
$ cat <<EOF > .env
GOOGLE_ANALYTICS_TRACKING_ID=
IFRAMELY_API_KEY=
EOF
```

環境変数名    |説明
--------------|----------------------------
GOOGLE_ANALYTICS_TRACKING_ID |Googleアナリティクス トラッキングID
IFRAMELY_API_KEY  |iframelyのAPI Key - 外部コンテンツのembedに利用


## 利用しているプラグイン/ライブラリ
### GatsbyJSのプラグイン
- [gatsby-plugin-react-helmet](https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/) : react-helmetを利用してmetaタグを生成する
- [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp/) : 画像読み込みでImageSharpノードを生成する
- [gatsby-plugin-sharp](https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/) : 画像圧縮ライブラリの[Sharp](https://github.com/lovell/sharp)を使えるようにする
- [gatsby-plugin-postcss](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/) : PostCSSを利用する為のライブラリ。TailwindCSSを利用するために追加
- [gatsby-plugin-sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) : sitemap.xmlを生成する
- [gatsby-plugin-styled-components](https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components/) : styled-componentを利用する
- [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/) : プロジェクト内に作成されたmarkdownファイルを読み込むAPI
- [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) : markdownを[remark](https://remark.js.org/)を利用してHTMLに変換する
- [gatsby-remark-images](https://www.gatsbyjs.org/packages/gatsby-remark-images/) : markdownの画像を表示する
- [gatsby-remark-external-links](https://www.gatsbyjs.org/packages/gatsby-remark-external-links/) : 外部リンクは target="_blank" rel="nofollow, noopener, noreferrer"を設定する
- [gatsby-remark-autolink-headers](https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/) : 見出しにid属性をつける
- [gatsby-remark-toc](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) : markdownから目次を生成する
- [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/): コードハイライトとして[prismjs](https://prismjs.com/)を利用
- [gatsby-remark-component](https://www.gatsbyjs.org/packages/gatsby-remark-component/) : markdown内でReactのComponentを利用
- [gatsby-plugin-alias-imports](https://www.gatsbyjs.org/packages/gatsby-plugin-alias-imports/) : import宣言のaliasとして利用。

```javascript
import '@components/navbar'
↓
import '../../components/navbar.js'
```

- [gatsby-plugin-netlify](https://www.gatsbyjs.org/packages/gatsby-plugin-netlify/) : Netlifyの_redirecsファイルを生成するのに利用しています
- [gatsby-plugin-env-variables](https://www.gatsbyjs.org/packages/gatsby-plugin-env-variables/) : 環境変数を利用する場合に使います

### それ以外のライブラリ
- [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/) : デザインのベースは[TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/)でマークアップしています
- [react-inview-monitor](https://www.npmjs.com/package/react-inview-monitor) : inview(画面内に要素が表示された)時にアニメーションを行う


## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/nakanakamu0828/gatsby-starter-portfolio)

<!-- AUTO-GENERATED-CONTENT:END -->
