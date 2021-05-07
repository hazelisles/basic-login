# 簡單登入頁
使用Bootstrap, Express, Handlebars實做基礎登入頁面。

## 專案畫面
<h4> 專案首頁 </h4>
<img align="center" src="https://github.com/hazelisles/basic-login/blob/master/demo.JPG?raw=true" width="750"/>

## 功能描述
* 在登入頁面輸入測試用帳號密碼，可以進入歡迎頁面。
* 若輸入錯誤或未輸入，將顯示錯誤訊息或提示。
* 若點選`Remember Me`，輸入錯誤時，會記錄此次輸入的帳號。
### 測試帳號
| 帳號 | 密碼 |
|-----|------|
|tony@stark.com|iamironman|
|captain@hotmail.com|icandothisallday|
|peter@parker.com|enajyram|
|natasha@gamil.com|*parol#@$!|
|nick@shield.com|password|

## 環境建置與需求
* [Node.js](https://nodejs.org/en/): v14.16.1

## 安裝與執行步驟
1. 打開終端機將專案下載至本地執行
```
git clone https://github.com/hazelisles/basic-login.git
``` 
2. 進入專案資料夾
```
cd basic-login
```
3. 安裝專案需求套件
```
npm install 
```
4. 啟動伺服器，執行專案
```
npm run start
```
終端機顯示 `App now running on http://localhost:3000` 即成功啟動，可至 [http://localhost:3000](http://localhost:3000) 開始使用！

## 開發人員
[Hazel Chu](https://github.com/hazelisles)
