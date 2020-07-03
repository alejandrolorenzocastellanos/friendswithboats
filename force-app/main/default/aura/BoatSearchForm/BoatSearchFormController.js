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
    var formSubmit = component.getEvent("FormSubmit");
    formSubmit.setParams({ formData: { boatTypeId } });
    formSubmit.fire();
  },

  boatTypeChange: function(component, event, helper) {
    var boatType = event.getSource().get("v.value");
    component.set("v.selectedType", boatType);
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