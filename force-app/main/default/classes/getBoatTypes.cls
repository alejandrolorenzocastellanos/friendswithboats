public class getBoatTypes {
@AuraEnabled
    public static List<Boat__c> getBoats() {
        return [SELECT Id, Name, Picture__c FROM Boat__c];
    }
}