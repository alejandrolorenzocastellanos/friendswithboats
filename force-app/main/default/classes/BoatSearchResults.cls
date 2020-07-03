public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId) {
        List<Boat__c> boats = null;
        if(boatTypeId == null || boatTypeId.length() == 0){
            boats = [SELECT Id,Name, Picture__c, Contact__r.name FROM Boat__c];
        } else{
            boats = [SELECT Id,Name, Picture__c, Contact__r.name FROM Boat__c WHERE BoatType__c =:boatTypeId];
        }
        return boats;
    }
}