#! /bin/bash

if [ ! -d ".git" ]; then
  echo "'.git' フォルダが見つかりません。git init を実行します..."
  git init
  git branch --move main
  echo "git init が完了しました。"
else
  echo "'.git' フォルダが既に存在します。git init はスキップします。"
fi

URL="https://github.com/asdf-vm/asdf/releases/download/v0.18.0/asdf-v0.18.0-linux-386.tar.gz"
TARFILE="asdf-v0.18.0-linux-386.tar.gz"

if command -v asdf /dev/null 2>&1; then
  echo "asdfはインストール済みです"
else
  echo "asdfはインストールされていません"
  echo "asdfをインストールします"
  curl -LO $URL
  tar xfvz asdf-v0.18.0-linux-386.tar.gz
  sudo cp asdf /usr/local/bin/
  echo '' >> ~/.bashrc
  echo '# asdf setting' >> ~/.bashrc
  echo 'export PATH="${ASDF_DATA_DIR:-$HOME/.asdf}/shims:$PATH"' >> ~/.bashrc
  source ~/.bashrc
  echo "asdfをインストールしました"
  rm asdf*
  echo "asdfでnodejsのプラグインをインストールします"
  asdf plugin add nodejs
  echo "asdfでnodejsをインストールします"
  asdf install nodejs latest:22
  echo "asdfでpnpmのプラグインをインストールします"
  asdf plugin add pnpm
  echo "asdfでpnpmをインストールします"
  asdf install pnpm latest
  echo "asdfでnodejsとpnpmの利用を設定します"
  asdf set -u nodejs latest:22
  asdf set -u pnpm latest
  asdf set nodejs latest:22
  asdf set pnpm latest
  echo "asdfのインストールが完了しました"
  sudo ln -s /home/vscode/.asdf/shims/node /usr/bin/node
  sudo ln -s /home/vscode/.asdf/shims/pnpm /usr/bin/pnpm
  echo "asdfのシンボリックリンクを作成しました"
fi

echo "aptを更新します"
sudo apt update
echo "postgresqlクライアントを取得します"
sudo apt install -y postgresql-client

echo "" >> ~/.bashrc
echo "# pgadmin alias" >> ~/.bashrc
echo "alias pgadmin='psql -h db -U user -d mydatabase'" >> ~/.bashrc
source ~/.bashrc
echo "完了しました"
