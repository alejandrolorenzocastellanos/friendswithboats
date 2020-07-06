({
    doInit : function(component, event, helper) {
        helper.onInit(component, event, helper);
    },
    onUserInfoClick : function(component, event, helper) {
        var targetSource = event.currentTarget;
        var userid = targetSource.dataset.userid;
        var navEvent = $A.get("e.force:navigateToSObject");
        if (navEvent) {
            navEvent.setParams({
                "recordId": userid,
                "slideDevName": "detail"
            });
            navEvent.fire();
        }
        
    }
})