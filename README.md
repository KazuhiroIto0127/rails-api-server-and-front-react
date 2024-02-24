# rails-api-server-and-front-react
rails-api-serverとfrontendはreact-app

# 参考にした記事（ありがとうございます）
- https://zenn.dev/dsakai07/articles/84ceb379cffbcb


# ことはじめ

Gemfileが下記状態で
```
source "https://rubygems.org"

ruby "3.2.3"

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem "rails", "~> 7.1.3", ">= 7.1.3.2"
```

下記を実行
```
# --no-deps・・・リンクしたサービスを起動しないようにします。今回はdocker-compose.ymlにてdepends_on:　- dbを設定しているため必要になります。
docker compose run --no-deps api rails new . --force --database=mysql --api
```
