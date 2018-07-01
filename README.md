# 環境
### STG (測試)

- IP : 140.123.174.237
- Domain : studio.mis.ccu.edu.tw
- 主機位址 : R418
- 系統 : windows 10
- Windows 帳密 rbai / !QAZmissa2wsx 
- Jenkins : http://studio.mis.ccu.edu.tw:8080/
- Jenkins 帳號 admin or rbai 密碼: !QAZmissa2wsx  (rbai 權限只有觸發job)
- 網路架構 : 主機上層有接一台 wifi
https://studio.mis.ccu.edu.tw:7788 遠端設定那台 wifi 帳號：密碼：通常是確認 418 教室有沒有供電

### Prod (正式)
- IP : 140.123.174.7
- Domain : mis.ccu.edu.tw
- 系統 : windows server 2008
- Windows 帳密 Administrator / @QWEdcxzas
- Jenkins : http://www.mis.ccu.edu.tw:8080/
- Jenkins 帳號 admin or MiStudioRbai 密碼: !QAZmissa2wsx  (MiStudioRbai 權限只有觸發job) 

# Jenkins
- 自動部署
當程式碼被 commit 到 GitLab 的 Repo 時 Jenkins 會自動 pull 最新的下來，並 build。
    > ex: 當 commit 到 rbai 的 repo 時 `STG/Prod` 的 Jenkins 會 pull 下來 並 build，所以 `STG/Prod` 的網頁就會是最新的 commit 版本。
- 跑 Schedule
可定期跑 windows powershell script 等等, 現在主要是拿來跑備份用 

點選某個專案後按`組態`就可以看該專案`何時`會被觸發會`做什麼事`

# 帳號

1. ### Google
    account : ccumissa
    PW : !QAZmissa2wsx
    > 善用 Chrome 使用者登入 （右上角）來新增一個使用者並登入以上帳號來同步書籤、密碼、GitHub... 平時使用在切回個人帳號

2. ### GitHub
    account : MiStudioRbai
    PW : !QAZmissa2wsx
    > 原本使用 GitHub 來當作 Repo 後來改用 GitLab 現在這帳號唯一用途是用來登入 Auth0 (見第 4 點)

3. ### GitLab
    account : MiStudioRbai
    PW : !QAZmissa2wsx
    > 此帳號為所有 Project 的 Owner 
    若你是開發者請自建個人帳號，再使用這個 Owner ( MiStudioRbai ) 帳號邀請自己到 mistudio Group
    登入 Owner ( MiStudioRbai ) 點選
    `Groups` > `mistudio` > `members` > `add new` 輸入自己的帳號
    右邊記得把 Guest 改成 `Developer`

    #### Projects

    1. rbai

        > 所有程式碼所在處，任何 commit 都到這裡 commit 完成後就會`自動`部署到 STG 環境
    2. Prod_rbai

        > Prod 的程式碼，在 STG 測試後無誤後，去 STG 的 Jenkins 點選 prod_build 就會 commit 到此 project, Prod 就會更新到跟 STG 相同的版本
    3. Document_rbai

        > Prod 的 Jenkins `每週`將 上傳到 Prod 文件 (https://www.mis.ccu.edu.tw/document ）備份到這個 repo
    4. Mongo_rbai

        > Prod 的 Jenkins `每天`將 Prod 的 DB 備份到這個 repo

 4. ### Auth0

    用 GitHub 帳號登入（見第 2 點)
    > 程式方面為處理 Authentication 包括前端後端。使用者方面用途為管理後台 User，若需要增加新的後台點選 `Users` > `CREATE USER`  密碼先隨便給1234 到時請該User 登入時再點 `Don't remember your password?` 利用email 從設密碼

5. ### OneSignal
   用 Google 帳號登入（見第 1 點)
   > 程式方面為處理所有 Push Notification ( chrome 右下角的彈跳通知 ) 目前只有“公告”會發送彈跳通知。

6. ### Jenkins
    #### STG/Prod
    account : MiStudioRbai
    PW : !QAZmissa2wsx

# MongoDB
- non-SQL 的資料庫, 用 `json` 型態去存取
- GUI 工具 [MongoDB compass](https://www.mongodb.com/products/compass)
- account : MiStudioRbai / PW : !QAZmissa2wsx

# 系統架構

### 前端
- Angular 4
- 分為前台/後台
- 所有前端的東西都在 `public`，主程式碼在 `public/angular/src` 裡，前台在`app`，後台在`app-admin`裡。

### 後端
- NodeJs, MongoDB
- 分為分為前台/後台的後端
- 所有後端主程式碼皆在 `routes` 裡，前台的後端在 `client`，後台的後端在 `admin` 裡。