({
  onPlotMapMarker: function(component, event, helper) {
    var id = event.getParam("sObjectId");
    var latitude = event.getParam("lat");
    var longitude = event.getParam("long");
    var label = event.getParam("label");

    var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
    component.set("v.mapMarkers", [
      {
        location: {
          Latitude: latitude,
          Longitude: longitude
        },
        title: "",
        description: ""
      }
    ]);
    console.log(latitude, longitude);
    component.set("v.zoomLevel", 10);
  }
});
