const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const LiveReloadPlugin = require("webpack-livereload-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
require("dotenv").config(); // .env 파일 로드

module.exports = {
  entry: {
    index: "./src/index.js",
    people_members: "./src/people_members.js",
    people_alumni: "./src/people_alumni.js",
    research: "./src/research.js",
    publication_international_journal: "./src/publication_international_journal.js",
    publication_patent: "./src/publication_patent.js",
    publication_book: "./src/publication_book.js",
    lab_facilities: "./src/lab_facilities.js",
    gallery: "./src/gallery.js",
    notice: "./src/notice.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      // Pug
      {
        test: /\.pug$/,
        use: "pug-loader",
      },
      // Styles
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    // index.html 템플릿을 기반으로 생성된 HTML 파일
    new HtmlWebpackPlugin({
      template: "./src/pages/index.pug",
      filename: "index.html",
      chunks: ["index", "notice"],
    }),
    // 다른 페이지들의 템플릿을 기반으로 생성된 HTML 파일들
    new HtmlWebpackPlugin({
      template: "./src/pages/people_professor.pug",
      filename: "people_professor.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/people_members.pug",
      filename: "people_members.html",
      chunks: ["index", "people_members"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/people_alumni.pug",
      filename: "people_alumni.html",
      chunks: ["index", "people_alumni"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/research.pug",
      filename: "research.html",
      chunks: ["index", "research"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/publication_international_journal.pug",
      filename: "publication_international_journal.html",
      chunks: ["index", "publication_international_journal"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/publication_patent.pug",
      filename: "publication_patent.html",
      chunks: ["index", "publication_patent"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/publication_book.pug",
      filename: "publication_book.html",
      chunks: ["index", "publication_book"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/contact.pug",
      filename: "contact.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/lab_facilities.pug",
      filename: "lab_facilities.html",
      chunks: ["index", "lab_facilities"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/gallery.pug",
      filename: "gallery.html",
      chunks: ["index", "gallery"],
    }),
    // CSS 파일
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
    // 이미지 압축
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: process.env.NODE_ENV !== "production", // 개발 모드에서 플러그인 비활성화
      pngquant: {
        quality: [0.65, 0.9],
      },
    }),
    new LiveReloadPlugin({
      appendScriptTag: true,
    }),
    // `public/` 폴더 복사해서 `dist/`에 넣기
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" }, // `public/`의 모든 파일을 `dist/`로 복사
      ],
    }),
    new webpack.DefinePlugin({
      "process.env.SHEETS_ID": JSON.stringify(process.env.SHEETS_ID),
      "process.env.SHEETS_API_KEY": JSON.stringify(process.env.SHEETS_API_KEY),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }, // 정적 파일 제공
    compress: true, // gzip 압축 사용 여부
    port: 3000, // 개발 서버 포트
    hot: true, // 변경된 내용이 있을 경우, 자동으로 새로고침
    devMiddleware: {
      writeToDisk: true,
    },
    /*
    SPA의 경우, 브라우저에서 직접 주소를 입력했을 때 404 에러가 발생하므로 이를 방지하기 위한 설정
    페이지 추가 시, 해당 페이지에 대한 설정을 추가해야 함
    */
    historyApiFallback: {
      rewrites: [
        { from: /^\/people_professor/, to: "./people_professor.html" },
        { from: /^\/people_members/, to: "./people_members.html" },
        {
          from: /^\/people_alumni/,
          to: "./people_alumni.html",
        },
        { from: /^\/research/, to: "./research.html" },
        {
          from: /^\/publication_international_journal/,
          to: "./publication_international_journal.html",
        },
        {
          from: /^\/publication_patent/,
          to: "./publication_patent.html",
        },
        {
          from: /^\/publication_book/,
          to: "./publication_book.html",
        },
        {
          from: /^\/lab_facilities/,
          to: "./lab_facilities.html",
        },
        {
          from: /^\/gallery/,
          to: "./gallery.html",
        },
        {
          from: /^\/contact/,
          to: "./contact.html",
        },
      ],
    },
  },
  watchOptions: {
    ignored: "./node_modules/",
  },
};
