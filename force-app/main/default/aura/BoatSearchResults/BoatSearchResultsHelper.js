({
  onSearch: function(component, helper, boatTypeId) {
    var action = component.get("c.getBoats");
    var params = { boatTypeId: boatTypeId };
    if (params) {
      action.setParams(params);
    }
    action.setCallback(this, function(response) {
      var state = response.getState();
      if (state === "SUCCESS") {
        var boats = response.getReturnValue();
        component.set("v.boats", boats);
      } else {
        var errors = response.getError();
        if (!errors) {
          errors = [{ message: "Error." }];
        }
      }
    });
    $A.enqueueAction(action);
  }
});