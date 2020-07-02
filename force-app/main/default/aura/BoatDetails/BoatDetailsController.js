({
  onFullDetails: function(component, event, helper) {
    var navEvt = $A.get("e.force:navigateToSObject");
    navEvt.setParams({
      recordId: component.get("v.boat.Id")
    });
    navEvt.fire();
  },
  onBoatSelected: function(component, event, helper) {
    var boatSelected = event.getParam("boat");
    component.set("v.id", boatSelected.Id);
    var service = component.find("service");
    service.reloadRecord();
  },
  /*onRecordUpdated: function(component, event, helper) {
    var boat = component.get("v.boat");
    var dataService = component.find("service");
    var auraMethodResult = dataService.refresh();
  },*/
  onBoatReviewAdded: function(component, event, helper) {
    component.find("details").set("v.selectedTabId", "boatreviewtab");
  }
});