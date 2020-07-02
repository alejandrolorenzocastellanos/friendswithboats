({
  doInit: function(component) {
    var isEnabled = $A.get("e.force:createRecord");
    if (isEnabled) {
      component.set("v.showNew", true);
    }
    var action = component.get("c.getBoats");
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        component.set("v.BoatTypes", response.getReturnValue());
      } else {
        console.log("Error: " + state);
      }
    });
    $A.enqueueAction(action);
  },

  onFormSubmit: function(component, event, helper) {
    var boatTypeId = component.get("v.selectedType");
    console.log(boatTypeId);
    var formSubmit = component.getEvent("FormSubmit");
    formSubmit.setParams({ formData: { boatTypeId: boatTypeId } });
    formSubmit.fire();
  },
    
  clickNew: function(component, event, helper) {
    var boatTypeId = component.get("v.selectedType");
    var createNewBoat = $A.get("e.force:createRecord");
    createNewBoat.setParams({
      entityApiName: "Boat__c"
    });
    if (!boatTypeId == "") {
      createNewBoat.setParams({
        defaultFieldValues: { BoatType__c: boatTypeId }
      });
    }
    createNewBoat.fire();
  }
});