
var OneSignal = window.OneSignal || [];

$.get("/api/oneSignalAppID", function(data, status){
    if(data) {
        initOneSignal(data);
    }
});

function initOneSignal(_appId) {
    OneSignal.push(["init", {
        appId: _appId,
        welcomeNotification: {
            "title": "訂閱成功",
            "message": "感謝你的訂閱 ！",
            // "url": "" /* Leave commented for the notification to not open a window on Chrome and Firefox (on Safari, it opens to your webpage) */
        },
        autoRegister: false,
        notifyButton: {
            enable: true /* Set to false to hide */
        },
        persistNotification: false,
        autoRegister: true,
        notifyButton: {
            enable: true, /* Required to use the notify button */
            size: 'large', /* One of 'small', 'medium', or 'large' */
            prenotify: true, /* Show an icon with 1 unread message for first-time site visitors */
            showCredit: false, /* Hide the OneSignal logo */
            text: {
                'tip.state.unsubscribed': '訂閱通知',
                'tip.state.subscribed': "你已訂閱通知",
                'tip.state.blocked': "你封鎖了通知",
                'message.prenotify': '點擊以訂閱通知',
                'message.action.subscribed': "感謝你的訂閱",
                'message.action.resubscribed': "你已訂閱通知",
                'message.action.unsubscribed': "你將不會再收到任何通知",
                'dialog.main.title': 'Manage Site Notifications',
                'dialog.main.button.subscribe': '訂閱',
                'dialog.main.button.unsubscribe': '取消訂閱',
                'dialog.blocked.title': '解除封鎖通知',
                'dialog.blocked.message': "Follow these instructions to allow notifications:"
            }
        }
    }]);

}
