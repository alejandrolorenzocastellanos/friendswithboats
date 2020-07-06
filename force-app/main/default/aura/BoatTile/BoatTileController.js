({
    onBoatClick: function(component, event, helper) {
      var boat = component.get("v.boat");
  
      var boatSelectEvent = component.getEvent("onBoatSelect");
      boatSelectEvent.setParams({ boatId: boat.Id });
      boatSelectEvent.fire();
  
      var boatSelectedEvent = $A.get("e.c:BoatSelected");
      boatSelectedEvent.setParams({ boat: boat });
      boatSelectedEvent.fire();
  
      var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
      plotMapMarkerEvent.setParams({
        lat: boat.Geolocation__Latitude__s,
        sObjectId: boat.Id,
        long: boat.Geolocation__Longitude__s,
        label: boat.Name
      });
      plotMapMarkerEvent.fire();
    }
  });
  