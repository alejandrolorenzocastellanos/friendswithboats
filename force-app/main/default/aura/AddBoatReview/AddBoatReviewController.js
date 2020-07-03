({
    
    doInit : function(component,event,helper) {
        helper.onInit(component,event,helper);
    },
    
    onSave : function(component, event, helper) {
        component.find("service").saveRecord(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
                var result = $A.get("e.force:showToast");
                if(result) {
                    result.setParams({
                        "title": "Saved",
                        "message": "The record was saved."
                    });
                    result.fire();
                } else {
                    alert("The record was saved");
                }            
                var newBoatReviewAddedEvent = component.getEvent("BoatReviewAdded");
                newBoatReviewAddedEvent.fire();
                helper.onInit(component,event,helper);
            } else {
                console.log('Error ocurred: state: ' + saveResult.state +
                            ', error: ' + JSON.stringify(saveResult.error));
            }
        });
    },
    
    onRecordUpdated : function (component, event , helper ) {
        var eventParams = event.getParams();
        if(eventParams.changeType === "CHANGED") {
            var result = $A.get("e.force:showToast");
            if(result) {
                result.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                result.fire();
            } else {
                alert("The record was saved");
            }
        }
    }
})