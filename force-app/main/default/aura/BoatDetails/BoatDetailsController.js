({
  onFullDetails: function(component, event, helper) {
    var navEvent = $A.get("e.force:navigateToSObject");
    navEvent.setParams({
      recordId: component.get("v.boat.Id")
    });
    navEvent.fire();
  },
  onBoatSelected: function(component, event, helper) {
    var boatSelected = event.getParam("boat");
    component.set("v.id", boatSelected.Id);
    var service = component.find("service");
    service.reloadRecord();
  },
  onBoatReviewAdded: function(component, event, helper) {
    component.find("details").set("v.selectedTabId", "boatreviewtab");
  }
});