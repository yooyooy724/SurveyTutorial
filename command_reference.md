# コマンドリファレンス

## PostgreSQL関連

### PostgreSQLサービスの起動
```bash
brew services start postgresql@14
```
PostgreSQLサービスを起動します。

### PostgreSQLサービスの停止
```bash
brew services stop postgresql@14
```
PostgreSQLサービスを停止します。

### PostgreSQLサービスの状態確認
```bash
brew services list
```
現在実行中のサービスとその状態を表示します。

## ポート関連

### 特定ポートの使用状況確認
```bash
lsof -i :ポート番号
```
指定したポートを使用しているプロセスを表示します。

### 全ポートの使用状況確認
```bash
lsof -i -P -n | grep LISTEN
```
現在LISTEN状態にある全ポートとそのプロセスを表示します。

### ポートへの接続テスト
```bash
curl -I http://localhost:ポート番号
```
指定したポートにHTTPリクエストを送信し、接続をテストします。

## プロセス管理

### プロセスの強制終了
```bash
kill プロセスID
```
指定したプロセスIDのプロセスを終了します。

### プロセスの詳細情報取得
```bash
ps -p プロセスID -o args=
```
指定したプロセスIDの詳細な実行コマンドを表示します。

## アプリケーション関連

### NestJSアプリケーションの起動
```bash
nest start
```
NestJSアプリケーションを起動します。

### NestJSアプリケーションのビルド
```bash
npm run build
```
NestJSアプリケーションをビルドします。

## その他

### ログイン項目の確認
```bash
osascript -e 'tell application "System Events" to get the name of every login item'
```
システム起動時に自動実行されるアプリケーションの一覧を表示します。
