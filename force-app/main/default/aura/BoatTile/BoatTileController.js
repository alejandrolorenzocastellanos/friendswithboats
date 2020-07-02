({
    onBoatClick : function(component, event, helper) {
        var boatSelectEvent = component.getEvent("onBoatSelect");
        boatSelectEvent.setParams({"boatId" : component.get("v.boat").Id});
        boatSelectEvent.fire();
        var boatSelectedEvent = $A.get("e.c:BoatSelected");
        boatSelectedEvent.setParams({"boat" : component.get("v.boat")});
        boatSelectedEvent.fire();
        
        var boat = component.get("v.boat");
        var plotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
        plotMapMarkerEvent({"latitude" : boat.Geolocation__Latitude__s});
        plotMapMarkerEvent({"longitude" : boat.Geolocation__Longitude__s});
        plotMapMarkerEvent.setParams(
            {
                "latitude": boat.Geolocation__Latitude__s,
                "sObjectId": boat.Id,
                "longitude": boat.Geolocation__Longitude__s,
                "label":boat.Name 
            }
        );
        plotMapMarkerEvent.fire();
    }
})