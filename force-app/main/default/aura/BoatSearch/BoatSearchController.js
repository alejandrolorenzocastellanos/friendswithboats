({
	onFormSubmit : function(component, event, helper) {
		var formData = event.getParam("formData");
        var boatSearchResults = component.find("boatSearchResults");
        boatSearchResults.search(formData.boatTypeId);
	}
})